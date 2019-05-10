const Command = require('../command')
const YoutubeStream = require('youtube-audio-stream')

module.exports = class Audd extends Command {

    static match(message){
        return message.content.startsWith('!audd')
    }

    static action(message){
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection) {
                message.member.voiceChannel.join()
                    .then( function (connection) {
                        message.channel.send("Connexion au chat vocal " + message.member.voiceChannel.name)
                        let stream = YoutubeStream('https://www.youtube.com/watch?v=BtyHYIpykN0')
                        connection.playStream(stream).on('end', function () {
                            connection.disconnect()
                        })
                    })
            }
            else{
                message.member.voiceChannel.join()
                    .then(function (connection) {
                        message.channel.send("Connexion au chat vocal " + message.member.voiceChannel.name)
                        let stream = YoutubeStream('https://www.youtube.com/watch?v=BtyHYIpykN0')
                        connection.playStream(stream).on('end', function () {
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