const {ipcRenderer} = require('electron')

const ytdl = require('ytdl-core');
const fs = require('fs');

// document.getElementById("clickButton").addEventListener("click", function(){
//     console.log('clicked')
//     // console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
		
//     ipcRenderer.on('asynchronous-reply', (event, arg) => {
//       console.log(arg) // prints "pong"
//     });

//     ipcRenderer.send('asynchronous-message', 'ping')
// }); 


var playButton = $('#playButton');

var stopButton = $('#stopButton');

var output = $("#output");

// var currentStream = null;

playButton.on('click', function(){
	console.log('playing...');

	var url = 'https://www.youtube.com/watch?v=7-qGKqveZaM';
	var id = '7-qGKqveZaM'

	ytdl.getInfo(id, (err, info) => {
		if (err) throw err;
		output.html('<pre><code>' + JSON.stringify(info,null,2) + '</pre></code>');
	  });	

	// var currentStream = ytdl(url).pipe();

	// currentStream.on('response', () => {
	// 	starttime = Date.now()
	// });

	// currentStream.on('progress', (chunkLength, downloaded, total) => {
	// 	const floatDownloaded = downloaded / total;
	// 	const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
	// 	readline.cursorTo(process.stdout, 0);
	// 	process.stdout.write(`${(floatDownloaded * 100).toFixed(2)}% downloaded`);
	// 	process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
	// 	process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
	// 	process.stdout.write(`, estimated time left: ${(downloadedMinutes / floatDownloaded - downloadedMinutes).toFixed(2)}minutes `);
	// 	readline.moveCursor(process.stdout, 0, -1);
	// });
	// currentStream.on('end', () => {
	// 	process.stdout.write('\n\n');
	// });  
});

stopButton.on('click', function(){
	console.log('stopping...');

	
	if(currentStream !== null) {
		currentStream.close();  
	}
	
});