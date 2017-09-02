// Main process event handler.
// Listens for synchronous and asynchronous messages from the client api.

const {ipcMain} = require('electron');
const YouTube = require('youtube-node');
const ytdl = require('ytdl-core');
const fs = require('fs');

const yt = new YouTube();
const ytApiKey = 'AIzaSyBpkKekU8NhvtCT9UMz5S1ZtjwkPa0GQDg'

yt.setKey(ytApiKey);

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg);
    event.sender.send('asynchronous-reply', 'pong');
});

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.returnValue = 'pong'
})

ipcMain.on('youtube-search-phrase', (event, arg) => {
    if(arg === null || arg === undefined) {
        return;
    }

    yt.search(arg, 10, (err, reply) => {
        var results = [];

        if(err){ event.sender.send(err); }

        for(var i=0; i<reply.items.length; i++) {
            let currentVideo = reply.items[i];
            results.push(currentVideo.snippet.title);
        }
        event.sender.send('youtube-search-phrase-reply', results);
	});
	
});

ipcMain.on('youtube-video-info-by-id', (event, arg) => {
	if(arg === null || arg === undefined) {
		return;
	}

	ytdl.getInfo(arg, (err, reply) => {
		if(err){ event.sender.send(err); }

		event.sender.send('youtube-video-info-by-id-reply', reply);		
	})
});