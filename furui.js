// ==UserScript==
// @name        Furui's Script for Phi
// @description Essential for Extension Auto-Collapse and Loading Bar script.
// @version     1.2
// ==/UserScript==

(function () {
    'use strict';

    function attachCollapseHandler() {
        const menus = document.querySelectorAll('.extensionIconPopupMenu');
        menus.forEach(menu => {
            if (menu.dataset._collapseAttached) return;
            menu.dataset._collapseAttached = '1';

            menu.addEventListener('click', (evt) => {
                if (evt.button !== 0) return;
                setTimeout(() => {
                    try {
                        menu.style.display = 'none';
                    } catch (e) {}
                }, 80);
            }, true);
        });
    }

    const closePopObserver = new MutationObserver(() => attachCollapseHandler());
    closePopObserver.observe(document.body, { childList: true, subtree: true });

    attachCollapseHandler();

    console.debug('[ext-collapse] auto-collapse active');


    //Loading Bar
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.id = 'loading-bar';
        document.body.appendChild(progressBar);

        let currentProgress = 0;
        let loadingTabs = new Set();

        const getPageColor = () => {
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (themeColorMeta) {
                return themeColorMeta.content;
            }
            return '#0066ff';
        };

        const updateProgress = (newWidth) => {
            if (newWidth > currentProgress) {
                progressBar.style.transition = 'width 0.5s ease-out';
                progressBar.style.width = newWidth + '%';
                currentProgress = newWidth;
            }
        };

        const handleComplete = (details) => {
            if (loadingTabs.has(details.tabId)) {
                loadingTabs.delete(details.tabId);
                progressBar.style.transition = 'width 0.3s ease';
                progressBar.style.width = '100%';
                setTimeout(() => {
                    progressBar.style.transition = 'none';
                    progressBar.style.width = '0%';
                    currentProgress = 0;
                }, 500);
            }
        };

        const handleErrorOrAbort = (details) => {
            if (loadingTabs.has(details.tabId)) {
                loadingTabs.delete(details.tabId);
                progressBar.style.transition = 'width 0.1s ease';
                progressBar.style.width = '0%';
                currentProgress = 0;
            }
        };

        const showLoadingBar = () => {
            progressBar.style.display = 'block';
        };

        const hideLoadingBar = () => {
            progressBar.style.display = 'none';
        };

        chrome.webNavigation.onBeforeNavigate.addListener((details) => {
            loadingTabs.add(details.tabId);
            progressBar.style.backgroundColor = getPageColor();
            updateProgress(20);
        });

        chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
            if (loadingTabs.has(details.tabId)) {
                updateProgress(70);
            }
        });

        chrome.webNavigation.onCompleted.addListener(handleComplete);
        chrome.webNavigation.onErrorOccurred.addListener(handleErrorOrAbort);

        chrome.tabs.onActivated.addListener((activeInfo) => {
            if (loadingTabs.has(activeInfo.tabId)) {
                showLoadingBar();
            } else {
                hideLoadingBar();
            }
        });

        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (tab.active) {
                if (loadingTabs.has(tabId)) {
                    showLoadingBar();
                } else {
                    hideLoadingBar();
                }
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

    loadingBarObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
