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

class SelectionTextMenuAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let url = context.searchUrl;
        let selectionText = onClickData.selectionText;
        let openUrl = url.replace(ContextMenuSearchTerm, selectionText);

        chrome.tabs.create(
            {
                url: openUrl
            }
        );
    }
}

class PageMenuAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let url = context.searchUrl;
        let pageUrl = onClickData.pageUrl;
        let openUrl = pageUrl;
        if (url) {
            openUrl = url.replace(ContextMenuSearchTerm, pageUrl);
        }

        chrome.tabs.create(
            {
                url: openUrl
            }
        );
    }
}

class LinkMenuAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let url = context.searchUrl;
        let linkUrl = onClickData.linkUrl;
        let openUrl = linkUrl;
        if (url) {
            openUrl = url.replace(ContextMenuSearchTerm, linkUrl);
        }

        chrome.tabs.create(
            {
                url: openUrl
            }
        );
    }
}

class ImageMenuAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let url = context.searchUrl;
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
}

class FrameMenuAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let url = context.searchUrl;
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
}


class ImageBase64ConvertMenuAction extends BaseMenuAction {
    constructor() {
        super();
        this.canvas = document.createElement('canvas');
        this.canvasTempContainer = document.createElement('textarea');
    }

    execute(onClickData, context) {
        let command = context.command ?? '';

        switch (command.toLowerCase()) {
            case 'copy':
                this.copy(onClickData, context);
                break;

            case 'open':
                this.open(onClickData, context);
                break;

            case 'download':
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


class ChineseConvertMenuAction extends BaseMenuAction {
    constructor() {
        super();
    }

    execute(onClickData, context) {
        let command = context.command ?? '';
    }
}