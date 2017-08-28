const {ipcRenderer} = require('electron')

const ytdl = require('ytdl-core');
const fs = require('fs');

const ytApiKey = ''

let applicationUI;


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

