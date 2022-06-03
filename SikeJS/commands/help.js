const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Help Menu')
    .setDescription('If you want more information on a command, do .help <command name>')
    .setThumbnail('https://cdn.discordapp.com/avatars/918821360707461130/e3e1ad23f441a0bbc913c309c74b05d1.webp?size=80')
    .addFields(
      { name: 'Moderation', value: '``ban``, ``mute``, ``kick``, ``unban``, ``purge``, ``ban``, ``slowmode``, ``warn``' },
      { name: 'Economy', value: '``work``, ``withdraw``, ``balance``, ``deposite``, ``give``' },
      { name: 'Settings', value: '``invite``, ``ping``, ``suggest``' },
    )
    .setTimestamp()

  message.channel.send(exampleEmbed);
}

module.exports.config = {
  name: "help",
  description: "help command",
  usage: ".help",
  accessableby: "Members",
  aliases: []
}