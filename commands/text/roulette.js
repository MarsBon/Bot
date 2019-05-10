const Command = require('../command')

module.exports = class Roulette extends Command {

    static match(message){
        return message.content.startsWith('!roulette')
    }

    static getRandomRoulette(max){
        return Math.floor(Math.random() * Math.floor(max))
    }
    static switchRoulette(args, message){

        let num
        let jeux4 = ['GMod', 'Sky Noon', "CS:GO", "Golf With Your Friends", "Fortnite", "Business Tour", "Left 4 Dead", "Fishing Planet"]
        let jeux5 = ['GMod', 'Sky Noon', "CS:GO", "Golf With Your Friends", "Fishing Planet"]
        let jeux2 = ["Rocket League", "Left 4 Dead", "Golf With Youre Friends", "Fishing Planet"]
        switch (args[1]) {
            case '4':
                num = Roulette.getRandomRoulette(jeux4.length)
                message.channel.send("Le jeu choisi est " + jeux4[num] + ".")
                break
            case '5':
                num = Roulette.getRandomRoulette(jeux5.length)
                message.channel.send("Le jeu choisi est " + jeux5[num] + ".")
                break
            case '2':
                num = this.getRandomRoulette(jeux2.length)
                message.channel.send('Le jeu choisi est ' + jeux2[num] + ".")
                break
            case '3':
                num = this.getRandomRoulette(jeux2.length)

                message.channel.send('Le jeu choisi est ' + jeux2[num] + ".")
                break
            case '0':
                message.channel.send('ALLEZ ON VA JOUER A CS:GO. @LECM30 TU FAIS UN EFFORT STP ! C\'EST MICHEL QUI LE DIT !')
                break
            case '':
                message.channel.send("Merci d'indiquer le nombre de joueurs entre 2 et 5. Si t'es tout seul, tu ne devrais pas hésiter poto." +
                    " Et si vous êtes plus que 5, go Garry's Mod, rien ne peut contenir autant d'amitié !")
                break
            default:
                return
        }
    }

    static action(message){

        message.channel.send('Vous ne savez pas à quoi jouer ? Très bien, que la roulette commence !')

        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection) {
                message.member.voiceChannel.join()
                    .then( function (connection) {
                        message.channel.send("Connexion au chat vocal " + message.member.voiceChannel.name)
                        connection.playFile('./rsc/mp3/roulette.mp3').on('end', function () {
                            Roulette.switchRoulette(message.content.split(' '), message)
                            connection.disconnect()
                        })
                    })
            }
            else{
                message.member.voiceChannel.join()
                    .then(function (connection) {
                        message.channel.send("Connexion au chat vocal " + message.member.voiceChannel.name)
                        connection.playFile('./rsc/mp3/pute.mp3').on('end', function () {
                            Roulette.switchRoulette(message.content.split(' '), message)
                            connection.disconnect()
                        })
                    })
            }
        }
        else
        {
            message.channel.send("T'es pas en vocal bolosse !")
        }

    }

}