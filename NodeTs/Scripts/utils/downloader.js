define(["require", "exports"], function (require, exports) {
    "use strict";
    function download(str, filename) {
        var url = URL.createObjectURL(new Blob([str], { type: 'text/plain' }));
        var downloadElem = document.createElement('A');
        downloadElem.setAttribute("href", url);
        downloadElem.setAttribute("download", filename);
        document.body.appendChild(downloadElem);
        downloadElem.click();
        document.body.removeChild(downloadElem);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = download;
});
//# sourceMappingURL=downloader.js.map