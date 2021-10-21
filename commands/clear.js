module.exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]) && message.author.id !== client.config.ownerID) return message.reply('\`[ERROR] - У вас недостаточно прав!\`');
    
    if (!args[0]) return message.reply("Пожалуйста, введите количество сообщений, которые вы хотите удалить!");
    if (isNaN(args[0])) return message.reply("Пожалуйста, введите реальный номер!");

    if (args[0] > 100) return message.reply("Больше 100 сообщений удалить нельзя!");
    if (args[0] < 1) return message.reply("Вы должны удалить хотя бы одно сообщение!");

    await message.channel.bulkDelete(parseInt(args[0]) + 1)
    message.reply('\`[ACCEPT] - Команда успешно выполнена\`').then(m => m.delete({timeout: 8000}));
};