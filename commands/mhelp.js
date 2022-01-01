const Discord = require('discord.js');

module.exports = {
    name: 'mhelp',
    run: (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Музыкальные команды :notes:')
                .addFields
                (
                    { name: "\`1)\` -play :point_down:", value: `\`Установить музыку\``, inline: true},
                    { name: "\`2)\` -skip :point_down:", value: `\`Пропустить музыку\``, inline: true},
                    { name: "\`3)\` -stop :point_down:", value: `\`Остановить музыку\``, inline: true},
                    { name: "\`4)\` -queue :point_down:", value: `\`Посмотреть текущую очередь\``, inline: true}
                )
            .setTimestamp().setFooter('Self Control', `${client.user.displayAvatarURL()}`);
        message.channel.send(embed);
    }
};