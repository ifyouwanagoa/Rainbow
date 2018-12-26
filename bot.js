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

client.login(process.env.BOT_TOKEN);
