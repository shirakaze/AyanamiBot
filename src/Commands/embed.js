const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "embedtest",
    description: "shows an embed",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        
        const embed = new Discord.MessageEmbed();

        embed.setTitle("This is a test embed")
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .setColor('#FF0000')
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true}))
            .setDescription("This is a test description.\nThis is a test link: [click here](https://www.youtube.com/watch?v=aYsgsSo1aow)")
            .setTimestamp(message.createdTimestamp)
            .setThumbnail(client.user.avatarURL({ dynamic : true}))
            .addFields(
                { 
                    name: "Name",
                    value: "Tateyama Ayano / 楯山 文乃 / アヤノ",
                    inline: "false"
                }
            )
            .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

        message.channel.send({ embeds: [embed] });
    }
})