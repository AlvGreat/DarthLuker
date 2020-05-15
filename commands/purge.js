module.exports = {
	name: 'purge',
    description: 'Deletes a specified number of messages from [1,99]',
    aliases: ['delete', 'prune'],
    guildOnly: true,
    cooldown: 1,
	execute(message, args) {
		if (member.roles.cache.some(role => role.name === 'Mod')) {
			const amount = parseInt(args[0]);

			if (isNaN(amount)) {
			    return message.reply('that doesn\'t seem to be a valid number.');
			} 
			else if (amount < 1 || amount > 99) {
			    return message.reply('Can only delete a number between 1 and 99.');
			} 
			else {
			    message.channel.bulkDelete(amount + 1, true).catch(err => {
				console.error(err);
				message.channel.send('Error: cannot delete messages.');
			    });
			}
		}
	},
};
