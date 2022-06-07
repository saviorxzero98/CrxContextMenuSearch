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

    openImage: (clickData) => {
        let mediaUrl = clickData.srcUrl;
        chrome.tabs.create(
            {
                url: mediaUrl
            }
        );
    },

    openFrame: (clickData) => {
        let frameUrl = clickData.frameUrl;
        chrome.tabs.create(
            {
                url: frameUrl
            }
        );
    }
}

let contextMenuBuilder = {
    createSelectionMenu: (items) => {
        let title = '搜尋 選取的文字';
        contextMenuBuilder.createMenuItem(ContextMenuRootId.selection, title, ContextMenuType.selection);
        contextMenuBuilder.createChildmenu(items, ContextMenuRootId.selection, ContextMenuType.selection);
    },
    createPageMenu: (items) => {
        let title = '搜尋 目前頁面';
        contextMenuBuilder.createMenuItem(ContextMenuRootId.page, title, ContextMenuType.page);
        contextMenuBuilder.createChildmenu(items, ContextMenuRootId.page, ContextMenuType.page);
    },
    createLinkMenu: (items) =>  {
        let title = '搜尋 超連結';
        contextMenuBuilder.createMenuItem(ContextMenuRootId.link, title, ContextMenuType.link);
        contextMenuBuilder.createChildmenu(items, ContextMenuRootId.link, ContextMenuType.link);
    },
    createImageMenu: (items) =>  {
        let title = '搜尋 圖片';
        contextMenuBuilder.createMenuItem(ContextMenuRootId.image, title, ContextMenuType.image);
        contextMenuBuilder.createChildmenu(items, ContextMenuRootId.image, ContextMenuType.image);
    },
    createFrameMenu: (items) =>  {
        let title = '搜尋 Frame';
        contextMenuBuilder.createMenuItem(ContextMenuRootId.frame, title, ContextMenuType.frame);
        contextMenuBuilder.createChildmenu(items, ContextMenuRootId.frame, ContextMenuType.frame);
    },

    createMenuItem: (id, title, contextType, onclick = null, parentId = null) => {
        chrome.contextMenus.create({
            id: id,
            title: title,
            contexts: [
                contextType
            ],
            onclick: onclick,
            parentId: parentId
        });
    },

    createChildmenu: (items, parentId, contextType) => {
        if (items && Array.isArray(items)) {
            for (let i = 0; i < items.length; i++) {
                let item = items[i];

                if (item && item.title) {
                    let id = `${parentId}_${i}`;
                    contextMenuBuilder.createMenuItem(id, item.title, contextType, item.onclick, parentId);
                }
            }
        }
    }
}


contextMenuBuilder.createSelectionMenu([
    {
        title: 'Google 搜尋',
        onclick: contextMenuActions.searchSelectionText
    }
]);
contextMenuBuilder.createPageMenu([
    {
        title: 'Google 網頁翻譯',
        onclick: contextMenuActions.searchPage
    }
]);
contextMenuBuilder.createLinkMenu([
    {
        title: 'Google 網頁翻譯',
        onclick: contextMenuActions.searchLink,
    }
]);
contextMenuBuilder.createImageMenu([
    {
        title: '開啟圖片',
        onclick: contextMenuActions.openImage,
    }
]);
contextMenuBuilder.createFrameMenu([
    {
        title: '開啟 Frame',
        onclick: contextMenuActions.openFrame,
    }
]);