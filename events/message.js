module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    const prefix = client.config.prefix;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    
    try {
        if(command) command.run(client, message, args);
    } catch(e) {
        console.log(e);
    }
};