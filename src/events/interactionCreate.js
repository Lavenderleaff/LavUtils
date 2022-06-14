module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {

            if (command.permissions && command.permissions.length > 0) {
                if (!interaction.member.permissions.has(command.permissions)) return await interaction.reply({ content: `You do not have permission to use this command. `});
            }

            await command.execute(interaction, client);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    }
};