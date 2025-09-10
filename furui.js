// ==UserScript==
// @name        Furui's Script for Phi
// @description Custom Scripts for Furui's Phi Tweaks
// @version     1.4
// ==/UserScript==

(function () {
    'use strict';

    // ---------------------------------
    // Auto-collapse menus
    // ---------------------------------
    function attachCollapseHandler() {
        const menus = document.querySelectorAll('.extensionIconPopupMenu');
        menus.forEach(menu => {
            if (menu.dataset._collapseAttached) return;
            menu.dataset._collapseAttached = '1';

            menu.addEventListener('click', (evt) => {
                if (evt.button !== 0) return;
                setTimeout(() => menu.classList.add('collapsed'), 80);
            }, true);
        });
    }

    // Add CSS rule once
    const style = document.createElement('style');
    style.textContent = `.extensionIconPopupMenu.collapsed { display: none !important; }`;
    document.head.appendChild(style);

    // Debounce helper
    let collapseRaf;
    function scheduleAttach() {
        if (collapseRaf) cancelAnimationFrame(collapseRaf);
        collapseRaf = requestAnimationFrame(attachCollapseHandler);
    }

    // Observe only where extension menus appear
    const extContainer = document.querySelector('#extensions') || document.body;
    const closePopObserver = new MutationObserver(scheduleAttach);
    closePopObserver.observe(extContainer, { childList: true, subtree: true });
    attachCollapseHandler();
    console.debug('[ext-collapse] optimized auto-collapse active');

    // ------------------------------
    // Loading Bar
    // ------------------------------
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.id = 'loading-bar';
        document.body.appendChild(progressBar);

        let currentProgress = 0;
        let loadingTabs = new Set();

        const updateProgress = (newWidth) => {
            if (newWidth > currentProgress) {
                progressBar.style.width = newWidth + '%';
                currentProgress = newWidth;
            }
        };

        const handleComplete = (details) => {
            if (loadingTabs.has(details.tabId)) {
                loadingTabs.delete(details.tabId);
                progressBar.style.width = '100%';
                setTimeout(() => {
                    progressBar.style.width = '0%';
                    currentProgress = 0;
                }, 500);
            }
        };

        const handleErrorOrAbort = (details) => {
            if (loadingTabs.has(details.tabId)) {
                loadingTabs.delete(details.tabId);
                progressBar.style.width = '0%';
                currentProgress = 0;
            }
        };

        const showLoadingBar = () => progressBar.style.display = 'block';
        const hideLoadingBar = () => progressBar.style.display = 'none';

        chrome.webNavigation.onBeforeNavigate.addListener((details) => {
            loadingTabs.add(details.tabId);
            updateProgress(20);
        });

        chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
            if (loadingTabs.has(details.tabId)) updateProgress(70);
        });

        chrome.webNavigation.onCompleted.addListener(handleComplete);
        chrome.webNavigation.onErrorOccurred.addListener(handleErrorOrAbort);

        chrome.tabs.onActivated.addListener((activeInfo) => {
            if (loadingTabs.has(activeInfo.tabId)) showLoadingBar();
            else hideLoadingBar();
        });

        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (tab.active) {
                if (loadingTabs.has(tabId)) showLoadingBar();
                else hideLoadingBar();
            }
        });
    };

    const loadingBarObserver = new MutationObserver((mutations, obs) => {
        const browserElement = document.getElementById('browser');
        if (browserElement) {
            obs.disconnect();
            createProgressBar();
        }
    });

    loadingBarObserver.observe(document.body, { childList: true, subtree: true });
})();

