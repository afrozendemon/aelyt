// Data interface into the main process.

const {ipcRenderer} = require('electron');

function API() {
   this.apiName = 'APIV1';
   this.apiBase = null;
   this.apiPort = null;
}

API.prototype.searchYoutubeByPhrase = function(phrase, callback) {
    var currentAPI = this;

    ipcRenderer.send('youtube-search-phrase', phrase);

    ipcRenderer.on('youtube-search-phrase-reply', function(event, data) {
        typeof callback === 'function' && callback(data);
    });

};


API.prototype.getYoutubeVideoInfoById = function(id, callback) {
	var currentAPI = this;

	ipcRenderer.send('youtube-video-info-by-id', id);

	ipcRenderer.on('youtube-video-info-by-id-reply', function(event, data) {
        typeof callback === 'function' && callback(data);
    });

};