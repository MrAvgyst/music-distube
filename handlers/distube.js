const Discord = require('discord.js');
const DisTube = require('distube');

module.exports = (client) => {
    client.distube = new DisTube(client, { 
        emitNewSongOnly: true, 
        searchSongs: true, 
        leaveOnEmpty: true,
        leaveOnFinish: true,
        youtubeDL: true,
        updateYoutubeDL: true,
        // youtubeCookie: "", --> Prevents the error code 429
    })
        client.distube
            .on('playSong', (message, queue, song) => message.channel.send(`:notes: **Играет** \`${song.name}\` - \`${song.formattedDuration}\`\nУстановил: ${song.user}`,).then(m => m.delete({timeout: 8000})))
            .on('addSong', (message, queue, song) => message.channel.send(`:notes: **Добавлен** \`${song.name}\` - \`${song.formattedDuration}\` в очередь от: ${song.user}`,).then(m => m.delete({timeout: 8000})))
	        .on('searchResult', (message, result) => { 
                let i = 0
                let embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Вот результаты вашего поиска')
                    .setDescription(`\n${result.map(song =>`**${++i}**. ${song.name} - \`${song.formattedDuration}\``,).join('\n',)}\n
                    > **Выберите один из вариантов выше или подождите 60 секунд, чтобы отменить**`)
                    .setTimestamp()
                    .setFooter('Self Music | Picture');
                message.channel.send(embed).then(m => m.delete({timeout: 60000}))
            })
	        .on('searchCancel', message => message.channel.send(`:x: - Поиск был отменен, Вы указали неверный номер или истекло время ожидания ( 60 секунд )`).then(m => m.delete({timeout: 8000})))
	        .on('finish', (message, queue) => message.channel.send(':x: - В очереди больше нет треков').then(m => m.delete({timeout: 8000})))
	        .on('empty', (message) => message.channel.send(':x: Музыка остановилась, так как в голосовом канале больше нет участников!').then(m => m.delete({timeout: 8000})))
	        .on("initQueue", queue => {
                queue.autoplay = false;
                queue.volume = 100;
	        })
	        .on('error', (message, err) => {
            message.channel.send(':x: - Что-то пошло не так ...');
            console.log(`Ошибка : ${err}`)
	    })
};