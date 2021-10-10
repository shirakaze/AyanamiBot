const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "emoji",
    description: "test sending emojis",
    permission: "SEND_MESSAGES",
    run: async(message, args, client) => {
        const msg = await message.reply(":x: it works")
    }
})