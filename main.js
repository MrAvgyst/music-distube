const Discord = require('discord.js')
const client = new Discord.Client()

client.commands = new Discord.Collection();
client.config = require('./config.json');

const commandhandler = require('./handlers/loader');
commandhandler(client);
const distubehandler = require('./handlers/distube'); 
distubehandler(client);

client.login(client.config.token);