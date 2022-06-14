const { RichEmbed } = require("discord.js")
const { promptMessage } = require("../functions.js")

const chooseArr = ["🗻", "📰", "✂"]

exports.run = async (client, message, args) => {
    const embed = new RichEmbed()
        .setColor("#6432a8")
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setDescription("React to the message to play the game!")

    const m = await message.channel.send(embed)
    const reacted = await promptMessage(m, message.author, 30, chooseArr)
    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)]
    const result = await getResult(reacted, botChoice)
    await m.clearReactions()

    embed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`)

    m.edit(embed)

    function getResult(me, clientChosen) {
        if ((me === "🗻" && clientChosen === "✂") ||
            (me === "📰" && clientChosen === "🗻") ||
            (me === "✂" && clientChosen === "📰")) {
                return "**You won!**"
            }
        else if (me === clientChosen) return "**Draw!**"
        else return "**You lost!**"
    }
}
