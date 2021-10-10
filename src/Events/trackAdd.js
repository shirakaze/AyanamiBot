const player = require("../bot.js");
const Event = require("../Structures/Event.js");

module.exports = new Event("trackAdd", (queue, track) => {
    queue.metadata.channel.send(`Added ${track.title} to the queue.`)
});