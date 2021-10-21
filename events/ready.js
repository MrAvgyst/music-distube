module.exports = (client) => {
    console.log(`[INFORMATION]:  ${client.user.tag} Успешно запустился!`);
    client.user.setActivity(client.config.activity);
};