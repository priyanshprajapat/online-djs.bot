const express = require("express");
const app = express();


const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === "ping") {
    message.channel.send("pong")
}
})
client.on("ready", () => {
  
client.user.setPresence({type: "PLAYING" , name: "Yo itz me Priyansh"})
})
app.listen(3000, () => {
  console.log("Project is running!")
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})

client.login(process.env.TOKEN);
