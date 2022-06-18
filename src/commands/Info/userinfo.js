const { SlashCommandBuilder } = require('@discordjs/builders');
const { ContextMenuInteraction, MessageEmbed, Permissions, Message } = require('discord.js')

module.exports = {
permissions: [ Permissions.FLAGS.MODERATE_MEMBERS ],
    data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Provides information about a user.')
    .addUserOption(option =>
        option.setName('target')
        .setDescription('Provides information about a user.')
        .setRequired(true)
        ),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        const Responce = new MessageEmbed()
        .setColor("WHITE")
        .setAuthor(target.displayAvatarURL({dynamic: true, size: 512}))
        .setThumbnail(target.displayAvatarURL({dynamic: true, size: 512}))
        .addField("ID", `${target.id}`, true)
        .addField("Discord User Since", `${target.createdAt}`, true)
        .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());

        interaction.reply({embed: [Responce], ephemeral: true})
    }
}