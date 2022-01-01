module.exports = {
    name: 'skip',
    aliases: ['s'],

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply('Пожалуйста, присоединитесь к голосовому каналу!');
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(':man_gesturing_no: Вы находитесь в другом голосовом канале!');
        
        const queue = client.distube.getQueue(message);
            if(!queue) return;
        await client.distube.skip(message);
        await message.channel.send(':fast_forward: Пропущено :thumbsup:').then(m => m.delete({timeout: 5000}));
    }
};