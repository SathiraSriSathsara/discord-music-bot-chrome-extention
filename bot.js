const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.content === '!play') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' }));
      message.channel.send('Playing music');
    } else {
      message.channel.send('You need to join a voice channel first!');
    }
  } else if (message.content === '!stop') {
    if (message.member.voice.channel) {
      message.member.voice.channel.leave();
      message.channel.send('Stopping music');
    } else {
      message.channel.send('You need to join a voice channel first!');
    }
  }
});

client.login(config.token);