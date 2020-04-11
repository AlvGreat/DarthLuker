module.exports = {
	name: 'akalpit',
    description: 'Simply replies to show that the bot is working!',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
        // send back "Pong." to the channel the message was sent in
    
        message.channel.send('if u dont know how to hit the wOaH, ur DuMb -- akalpit'); 
	},
};