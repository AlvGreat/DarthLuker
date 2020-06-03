module.exports = {
	name: 'scramble',
    description: 'Scrambles the middle letters of words in a sentence',
    aliases: ["sc"],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
        let spl = args;
        message.delete(); 

        for (let i = 0; i < spl.length; i++) {
            if (spl[i].length > 3) {
                spl[i] = scrambleWord(spl[i]);
            }
        }

        ans = spl.join(" ");
        message.channel.send(`> "${ans}" - ${message.author}`);

        function scrambleWord(word) {
        let spl = word.split("");
        let newPos;
        let temp;

        for (let i = 1; i < spl.length - 1; i++) {
            newPos = Math.floor(Math.random() * (spl.length - 2)) + 1;
            temp = spl[i];
            spl[i] = spl[newPos];
            spl[newPos] = temp;
        }

        let ans = spl.join("");
            return ans;
        }
	},
};