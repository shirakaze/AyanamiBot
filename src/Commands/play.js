const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const { Player } = require('discord-player')
// const {player} = require("../bot")

module.exports = new Command({
    name: "play",
    description: "Play music using a link from Youtube, Spotify or Soundcloud",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        let { channel } = message.member.voice;
        if (!channel)
            return message.channel.send(`Commander, join a voice channel and try again.`);
        
        let query = args.join(" ");
        if (!query)
            return message.channel.send(`Commander, you need to give me a link to the track`);
        
        // Testing playground
        const player = new Player(client, {
            leaveOnEnd : true,
            leaveOnStop : true,
            leaveOnEmpty : true,
            leaveOnEmptyCooldown : 5000,
            autoSelfDeaf : true,
            ytdlOptions : {},
            initialVolume : 20,
            bufferingTimeout : 3000
        });

        let queue = player.createQueue(message.guild.id, {
            metadata: {
                channel: message.channel,

            },
        
        });
        try {
            if (!queue.connection) await queue.connect(channel);
        } catch {
            queue.destroy();
            return await message.reply({ content: "I am unable to join your voice channel.", ephemeral: true});
        }

        const track = await player.search(query, {
            requestedBy : message.author
        }).then(r => r.tracks[0]);

        queue.play(track);
        message.channel.send({ content: `Now playing **${track.title}**.`})
    }
})