const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "#"

// playing
client.on('ready', () => {                           
client.user.setGame(`#rules|#help`,'https://www.twitch.tv/? o v a Codes?');
  });
client.on('message', message => {
  let anything = [
    "hi",
   
  ]
  if(message.content === 'hi'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

	client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('471121072591470604').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 5000);
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '527458463777947658').setName("❤ W");
client.channels.find('id', '527458463777947658').setName("We");
client.channels.find('id', '527458463777947658').setName("Wel");
client.channels.find('id', '527458463777947658').setName("Welc");
client.channels.find('id', '527458463777947658').setName("Welco");
client.channels.find('id', '527458463777947658').setName("Welcom");
client.channels.find('id', '527458463777947658').setName("Welcome");
client.channels.find('id', '527458463777947658').setName("Welcome❤ ");
  }, 3000);
	
});

		 
client.login(process.env.BOT_TOKEN);
