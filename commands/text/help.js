const Command = require('../command')

module.exports = class Michel extends Command {

    static match(message){
        return message.content.startsWith('!michel')
    }

    static action(message){
        message.channel.send("Chaque commande devra commencer par un '!' sinon, je ne comprends pas ce que tu racontes.")
        message.channel.send('smp -> Je rejoins le salon vocal et vous dis au revoir d\'une manière dramatique !\n' +
            'bjr -> Je rejoins le salon vocal pour vous saluer avec joie.\n' +
            'kiki -> Je rejoins le salon vocal pour dire \'kiki\' parce que le kiki c\'est marrant. :)\n' +
            'france -> Les français se la pètent un peu.\n' +
            'audd -> Je la passe, la détaille, la pé-cou, la visser, des regrets devant ton bébé.\n' +
            'roulette nb -> Je vous choisis un jeu aléatoire dans une liste complètement arbitraire.' +
            'Si vous n\'avers pas compris, n\'hésitez pas à saisir "!michel".')
    }

}