module.exports = {
	name: 'nidhi',
    description: 'Easter Egg',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
        let quotes = [
            '**This is all Nidhi\'s fault. WHY DID YOU DO THIS TO ADEN!?** <@500733754264911880>',
            '*poor aden... you should be ashamed* <@500733754264911880>',
            'if you start to find this annoying, it\'s called punishment <@500733754264911880>',
            'stop traumatizing aden, you bully. <@500733754264911880>'
        ]

        var randomNumber = Math.floor(Math.random() * (quotes.length));
        message.channel.send(quotes[randomNumber]);
	},
};