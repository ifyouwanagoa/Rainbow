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


		 
client.login('NTI3NDQ5OTU0MzIzNjYwODA0.DwT5pA.yx_oX5bAx8JytpjMBZ0123S3cYc');
