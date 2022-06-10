const ContentMenuItems = {
    all: [

    ],
    selection: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.selection,
            action: ContextMenuActionType.search,
            title: 'Google 搜尋',
            url: 'https://www.google.com.tw/search?q=${search}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.selection,
            action: ContextMenuActionType.search,
            title: '維基百科',
            url: 'https://zh.wikipedia.org/w/index.php?search=${search}',
            isEnable: true
        }
    ],

    page: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'Google 網頁翻譯',
            url: 'https://translate.google.com/translate?sl=auto&tl=zh-TW&u=${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'MSN翻譯',
            url: 'https://www.microsofttranslator.com/bv.aspx?from=&to=zh-Hant&a=${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'Internet Archive',
            url: 'https://web.archive.org/web/*/${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'Google 快取頁面',
            url: 'https://webcache.googleusercontent.com/search?q=cache:${url}',
            isEnable: true
        }
    ],

    link: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: 'Google 網頁翻譯',
            url: 'https://translate.google.com/translate?sl=auto&tl=zh-TW&u=${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: 'MSN翻譯',
            url: 'https://www.microsofttranslator.com/bv.aspx?from=&to=zh-Hant&a=${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: 'Internet Archive',
            url: 'https://web.archive.org/web/*/${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: 'Google 快取頁面',
            url: 'https://webcache.googleusercontent.com/search?q=cache:${url}',
            isEnable: true
        }
    ],

    image: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: '在新分頁開啟圖片',
            url: '',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'Google 圖片搜尋',
            url: 'https://images.google.com/searchbyimage?image_url=${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'TinEye 圖片搜尋',
            url: 'https://www.tineye.com/search?url=${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.separator,
            contentType: ContextMenuType.image,
            action: '',
            title: '',
            url: '',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.image,
            action: '',
            command: '',
            title: '圖片工具',
            url: '',
            isEnable: true,
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.image,
                    action: ContextMenuActionType.base64Image,
                    command: ImageBase64ConvertActionCommandType.open,
                    title: '在新分頁開啟圖片 (Data URI)',
                    url: '',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.image,
                    action: ContextMenuActionType.base64Image,
                    command: ImageBase64ConvertActionCommandType.copy,
                    title: '複製圖片的 Data URI',
                    url: '',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.image,
                    action: ContextMenuActionType.base64Image,
                    command: ImageBase64ConvertActionCommandType.download,
                    title: '下載圖片',
                    url: '',
                    isEnable: true
                }
            ]
        }
    ],

    audio: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.audio,
            action: ContextMenuActionType.search,
            title: '在新分頁開啟音頻',
            url: '',
            isEnable: true
        }
    ],

    video: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.video,
            action: ContextMenuActionType.search,
            title: '在新分頁開啟影片',
            url: '',
            isEnable: true
        }
    ],

    frame: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.frame,
            action: ContextMenuActionType.search,
            title: '在新分頁開啟框架',
            url: '',
            isEnable: true
        }
    ]
}