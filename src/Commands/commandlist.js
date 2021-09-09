const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "commands",
    description: "Display a list of Commands",
    async run(message, args, client) {
        
        const embed = new Discord.MessageEmbed();

        embed.setTitle("List of Commands")
            .setColor("00E8FF")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true}))
            .setDescription("This is a list of commands that Ayano can execute as of 9/9/2021/nCommands:")
            .setTimestamp(message.createdTimestamp)
            .addFields(
                {
                    name: "ayano",
                    value: "Displays a profile summary of Ayano",
                    inline: false
                },
                {
                    name: "commands",
                    value: "Displays this list",
                    inline: false
                },
                {
                    name: "ping",
                    value: "Sends a message and displays ping",
                    inline: false
                }
            )
            .setFooter("I hope everything was introduced properly... That was nerve-wracking...")

        message.reply({ embeds: [embed] })
    }
})