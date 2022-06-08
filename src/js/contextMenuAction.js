
class BaseMenuAction {
    constructor() {

    }

    getCallback(context) {
        return (onClickData) => {
            this.execute(onClickData, context);
        }
    }

    execute(onClickData, context) {

    }
}

//--------------------------------------------------

const SearchActionSearchTerm = '${search}';
const SearchActionCommandType = {
    selectionText: 'selection_text',
    page: 'page',
    link: 'link',
    image: 'image',
    frame: 'frame'
}

class SearchAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let command = context.command ?? '';

        switch (command.toLowerCase()) {
            case SearchActionCommandType.selectionText:
                this.searchSelectionText(onClickData, context);
                break;

            case SearchActionCommandType.page:
                this.searchPageUrl(onClickData, context);
                break;

            case SearchActionCommandType.link:
                this.searchLinkUrl(onClickData, context);
                break;

            case SearchActionCommandType.image:
                this.searchImageUrl(onClickData, context);
                break;

            case SearchActionCommandType.frame:
                this.searchFrameUrl(onClickData, context);
                break;
        }
    }

    searchSelectionText(onClickData, context) {
        let url = context.searchUrl;
        let selectionText = onClickData.selectionText;

        if (selectionText) {
            let openUrl = this.replaceSearchTerm(url, selectionText);
            this.createTab(openUrl);
        }
    }

    searchPageUrl(onClickData, context) {
        let url = context.searchUrl;
        let pageUrl = onClickData.pageUrl;

        if (pageUrl) {
            let openUrl = this.replaceSearchTerm(url, pageUrl);
            this.createTab(openUrl);
        }
    }

    searchLinkUrl(onClickData, context) {
        let url = context.searchUrl;
        let linkUrl = onClickData.linkUrl;

        if (linkUrl) {
            let openUrl = this.replaceSearchTerm(url, linkUrl);
            this.createTab(openUrl);
        }
    }

    searchImageUrl(onClickData, context) {
        let url = context.searchUrl;
        let imageUrl = onClickData.srcUrl; 

        if (imageUrl) {
            let openUrl = this.replaceSearchTerm(url, imageUrl);
            this.createTab(openUrl);
        }
    }

    searchFrameUrl(onClickData, context) {
        let url = context.searchUrl;
        let frameUrl = onClickData.frameUrl; 

        if (frameUrl) {
            let openUrl = this.replaceSearchTerm(url, frameUrl);
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

    replaceSearchTerm(url, search) {
        if (url) {
            let openUrl = url.replace(SearchActionSearchTerm, search);
            return openUrl;
        }
        else {
            return search;
        }
    }
}

//--------------------------------------------------

const ImageBase64ConvertActionCommandType = {
    copy: 'copy',
    open: 'open',
    download: 'download'
}

class ImageBase64ConvertAction extends BaseMenuAction {
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

class ChineseConvertAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let command = context.command ?? '';
    }
}