module.exports = {
    name: 'queue',

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply('Пожалуйста, присоединитесь к голосовому каналу!');
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(':man_gesturing_no: Вы находитесь в другом голосовом канале!');
        
        const queue = client.distube.getQueue(message);
        if(!queue) return message.reply('В очереди ничего нет').then(m => m.delete({timeout: 5000}));
        await message.channel.send(`**Текущая очередь - ${message.member.voice.channel.name} :bar_chart:**\n${queue.songs.map((song, id) =>`**${id ? id : 'Играет :notes: '}** \`${song.name}\` - \`${song.formattedDuration}\` \n(Установил: ${song.user})`,).slice(0, 10).join('\n\n#') + `\n\n${queue.songs.length > 5 ? `And **${queue.songs.length - 5}** other songs...` : `В плейлисте **${queue.songs.length}** композиция(-ий)...`}`}`).then(m => m.delete({timeout: 8000}));
    }
};