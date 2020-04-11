module.exports = {
	name: 'bye',
    description: 'Easter Egg',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
		message.channel.send('Yes bye, now go do something productive, why don\'t you?');
	},
};