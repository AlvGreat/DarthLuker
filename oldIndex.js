const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

    //console.log(message.content);
    
    //hello message
    //if(command === 'hello') {
        //code has now been changed to use "command" as the command instead of looking at the message    
            //to change it to starts with- message.content.startsWith(`${prefix}ping`)
            //to change it so that the response pings the user- message.reply()
        //message.channel.send("mayhaps I'm alive")

        // let member = message.mentions.members.first();
    //}

    //ping message
    if (command === 'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong! :ping_pong:');
    }

    //return users' avatars
    else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    }

    //delete messages
    else if (command === 'prune' || command === 'purge' || command === 'delete') {
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

    //create channel??
    /*else if (command === 'createchannel') {
        let channelName = message.content.slice(15);
        message.guild.createChannel(`${channelName}`).then(channel => {
            channel.setTopic(`Test`)
        }) 
    } */
});

client.login(token);