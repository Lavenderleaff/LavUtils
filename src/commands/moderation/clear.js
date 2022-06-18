const {
    SlashCommandAssertions,
    SlashCommandBooleanOption,
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    CommandInteraction,
    MessageEmbed,
    Permissions
} = require('discord.js');

module.exports = {
    permissions: [Permissions.FLAGS.MANAGE_MESSAGES],
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Deletes a specified number of messages from a channel or target.')
        .addIntegerOption(option =>
            option.setName('amount')
            .setDescription('Select the amount of messages to delete from a channel or a target.')
            .setRequired(true)
        ),
    async execute(interaction) {

        const amount = interaction.options.getInteger('amount');

        const messages = await interaction.channel.messages.fetch();

        const Responce = new MessageEmbed()
            .setColor("YELLOW");



        await interaction.channel.bulkDelete(amount, true).then(messages => {
            Responce.setDescription(`🧹 Cleared ${messages.size} from this channel.`);
            interaction.reply({
                embeds: [Responce]
            });
        })
    }
}