const { Player } = require('discord-player')
const Client = require("./Client")

function RunFuction(message, args, client) {}

class musicPlayer{
    constructor(client){
        this.leaveOnEnd = true,
        this.leaveOnStop = true,
        this.leaveOnEmpty = true,
        this.leaveOnEmptyCooldown = 5000,
        this.autoSelfDeaf = true,
        this.ytdlOptions = {},
        this.initialVolume = 20,
        this.bufferingTimeout = 3000
    }

    newPlayer(client) {
        return new Player(client)
    }

}
module.exports = musicPlayer
