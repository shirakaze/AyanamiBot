const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "clear",
    description: "Clears a specified number of messages",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client) {

        const amount = args[1];

        if(!amount) return message.reply("You need to specify the number of messages I should clear!")

        if(isNaN(amount)) return message.reply(`${amount} is not a valid number!`);

        const amountParsed = parseInt(amount);
        
        if (amountParsed > 100) return message.reply("Hey, a maximum of only 100 messages can be cleared at one time!");

        message.channel.bulkDelete(amountParsed + 1);

        const msg = await message.channel.send(`${amountParsed} messages have been cleared!`);

        setTimeout(() => msg.delete(), 5000);
    }
})