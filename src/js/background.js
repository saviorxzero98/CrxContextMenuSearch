let contextMenuActions = {
    searchSelectionText: (clickData) => {
        let selectionText = clickData.selectionText;
        chrome.tabs.create(
            {
                url: `https://www.google.com.tw/search?q=${selectionText}`
            }
        );
    },


    searchPage: (clickData) => {
        let pageUrl = clickData.pageUrl;
        chrome.tabs.create(
            {
                url: `https://translate.google.com/translate?sl=auto&tl=zh-TW&u=${pageUrl}`
            }
        )
    },

    searchLink: (clickData) => {
        let linkUrl = clickData.linkUrl;
        chrome.tabs.create(
            {
                url: `https://translate.google.com/translate?sl=auto&tl=zh-TW&u=${linkUrl}`
            }
        );
    },

    searchMedia: (clickData) => {
        let mediaUrl = clickData.srcUrl;
        chrome.tabs.create(
            {
                url: mediaUrl
            }
        );
    },

    searchFrame: (clickData) => {
        let frameUrl = clickData.frameUrl;
        chrome.tabs.create(
            {
                url: frameUrl
            }
        );
    }
}

let contextMenuBuilder = {

}


chrome.contextMenus.create({
    type: 'separator',
    contexts: [
        'all'
    ],
})

chrome.contextMenus.create({
    id: 'googleSearch',
    title: 'Google 搜尋',
    contexts: [
        'selection'
    ],
    onclick: contextMenuActions.searchSelectionText
});

chrome.contextMenus.create({
    id: 'googlePage',
    title: 'Google 網頁翻譯',
    contexts: [
        'page'
    ],
    onclick: contextMenuActions.searchPage
});
chrome.contextMenus.create({
    id: 'googleLinkPage',
    title: 'Google 網頁翻譯',
    contexts: [
        'link'
    ],
    onclick: contextMenuActions.searchLink
});
chrome.contextMenus.create({
    id: 'openImage',
    title: '開啟圖片',
    contexts: [
        'image'
    ],
    onclick: contextMenuActions.searchMedia
});
chrome.contextMenus.create({
    id: 'openFrame',
    title: '開啟 Frame',
    contexts: [
        'frame'
    ],
    onclick: contextMenuActions.searchFrame
});