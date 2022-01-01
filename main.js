const Discord = require('discord.js')
const client = new Discord.Client()

client.commands = new Discord.Collection();
client.config = require('./config.json');

['loader', 'distube'].forEach(handler=> {
    require(`./handlers/${handler}`)(client);
});

client.login(client.config.token);