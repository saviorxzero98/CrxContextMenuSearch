function searchSelectionText(clickData) {
    let query = clickData.searchSelectionText;
    chrome.tabs.create(
        {
            url: `https://www.google.com.tw/search?q=${query}`
        }
    )
}

function searchPage(clickData) {
    let pageUrl = clickData.pageUrl;
    chrome.tabs.create(
        {
            url: `https://translate.google.com/translate?sl=auto&tl=zh-TW&u=${pageUrl}`
        }
    )
}

function openMedia(clickData) {
    let mediaUrl = clickData.srcUrl;
    chrome.tabs.create(
        {
            url: mediaUrl
        }
    )
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
    onclick: searchSelectionText
});
chrome.contextMenus.create({
    id: 'googlePage',
    title: 'Google 網頁翻譯',
    contexts: [
        'page'
    ],
    onclick: searchPage
});
chrome.contextMenus.create({
    id: 'openImage',
    title: '開啟圖片',
    contexts: [
        'image'
    ],
    onclick: openMedia
});
