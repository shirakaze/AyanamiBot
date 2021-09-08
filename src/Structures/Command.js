const Discord = require("discord.js");
const Client = require("./Client.js");

/**
 * 
 * @param {Discord.Message | Discord.Interaction} message 
 * @param {string[]} args 
 * @param {Client} client 
 */
function RunFuction(message, args, client) {}

class Command {
    /**
     * @typedef {{name: string, description: string, run: RunFuction})} CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    }
}

module.exports = Command;