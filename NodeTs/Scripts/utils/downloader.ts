function download(str, filename) {
    var url = URL.createObjectURL(new Blob([str], { type: 'text/plain' }));

    var downloadElem = document.createElement('A');
    downloadElem.setAttribute("href", url);
    downloadElem.setAttribute("download", filename);

    document.body.appendChild(downloadElem);
    downloadElem.click();
    document.body.removeChild(downloadElem);
}

export default download;