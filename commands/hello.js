module.exports = {
	name: 'hi',
    description: 'Easter Egg',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
		message.channel.send('Hello, but isn\'t it about time that you stop procrastinating?');
	},
};