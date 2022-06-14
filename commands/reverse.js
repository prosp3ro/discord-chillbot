exports.run = async (client, message, args) => {
    if (args.length < 1) {
        throw 'You must input text to be reversed!'
    }
    message.reply(args.join(' ').split('').reverse().join(''))
}
