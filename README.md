# LavUtils
This is a Discord Utility Bot (that is open-source) for all your moderation needs.

This started as a little project to work on with a friend, and we decided to make it into a open source project. If you have something you'd like to suggest or contribute, feel free to make a PR along with a detailed description. Want to set it up yourself? See details below.

# Setting it up #
NodeJS v16 or higher is required. To install the files, simply run the following command. (NOTE: This utilizes Git)

**For Windows**
```
git clone https://github.com/Lavenderleaff/LavUtils.git
```

In order to install the needed repositories, you are able to run the following.
```
npm install
```

This utilizes the `package.json` file, which contains all the needed repos.

# Chaning .env to your information #

Before you can run the bot, you need to update `.env` with your information.
It contains 3 variables. `CLIENTID`, `GUILDID`, and `TOKEN`

The token is your Discord Bot's unique token.
The Guild ID is the ID of the guild that the slash commands will be registered to.
And finally, the Client ID is the ID of your Bot.




To run the bot (assuming you've followed the instructions above) do the following.
```
node .
```
