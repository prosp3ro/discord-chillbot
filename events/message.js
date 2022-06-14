const { RichEmbed } = require('discord.js')
const config = require('../config/config.json')
const prefix = config.prefix
const { stripIndents } = require('common-tags')

module.exports = async (client, message) => {
    if (message.author.bot) return
    if (!message.guild) return
    if (!message.content.startsWith(prefix)) return
    if (!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (message.content === `${prefix}help fun`) {
        const embed = new RichEmbed()
            .setTitle(':yo_yo: Fun & Games')
            .setColor("RANDOM")
            .setDescription(stripIndents` List of available commands: \n
            \`.8ball\` - ask bot for something.\n
            \`.rps\` - starts a game of rock, paper and scissors with a bot. \n
            \`.love\` - love <@user> \n
            \`.diceroll\` - random number. \n
            \`.uptime fun\` - for how long bot is online. \n
            Other commands:
            \`.cat\`, \`.dog\`, \`.doge\`,\`.lenny\`, \`.mock\`, \`.morse\`, \`.meme\`, \`.kill\`, \`.pepe\``)
            .setFooter(message.guild, message.guild.iconURL)
            .setTimestamp()
        message.channel.send(embed)
    }

    const cmd = client.commands.get(command)
    if (!cmd) return
    cmd.run(client, message, args)
}
