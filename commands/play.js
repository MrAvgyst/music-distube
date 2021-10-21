module.exports = {
    name: 'play',
    aliases: ['p'], 

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply('Пожалуйста, присоединитесь к голосовому каналу!');
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(':man_gesturing_no: Вы находитесь в другом голосовом канале!');

        const query = args.join(' ');
        if (!query) return message.reply('Укажите корректное название');
            message.channel.send(`:musical_note: **В поиске** :mag_right: \`${query}\``).then(m => m.delete({timeout: 5000}));
        await client.distube.play(message, query);
    }
};