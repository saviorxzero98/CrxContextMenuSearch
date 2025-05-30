const ContentMenuItems = {
    all: [

    ],

    selection: [
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.selection,
            action: ContextMenuActionType.search,
            title: 'Google',
            url: 'https://www.google.com.tw/search?q=${search}',
            iconUrl: 'https://www.google.com/favicon.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.selection,
            action: ContextMenuActionType.search,
            title: 'Bing',
            url: 'https://www.bing.com/search?q=${search}',
            iconUrl: 'https://www.bing.com/favicon.ico',
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
                    title: 'Google',
                    url: 'https://www.google.com.tw/search?q=${search}',
                    iconUrl: 'https://www.google.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing',
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
                    title: 'Brave',
                    url: 'https://search.brave.com/search?q=${search}&source=web',
                    iconUrl: 'https://cdn.search.brave.com/serp/v2/_app/immutable/assets/favicon-32x32.86083f5b.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Startpage',
                    url: 'https://www.startpage.com/sp/search?query=${search}&cat=web&pl=opensearch&language=english',
                    iconUrl: 'https://www.startpage.com/sp/cdn/favicons/apple-touch-icon-57x57--default.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Norton安全搜尋',
                    url: 'https://nortonsafe.search.ask.com/web?q=${search}',
                    iconUrl: 'https://nortonsafe.search.ask.com/favicon.ico',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: 'AI 搜尋',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing AI 搜尋',
                    url: 'https://www.bing.com/search?q=${search}&shm=cr&form=DEEPSH',
                    iconUrl: 'https://www.bing.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Brave Leo AI 搜尋',
                    url: 'https://search.brave.com/search?q=${search}&source=web&summary=1',
                    iconUrl: 'https://cdn.search.brave.com/serp/v2/_app/immutable/assets/favicon-32x32.B2iBzfXZ.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'ChatGPT',
                    url: 'https://chatgpt.com/?q=${search}',
                    iconUrl: 'https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Perplexity AI',
                    url: 'https://www.perplexity.ai/search?q=${search}',
                    iconUrl: 'https://www.perplexity.ai/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Compilot',
                    url: 'https://copilot.microsoft.com/?sendquery=1&showconv=1&q=${search}',
                    iconUrl: 'https://copilot.microsoft.com/sa/simg/favicon-cplt.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Claude AI',
                    url: 'https://claude.ai/new?q=${search}',
                    iconUrl: 'https://claude.ai/images/claude_app_icon.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Duck AI',
                    url: 'https://duckduckgo.com/?&ia=chat&bang=true&q=${search}',
                    iconUrl: 'https://cdn.search.brave.com/serp/v2/_app/immutable/assets/favicon-32x32.B2iBzfXZ.png',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '百科',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '維基百科 (中文)',
                    url: 'https://zh.wikipedia.org/w/index.php?search=${search}',
                    iconUrl: 'https://zh.wikipedia.org/static/favicon/wikipedia.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '維基百科 (英文)',
                    url: 'https://en.wikipedia.org/wiki/Special:Search?search=${search}',
                    iconUrl: 'https://en.wikipedia.org/static/favicon/wikipedia.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '維基百科 (日文)',
                    url: 'https://ja.wikipedia.org/wiki/Special:Search?search=${search}',
                    iconUrl: 'https://ja.wikipedia.org/static/favicon/wikipedia.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '萌娘百科',
                    url: 'https://zh.moegirl.org.cn/index.php?search=${search}',
                    iconUrl: 'https://zh.moegirl.org.cn/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: '巴哈姆特 ACG 資料庫',
                    url: 'https://acg.gamer.com.tw/search.php?kw=${search}',
                    iconUrl: 'https://i2.bahamut.com.tw/favicon.svg',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '翻譯 (轉中文)',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google 翻譯 (中文)',
                    url: 'https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=zh-TW&text=${search}',
                    iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'DeepL 翻譯 (中文)',
                    url: 'https://www.deepl.com/en/translator#en/zh-hant/${search}',
                    iconUrl: 'https://static.deepl.com/img/favicon/favicon_32.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'ChatGPT 翻譯 (中文)',
                    url: 'https://chatgpt.com/?q=將這一句翻譯成繁體中文 "${search}"',
                    iconUrl: 'https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Papago 翻譯 (中文)',
                    url: 'https://papago.naver.com/?sk=auto&tk=zh-TW&st=${search}',
                    iconUrl: 'https://papago.naver.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'iTranslate (中文)',
                    url: 'https://itranslate.com/translate/detect-language-to-chinese-traditional/${search}',
                    iconUrl: 'https://itranslate.com/images/favicon.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Compilot (中文)',
                    url: 'https://copilot.microsoft.com/?sendquery=1&showconv=1&q=將這一句翻譯成繁體中文 "${search}"',
                    iconUrl: 'https://copilot.microsoft.com/sa/simg/favicon-cplt.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing 翻譯 (中文)',
                    url: 'https://www.bing.com/translator/?to=zh-Hant&text=${search}',
                    iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '翻譯 (轉英文)',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google 翻譯 (英文)',
                    url: 'https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=en&text=${search}',
                    iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'DeepL 翻譯 (英文)',
                    url: 'https://www.deepl.com/en/translator#zh/en-us/${search}',
                    iconUrl: 'https://static.deepl.com/img/favicon/favicon_32.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'ChatGPT 翻譯 (英文)',
                    url: 'https://chatgpt.com/?q=將這一句翻譯成英文 "${search}"',
                    iconUrl: 'https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Papago 翻譯 (英文)',
                    url: 'https://papago.naver.com/?sk=auto&tk=en&st=${search}',
                    iconUrl: 'https://papago.naver.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'iTranslate (英文)',
                    url: 'https://itranslate.com/translate/detect-language-to-english-united-states/${search}',
                    iconUrl: 'https://itranslate.com/images/favicon.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Compilot (英文)',
                    url: 'https://copilot.microsoft.com/?sendquery=1&showconv=1&q=將這一句翻譯成英文 "${search}"',
                    iconUrl: 'https://copilot.microsoft.com/sa/simg/favicon-cplt.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing 翻譯 (英文)',
                    url: 'https://www.bing.com/translator/?to=en&text=${search}',
                    iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Yandex 翻譯 (英文)',
                    url: 'https://translate.yandex.com/?source_lang=zh&target_lang=en&text=${search}',
                    iconUrl: 'https://translate.yandex.com/icons/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'ChatGPT (文法檢查)',
                    url: 'https://chatgpt.com/?q=幫我檢查這一句的文法，如果文法不正確請幫我修正 "${search}"',
                    iconUrl: 'https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '字典',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Yahoo!奇摩 字典',
                    url: 'https://tw.dictionary.search.yahoo.com/search?p=${search}&amp;fr=opensearch',
                    iconUrl: 'https://s.yimg.com/rz/l/favicon.ico',
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
                    title: 'Dr.Eye譯典通',
                    url: 'https://www.dreye.com/ews/${search}--01--.html',
                    iconUrl: 'https://www.dreye.com/favicon.ico',
                    isEnable: false
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '圖片',
            items: [
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Google 圖片',
                    url: 'https://www.google.com/images?q=${search}',
                    iconUrl: 'https://www.google.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Bing 圖片',
                    url: 'https://www.bing.com/images/search?q=${search}',
                    iconUrl: 'https://www.bing.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Yahoo奇摩! 圖片',
                    url: 'https://tw.images.search.yahoo.com/search/images;_ylt=Awrth0sQW7hiXpsxYxZr1gt.;_ylu=Y29sbwN0dzEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=${search}',
                    iconUrl: 'https://s.yimg.com/rz/l/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'DuckDuckGo 圖片',
                    url: 'https://duckduckgo.com/?q=${search}&iax=images&ia=images',
                    iconUrl: 'https://duckduckgo.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Brave 圖片',
                    url: 'https://search.brave.com/images?q=${search}&source=web',
                    iconUrl: 'https://cdn.search.brave.com/serp/v2/_app/immutable/assets/favicon-32x32.86083f5b.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Startpage 圖片',
                    url: 'https://www.startpage.com/sp/search?query=${search}&cat=images&pl=opensearch&language=english',
                    iconUrl: 'https://www.startpage.com/sp/cdn/favicons/apple-touch-icon-57x57--default.png',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Yandex 圖片',
                    url: 'https://yandex.eu/images/search?text=${search}',
                    iconUrl: 'https://yastatic.net/images-thumbs/_/8cS_MbHl6VBweqVjWeI-eNy0tzE.ico',
                    isEnable: true
                }
            ],
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.folder,
            contentType: ContextMenuType.selection,
            title: '影音',
            items: [
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
                    title: 'Invidious (YouTube)',
                    url: 'https://invidious.nerdvpn.de/search?q=${search}',
                    iconUrl: 'https://invidious.nerdvpn.de/favicon-32x32.png?v=831017f4',
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
                    title: 'LINE TV',
                    url: 'https://www.linetv.tw/search?q=${search}',
                    iconUrl: 'https://img.linetv.tw/WEB/linetv_favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'ofiii',
                    url: 'https://www.ofiii.com/search/${search}',
                    iconUrl: 'https://www.ofiii.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'BiliBili',
                    url: 'https://search.bilibili.com/all?keyword=${search}',
                    iconUrl: 'https://www.bilibili.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Hami 影音',
                    url: 'https://hamivideo.hinet.net/hamivideo/search.do?keyword=${search}',
                    iconUrl: 'https://hamivideo.hinet.net/hamivideo/favicon_hamivideo_new.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'YouTube Music',
                    url: 'https://music.youtube.com/search?q=${search}',
                    iconUrl: 'https://music.youtube.com/img/favicon_32.png',
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
                    title: 'Spotify',
                    url: 'https://open.spotify.com/search/${search}',
                    iconUrl: 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png',
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
                    title: 'DuckDuckGo 地圖',
                    url: 'https://duckduckgo.com/?t=h_&q=${search}&ia=web&iaxm=maps&iax=images',
                    iconUrl: 'https://duckduckgo.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'OpenStreetMap',
                    url: 'https://www.openstreetmap.org/search?query=${search}',
                    iconUrl: 'https://www.openstreetmap.org/assets/apple-touch-icon-60x60-cff74c9066d8e7fd08b29407712edbae5613cc9a4c03ee0398a89502a6a41d1f.png',
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
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Microsoft Edge 外掛元件',
                    url: 'https://microsoftedge.microsoft.com/addons/search/${search}?hl=zh-TW',
                    iconUrl: 'https://www.microsoft.com/favicon.ico',
                    isEnable: true
                },
                {
                    itemType: ContextMenuItemType.normal,
                    contentType: ContextMenuType.selection,
                    action: ContextMenuActionType.search,
                    title: 'Firefox 附加元件',
                    url: 'https://addons.mozilla.org/zh-TW/firefox/search/?q=${search}',
                    iconUrl: 'https://addons.mozilla.org/favicon.ico',
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
            title: 'Bing 網頁翻譯',
            url: 'https://www.microsofttranslator.com/bv.aspx?from=&to=zh-Hant&a=${url}',
            iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
            isEnable: false
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
            iconUrl: 'https://www.google.com/favicon.ico',
            isEnable: false
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'Papago 網頁翻譯',
            url: 'https://papago.naver.net/website?source=auto&target=zh-TW&url=${url}',
            iconUrl: 'https://papago.naver.com/favicon.ico',
            isEnable: false
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
            title: '網頁安全掃描',
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
            title: 'Bing 網頁翻譯',
            url: 'https://www.microsofttranslator.com/bv.aspx?from=&to=zh-Hant&a=${url}',
            iconUrl: 'https://www.bing.com/th?id=OTT.7A274AA188550691D09FA80F322A58D2&pid=Trans',
            isEnable: false
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
            iconUrl: 'https://www.google.com/favicon.ico',
            isEnable: false
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.page,
            action: ContextMenuActionType.search,
            title: 'Papago 網頁翻譯',
            url: 'https://papago.naver.net/website?source=auto&target=zh-TW&url=${url}',
            iconUrl: 'https://papago.naver.com/favicon.ico',
            isEnable: false
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
            title: '連結安全掃描',
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
            title: 'Google 圖片',
            url: 'https://images.google.com/searchbyimage?sbisrc=cr_1_5_2&image_url=${url}',
            iconUrl: 'https://www.google.com/favicon.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.googleImageReverseSearch,
            title: 'Google 圖片',
            url: '',
            iconUrl: 'https://www.google.com/favicon.ico',
            isEnable: false
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'Google Lens 圖片',
            url: 'https://lens.google.com/uploadbyurl?url=${url}',
            iconUrl: 'https://ssl.gstatic.com/lens/web/ui/icons/favicon-32x32.png',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'Bing 圖片',
            url: 'https://www.bing.com/images/search?view=detailv2&iss=sbi&q=imgurl:${url}',
            iconUrl: 'https://www.bing.com/favicon.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'Yandex 圖片',
            url: 'https://yandex.eu/images/search?rpt=imageview&url=${url}',
            iconUrl: 'https://yastatic.net/images-thumbs/_/8cS_MbHl6VBweqVjWeI-eNy0tzE.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'Lenso AI',
            url: 'https://lenso.ai/en/search-by-url?url=${url}&utm_source=sbi',
            iconUrl: 'https://lenso.ai/apple-touch-icon.png',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'Anime Scene Search',
            url: 'https://trace.moe/?url=${url}',
            iconUrl: 'https://trace.moe/favicon.png',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: '二次元圖片搜尋',
            url: 'https://ascii2d.net/search/url/${url}',
            iconUrl: 'https://ascii2d.net/assets/favicon-461e7af86f6c1a73f716cf8c729e65d6164851b66470932d01ef928ebbaed6ba.ico',
            isEnable: true
        },
        {
            itemType: ContextMenuItemType.normal,
            contentType: ContextMenuType.image,
            action: ContextMenuActionType.search,
            title: 'TinEye 圖片',
            url: 'https://www.tineye.com/search?url=${url}',
            iconUrl: 'https://tineye.com/favicon.ico',
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
            title: '在新分頁開啟音樂',
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