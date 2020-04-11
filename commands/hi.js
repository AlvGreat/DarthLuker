module.exports = {
	name: 'hi',
    description: 'Easter Egg',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
		message.channel.send('Hi... but you should know that **I** have the *high* ground');
	},
};