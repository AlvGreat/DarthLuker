module.exports = {
	name: 'potato',
    description: 'Simply replies to show that the bot is working!',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
        // send back "Pong." to the channel the message was sent in
    
        message.channel.send('potatoes iz god -- akalpit'); 
	},
};