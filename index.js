require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    await client.voice.joinChannel(channel, {
        selfMute: true,
        selfDeaf: true,
        selfVideo: false,
    });
});

client.login(process.env.TOKEN).catch((err) => {
    console.error('Invalid token provided. Please check your .env file.');
    console.error(err);
});
