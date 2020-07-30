const { Command } = require('klasa');
const Discord = require("discord.js")
module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ["commands"],
            usage: "[User:user]"
        });
    }

    async run(message, [user]) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Cyclone Bot List ™")
          if(message.member.roles.cache.get("725406861515292673")){
              embed.addField("Commands", "c!vote <@bot> ``Vote for a bot``\nc!botinfo <@bot> ``Get bot info``\nc!count ``Tells you bots counts``\nc!marknsfw <@bot> ``Make bot nsfw``\nc!notnsfw <@user> ``unmark bot nsfw``\nc!queue ``Shows bot queue``\nc!remove <@bot> ``Remove bot from list``\nc!verify <@bot> ``Approve Bots!``\nc!widget <@bot>``Shows Bot widget``\nc!prune <amount> ``Delete amount of messages``\nc!ping ``Gives bot respond ms``")
          }else{
        embed.addField("Commands", "c!vote <@bot> ``Vote for a bot``\nc!ping ``Shows bot latency``\nc!widget <@bot> ``Shows bot widget(Embed)``\nc!botinfo <@bot> ``Shows bot info``\nc!count")
          }
        embed.setFooter("Cyclone Bot List ™ || Help Command")
        message.channel.send(embed)
        }
};
