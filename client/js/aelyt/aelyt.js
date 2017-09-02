const {ipcRenderer} = require('electron');
// const YouTube = require('youtube-node');
// const yt = new YouTube();
const ytdl = require('ytdl-core');
const fs = require('fs');

const ytApiKey = 'AIzaSyBpkKekU8NhvtCT9UMz5S1ZtjwkPa0GQDg'
// yt.setKey(ytApiKey);

let applicationUI = null;


$(document).ready(function(){
    console.log('Loading DOM Controller.');
    applicationUI = new UI();
    
}); 

// document.getElementById("clickButton").addEventListener("click", function(){
//     console.log('clicked')
//     // console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
		
//     ipcRenderer.on('asynchronous-reply', (event, arg) => {
//       console.log(arg) // prints "pong"
//     });

//     ipcRenderer.send('asynchronous-message', 'ping')
// }); 