// ==UserScript==
// @name        Furui's Script for Phi
// @version     1.5
// ==/UserScript==

(function () {
    'use strict';

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

	// ------------------------------
	// Favicon Background (Optimized)
	// ------------------------------
	let lastFaviconUrl = "";

	const updateFaviconBackground = () => {
		const activePinnedTab = document.querySelector('.tab.active.pinned');
		if (activePinnedTab) {
			const img = activePinnedTab.querySelector('.favicon img') || 
						activePinnedTab.querySelector('img.favicon');
			
			if (img && img.src && img.src !== lastFaviconUrl) {
				lastFaviconUrl = img.src;
				activePinnedTab.style.setProperty('--tab-favicon-bg', `url("${img.src}")`);
			}
		}
	};

    // ------------------------------
    // Initialization & Observation
    // ------------------------------
    const mainObserver = new MutationObserver((mutations, obs) => {
        const browserElement = document.getElementById('browser');
        const tabbar = document.querySelector('#tabs-container');

        if (browserElement && tabbar) {
            // We found the UI, stop observing the body and start the features
            obs.disconnect();
            
            // 1. Initialize Loading Bar
            createProgressBar();

            // 2. Initialize Favicon Background Observer
            // We observe the tabbar specifically for class changes (active/pinned)
            const tabObserver = new MutationObserver(() => {
                updateFaviconBackground();
            });

            tabObserver.observe(tabbar, { 
                attributes: true, 
                subtree: true, 
                childList: true 
            });

            // Initial run
            updateFaviconBackground();
        }
    });

    mainObserver.observe(document.body, { childList: true, subtree: true });

})();
