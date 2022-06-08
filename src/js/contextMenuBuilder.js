const ContextMenuRootId = {
    selection: 'selection_root',
    page: 'page_root',
    link: 'link_root',
    image: 'image_root',
    frame: 'frame_root'
}

const ContextMenuItemType = {
    link: 'link',
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

    createContextMenu(items) {

    }

    //--------------------------------------------------

    createSelectionMenu(items) {
        let id = ContextMenuRootId.selection;
        let title = '搜尋文字';
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
        let title = '搜尋目前頁面';
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
        let title = '搜尋連結';
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
        let title = '搜尋圖片';
        let contextType = ContextMenuType.image;

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
        let title = '搜尋框架';
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
            let onclick = item.onclick;

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
}