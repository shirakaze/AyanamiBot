const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;
    if (message.content == "hello") message.reply("Konnichiwa!");
    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.substring(client.prefix.length).split(/ +/)
    
    const command = client.commands.find(cmd => cmd.name == args[1]);
    console.log(args);

    if (!command) return message.reply("That isn't a valid command!");

    command.run(message, args, client);

    switch (args[1]) {
        case "hello":
            return message.reply("Konnichiwa!");

            break;
        
        case "say":
            return message.reply(args.slice(1).join(" "));

            break;
    }
});