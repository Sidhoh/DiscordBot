const mongoCurrency = require('discord-mongo-currency-fork');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = `${this.username}`

    await mongoCurrency.deposit(message.member.id, message.guild.id, args)

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Transaction complete')
    .setDescription(`You deposited ${args} :coin: into your bank account.`);
    message.channel.send(embed);
}

module.exports.config = {
  name: "deposite",
  aliases: ['dep']
}