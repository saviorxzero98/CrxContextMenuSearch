let contextMenuActions = {
    searchSelectionText: (url) => {
        let action = new SelectionTextMenuAction();
        return action.getCallback({ searchUrl: url });
    },
    searchPage: (url) => {
        let action = new PageMenuAction();
        return action.getCallback({ searchUrl: url });
    },
    searchLink: (url) => {
        let action = new LinkMenuAction();
        return action.getCallback({ searchUrl: url });
    },
    searchImage: (url) => {
        let action = new ImageMenuAction();
        return action.getCallback({ searchUrl: url });
    },
    searchFrame: (url) => {
        let action = new FrameMenuAction();
        return action.getCallback({ searchUrl: url });
    },


    copyBase64Image: () => {
        let action = new ImageBase64ConvertMenuAction();
        return action.getCallback({ command: 'copy' });
    },
    openBase64Image: () => {
        let action = new ImageBase64ConvertMenuAction();
        return action.getCallback({ command: 'open' });
    },
    downloadBase64Image: () => {
        let action = new ImageBase64ConvertMenuAction();
        return action.getCallback({ command: 'download' });
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
        onclick: contextMenuActions.searchSelectionText('https://www.google.com.tw/search?q=${search}')
    }
]);
contextMenuBuilder.createPageMenu([
    {
        title: 'Google 網頁翻譯',
        onclick: contextMenuActions.searchPage('https://translate.google.com/translate?sl=auto&tl=zh-TW&u=${search}')
    }
]);
contextMenuBuilder.createLinkMenu([
    {
        title: 'Google 網頁翻譯',
        onclick: contextMenuActions.searchLink('https://translate.google.com/translate?sl=auto&tl=zh-TW&u=${search}'),
    }
]);
contextMenuBuilder.createImageMenu([
    {
        title: 'Google 圖片',
        onclick: contextMenuActions.searchImage('https://images.google.com/searchbyimage?image_url=${search}'),
    },
    {
        title: '在新分頁開啟圖片',
        onclick: contextMenuActions.searchImage(),
    },
    {
        title: '在新分頁開啟圖片 (Data URI)',
        onclick: contextMenuActions.openBase64Image(),
    },
    {
        title: '複製圖片的 Data URI',
        onclick: contextMenuActions.copyBase64Image(),
    },
    {
        title: '下載圖片',
        onclick: contextMenuActions.downloadBase64Image(),
    }
]);
contextMenuBuilder.createFrameMenu([
    {
        title: '在新分頁開啟 Frame',
        onclick: contextMenuActions.searchFrame(),
    }
]);