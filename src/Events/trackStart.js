const player = require("../bot.js");
const Event = require("../Structures/Event.js");

module.exports = new Event("trackStart", (queue, track) => {
    queue.metadata.channel.send(`Now playing ${track.title}`)});

    