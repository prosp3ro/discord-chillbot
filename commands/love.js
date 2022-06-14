const { RichEmbed } = require("discord.js");
const { getMember } = require("../functions.js");

exports.run = async (client, message, args) => {
    let person = getMember(message, args[0])

    if (!person || message.author.id === person.id) {
        person = message.guild.members
            .filter(m => m.id !== message.author.id)
            .random()
    }

    const love = Math.random() * 100
    const loveIndex = Math.floor(love / 10)
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex)

    const embed = new RichEmbed()
        .setColor("#d43d5e")
        .setTitle(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`)
        .setDescription(`:heart_decoration: ${Math.floor(love)}%\n\n${loveLevel}`)
        .setThumbnail(person.user.displayAvatarURL)

    message.channel.send(embed)
}
