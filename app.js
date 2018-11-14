const fs = require("fs"); // default library for read files

var config = JSON.parse(fs.readFileSync('config.json')); // load user prefrences
const token = config.bot_id; // load id from your bot

var BOSS = JSON.parse(fs.readFileSync('bossTimes.json')); // load boss data

const Discord = require('discord.js'); // Import the discord.js module
const client = new Discord.Client(); // Create an instance of a Discord client
const channel = client.channels.get(config.text_channel_id); //load channel id for bot interation

var moment = require('moment-timezone'); // date and time librarie
var cron = require('node-cron'); // scheduler library
// timezone config, change this to your server region
var timezone = "America/Argentina/Buenos_Aires";
moment.tz.setDefault(timezone);

// Boss Thumbnail
const thumbnail = "https://image.ibb.co/fTvJcq/keep-calm-its-boss-time.png";
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

        //send something
    }
});

//Boss schedule days on 2:00
cron.schedule('30 1 * * *', () => {

    console.log('Alerta de BOSS 02:00 horas Iniciado');

    if (moment().day() == 1) {

        try {

            console.log('Mensagem BOSS Segunda 02:00 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Segunda[1].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Segunda[1].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Segunda 02:00 horas Enviada com sucesso!');

    } else {

        if (moment().day() == 2) {

            try {

                console.log('Mensagem BOSS Terça 02:00 horas Iniciada');

                var embed = new Discord.RichEmbed()
                    .setAuthor("ALERTA DE BOSS")
                    .setColor(0x00AE86)
                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                    .setImage(BOSS.Terça[1].img)
                    .setThumbnail(thumbnail)
                    .setTimestamp()
                    .setTitle(BOSS.Terça[1].alert);
                client.channels.get(config.text_channel_id).send({
                    embed
                });

            } catch (err) {

                console.log(err);

            }
            console.log('Mensagem BOSS Terça 02:00 horas Enviada com sucesso!');

        } else {

            if (moment().day() == 3) {

                try {

                    console.log('Mensagem BOSS Quarta 02:00 horas Iniciada');

                    var embed = new Discord.RichEmbed()
                        .setAuthor("ALERTA DE BOSS")
                        .setColor(0x00AE86)
                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                        .setImage(BOSS.Quarta[1].img)
                        .setThumbnail(thumbnail)
                        .setTimestamp()
                        .setTitle(BOSS.Quarta[1].alert);
                    client.channels.get(config.text_channel_id).send({
                        embed
                    });

                } catch (err) {

                    console.log(err);

                }
                console.log('Mensagem BOSS Quarta 02:00 horas Enviada com sucesso!');

            } else {

                if (moment().day() == 4) {

                    try {

                        console.log('Mensagem BOSS Quinta 02:00 horas Iniciada');

                        var embed = new Discord.RichEmbed()
                            .setAuthor("ALERTA DE BOSS")
                            .setColor(0x00AE86)
                            .setDescription("30 MINUTOS PARA O BOSS!!!")
                            .setImage(BOSS.Quinta[1].img)
                            .setThumbnail(thumbnail)
                            .setTimestamp()
                            .setTitle(BOSS.Quinta[1].alert);
                        client.channels.get(config.text_channel_id).send({
                            embed
                        });

                    } catch (err) {

                        console.log(err);

                    }
                    console.log('Mensagem BOSS Quinta 02:00 horas Enviada com sucesso!');

                } else {

                    if (moment().day() == 5) {

                        try {

                            console.log('Mensagem BOSS Sexta 02:00 horas Iniciada');

                            var embed = new Discord.RichEmbed()
                                .setAuthor("ALERTA DE BOSS")
                                .setColor(0x00AE86)
                                .setDescription("30 MINUTOS PARA O BOSS!!!")
                                .setImage(BOSS.Sexta[1].img)
                                .setThumbnail(thumbnail)
                                .setTimestamp()
                                .setTitle(BOSS.Sexta[1].alert);
                            client.channels.get(config.text_channel_id).send({
                                embed
                            });

                        } catch (err) {

                            console.log(err);

                        }
                        console.log('Mensagem BOSS Sexta 02:00 horas Enviada com sucesso!');

                    } else {

                        if (moment().day() == 6) {

                            try {

                                console.log('Mensagem BOSS Sabado 02:00 horas Iniciada');

                                var embed = new Discord.RichEmbed()
                                    .setAuthor("ALERTA DE BOSS")
                                    .setColor(0x00AE86)
                                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                                    .setImage(BOSS.Sabado[1].img)
                                    .setThumbnail(thumbnail)
                                    .setTimestamp()
                                    .setTitle(BOSS.Sabado[1].alert);
                                client.channels.get(config.text_channel_id).send({
                                    embed
                                });

                            } catch (err) {

                                console.log(err);

                            }
                            console.log('Mensagem BOSS Sabado 02:00 horas Enviada com sucesso!');

                        } else {

                            if (moment().day() == 7) {

                                try {

                                    console.log('Mensagem BOSS Domingo 02:00 horas Iniciada');

                                    var embed = new Discord.RichEmbed()
                                        .setAuthor("ALERTA DE BOSS")
                                        .setColor(0x00AE86)
                                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                                        .setImage(BOSS.Domingo[1].img)
                                        .setThumbnail(thumbnail)
                                        .setTimestamp()
                                        .setTitle(BOSS.Domingo[1].alert);
                                    client.channels.get(config.text_channel_id).send({
                                        embed
                                    });

                                } catch (err) {

                                    console.log(err);

                                }
                                console.log('Mensagem BOSS Domingo 02:00 horas Enviada com sucesso!');

                            }
                        }
                    }
                }
            }
        }
    }

    console.log('Alerta de BOSS 02:00 concluido');
}, {
    timezone: timezone
});

//Boss schedule days on 11:00
cron.schedule('30 10 * * *', () => {

    if (moment().day() == 1) {

        try {

            console.log('Mensagem BOSS Segunda 11:00 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Segunda[2].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Segunda[2].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Segunda 11:00 horas Enviada com sucesso!');

    } else {

        if (moment().day() == 2) {

            try {

                console.log('Mensagem BOSS Terça 11:00 horas Iniciada');

                var embed = new Discord.RichEmbed()
                    .setAuthor("ALERTA DE BOSS")
                    .setColor(0x00AE86)
                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                    .setImage(BOSS.Terça[2].img)
                    .setThumbnail(thumbnail)
                    .setTimestamp()
                    .setTitle(BOSS.Terça[2].alert);
                client.channels.get(config.text_channel_id).send({
                    embed
                });

            } catch (err) {

                console.log(err);

            }
            console.log('Mensagem BOSS Terça 11:00 horas Enviada com sucesso!');

        } else {

            if (moment().day() == 3) {

                try {

                    console.log('Mensagem BOSS Quarta 11:00 horas Iniciada');

                    var embed = new Discord.RichEmbed()
                        .setAuthor("ALERTA DE BOSS")
                        .setColor(0x00AE86)
                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                        .setImage(BOSS.Quarta[2].img)
                        .setThumbnail(thumbnail)
                        .setTimestamp()
                        .setTitle(BOSS.Quarta[2].alert);
                    client.channels.get(config.text_channel_id).send({
                        embed
                    });

                } catch (err) {

                    console.log(err);

                }
                console.log('Mensagem BOSS Quarta 11:00 horas Enviada com sucesso!');

            } else {

                if (moment().day() == 4) {

                    try {

                        console.log('Mensagem BOSS Quinta 11:00 horas Iniciada');

                        var embed = new Discord.RichEmbed()
                            .setAuthor("ALERTA DE BOSS")
                            .setColor(0x00AE86)
                            .setDescription("30 MINUTOS PARA O BOSS!!!")
                            .setImage(BOSS.Quinta[2].img)
                            .setThumbnail(thumbnail)
                            .setTimestamp()
                            .setTitle(BOSS.Quinta[2].alert);
                        client.channels.get(config.text_channel_id).send({
                            embed
                        });

                    } catch (err) {

                        console.log(err);

                    }
                    console.log('Mensagem BOSS Quinta 11:00 horas Enviada com sucesso!');

                } else {

                    if (moment().day() == 5) {

                        try {

                            console.log('Mensagem BOSS Sexta 11:00 horas Iniciada');

                            var embed = new Discord.RichEmbed()
                                .setAuthor("ALERTA DE BOSS")
                                .setColor(0x00AE86)
                                .setDescription("30 MINUTOS PARA O BOSS!!!")
                                .setImage(BOSS.Sexta[2].img)
                                .setThumbnail(thumbnail)
                                .setTimestamp()
                                .setTitle(BOSS.Sexta[2].alert);
                            client.channels.get(config.text_channel_id).send({
                                embed
                            });

                        } catch (err) {

                            console.log(err);

                        }
                        console.log('Mensagem BOSS Sexta 11:00 horas Enviada com sucesso!');

                    } else {

                        if (moment().day() == 6) {

                            try {

                                console.log('Mensagem BOSS Sabado 11:00 horas Iniciada');

                                var embed = new Discord.RichEmbed()
                                    .setAuthor("ALERTA DE BOSS")
                                    .setColor(0x00AE86)
                                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                                    .setImage(BOSS.Sabado[2].img)
                                    .setThumbnail(thumbnail)
                                    .setTimestamp()
                                    .setTitle(BOSS.Sabado[2].alert);
                                client.channels.get(config.text_channel_id).send({
                                    embed
                                });

                            } catch (err) {

                                console.log(err);

                            }
                            console.log('Mensagem BOSS Sabado 11:00 horas Enviada com sucesso!');

                        } else {
                            if (moment().day() == 7) {

                                try {

                                    console.log('Mensagem BOSS Domingo 11:00 horas Iniciada');

                                    var embed = new Discord.RichEmbed()
                                        .setAuthor("ALERTA DE BOSS")
                                        .setColor(0x00AE86)
                                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                                        .setImage(BOSS.Domingo[2].img)
                                        .setThumbnail(thumbnail)
                                        .setTimestamp()
                                        .setTitle(BOSS.Domingo[2].alert);
                                    client.channels.get(config.text_channel_id).send({
                                        embed
                                    });

                                } catch (err) {

                                    console.log(err);

                                }
                                console.log('Mensagem BOSS Domingo 11:00 horas Enviada com sucesso!');

                            }
                        }
                    }
                }
            }
        }
    }

    console.log('Alerta de BOSS 11:00 horas');
}, {
    timezone: timezone
});

//Boss schedule days on 16:00
cron.schedule('30 15 * * *', () => {

    if (moment().day() == 1) {

        try {

            console.log('Mensagem BOSS Segunda 16:00 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Segunda[3].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Segunda[3].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Segunda 16:00 horas Enviada com sucesso!');

    } else {

        if (moment().day() == 2) {

            try {

                console.log('Mensagem BOSS Terça 16:00 horas Iniciada');

                var embed = new Discord.RichEmbed()
                    .setAuthor("ALERTA DE BOSS")
                    .setColor(0x00AE86)
                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                    .setImage(BOSS.Terça[3].img)
                    .setThumbnail(thumbnail)
                    .setTimestamp()
                    .setTitle(BOSS.Terça[3].alert);
                client.channels.get(config.text_channel_id).send({
                    embed
                });

            } catch (err) {

                console.log(err);

            }
            console.log('Mensagem BOSS Terça 16:00 horas Enviada com sucesso!');

        } else {

            if (moment().day() == 3) {

                try {

                    console.log('Mensagem BOSS Quarta 16:00 horas Iniciada');

                    var embed = new Discord.RichEmbed()
                        .setAuthor("ALERTA DE BOSS")
                        .setColor(0x00AE86)
                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                        .setImage(BOSS.Quarta[3].img)
                        .setThumbnail(thumbnail)
                        .setTimestamp()
                        .setTitle(BOSS.Quarta[3].alert);
                    client.channels.get(config.text_channel_id).send({
                        embed
                    });

                } catch (err) {

                    console.log(err);

                }
                console.log('Mensagem BOSS Quarta 16:00 horas Enviada com sucesso!');

            } else {

                if (moment().day() == 4) {

                    try {

                        console.log('Mensagem BOSS Quinta 16:00 horas Iniciada');

                        var embed = new Discord.RichEmbed()
                            .setAuthor("ALERTA DE BOSS")
                            .setColor(0x00AE86)
                            .setDescription("30 MINUTOS PARA O BOSS!!!")
                            .setImage(BOSS.Quinta[3].img)
                            .setThumbnail(thumbnail)
                            .setTimestamp()
                            .setTitle(BOSS.Quinta[3].alert);
                        client.channels.get(config.text_channel_id).send({
                            embed
                        });

                    } catch (err) {

                        console.log(err);

                    }
                    console.log('Mensagem BOSS Quinta 16:00 horas Enviada com sucesso!');

                } else {

                    if (moment().day() == 5) {

                        try {

                            console.log('Mensagem BOSS Sexta 16:00 horas Iniciada');

                            var embed = new Discord.RichEmbed()
                                .setAuthor("ALERTA DE BOSS")
                                .setColor(0x00AE86)
                                .setDescription("30 MINUTOS PARA O BOSS!!!")
                                .setImage(BOSS.Sexta[3].img)
                                .setThumbnail(thumbnail)
                                .setTimestamp()
                                .setTitle(BOSS.Sexta[3].alert);
                            client.channels.get(config.text_channel_id).send({
                                embed
                            });

                        } catch (err) {

                            console.log(err);

                        }
                        console.log('Mensagem BOSS Sexta 16:00 horas Enviada com sucesso!');

                    } else {

                        if (moment().day() == 6) {

                            try {

                                console.log('Mensagem BOSS Sabado 16:00 horas Iniciada');

                                var embed = new Discord.RichEmbed()
                                    .setAuthor("ALERTA DE BOSS")
                                    .setColor(0x00AE86)
                                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                                    .setImage(BOSS.Sabado[3].img)
                                    .setThumbnail(thumbnail)
                                    .setTimestamp()
                                    .setTitle(BOSS.Sabado[3].alert);
                                client.channels.get(config.text_channel_id).send({
                                    embed
                                });

                            } catch (err) {

                                console.log(err);

                            }
                            console.log('Mensagem BOSS Sabado 16:00 horas Enviada com sucesso!');

                        } else {

                            if (moment().day() == 7) {

                                try {

                                    console.log('Mensagem BOSS Domingo 16:00 horas Iniciada');

                                    var embed = new Discord.RichEmbed()
                                        .setAuthor("ALERTA DE BOSS")
                                        .setColor(0x00AE86)
                                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                                        .setImage(BOSS.Domingo[3].img)
                                        .setThumbnail(thumbnail)
                                        .setTimestamp()
                                        .setTitle(BOSS.Domingo[3].alert);
                                    client.channels.get(config.text_channel_id).send({
                                        embed
                                    });

                                } catch (err) {

                                    console.log(err);

                                }
                                console.log('Mensagem BOSS Domingo 16:00 horas Enviada com sucesso!');

                            }
                        }
                    }
                }
            }
        }
    }

    console.log('Alertas de BOSS 16:00 horas');
}, {
    timezone: timezone
});

//Boss schedule days on 18:00 with 30 minutes left
cron.schedule('30 17 * * *', () => {

    if (moment().day() == 7) {

        try {

            console.log('Mensagem BOSS Domingo 18:00 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Domingo[3].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Domingo[3].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Domingo 18:00 horas Enviada com sucesso!');

    }

    console.log('Alertas de BOSS 18:00 horas sabado');
}, {
    timezone: timezone
});

//Boss schedule days on 18:00 with 1 hour left
cron.schedule('0 17 * * *', () => {

    if (moment().day() == 7) {

        try {

            console.log('Mensagem BOSS Domingo 18:00 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Domingo[3].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Domingo[3].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Domingo 18:00 horas Enviada com sucesso!');

    }

    console.log('Alertas de BOSS 18:00 horas sabado');
}, {
    timezone: timezone
});

//Boss schedule days on 18:00 with 1 hour and 30 minutes left
cron.schedule('30 16 * * *', () => {

    if (moment().day() == 7) {

        try {

            console.log('Mensagem BOSS Domingo 18:00 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Domingo[3].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Domingo[3].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Domingo 18:00 horas Enviada com sucesso!');

    }

    console.log('Alertas de BOSS 18:00 horas sabado');
}, {
    timezone: timezone
});

//Boss schedule days on 20:00
cron.schedule('30 19 * * *', () => {

    if (moment().day() == 1) {

        try {

            console.log('Mensagem BOSS Segunda 20:00 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Segunda[4].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Segunda[4].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Segunda 20:00 horas Enviada com sucesso!');

    } else {

        if (moment().day() == 2) {

            try {

                console.log('Mensagem BOSS Terça 20:00 horas Iniciada');

                var embed = new Discord.RichEmbed()
                    .setAuthor("ALERTA DE BOSS")
                    .setColor(0x00AE86)
                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                    .setImage(BOSS.Terça[4].img)
                    .setThumbnail(thumbnail)
                    .setTimestamp()
                    .setTitle(BOSS.Terça[4].alert);
                client.channels.get(config.text_channel_id).send({
                    embed
                });

            } catch (err) {

                console.log(err);

            }
            console.log('Mensagem BOSS Terça 20:00 horas Enviada com sucesso!');

        } else {

            if (moment().day() == 3) {

                try {

                    console.log('Mensagem BOSS Quarta 20:00 horas Iniciada');

                    var embed = new Discord.RichEmbed()
                        .setAuthor("ALERTA DE BOSS")
                        .setColor(0x00AE86)
                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                        .setImage(BOSS.Quarta[4].img)
                        .setThumbnail(thumbnail)
                        .setTimestamp()
                        .setTitle(BOSS.Quarta[4].alert);
                    client.channels.get(config.text_channel_id).send({
                        embed
                    });

                } catch (err) {

                    console.log(err);

                }
                console.log('Mensagem BOSS Quarta 20:00 horas Enviada com sucesso!');

            } else {

                if (moment().day() == 4) {

                    try {

                        console.log('Mensagem BOSS Quinta 20:00 horas Iniciada');

                        var embed = new Discord.RichEmbed()
                            .setAuthor("ALERTA DE BOSS")
                            .setColor(0x00AE86)
                            .setDescription("30 MINUTOS PARA O BOSS!!!")
                            .setImage(BOSS.Quinta[4].img)
                            .setThumbnail(thumbnail)
                            .setTimestamp()
                            .setTitle(BOSS.Quinta[4].alert);
                        client.channels.get(config.text_channel_id).send({
                            embed
                        });

                    } catch (err) {

                        console.log(err);

                    }
                    console.log('Mensagem BOSS Quinta 20:00 horas Enviada com sucesso!');

                } else {

                    if (moment().day() == 5) {

                        try {

                            console.log('Mensagem BOSS Sexta 20:00 horas Iniciada');

                            var embed = new Discord.RichEmbed()
                                .setAuthor("ALERTA DE BOSS")
                                .setColor(0x00AE86)
                                .setDescription("30 MINUTOS PARA O BOSS!!!")
                                .setImage(BOSS.Sexta[4].img)
                                .setThumbnail(thumbnail)
                                .setTimestamp()
                                .setTitle(BOSS.Sexta[4].alert);
                            client.channels.get(config.text_channel_id).send({
                                embed
                            });

                        } catch (err) {

                            console.log(err);

                        }
                        console.log('Mensagem BOSS Sexta 20:00 horas Enviada com sucesso!');

                    } else {

                        if (moment().day() == 6) {

                            try {

                                console.log('Mensagem BOSS Sabado 20:00 horas Iniciada');

                                var embed = new Discord.RichEmbed()
                                    .setAuthor("ALERTA DE BOSS")
                                    .setColor(0x00AE86)
                                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                                    .setImage(BOSS.Sabado[4].img)
                                    .setThumbnail(thumbnail)
                                    .setTimestamp()
                                    .setTitle(BOSS.Sabado[4].alert);
                                client.channels.get(config.text_channel_id).send({
                                    embed
                                });

                            } catch (err) {

                                console.log(err);

                            }
                            console.log('Mensagem BOSS Sabado 20:00 horas Enviada com sucesso!');

                        } else {

                            if (moment().day() == 7) {

                                try {

                                    console.log('Mensagem BOSS Domingo 20:00 horas Iniciada');

                                    var embed = new Discord.RichEmbed()
                                        .setAuthor("ALERTA DE BOSS")
                                        .setColor(0x00AE86)
                                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                                        .setImage(BOSS.Domingo[5].img)
                                        .setThumbnail(thumbnail)
                                        .setTimestamp()
                                        .setTitle(BOSS.Domingo[5].alert);
                                    client.channels.get(config.text_channel_id).send({
                                        embed
                                    });

                                } catch (err) {

                                    console.log(err);

                                }
                                console.log('Mensagem BOSS Domingo 20:00 horas Enviada com sucesso!');

                            }
                        }
                    }
                }
            }
        }
    }

    console.log('Alertas de BOSS 20:00 horas');
}, {
    timezone: timezone
});

//Boss schedule days on 23:30
cron.schedule('0 23 * * *', () => {

    if (moment().day() == 1) {

        try {

            console.log('Mensagem BOSS Segunda 23:30 horas Iniciada');

            var embed = new Discord.RichEmbed()
                .setAuthor("ALERTA DE BOSS")
                .setColor(0x00AE86)
                .setDescription("30 MINUTOS PARA O BOSS!!!")
                .setImage(BOSS.Segunda[5].img)
                .setThumbnail(thumbnail)
                .setTimestamp()
                .setTitle(BOSS.Segunda[5].alert);
            client.channels.get(config.text_channel_id).send({
                embed
            });

        } catch (err) {

            console.log(err);

        }
        console.log('Mensagem BOSS Segunda 23:30 horas Enviada com sucesso!');

    } else {

        if (moment().day() == 2) {

            try {

                console.log('Mensagem BOSS Terça 23:30 horas Iniciada');

                var embed = new Discord.RichEmbed()
                    .setAuthor("ALERTA DE BOSS")
                    .setColor(0x00AE86)
                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                    .setImage(BOSS.Terça[5].img)
                    .setThumbnail(thumbnail)
                    .setTimestamp()
                    .setTitle(BOSS.Terça[5].alert);
                client.channels.get(config.text_channel_id).send({
                    embed
                });

            } catch (err) {

                console.log(err);

            }
            console.log('Mensagem BOSS Terça 23:30 horas Enviada com sucesso!');

        } else {

            if (moment().day() == 3) {

                try {

                    console.log('Mensagem BOSS Quarta 23:30 horas Iniciada');

                    var embed = new Discord.RichEmbed()
                        .setAuthor("ALERTA DE BOSS")
                        .setColor(0x00AE86)
                        .setDescription("30 MINUTOS PARA O BOSS!!!")
                        .setImage(BOSS.Quarta[5].img)
                        .setThumbnail(thumbnail)
                        .setTimestamp()
                        .setTitle(BOSS.Quarta[5].alert);
                    client.channels.get(config.text_channel_id).send({
                        embed
                    });

                } catch (err) {

                    console.log(err);

                }
                console.log('Mensagem BOSS Quarta 23:30 horas Enviada com sucesso!');

            } else {

                if (moment().day() == 4) {

                    try {

                        console.log('Mensagem BOSS Quinta 23:30 horas Iniciada');

                        var embed = new Discord.RichEmbed()
                            .setAuthor("ALERTA DE BOSS")
                            .setColor(0x00AE86)
                            .setDescription("30 MINUTOS PARA O BOSS!!!")
                            .setImage(BOSS.Quinta[5].img)
                            .setThumbnail(thumbnail)
                            .setTimestamp()
                            .setTitle(BOSS.Quinta[5].alert);
                        client.channels.get(config.text_channel_id).send({
                            embed
                        });

                    } catch (err) {

                        console.log(err);

                    }
                    console.log('Mensagem BOSS Quinta 23:30 horas Enviada com sucesso!');

                } else {

                    if (moment().day() == 5) {

                        try {

                            console.log('Mensagem BOSS Sexta 23:30 horas Iniciada');

                            var embed = new Discord.RichEmbed()
                                .setAuthor("ALERTA DE BOSS")
                                .setColor(0x00AE86)
                                .setDescription("30 MINUTOS PARA O BOSS!!!")
                                .setImage(BOSS.Sexta[5].img)
                                .setThumbnail(thumbnail)
                                .setTimestamp()
                                .setTitle(BOSS.Sexta[5].alert);
                            client.channels.get(config.text_channel_id).send({
                                embed
                            });

                        } catch (err) {

                            console.log(err);

                        }
                        console.log('Mensagem BOSS Sexta 23:30 horas Enviada com sucesso!');

                    } else {

                        if (moment().day() == 7) {

                            try {

                                console.log('Mensagem BOSS Domingo 23:30 horas Iniciada');

                                var embed = new Discord.RichEmbed()
                                    .setAuthor("ALERTA DE BOSS")
                                    .setColor(0x00AE86)
                                    .setDescription("30 MINUTOS PARA O BOSS!!!")
                                    .setImage(BOSS.Domingo[6].img)
                                    .setThumbnail(thumbnail)
                                    .setTimestamp()
                                    .setTitle(BOSS.Domingo[6].alert);
                                client.channels.get(config.text_channel_id).send({
                                    embed
                                });

                            } catch (err) {

                                console.log(err);

                            }
                            console.log('Mensagem BOSS Domingo 23:30 horas Enviada com sucesso!');

                        }
                    }
                }
            }
        }
    }

    console.log('Alertas de BOSS 23:30 horas');
}, {
    timezone: timezone
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(token);