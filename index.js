const Discord = require('discord.js');
const robot = new Descord.Client();

robot.login ("NDc4Njk4Mzg0NzM2MTI0OTM5.DlOeaQ.1X6g6ExVaHx0bGOX4kQpFATSzwE");

client.on('message',message => {
    if (message.content === 'привет') {
        message.reply('hi!');
    }
});

