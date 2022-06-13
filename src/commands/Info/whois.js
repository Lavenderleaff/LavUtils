const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js')

const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    permissions: [ Permissions.FLAGS.MODERATE_MEMBERS],
    data: new SlashCommandBuilder()
      .setName('whois')
      .setDescription('Get information about a user')
      .addUserOption(option =>
        option.setName('user')
        .setDescription('User to lookup')
        .setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');
        const embed = new MessageEmbed()
        .setTitle(`${user.username}'s Information`)
        .setColor(0x00AE86)
        .setThumbnail(user.displayAvatarURL())
        .addField('Username', `${user.username}#${user.discriminator}`, true)
        .addField('Time of creation', `${user.createdAt}`, true)
        .addField('User ID', `${user.id}`, true)
        .addField('Bot', `${user.bot.toString()}`, false)
        .addField('Avatar URL', `${user.displayAvatarURL()}`, false)
        .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());
        interaction.reply({ embeds: [embed] });
    },
  };
  