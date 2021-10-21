const fs = require('fs');

module.exports = (client) => {
    fs.readdir("./commands/", (err, files) => {
        if(err) return console.error(err);
        files.forEach(file => {
            if(!file.endsWith(".js")) return;
            let props = require(`../commands/${file}`);
            let commandName = file.split(".")[0];
            console.log(`${commandName} - [Команда успешно загружена!]`);
            client.commands.set(commandName, props);
        });
    });
    fs.readdir("./events/", (err, files) => {
        if(err) return console.error(err);
        files.forEach(file => {
            const event = require(`../events/${file}`);
            let eventName = file.split(".")[0];
            console.log(`${eventName} - [Событие успешно загружено!]`);
            client.on(eventName, event.bind(null, client));
        });
    });
};