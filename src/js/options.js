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
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '搜尋',
            items: [
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
                    title: 'Bing 搜尋',
                    url: 'https://www.bing.com/search?q=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Yahoo!奇摩',
                    url: 'https://tw.search.yahoo.com/search?p=${search}&amp;fr=opensearch',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'DuckDuckGo',
                    url: 'https://duckduckgo.com/?q=${search}',
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
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '翻譯、辭典',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Yahoo!奇摩字典',
                    url: 'https://tw.dictionary.search.yahoo.com/search?p=${search}&amp;fr=opensearch',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google翻譯 (中文)',
                    url: 'https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=zh-TW&text=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing翻譯 (中文)',
                    url: 'https://www.bing.com/translator/?to=zh-Hant&text=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '維基辭典',
                    url: 'https://zh.wiktionary.org/zh-hant/{search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google翻譯 (英文)',
                    url: 'https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=en&text=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing翻譯 (英文)',
                    url: 'https://www.bing.com/translator/?to=en&text=${search}',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '圖片、影音',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google圖片',
                    url: 'https://www.google.com/images?q=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'YouTube',
                    url: 'https://www.youtube.com/results?search_query=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '巴哈姆特 動畫瘋',
                    url: 'https://ani.gamer.com.tw/search.php?kw=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Anime1.me',
                    url: 'https://anime1.me/?s=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Hikarinoakariost',
                    url: 'https://hikarinoakari.com/?s=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Sukidesuost',
                    url: 'https://sukidesuost.info/?s=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '漫貓動漫BT',
                    url: 'http://www.comicat.org/search.php?keyword=${search}',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '射手網(偽)',
                    url: 'https://assrt.net/sub/?searchword=${search}',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '其他',
            items: [

            ],
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