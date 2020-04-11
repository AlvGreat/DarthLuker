module.exports = {
	name: 'quote',
    description: 'Easter Egg',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
        let quotes = [
            '*i have brought peace, freedom, justice, and security to my new empire*',
            '*from my point of view, the jedi are evil*',
            '*luke is an idiot*',
            '*you underestimate my power*',
            '*hello there*', 
            '*have you ever heard the tragedy of darth plagueis the wise...*',
            '*this is the fInAl oRdEr*', 
            '*have you ever heard the tragedy of darth plagueis the wise...*',
            '*the dark side of the force is a path to many abilities some consider to be... unnatural*',
            '*is it possible to learn this power?*',
            '*never listen to nidhi*',
            '*poor aden*',
            '*general kenobi*',
            '*your are a bold one*',
            '*kill him*',
            '*you must realize you are doomed*',
            '*i will deal with this jedi scum myself*'
        ]

        var randomNumber = Math.floor(Math.random() * (quotes.length));
        message.channel.send(quotes[randomNumber]);
	},
};