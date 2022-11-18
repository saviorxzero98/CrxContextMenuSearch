const ContextMenuActionType = {
    search: 'search',
    base64Image: 'base64_image',
    googleImageReverseSearch: 'google_image_reverse_search',
    chineseConvert: 'chinese_convert'
};

const UrlPlaceholders = {
    selectionText: '${search}',
    url: '${url}',
    domain: '${domain}',
    subdomain: '${subdomain}'
}

class ContextMenuAction {
    constructor() {

    }

    getCallback(context) {
        return (onClickData) => {
            this.execute(onClickData, context);
        }
    }

    execute(onClickData, context) {

    }

    updateRecentSearch(context) {
        RecentSearchCacheService.set(context.contentType, context);

        let builder = new ContextMenuBuilder();
        builder.createMenu(ContentMenuItems);
    }
}


const ContextMenuActionFactory = {
    create: (action) => {
        if (action) {
            switch (action.toLowerCase()) {
                case ContextMenuActionType.search:
                    return new SearchAction();

                case ContextMenuActionType.base64Image:
                    return new ImageBase64ConvertAction();

                case ContextMenuActionType.googleImageReverseSearch:
                    return new GoogleImageReverseSearchAction();

                case ContextMenuActionType.ChineseConvertAction:
                    return new ChineseConvertAction();
            }
        }
        return new ContextMenuAction();
    }
}

//--------------------------------------------------

class SearchAction extends ContextMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let contentType = context.contentType ?? '';

        switch (contentType.toLowerCase()) {
            case ContextMenuType.selection:
                this.searchSelectionText(onClickData, context);
                break;

            case ContextMenuType.page:
                this.searchPageUrl(onClickData, context);
                break;

            case ContextMenuType.link:
                this.searchLinkUrl(onClickData, context);
                break;

            case ContextMenuType.image:
                this.searchImageUrl(onClickData, context);
                break;

            case ContextMenuType.audio:
                this.searchAudioUrl(onClickData, context);
                break;

            case ContextMenuType.video:
                this.searchVideoUrl(onClickData, context);
                break;

            case ContextMenuType.frame:
                this.searchFrameUrl(onClickData, context);
                break;
        }
    }

    searchSelectionText(onClickData, context) {
        let url = context.url;
        let selectionText = onClickData.selectionText;

        if (selectionText) {
            this.updateRecentSearch(context);
            let openUrl = this.replaceSelectionText(url, selectionText);
            this.createTab(openUrl);
        }
    }

    searchPageUrl(onClickData, context) {
        let url = context.url;
        let pageUrl = onClickData.pageUrl;

        if (pageUrl) {
            this.updateRecentSearch(context);
            let openUrl = this.replaceUrl(url, pageUrl);
            openUrl = this.replaceDomain(openUrl, pageUrl);
            openUrl = this.replaceSubDomain(openUrl, pageUrl);
            this.createTab(openUrl);
        }
    }

    searchLinkUrl(onClickData, context) {
        let url = context.url;
        let linkUrl = onClickData.linkUrl;

        if (linkUrl) {
            this.updateRecentSearch(context);
            let openUrl = this.replaceUrl(url, linkUrl);
            openUrl = this.replaceDomain(openUrl, linkUrl);
            openUrl = this.replaceSubDomain(openUrl, linkUrl);
            this.createTab(openUrl);
        }
    }

    searchImageUrl(onClickData, context) {
        let url = context.url;
        let imageUrl = onClickData.srcUrl; 

        if (imageUrl) {
            this.updateRecentSearch(context);
            let openUrl = this.replaceUrl(url, imageUrl);
            this.createTab(openUrl);
        }
    }

    searchAudioUrl(onClickData, context) {
        let url = context.url;
        let audioUrl = onClickData.srcUrl; 

        if (audioUrl) {
            this.updateRecentSearch(context);
            let openUrl = this.replaceUrl(url, audioUrl);
            this.createTab(openUrl);
        }
    }

    searchVideoUrl(onClickData, context) {
        let url = context.url;
        let videoUrl = onClickData.srcUrl; 

        if (videoUrl) {
            this.updateRecentSearch(context);
            let openUrl = this.replaceUrl(url, videoUrl);
            this.createTab(openUrl);
        }
    }

    searchFrameUrl(onClickData, context) {
        let url = context.url;
        let frameUrl = onClickData.frameUrl; 

        if (frameUrl) {
            this.updateRecentSearch(context);
            let openUrl = this.replaceUrl(url, frameUrl);
            this.createTab(openUrl);
        }
    }

    createTab(url) {
        chrome.tabs.create(
            {
                url: url
            }
        );
    }

    replaceSelectionText(baseUrl, selectionText) {
        if (baseUrl) {
            let openUrl = baseUrl.replace(UrlPlaceholders.selectionText, selectionText);
            return openUrl;
        }
        else {
            return selectionText;
        }
    }

    replaceUrl(baseUrl, url) {
        if (baseUrl) {
            let openUrl = baseUrl.replace(UrlPlaceholders.url, url);
            return openUrl;
        }
        else {
            return url;
        }
    }

    replaceDomain(baseUrl, url) {
        if (baseUrl && url) {
            let path = url.replace('https://', '')
                          .replace('http://', '')
                          .split('/');
            
            if (path.length !== 0) {
                let domain = path[0];
                let openUrl = baseUrl.replace(UrlPlaceholders.domain, domain);
                return openUrl;
            }
        }
        return '';
    }

    replaceSubDomain(baseUrl, url) {
        if (baseUrl && url) {
            let path = url.replace('https://www.', '')
                          .replace('http://www.', '')
                          .split('/');
            
            if (path.length !== 0) {
                let subdomain = path[0];
                let openUrl = baseUrl.replace(UrlPlaceholders.subdomain, subdomain);
                return openUrl;
            }
        }
        return '';
    }
}

