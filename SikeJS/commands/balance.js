const mongoCurrency = require('discord-mongo-currency-fork');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.member;
 
  const user = await mongoCurrency.findUser(member.id, message.guild.id);

  const embed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle(`${member.user.username}'s Balance`)
  .setDescription(`Wallet: ${user.coinsInWallet} :coin:\nBank: ${user.coinsInBank} :coin:`);
  
  message.channel.send(embed);
}

module.exports.config = {
  name: "balance",
  aliases: ['bal']
}