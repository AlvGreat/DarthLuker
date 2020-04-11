module.exports = {
	name: 'luke',
    description: 'Easter Egg',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
		message.channel.send('No, **I** am your father.');
	},
};