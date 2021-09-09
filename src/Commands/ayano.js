const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "ayano",
    description: "Shows information about Ayano (Character)",
    async run(message, args, client) {

        const embed = new Discord.MessageEmbed();
        
        embed.setTitle("Ayano Tateyama")
            .setURL("https://kagerouproject.fandom.com/wiki/Ayano_Tateyama")
            .setColor("#D5595B")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true}))
            .setDescription("There are times you want to tell someone something,\nbut you wind up being too late. That's not gonna happen\nif you do it right now. So try to drum up a little courage,\nokay?")
            .setTimestamp(message.createdTimestamp)
            .setImage("https://static.wikia.nocookie.net/kagerouproject/images/1/16/Act_09_-_Ayano_03.png")
            .addFields(
                { 
                    name: "Name",
                    value: "Tateyama Ayano / 楯山 文乃 / アヤノ",
                    inline: false
                },
                {
                    name: "Age",
                    value: "18 (Current) / 16 (Physical Age)",
                    inline: true
                },
                {
                    name: "Birthday",
                    value: "November 22",
                    inline: true
                },
                {
                    name: "Occupation",
                    value: "Founder of the Mekakushi Dan / Mekakushi Dan Member No. 0 / Student",
                    inline: false
                },
                {
                    name: "Ability",
                    value: "Favoring Eyes",
                    inline: true
                },
                {
                    name: "Status",
                    value: "Alive",
                    inline: true
                }
            )
                .setFooter("It's nothing, heh.")

        message.channel.send({ embeds: [embed] });
    }
})