//--------------------------------------------------

const ImageBase64ConvertActionCommandType = {
    copy: 'copy',
    open: 'open',
    download: 'download'
}

class ImageBase64ConvertAction extends ContextMenuAction {
    constructor() {
        super();
        this.canvas = document.createElement('canvas');
        this.canvasTempContainer = document.createElement('textarea');
    }

    execute(onClickData, context) {
        let command = context.command ?? '';

        switch (command.toLowerCase()) {
            case ImageBase64ConvertActionCommandType.copy:
                this.copy(onClickData, context);
                break;

            case ImageBase64ConvertActionCommandType.open:
                this.open(onClickData, context);
                break;

            case ImageBase64ConvertActionCommandType.download:
                this.download(onClickData, context);
                break;
        }
    }

    copy(onClickData, context) {
        this.updateRecentSearch(context);

        let tempImage = new Image;
        let canvas = this.canvas;
        let canvasTempContainer = this.canvasTempContainer;

        tempImage.src = onClickData.srcUrl;
        tempImage.onload = () =>
        {
            canvas.width = tempImage.width;
            canvas.height = tempImage.height;
            
            let canvasContext = canvas.getContext('2d');
            canvasContext.drawImage(tempImage, 0, 0);
    
            canvasTempContainer.textContent = canvas.toDataURL();
            document.body.appendChild(canvasTempContainer);
            canvasTempContainer.select();
    
            chrome.extension.getBackgroundPage().console.log(canvasTempContainer.textContent);
            document.execCommand('copy');
            document.body.removeChild(canvasTempContainer);
        }
    }

    open(onClickData, context) {
        this.updateRecentSearch(context);

        let tempImage = new Image;
        let canvas = this.canvas;
        let canvasTempContainer = this.canvasTempContainer;

        tempImage.src = onClickData.srcUrl;
        tempImage.onload = () =>
        {
            canvas.width = tempImage.width;
            canvas.height = tempImage.height;
            
            let canvasContext = canvas.getContext('2d');
            canvasContext.drawImage(tempImage, 0, 0);
    
            let base64Url = canvas.toDataURL();

            chrome.tabs.create(
                {
                    url: base64Url
                }
            );
        }
    }

    download(onClickData, context) {
        this.updateRecentSearch(context);

        let tempImage = new Image;
        let canvas = this.canvas;

        tempImage.src = onClickData.srcUrl;
        tempImage.onload = () =>
        {
            canvas.width = tempImage.width;
            canvas.height = tempImage.height;
            
            let canvasContext = canvas.getContext('2d');
            canvasContext.drawImage(tempImage, 0, 0);
    
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

//--------------------------------------------------

class GoogleImageReverseSearchAction extends ContextMenuAction {
    constructor() {
        super();
        this.canvas = document.createElement('canvas');
        this.canvasTempContainer = document.createElement('textarea');
    }

    execute(onClickData, context) {
        this.updateRecentSearch(context);

        let self = this;
        let tempImage = new Image;
        let canvas = this.canvas;

        tempImage.src = onClickData.srcUrl;

        tempImage.onload = () =>
        {
            canvas.width = tempImage.width;
            canvas.height = tempImage.height;
            
            let canvasContext = canvas.getContext('2d');
            canvasContext.drawImage(tempImage, 0, 0);
    
            let dataUrl = canvas.toDataURL();
            
            let blob = new Blob([ self.dataUrlToArray(dataUrl) ], { type: self.getDataUrlMimeType(dataUrl) });

            const data = new FormData();
            data.append('encoded_image', blob, 'Image.jpg');

            axios.post('https://www.google.com/searchbyimage/upload', data)
                 .then((resp) => {
                    let searchUrl = '';
                    if (resp && resp.status == 200 && resp.request && resp.request.responseURL) {
                        searchUrl = resp.request.responseURL;
                    }
                    else {
                        searchUrl = `https://images.google.com/searchbyimage?image_url=${onClickData.srcUrl}`;
                    }

                    chrome.tabs.create(
                        {
                            url: searchUrl
                        }
                    );
                 });
        }
    }

    dataUrlToArray(dataUrl) {
        const [meta, data] = dataUrl.split(',');
        let byteString;

        if (meta.endsWith(';base64')) {
            byteString = atob(data);
        } 
        else {
            byteString = unescape(data);
        }
        const length = byteString.length;

        const array = new Uint8Array(new ArrayBuffer(length));
        for (let i = 0; i < length; i++) {
            array[i] = byteString.charCodeAt(i);
        }

        return array;
    }

    getDataUrlMimeType(dataUrl) {
        return dataUrl.slice(0, 100)
                      .split(',')[0]
                      .split(':')[1]
                      .split(';')[0]
                      .toLowerCase();
    }
}


//--------------------------------------------------

class ChineseConvertAction extends ContextMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let command = context.command ?? '';
    }
}