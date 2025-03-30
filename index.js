require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const admins = process.env.ADMIN.split(',');

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
});

client.on("messageCreate", async message => {
    if (message.content == 'kv' && admins.includes(message.author.id)) {
        const channel = message.author.voice.channel;
        if (!channel) {
            return message.reply('You are not in a voice channel.');
        }
        await client.voice.joinChannel(channel, {
            selfMute: false,
            selfDeaf: false,
            selfVideo: false,
        });
    }
});

client.login(process.env.TOKEN).catch((err) => {
    console.error('Invalid token provided. Please check your .env file.');
    console.error(err);
});
