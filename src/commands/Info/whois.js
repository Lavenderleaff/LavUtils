const { MessageEmbed } = require('discord.js');

const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('whois')
      .setDescription('Get information about a user')
      .addUserOption(option =>
        option.setName('user')
        .setDescription('User to lookup')
        .setRequired(true)),
    async execute(interaction, client) {
        if(!interaction.channel.permissionsFor(interaction.user).has('ADMINISTRATOR')){
            interaction.reply({ content: `You don't have the permission to use this command!`, ephemeral: true });
            return;
        }

        const user = interaction.options.getUser('user');
        
        const embed = new MessageEmbed()
        .setTitle(`${user.username}'s userinfo`)
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
  