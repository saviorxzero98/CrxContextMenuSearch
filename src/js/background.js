let contextMenuActions = {
    searchSelectionText: (url) => {
        let action = new SearchAction();
        return action.getCallback({
            searchUrl: url, 
            command: SearchActionCommandType.selectionText
        });
    },
    searchPage: (url) => {
        let action = new SearchAction();
        return action.getCallback({ 
            searchUrl: url,
            command: SearchActionCommandType.page
        });
    },
    searchLink: (url) => {
        let action = new SearchAction();
        return action.getCallback({ 
            searchUrl: url,
            command: SearchActionCommandType.link
        });
    },
    searchImage: (url) => {
        let action = new SearchAction();
        return action.getCallback({ 
            searchUrl: url,
            command: SearchActionCommandType.image
        });
    },
    searchFrame: (url) => {
        let action = new SearchAction();
        return action.getCallback({ 
            searchUrl: url,
            command: SearchActionCommandType.frame
        });
    },


    copyBase64Image: () => {
        let action = new ImageBase64ConvertAction();
        return action.getCallback({ 
            command: 'copy' 
        });
    },
    openBase64Image: () => {
        let action = new ImageBase64ConvertAction();
        return action.getCallback({ 
            command: 'open' 
        });
    },
    downloadBase64Image: () => {
        let action = new ImageBase64ConvertAction();
        return action.getCallback({ 
            command: 'download' 
        });
    }
}

let contextMenuBuilder = {
    createSelectionMenu: (items) => {
        let builder = new ContextMenuBuilder();
        builder.createSelectionMenu(items);
    },
    createPageMenu: (items) => {
        let builder = new ContextMenuBuilder();
        builder.createPageMenu(items);
    },
    createLinkMenu: (items) =>  {
        let builder = new ContextMenuBuilder();
        builder.createLinkMenu(items);
    },
    createImageMenu: (items) =>  {
        let builder = new ContextMenuBuilder();
        builder.createImageMenu(items);
    },
    createFrameMenu: (items) =>  {
        let builder = new ContextMenuBuilder();
        builder.createFrameMenu(items);
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