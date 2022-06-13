const { MessageEmbed,Permissions } = require('discord.js');

const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    permissions: [ Permissions.FLAGS.MODERATE_MEMBERS],
    data: new SlashCommandBuilder()
      .setName('cooldown')
      .setDescription('Set a custom cooldown for a channel')
      .addIntegerOption(option =>
        option.setName('seconds')
        .setDescription('Cooldown in seconds')
        .setRequired(true)),
    async execute(interaction, client) {
        const channel = interaction.channel;
        const seconds = interaction.options.getInteger('seconds');
        if(seconds<0 || seconds>21600) { interaction.reply('Cooldown must be between 1 and 21600 seconds'); return; }
        channel.setRateLimitPerUser(seconds);
        const embed = new MessageEmbed()
        .setTitle('Cooldown')
        .setColor(0x00AE86)
        .setDescription(`The cooldown for this channel has been set to ${seconds} seconds.`)
        .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());
        interaction.reply({ embeds: [embed] });


    },
  };
  