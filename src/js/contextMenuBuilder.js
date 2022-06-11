const ContextMenuRootId = {
    all: 'all_root',
    selection: 'selection_root',
    page: 'page_root',
    link: 'link_root',
    image: 'image_root',
    audio: 'audio_root',
    video: 'video_root',
    frame: 'frame_root'
}

const ContextMenuRecentId = {
    all: 'recent_all',
    selection: 'recent_selection',
    page: 'recent_page',
    link: 'recent_link',
    image: 'recent_image',
    audio: 'recent_audio',
    video: 'recent_video',
    frame: 'recent_frame'
}


const ContextMenuItemType = {
    normal: 'normal',
    checkbox: 'checkbox',
    radio: 'radio',
    folder: 'folder',
    separator: 'separator'
};

const ContextMenuType = {
    all: 'all',
    selection: 'selection',
    page: 'page',
    frame: 'frame',
    tab: 'tab',
    link: 'link',
    image: 'image',
    audio: 'audio',
    video: 'video',
    editable: 'editable'
};


class ContextMenuBuilder {
    createMenu(menuItems) {
        this.removeAll();

        this.createSelectionMenu(menuItems.selection);
        this.createPageMenu(menuItems.page);
        this.createLinkMenu(menuItems.link);
        this.createImageMenu(menuItems.image);
        this.createAudioMenu(menuItems.audio);
        this.createVideoMenu(menuItems.video);
        this.createFrameMenu(menuItems.frame);
    }

    createAllMenu(items) {
        let id = ContextMenuRootId.all;
        let title = '搜尋';
        let contextType = ContextMenuType.all;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        // Create Recent Item
        let recentId = ContextMenuRecentId.all;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }

    createSelectionMenu(items) {
        let id = ContextMenuRootId.selection;
        let title = `搜尋「%s」`;
        let contextType = ContextMenuType.selection;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        
        // Create Recent Item
        let recentId = ContextMenuRecentId.selection;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }

    createPageMenu(items) {
        let id = ContextMenuRootId.page;
        let title = '搜尋「目前頁面」';
        let contextType = ContextMenuType.page;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        // Create Recent Item
        let recentId = ContextMenuRecentId.page;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }

    createLinkMenu(items) {
        let id = ContextMenuRootId.link;
        let title = '搜尋「連結」';
        let contextType = ContextMenuType.link;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        // Create Recent Item
        let recentId = ContextMenuRecentId.link;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }
    createImageMenu(items) {
        let id = ContextMenuRootId.image;
        let title = '搜尋「圖片」';
        let contextType = ContextMenuType.image;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        // Create Recent Item
        let recentId = ContextMenuRecentId.image;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }

    createAudioMenu(items) {
        let id = ContextMenuRootId.audio;
        let title = '搜尋「音頻」';
        let contextType = ContextMenuType.audio;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        // Create Recent Item
        let recentId = ContextMenuRecentId.audio;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }

    createVideoMenu(items) {
        let id = ContextMenuRootId.video;
        let title = '搜尋「影片」';
        let contextType = ContextMenuType.video;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        // Create Recent Item
        let recentId = ContextMenuRecentId.video;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }
    createFrameMenu(items) {
        let id = ContextMenuRootId.frame;
        let title = '搜尋「框架」';
        let contextType = ContextMenuType.frame;

        // Create Menu Root Item
        let rootItem = {
            title: title
        }
        this.createMenuItem(id, rootItem, contextType);

        // Create Recent Item
        let recentId = ContextMenuRecentId.frame;
        this.createRecentSearchMenuItem(recentId, contextType, id, () => {
            // Create Menu Items
            this.createChildMenuItems(items, contextType, id);
        });
    }

    //--------------------------------------------------

    createRecentSearchMenuItem(id, contextType, parentId, callback = () => {}) {
        let self = this;
        RecentSearchCacheService.get(contextType, (item) => {
            if (item) {
                // Create Recent Item
                self.createMenuItem(id, item, contextType, parentId);

                // Create Recent Item Separator
                let separatorId = `${id}_separator`;
                self.createSeparator(separatorId, contextType, parentId);
            }

            // Callback
            if (callback && typeof callback === 'function') {
                callback();
            }
        });
    }

    createChildMenuItems(items, contextType, parentId) {
        if (items && Array.isArray(items)) {
            for (let i = 0; i < items.length; i++) {
                let item = items[i];

                if (item && item.isEnable && item.isEnable === true) {
                    let id = `${parentId}_${i}`;
                    let itemType = item.itemType ?? ContextMenuItemType.normal;
                    
                    switch (itemType) {
                        case ContextMenuItemType.normal:
                            this.createMenuItem(id, item, contextType, parentId);
                            break;

                        case ContextMenuItemType.separator:
                            this.createSeparator(id, contextType, parentId);
                            break;

                        case ContextMenuItemType.folder:
                            this.createFolder(id, item, contextType, parentId);
                            break;
                    }
                }
            }
        }
    }

    createMenuItem(id, item, contextType, parentId = null) {
        if (item) {
            let title = item.title;
            let action = ContextMenuActionFactory.create(item.action);
            let context = { ...item };
            let onclick = action.getCallback(context);

            if (title) {
                chrome.contextMenus.create({
                    id: id,
                    type: ContextMenuItemType.normal,
                    title: title,
                    contexts: [
                        contextType
                    ],
                    onclick: onclick,
                    parentId: parentId
                });
            }
        }
    }

    createSeparator(id, contextType, parentId = null) {
        chrome.contextMenus.create({
            id: id,
            type: ContextMenuItemType.separator,
            title: '',
            contexts: [
                contextType
            ],
            parentId: parentId
        });
    }

    createFolder(id, item, contextType, parentId = null) {
        let childrenItems = item.items;
        let title = item.title;
        
        if (childrenItems && Array.isArray(childrenItems)) {
            // 建立 Folder
            chrome.contextMenus.create({
                id: id,
                type: ContextMenuItemType.normal,
                title: title,
                contexts: [
                    contextType
                ],
                parentId: parentId
            });

            // 建立子選單
            this.createChildMenuItems(childrenItems, contextType, id);
        }
    }

    //--------------------------------------------------

    remove(id) {
        chrome.contextMenus.remove(id);
    }

    removeAll(callback = null) {
        chrome.contextMenus.removeAll(callback);
    }
}