module.exports = {
    name: 'stop',

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply('Пожалуйста, присоединитесь к голосовому каналу!');
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(':man_gesturing_no: Вы находитесь в другом голосовом канале!');
        
        const queue = client.distube.getQueue(message);
        if(!queue) return;
        await client.distube.stop(message);
        await message.channel.send('**:mailbox_with_no_mail: Успешно отключен**').then(m => m.delete({timeout: 5000}));
    }
};