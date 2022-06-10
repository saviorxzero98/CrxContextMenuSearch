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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
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

        // Create Menu Items
        this.createChildMenuItems(items, contextType, id);
    }

    //--------------------------------------------------

    createMenuItem(id, item, contextType, parentId = null) {
        if (item) {
            let title = item.title;
            let action = ContextMenuActionFactory.create(item.action);
            let context = { ...item };
            let onclick = action.getCallback(context);

            if (title) {
                chrome.contextMenus.create({
                    id: id,
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

    createChildMenuItems(items, contextType, parentId) {
        if (items && Array.isArray(items)) {
            for (let i = 0; i < items.length; i++) {
                let item = items[i];

                if (item) {
                    let id = `${parentId}_${i}`;
                    this.createMenuItem(id, item, contextType, parentId);
                }
            }
        }
    }

    removeAll(callback = null) {
        chrome.contextMenus.removeAll(callback);
    }
}