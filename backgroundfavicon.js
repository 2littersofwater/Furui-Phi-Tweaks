// ==UserScript==
// Furui's Favicon Background


(function () {
    'use strict';

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

    const mainObserver = new MutationObserver((mutations, obs) => {
        const tabbar = document.querySelector('#tabs-container');

        if (tabbar) {
            obs.disconnect();
            
            const tabObserver = new MutationObserver(() => {
                updateFaviconBackground();
            });

            tabObserver.observe(tabbar, { 
                attributes: true, 
                subtree: true, 
                childList: true 
            });

            updateFaviconBackground();
        }
    });

    mainObserver.observe(document.body, { childList: true, subtree: true });
})();