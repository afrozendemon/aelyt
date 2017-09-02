//This object will handle playback of audio.

function mainPlayer() {
    this.playerName = 'Audio Player'
}

mainPlayer.prototype.printMessage = function () {
    console.log('Test Message form imported node module')
}

module.exports = new mainPlayer();