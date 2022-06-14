const { RichEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
    let killed = message.mentions.members.first()

    if (!killed) {
        const emb = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`${message.author} commited su1cid3. 💔 RIP`)

        message.channel.send(emb)
    }
    else {
        const emb = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`${killed} has killed ${message.author}! 💔 RIP`)

        message.channel.send(emb)
    }
}
