const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "ping",
    description: "Get your ping from Ayano!",

    async run(message, args, client) {
        const msg = await message.reply(`Ah, hey! Ping: ${client.ws.ping} ms.`);
        
        msg.edit(`Ah, hey! Ping: ${client.ws.ping} ms. \nMessage Ping: ${msg.createdTimestamp - message.createdTimestamp} ms.`);
    }
});
// hi