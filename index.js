//to start bot:
//Locally: navigate to folder and use the command ```node .```


//load discord.js library
const Discord = require('discord.js');
const bot = new Discord.Client();

//connect bot via token
const token = 'ODY3MDIzMjg4ODQ4NDgyMzM1.YPbEXA.slwb8dkucpR315k-4Ld89Rp8_nc';

//set the prefix
const prefix = 'p!';


//execute on bot startup
bot.on('ready', () => {
	//log when bot has started
	console.log('The Potato Bot is up!');
	//set custom status and idle
	bot.user.setPresence({ activity: { name: 'p!help' }, status: 'idle' })
});

//main bulk of code
bot.on('message', message =>{
    
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	//bot prefix
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	//test command
    if(command === 'potato'){
        message.channel.send('POTATO');
    }
	//help menu
	if(command === 'help'){
		message.channel.send(":cheese:  You've opened the magic help menu :astonished: ! Here are the commands: \n ``n!meme`` - Gets you a random cheese meme, :cheese:. \n ``n!cheese``- Gets you a random cheese pic, :cheese:. \n ``n!stonks`` Stonks go brr :cheese: <:Stonks_rising:705717804615204904>\n ``n!9ball`` - Get answers to ***all** your questions*, :cheese:🔮.\n ``n!ping`` pongs :cheese:\n ``n!server=down`` Report to staff that the server is offline :cheese: <:Stonks_falling:705717793823129660>\n ``n!flushed`` Flushes your message? 😳😳:cheese:\n ``n!game`` Play le game for une reward UwU :cheese\n ``n!owo`` OwOs your message? :cheese: :eye::lips::eye: :cheese:\n ``n!uwu`` Uwus your message? :cheese: 😌 :cheese:\n ``n!save`` Saves the server and your cheese UwU 💾 :cheese: 💾\n ``n!rainbow`` Gæs your message :cheese:  🏳️‍🌈🌈  (jk ❤️ no homo tho)  🏳️‍🌈🌈\n ``n!pinchme`` Pinches your nipples :cheese: 🤏🤌🤌 :cheese:\n ``n!whoami`` The cheese shall remind you as to who you are :cheese:🤔\n ``n!kill <@player>`` Murder everyone. HAHAHA <:IlikeyacutG:805732691638222859> :skull_crossbones: :cheese:\n ``n!bake <@player>`` I like em hot, I like 'em roasted :] :cheese: :fire:");
      }
	 
	 //random comp
	if(command === 'comp'){
		var methods = ["drawing, 3D modelling, sketching, painting, pixel-arting, making minecraft thingy of,"];
		var method = Math.floor(Math.random() * methods.length);
		var themes = ["a cat"];
		var theme = Math.floor(Math.random() * themes.length);
		var actions = ["dying, "];
		var action = Math.floor(Math.random() * actions.length);
			message.channel.send("Hmm, try " + methods[method] + themes[theme] + actions[action], ".");
	}

	//p!potato
	if(command === 'potato'){
	message.react('🥔');
	message.channel.send('There ya go :D :potato: ');
	
	//vars for randomisation
	var potatos = [""];
	var potato = Math.floor(Math.random() * potatos.length);
	
	//set const for embed (image)
	const potatoEmbed = new Discord.MessageEmbed()
	
	//set properties of embed (image)
	.setColor('#FFBD33')
	.setTitle('Here is your cheese!')
	.setImage(potatos[potato])

	
	message.reply(potatoEmbed);
	//end of p!potato	
	}

	//P!stats command
	if (command === 'stats')
	message.channel.send(`serving **${bot.guilds.cache.size}** servers`)

//end of main code
});



bot.login(process.env.TOKEN);
//bot.login(token);