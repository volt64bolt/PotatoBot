//to start bot:
//Locally: navigate to folder and use the command ```node .```


//load discord.js library
require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();



//set the prefix
const prefix_1 = "p!";
const prefix_2 = "P!";

//execute on bot startup
bot.on("ready", () => {
    console.log('The potats are rolling!');
    bot.user.setPresence({ activity: { name: 'With potatoes' }, status: 'online' });
});



//main bulk of code
bot.on("message", message =>{

	if (message.guild.id === '872830080966078565' && !message.author.bot) {
		if (message.channel.id === '872836416856535060') {
			const channel = bot.channels.cache.get('891664764063858739');
			
			channel.send(`**📩 Recieved message from <@${message.author.id}>, video suggestion is:**\n${message.content}`);
			message.delete();
			message.reply('Thanks for submitting your idea! It will be reviewed shortly!\n\n ***Want do submit an idea of your own? Just leave it below!***')
		}
	}

	if(!message.content.startsWith(prefix_1) || message.author.bot) return;
	if(!message.content.startsWith(prefix_2) || message.author.bot) return;

	//bot prefix
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	//help menu
	if(command === "help"){
		message.channel.send(":potato: this is help menu. \n p!help \n p!art \n p!potato \n p!stats");
      }
	 
	 //random comp
	if(command === "art"){
		var methods = ["drawing ", "3D modelling ", "sketching ", "painting ", "pixel-arting ", "making a minecraft build of "];
		var method = Math.floor(Math.random() * methods.length);

		var prefixes = ["a red ", "a blue ", "a green ", "an orange ", "a yellow ", "a purple ", "a cyan ", "a brown ", "a large ", "a small ", "a distant ", "a close ", "an unusual ", "a normal "];
		var prefix2 = Math.floor(Math.random() * prefixes.length);

		var themes = [prefixes[prefix2] + "cat", "cats", prefixes[prefix2] + "potato", "potatos", prefixes[prefix2] + "dog", "dogs", prefixes[prefix2] + "fish", "fish", prefixes[prefix2] + "dragon", "dragons", prefixes[prefix2] + "wild jel", "mars", "stinky cheese", prefixes[prefix2] + "angler fish", "angler fish", prefixes[prefix2] + "whale", "whales"];
		var theme = Math.floor(Math.random() * themes.length);

		var foods = ["pizza", "stinky cheese", "a P O T A T O", "a burger", "a steak", "itself"];
		var food = Math.floor(Math.random() * foods.length);

		var actions = ["dying", "existing", "walking", "sitting", "running", "eating " + foods[food], "juggling"];
		var action = Math.floor(Math.random() * actions.length);

		var locations = ["on a mountain top looking out on an ocean view with a distant boat on the horizon and a blue sun", "underwater", "in space", "on mars", "where ever you want", "in italy", "in greece", "in canada", "in germany", "in a stinky cheese world"];
		var location = Math.floor(Math.random() * locations.length);

		var objects = ["boat", "cat", themes[Math.floor(Math.random() * themes.length)], "house", "cabin", "plane", "planet", "moon", "sun"];
		var object = Math.floor(Math.random() * objects.length);

		message.channel.send("Hmm, try " + methods[method] + themes[theme] + " " + actions[action] + " " + locations[location] + " with " + prefixes[prefix2] + " " + objects[object] + " in the distance" + ".");
	}

	//p!potato
	if(command === "potato"){
	message.react("🥔");
	message.channel.send("Here :potato: ");
	
	//vars for randomisation
	var potatos = ["https://api.time.com/wp-content/uploads/2020/04/Boss-Turns-Into-Potato.jpg", "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients.com/article/2020/05/07/study-potato-protein-a-winner-for-women/11369572-1-eng-GB/Study-Potato-protein-a-winner-for-women_wrbm_large.jpg"];
	var potato = Math.floor(Math.random() * potatos.length);
	
	//set const for embed (image)
	const potatoEmbed = new Discord.MessageEmbed()
	
	//set properties of embed (image)
	.setColor("#b79268")
	.setTitle("Here is your potato!")
	.setImage(potatos[potato])

	
	message.reply(potatoEmbed);
	//end of p!potato	
	}

	//P!stats command
	if (command === "stats"){
	message.channel.send(`serving **${bot.guilds.cache.size}** servers`);
	}
	//p!roastniesbot
	if (command === "roastniesbot") {
	var roasts = ["cheese? whats that? oh, that horrible stinky stuff, ew people actuall eat that?", "cheese is just old milk thats gone of in a controlled manor, just like rotten food but controlled rot", "did someone really look at spoiled milk and go hmm yes, let me eat that"];
	var roast = Math.floor(Math.random() * roasts.length);
	message.channel.send("<@752306939551154317> " + roasts[roast]);
	}
	//p!roastjelbot
	if (command === "roastjelbot") {
		var roasts2 = ["", ""];
		var roast2 = Math.floor(Math.random() * roasts.length);
		message.channel.send("<@752127889440505938> " + roasts2[roast2]);
		}
//end of main code
});



bot.login(process.env.BOT_TOKEN);