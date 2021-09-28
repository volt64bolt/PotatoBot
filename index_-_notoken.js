//load libs
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = 'XXXXXXXXXXXXXXXXXXXXXXXX';

//execute on bot startup
bot.on('ready', () => {
    console.log('The potats are rolling!');
    bot.user.setPresence({ activity: { name: 'With potatoes' }, status: 'online' });
});

bot.on('message', message => {
	if (message.guild.id === '872830080966078565' && !message.author.bot) {
		if (message.channel.id === '872836416856535060') {
			const channel = bot.channels.cache.get('891664764063858739');
			
			channel.send(`**📩 Recieved message from <@${message.author.id}>, DM content is:**\n${message.content}`);
			message.delete();
			message.reply('Thanks for submitting your idea! It will be reviewed shortly!\n\n ***Want do submit an idea of your own? Just leave it below!***')
		}
	}
});

bot.login(TOKEN);