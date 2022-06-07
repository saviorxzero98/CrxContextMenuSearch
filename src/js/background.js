let contextMenuActions = {
    searchSelectionText: (url) => {
        return (onClickData) => {
            let selectionText = onClickData.selectionText;
            let openUrl = url.replace(ContextMenuSearchTerm, selectionText);
            chrome.tabs.create(
                {
                    url: openUrl
                }
            );
        }
    },
    searchPage: (url) => {
        return (onClickData) => {
            let pageUrl = onClickData.pageUrl;
            let openUrl = pageUrl;
            if (url) {
                openUrl = url.replace(ContextMenuSearchTerm, pageUrl);
            }
            chrome.tabs.create(
                {
                    url: openUrl
                }
            )
        }
    },
    searchLink: (url) => {
        return (onClickData) => {
            let linkUrl = onClickData.linkUrl;
            let openUrl = linkUrl;
            if (url) {
                openUrl = url.replace(ContextMenuSearchTerm, linkUrl);
            }
            chrome.tabs.create(
                {
                    url: openUrl
                }
            )
        }
    },
    searchImage: (url) => {
        return (onClickData) => {
            let imageUrl = onClickData.srcUrl; 
            let openUrl = imageUrl;
            if (url) {
                openUrl = url.replace(ContextMenuSearchTerm, imageUrl);
            }
            chrome.tabs.create(
                {
                    url: openUrl
                }
            );
        }
    },
    searchFrame: (url) => {
        return (onClickData) => {
            let frameUrl = onClickData.frameUrl; 
            let openUrl = frameUrl;
            if (url) {
                openUrl = url.replace(ContextMenuSearchTerm, frameUrl);
            }
            chrome.tabs.create(
                {
                    url: openUrl
                }
            );
        }
    },


    copyBase64Image: (url) => {
        return (onClickData) => {
            let tempImage = new Image;
            tempImage.src = onClickData.srcUrl;
            tempImage.onload = () =>
            {
                canvas.width = tempImage.width;
                canvas.height = tempImage.height;
                
                context = canvas.getContext('2d');
                context.drawImage(tempImage, 0, 0);
        
                tempContainer.textContent = canvas.toDataURL();
                document.body.appendChild(tempContainer);
                tempContainer.select();
        
                chrome.extension.getBackgroundPage().console.log(tempContainer.textContent);
                document.execCommand('copy');
                document.body.removeChild(tempContainer);
            }
        }
    },
    openBase64Image: (url) => {
        return (onClickData) => {
            let tempImage = new Image;
            tempImage.src = onClickData.srcUrl;
            tempImage.onload = () =>
            {
                canvas.width = tempImage.width;
                canvas.height = tempImage.height;
                
                context = canvas.getContext('2d');
                context.drawImage(tempImage, 0, 0);
        
                let base64Url = canvas.toDataURL();

                chrome.tabs.create(
                    {
                        url: base64Url
                    }
                );
            }
        }
    },
    downloadBase64Image: (url) => {
        return (onClickData) => {
            let tempImage = new Image;
            tempImage.src = onClickData.srcUrl;
            tempImage.onload = () =>
            {
                canvas.width = tempImage.width;
                canvas.height = tempImage.height;
                
                context = canvas.getContext('2d');
                context.drawImage(tempImage, 0, 0);
        
                let base64Url = canvas.toDataURL();

                chrome.downloads.download(
                    {
                        url: base64Url,
                        saveAs: true,
                        method: "GET"
                    }, 
                    (downloadId) => {
                        console.log(downloadId); 
                    }
                );
            }
        }
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
    }
]);
contextMenuBuilder.createFrameMenu([
    {
        title: '在新分頁開啟 Frame',
        onclick: contextMenuActions.searchFrame(),
    }
]);