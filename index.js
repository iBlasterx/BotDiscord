const { Client, GatewayIntentBits, Partials, GuildMember, ActivityType} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
    ],
    partials: [
        Partials.Message,
        Partials.User,
        Partials.Channel,
        Partials.GuildMember,
    ]
});

require('dotenv').config();
client.on('ready', () => {
    console.log(`User: ${client.user.tag}`)
    client.user.setActivity('Im testing a Bot', {
        type:ActivityType.Watching
    })
});
client.login(process.env.TOKEN);