// it will read in the env files and try to pass all values in env files
// to process.env
require('dotenv').config() 

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.tag} IS HERE !!!`)
})

client.on('message', (msg) => {
    if (msg.content === 'Hi') {
        msg.reply('Hi there!! (￣▽￣)/')
    }
})

client.login(process.env.BOT_TOKEN)