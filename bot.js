// it will read in the env files and try to pass all values in env files
// to process.env
require('dotenv').config() 

const Discord = require('discord.js')
const client = new Discord.Client()

const BOT_PREFIX = "!"
const EMOTIONS = ['｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡', '(｡◕∀◕｡)','(*ﾟ∀ﾟ*)',
                '(*´∀`)~♥', 'ヽ(✿ﾟ▽ﾟ)ノ', '( ^ω^)',
                '(▰˘◡˘▰)', '✧◝(⁰▿⁰)◜✧', 'ヽ( ° ▽°)ノ',
                '✧*｡٩(ˊᗜˋ*)و✧*｡', 'ヾ(´︶`*)ﾉ♬', 'ヾ (o ° ω ° O ) ノ゙ ',
                '(๑•̀ㅂ•́)و✧', '٩(｡・ω・｡)و', '(๑¯∀¯๑)', 
                '(〃ﾟдﾟ〃)', '(☉д⊙)', '(゜ロ゜)', 
                'ก็ʕ•͡ᴥ•ʔ ก้', '( ิ◕㉨◕ ิ)']
const HIGHFIVES = ['⎝(◕u◕)⎠⎝(◕u◕)⎠⎝(◕u◕)⎠⎝(◕u◕)⎠⎝(◕u◕)⎠⎝(◕u◕)⎠⎝(◕u◕)⎠⎝(◕u◕)⎠⎝(◕u◕)⎠',
                    '⎝( OωO)⎠⎝( OωO)⎠⎝( OωO)⎠⎝( OωO)⎠⎝( OωO)⎠⎝( OωO)⎠⎝( OωO)⎠⎝( OωO)⎠',
                    '⎝༼ ◕Д ◕ ༽⎠⎝༼ ◕Д ◕ ༽⎠⎝༼ ◕Д ◕ ༽⎠⎝༼ ◕Д ◕ ༽⎠⎝༼ ◕Д ◕ ༽⎠⎝༼ ◕Д ◕ ༽⎠⎝༼ ◕Д ◕ ༽⎠',
                    '⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠⎝༼ຈل͜ຈ༽⎠']

client.on('ready', (msg) => {
    console.log(`${client.user.tag} IS HERE !!!`)
})

client.on('message', (msg) => {
    if (msg.content.toLowerCase() === 'hi' || msg.content.toLowerCase() === 'hello' ) {
        msg.reply('Hi there!! (￣▽￣)/')
    }
    else if (msg.content.substr(0,2) === 'ha' || msg.content.substr(0,2) === 'HA') {
        msg.channel.send('HAHAHAHAHAHAHAHAHA')
    }
    else if (msg.content[0] === BOT_PREFIX) {
        draw20faces = Math.floor(Math.random() * 20)
        msg.channel.send(EMOTIONS[draw20faces])
    }
    else if (msg.content.toLowerCase() === 'high five' || msg.content.toLowerCase() === 'highfive' ) {
        draw4highfives = Math.floor(Math.random() * 4)
        msg.channel.send(HIGHFIVES[draw4highfives])
    }
    else if (msg.content.toLowerCase() === 'you are cute' || msg.content.toLowerCase() === 'you are so cute'){
        msg.reply('I ❤️ you!!!')
    }
})

client.login(process.env.BOT_TOKEN)