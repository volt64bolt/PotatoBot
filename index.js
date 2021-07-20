//to start bot:
//Locally: navigate to folder and use the command ```node .```


//load discord.js library
require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();



//set the prefix
const prefix = "p!";


//execute on bot startup
bot.on("ready", () => {
	//log when bot has started
	console.log("The Potato Bot is up!");
	//set custom status and idle
	bot.user.setPresence({ activity: { name: "p!help" }, status: "idle" })
});

//main bulk of code
bot.on("message", message =>{
    
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	//bot prefix
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	//test command
    if(command === "potato"){
        message.channel.send("POTATO");
    }
	//help menu
	if(command === "help"){
		message.channel.send(":potato: this is help menu. \n p!help \n p!art \n p!potato \n p!stats");
      }
	 
	 //random comp
	if(command === "art"){
		var methods = ["drawing", "3D modelling", "sketching", "painting", "pixel-arting", "making a minecraft build of"];
		var method = Math.floor(Math.random() * methods.length);
		var themes = ["a cat", "cats", "a potato", "potatos", "a dog", "dogs", "a fish", "fish", "a dragon", "dragons", "a wild jel", "mars", "stinky cheese", "an angler fish", "angler fish", "a whale", "whales"];
		var theme = Math.floor(Math.random() * themes.length);
		var actions = ["dying", "existing", "walking"];
		var action = Math.floor(Math.random() * actions.length);
		var locations = ["on a mountain top looking out on an ocean view with a distant boat on the horizon and a blue sun", "underwater", "in space", "on mars", "where ever you want"];
		var location = Math.floor(Math.random() * locations.length);
			message.channel.send("Hmm, try " + methods[method] + " " + themes[theme] + " " + actions[action] + " " + locations[location] + ".");
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
	.setColor("#FFBD33")
	.setTitle("Here is your potato!")
	.setImage(potatos[potato])

	
	message.reply(potatoEmbed);
	//end of p!potato	
	}

	//P!stats command
	if (command === "stats"){
	message.channel.send(`serving **${bot.guilds.cache.size}** servers`);
	}
	//p!killniesbot
	if (command === "roastniesbot") {
	var roasts = ["cheese? whats that? oh, that horrible stinky stuff, ew people actuall eat that?"];
	var roast = Math.floor(Math.random() * roasts.length);
	message.channel.send("<@752306939551154317>" + roasts[roast]);
	}
//end of main code
});



bot.login(process.env.BOT_TOKEN);