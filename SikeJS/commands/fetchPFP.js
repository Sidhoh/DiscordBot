const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    const user = message.mentions.users.first() || message.author;
    const avatarURL = "https://cdn.discordapp.com/avatars/"+user.id+"/"+user.avatar+".jpeg";
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor(user.username)
    .setImage(avatarURL);
    message.channel.send(embed);
}

module.exports.config = {
  name: "pfp",
  aliases: ['pfp']
}