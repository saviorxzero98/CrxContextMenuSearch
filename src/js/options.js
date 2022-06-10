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
            iconUrl: 'https://api.faviconkit.com/www.google.com/64',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.selection,
            action: ContextMenuActionType.search,
            title: '維基百科',
            url: 'https://zh.wikipedia.org/w/index.php?search=${search}',
            iconUrl: 'https://api.faviconkit.com/zh.wikipedia.org/64',
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
                    iconUrl: 'https://api.faviconkit.com/www.google.com/64',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing 搜尋',
                    url: 'https://www.bing.com/search?q=${search}',
                    iconUrl: 'https://www.bing.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Yahoo!奇摩',
                    url: 'https://tw.search.yahoo.com/search?p=${search}&amp;fr=opensearch',
                    iconUrl: 'https://s.yimg.com/rz/l/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'DuckDuckGo',
                    url: 'https://duckduckgo.com/?q=${search}',
                    iconUrl: 'https://duckduckgo.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '維基百科',
                    url: 'https://zh.wikipedia.org/w/index.php?search=${search}',
                    iconUrl: 'https://zh.wikipedia.org/static/favicon/wikipedia.ico',
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
                    iconUrl: 'https://s.yimg.com/rz/l/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google翻譯 (中文)',
                    url: 'https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=zh-TW&text=${search}',
                    iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing翻譯 (中文)',
                    url: 'https://www.bing.com/translator/?to=zh-Hant&text=${search}',
                    iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '維基辭典',
                    url: 'https://zh.wiktionary.org/zh-hant/{search}',
                    iconUrl: 'https://zh.wiktionary.org/static/favicon/piece.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google翻譯 (英文)',
                    url: 'https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=en&text=${search}',
                    iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing翻譯 (英文)',
                    url: 'https://www.bing.com/translator/?to=en&text=${search}',
                    iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
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
                    iconUrl: 'https://api.faviconkit.com/www.google.com/64',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'YouTube',
                    url: 'https://www.youtube.com/results?search_query=${search}',
                    iconUrl: 'https://www.youtube.com/s/desktop/f2388c5e/img/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'LINE TV',
                    url: 'https://www.linetv.tw/search?q=${search}',
                    iconUrl: 'https://img.linetv.tw/WEB/linetv_favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '巴哈姆特 動畫瘋',
                    url: 'https://ani.gamer.com.tw/search.php?kw=${search}',
                    iconUrl: 'https://api.faviconkit.com/ani.gamer.com.tw/64',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Anime1.me',
                    url: 'https://anime1.me/?s=${search}',
                    iconUrl: 'https://anime1.me/favicon-32x32.png',
                    isEnable: false
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Hikarinoakariost',
                    url: 'https://hikarinoakari.com/?s=${search}',
                    iconUrl: 'https://hikarinoakari.com/wp-content/uploads/nuevo/2022/05/cropped-gdfg-32x32.jpg',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Sukidesuost',
                    url: 'https://sukidesuost.info/?s=${search}',
                    iconUrl: 'https://sukidesuost.info/wp-content/uploads/cropped-LOGO5-32x32.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'SoundCloud',
                    url: 'https://soundcloud.com/search?q=${search}',
                    iconUrl: 'https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14bdb.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'MP3-PM',
                    url: 'https://wax.click/?a=redirect&q=${search}',
                    iconUrl: 'https://wax.click/i/img/favicon.png',
                    isEnable: false
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '漫貓動漫BT',
                    url: 'http://www.comicat.org/search.php?keyword=${search}',
                    iconUrl: 'http://www.comicat.org/images/favicon/comicat.ico',
                    isEnable: false
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '射手網(偽)',
                    url: 'https://assrt.net/sub/?searchword=${search}',
                    iconUrl: 'https://assrt.net/favicon.ico',
                    isEnable: false
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '其他',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '巴哈姆特',
                    url: 'https://search.gamer.com.tw/?q=${search}',
                    iconUrl: 'https://api.faviconkit.com/ani.gamer.com.tw/64',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '阿榮福利味',
                    url: 'https://www.azofreeware.com/search?q=${search}',
                    iconUrl: 'https://www.azofreeware.com/favicon.ico',
                    isEnable: false
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Android台灣中文網',
                    url: 'https://apk.tw/search.php?mod=google&cx=partner-pub-7702824122407732%3A4996651148&q=${search}',
                    iconUrl: 'https://api.faviconkit.com/apk.tw/64',
                    isEnable: false
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google 地圖',
                    url: 'https://maps.google.com/maps?q=${search}',
                    iconUrl: 'https://www.google.com/images/branding/product/ico/maps_32dp.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing 地圖',
                    url: 'https://www.bing.com/maps/?q=${search}',
                    iconUrl: 'https://www.bing.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Chrome 商店',
                    url: 'https://chrome.google.com/webstore/search/${search}',
                    iconUrl: 'https://www.google.com/images/icons/product/chrome_web_store-32.png',
                    isEnable: true
                }
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
            iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'MSN翻譯',
            url: 'https://www.microsofttranslator.com/bv.aspx?from=&to=zh-Hant&a=${url}',
            iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'Internet Archive',
            url: 'https://web.archive.org/web/*/${url}',
            iconUrl: 'https://web.archive.org/_static/images/archive.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'Google 快取頁面',
            url: 'https://webcache.googleusercontent.com/search?q=cache:${url}',
            iconUrl: 'https://api.faviconkit.com/www.google.com/64',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: '複製目前分頁',
            url: '${url}',
            isEnable: true
        },
        
        {
            itemType: ContextMenuItemType.separator,
            contentType: ContextMenuType.page,
            action: '',
            title: '',
            url: '',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.page,
            title: '安全掃描',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.page,
                    action: ContextMenuActionType.search,
                    title: 'VirusTotal',
                    url: 'https://www.virustotal.com/gui/search/${domain}',
                    iconUrl: 'https://www.virustotal.com/gui/images/favicon.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.page,
                    action: ContextMenuActionType.search,
                    title: 'Urivoid',
                    url: 'https://www.urlvoid.com/scan/${subdomain}',
                    iconUrl: 'https://www.urlvoid.com/favicon.ico',
                    isEnable: true
                }
            ],
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
            iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: 'MSN翻譯',
            url: 'https://www.microsofttranslator.com/bv.aspx?from=&to=zh-Hant&a=${url}',
            iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: 'Internet Archive',
            url: 'https://web.archive.org/web/*/${url}',
            iconUrl: 'https://web.archive.org/_static/images/archive.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: 'Google 快取頁面',
            url: 'https://webcache.googleusercontent.com/search?q=cache:${url}',
            iconUrl: 'https://api.faviconkit.com/www.google.com/64',
            isEnable: true
        },
        
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.link,
            action: ContextMenuActionType.search,
            title: '在新分頁開啟連結',
            url: '${url}',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.separator,
            contentType: ContextMenuType.link,
            action: '',
            title: '',
            url: '',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.link,
            title: '安全掃描',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.link,
                    action: ContextMenuActionType.search,
                    title: 'VirusTotal',
                    url: 'https://www.virustotal.com/gui/search/${domain}',
                    iconUrl: 'https://www.virustotal.com/gui/images/favicon.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.link,
                    action: ContextMenuActionType.search,
                    title: 'Urivoid',
                    url: 'https://www.urlvoid.com/scan/${domain}',
                    iconUrl: 'https://www.urlvoid.com/favicon.ico',
                    isEnable: true
                }
            ],
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
            iconUrl: 'https://api.faviconkit.com/www.google.com/64',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'TinEye 圖片搜尋',
            url: 'https://www.tineye.com/search?url=${url}',
            iconUrl: 'https://tineye.com/favicon.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'Yandex 圖片搜尋',
            url: 'https://yandex.com/images/search?rpt=imageview&url=${url}',
            iconUrl: 'https://yastatic.net/images-thumbs/_/8cS_MbHl6VBweqVjWeI-eNy0tzE.ico',
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