const {ipcRenderer} = require('electron')


document.getElementById("clickButton").addEventListener("click", function(){
    console.log('clicked')
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
    
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', 'ping')
}); 