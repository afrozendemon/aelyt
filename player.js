function mainPlayer() {
    this.playerName = 'AELYT Player'
}

mainPlayer.prototype.printMessage = function () {
    console.log('Test Message form imported node module')
}

module.exports = new mainPlayer();