//dependências v
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setGame("NAME");
});

//lugar dos comandos v
client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  });

client.login(config.token);
