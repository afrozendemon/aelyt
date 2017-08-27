const {ipcRenderer} = require('electron')
const stream = require('youtube-audio-stream');
const decoder = require('lame').Decoder;
const speaker = require('speaker');

document.getElementById("clickButton").addEventListener("click", function(){
    console.log('clicked')
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
    
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
    });

    ipcRenderer.send('asynchronous-message', 'ping')
}); 


var playButton = $('#playButton');

playButton.on('click', function(){
  console.log('playing...');

  var url = 'http://youtube.com/watch?v=QzBsdMfmCZU';

  stream(url).pipe(decoder()).pipe(speaker());
  
});

$(document).on('ready', function(){
  console.log('DOM content loaded');
})