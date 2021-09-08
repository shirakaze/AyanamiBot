const Discord = require("discord.js");
const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");
const client = new Client();

client.commands = new Discord.Collection();

client.start(config.token);


// client.on("ready", () => {
//     console.log(`Ayano is logged in as ${client.user.tag}`)
    // const names = ["We're like secret agents!", "Those secret agents, I wonder if I have become their 'big sister' now?", "Ehehe. I’m stupid, you know. So it can't be helped."]
    // const types = ['LISTENING', 'PLAYING', 'STREAMING', 'WATCHING', 'COMPETING']
    
    // client.user.setPresence({ name: names[0], type: "WATCHING"}) })
    // setInterval(() => {
    //     let randNum = Math.floor(Math.random() * names.length)
    //     client.user.setPresence({ activities: [{ names: names[randNum].toString(), type: "WATCHING"}] })
// }, 60);
