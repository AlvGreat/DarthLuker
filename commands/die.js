module.exports = {
	name: 'die',
    description: 'Easter Egg',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
		message.channel.send('We all know that Luke is already dead...');
	},
};