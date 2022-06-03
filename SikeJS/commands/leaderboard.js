const mongoCurrency = require('discord-mongo-currency-fork');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = `${this.username}`

    const leaderboard = await mongoCurrency.generateLeaderboard(message.guild.id, 10);
    
    if (leaderboard.length < 1) return message.channel.send("Nobody's on the leaderboard.");
    const mappedLeaderboard = leaderboard.map(i => `${bot.users.cache.get(i.userId.tag) ? bot.users.cache.get(i.userId.tag) : `<@${i.userId}>`} - ${i.coinsInWallet}`);

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Leaderboard')
    .setDescription(`${mappedLeaderboard.join('\n')}`);
    message.channel.send(embed);
}

module.exports.config = {
  name: "leaderbard",
  aliases: ['lb']
}