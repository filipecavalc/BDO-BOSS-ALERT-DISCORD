const fs = require("fs");
var config = JSON.parse(fs.readFileSync('config.json')); //load user prefrences
const token = config.bot_id;

// timezone config
const clock = require('world-clock')();
console.log(clock.zonedDateTime('America/Argentina/Buenos_Aires', Date.now()).toString());

var BOSS = JSON.parse(fs.readFileSync('bossTimes.json'));
/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
const channel = client.channels.get(config.text_channel_id);

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
        console.log('ping lido');
        // Send "pong" to the same channel
        //message.channel.send('pong');
        var embed  = new Discord.RichEmbed()
		.setAuthor("ALERTA DE BOSS",BOSS.Quarta[1].img)
		.setColor(0x00AE86)
        .setDescription("TESTE DE DESCRIÇÃO")
        .setFooter("TESTE FOOTER",BOSS.Quarta[1].img)
        .setImage(BOSS.Quarta[1].img)
        .setThumbnail(BOSS.Quarta[1].img)
		.setTimestamp()
		.setTitle(BOSS.Quarta[1].alert)
        .setURL(BOSS.Quarta[1].img);
        message.channel.send({embed});
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(token);

/*
//Initial Vars
const fs = require("fs");
var config = JSON.parse(fs.readFileSync('config.json')); //load user prefrences
const token = config.bot_id;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login('token');



const emitter = require('./emitter');
/////////////////////////////////////////
////Discord Bot
////////////////////////////////////////
//Run On Bot Login
bot.on('ready', () => {
    console.log('Logged Into Server');

    //set channel id
    var channel = bot.channels.get(config.text_channel_id);
    channel.send("Procurando pelos Bosses...");

    //A BDO Boss Spawned
    emitter.bossEvents.on("bossSpawn", function (boss) {
        //Message Sent To Discord
        var embed = new Discord.RichEmbed()
            .setAuthor("ALERTA DE BOSS!", boss.img)
            .setTitle(boss.alert)
            .setColor(0x00AE86)
            .setTimestamp()
        if (config.large_boss_image) embed.setImage(boss.img); //use large boss image
        channel.send({
            embed
        }); //alert discord
    });

});
//Login Bot User
bot.login(token);*/