exports.run = async (client, message, args) => {
    if(!args[0]) args[0] = 6
    let result = (Math.floor(Math.random() * Math.floor(args[0])))
    message.channel.send(`Number is ${result + 1}!`)
}
