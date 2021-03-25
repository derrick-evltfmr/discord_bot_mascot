// it will read in the env files and try to pass all values in env files
// to process.env
require('dotenv').config() 
const fetch = require('node-fetch')

const Discord = require('discord.js')
const client = new Discord.Client(
    {
        partials: ["MESSAGE"]
    }
)

let Switch = false

const BOT_PREFIX = "!"

// server url
let url = 'http://66.76.242.198:9888/?properties=%7B%22annotators%22:%22tokenize,ssplit,pos%22,%22outputFormat%22:%22json%22%7D'

client.on('ready', (msg) => {
    console.log(`${client.user.tag} IS HERE !!!`)
})

client.on('message', (msg) => {
    if (msg.content === "BOT-ON"){
        msg.channel.send('########################')
        msg.channel.send('### TeamC Mascot IS HERE !!! ###')
        msg.channel.send('########################')
        Switch = true
    }
    if (msg.content === "BOT-OFF"){
        msg.channel.send('#########################')
        msg.channel.send('### TeamC Mascot IS GONE !!! ###')
        msg.channel.send('#########################')
        Switch = false
    }


    if (Switch === true){
        let input = msg.content
        let author = msg.author.avatar
        // let server_response

        // fetch(url, {
        //     method: 'POST',
        //     headers: { 
        //       'Content-Type': 'text/html',
        //       'Accept': 'text/html'
        //     },
        //     body: input
        
        //     })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         server_response = data.sentences[0].tokens[0]
        //     });

        // chatbot_output = JSON.stringify(server_response)

        // msg.channel.send(chatbot_output)
        msg.channel.send(author)

    }
})

// msg.react('❤️')

// client.on('messageDelete', (msg) => {
//     msg.channel.send("HEY YOU !!! STOP DELETING THE MESSAGES !!!!!!!!!!")
// })

client.login(process.env.BOT_TOKEN)