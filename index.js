const Discord = require("discord.js")
const bot = new Discord.Client()
const Salute = require('./commands/vocal/salute')
const Leave = require('./commands/vocal/leave')
const Help = require('./commands/text/help')
const Kiki = require('./commands/vocal/kiki')
const France = require('./commands/vocal/france')
const Audd = require('./commands/vocal/audd')
const Roulette = require('./commands/text/roulette')
const Kaaris = require('./commands/vocal/pute')

bot.on('ready', function () {
    bot.user.setActivity('préparer ses larmes').catch(console.error)
    let textChannel = bot.channels.filter(function (channel) {
        return channel.type === 'text'
    }).first()
    textChannel.send("Bonjour ! Je suis Michel Drucker. Je suis ici pour améliorer votre expérience de communication. " +
        "Pour savoir ce que je fais, saisissez la commande suivante: !michel")

})

bot.on('message', function (message) {
    let commandeUsed = Salute.parse(message) || Leave.parse(message) || Help.parse(message)
        || Kiki.parse(message) || France.parse(message) || Audd.parse(message) || Roulette.parse(message)
        || Kaaris.parse(message)
})

bot.login('NTcyMzg3MDk1NzU5NTUyNTMy.XMmcBQ.bJ4E0LLeTPp3wlTHL-QoaRxjzIw')
