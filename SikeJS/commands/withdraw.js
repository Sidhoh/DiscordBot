const mongoCurrency = require('discord-mongo-currency-fork');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = `${this.username}`

    await mongoCurrency.withdraw(message.member.id, message.guild.id, args)

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Transaction complete')
    .setDescription(`You withdrawed ${args} :coin: into your wallet.`);
    message.channel.send(embed);
}

module.exports.config = {
  name: "withdraw",
  aliases: ['with']
}