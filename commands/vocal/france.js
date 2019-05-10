const Command = require('../command')

module.exports = class France extends Command {

    static match(message){
        return message.content.startsWith('!france')
    }

    static action(message){
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection) {
                message.member.voiceChannel.join()
                    .then( function (connection) {
                        message.channel.send("Connexion au chat vocal " + message.member.voiceChannel.name)
                        connection.playFile('./rsc/mp3/lesfr.mp3').on('end', function () {
                            connection.disconnect()
                        })
                    })
            }
            else{
                message.member.voiceChannel.join()
                    .then(function (connection) {
                        message.channel.send("Connexion au chat vocal " + message.member.voiceChannel.name)
                        connection.playFile('./rsc/mp3/lesfr.mp3').on('end', function () {
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