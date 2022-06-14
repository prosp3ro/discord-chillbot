const { RichEmbed } = require("discord.js")
const randomPuppy = require("random-puppy")

exports.run = async (client, message, args) => {
    const subReddits = ["puppies"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)
    const embed = new RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setURL(`https://reddit.com/r/${random}`)

    message.channel.send(embed)
}
