const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;
    if (message.content == "hello") message.channel.send("Konnichiwa!");
    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/);
    
    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.reply("That isn't a valid command!");

    const permission = message.member.permission.has(command.permission, true);

    if (!permission) return message.reply(`Hmm...Seems like you do not have the permission \${command.permission}\ and can't use this command!`);

    command.run(message, args, client);

    switch (args[0]) {
        case "hello":
            return message.channel.send("Konnichiwa!");

            break;
        
        case "say":
            return message.channel.send(args.slice(1).join(" "));

            break;
    }
});