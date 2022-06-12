const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const fs = require('fs');

require('dotenv').config();

const functions = fs.readdirSync("./functions").filter(file => file.endsWith("js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith("js"));
const commandFolders = fs.readdirSync("./commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
    client.login(process.env.TOKEN);
})();