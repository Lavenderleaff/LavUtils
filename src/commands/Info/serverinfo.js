const {
    MessageEmbed,
    Permissions,
    CommandInteraction
} = require('discord.js');
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Server Information.'),

    async execute(interaction) {
        const {
            guild
        } = interaction;

        const {
            createdTimestamp
        } = guild;

        const Embed = new MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(guild.name, guild.iconURL({
                dynamic: true
            }))
            .setThumbnail(guild.iconURL({
                dyanmic: true
            }))
            .addFields({
                name: "GENERAL",
                value: `
                Name: ${guild.name}
                Created: <t:${parseInt(createdTimestamp / 1000)}:R>
                Owner: <@${guild.ownerId}>


                Description: ${guild.description}



                `
            }, {
                name: "USERS",
                value: `
                - Members: ${guild.members.cache.filter((m) => !m.user.bot).size}
                - Bots: ${guild.members.cache.filter((m) => m.user.bot).size}

                `

            }, {
                name: "CHANNELS",
                value: `
                - Text: ${guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size}
                - Voice: ${guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size}
                - Threads: ${guild.channels.cache.filter((c) => c.type === "GUILD_PUBLIC_THREAD" && "GUILD_PRIVATE_THREAD").size}
                - Categories: ${guild.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}
                - Stages: ${guild.channels.cache.filter((c) => c.type === "GUILD_STAGE_VOICE").size}
                - News: ${guild.channels.cache.filter((c) => c.type === "GUILD_NEWS").size}

                Total: ${guild.channels.cache.size}




                `
            }, {
                name: "EMOJIS & STICKERS",
                value: `
                - Animated: ${guild.emojis.cache.filter((e) => e.animated).size}
                - Static: ${guild.emojis.cache.filter((e) => !e.animated).size}
                - Stickers: ${guild.stickers.cache.size}

                Total: ${guild.stickers.cache.size + guild.emojis.cache.size}
                `
            }, {
                name: "NITRO STATISTICS",
                value: `
                - Tier: ${guild.premiumTier.replace("TIER_", "")}
                - Boosts: ${guild.premiumSubscriptionCount}
                - Boosters: ${guild.members.cache.filter((m) => m.premiumSince).size}
                
                `
            })
            .setFooter("Last Checked:").setTimestamp()

        interaction.reply({
            embeds: [Embed]
        })

    }
}