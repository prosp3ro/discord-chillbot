const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let ratus = message.mentions.members.first()
    if(!ratus) return message.channel.send("Tag someone to rate them!")

    let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    let result = Math.floor((Math.random() * rates.length))

    if (ratus.user.id === message.author.id) {
        return message.channel.send(`<@${message.author.id}>, I'm rating you ${result}/10`);
    }
    else return message.channel.send(`I rate <@${ratus.user.id}> ${result}/10`);
}
