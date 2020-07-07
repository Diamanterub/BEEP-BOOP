//Config necessary for the bot run
const {
    Client
} = require("discord.js");
const {
    config
} = require("dotenv");

const client = new Client({
    disableEveryone: true
});
//If the bot is ready to go online he sends a message to the console and sets his precence to the desired one
client.on("ready", () => {
    console.log("BOT initiated BEEP BOOP , my name is " + client.user.username);

    client.user.setPresence({
        game: {
            name: "Imagine losing your mind for me yikes",
           // type: "WATCHING"
        }
    });
});
//Fuction for generating a random value between two numbers
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Prefix of the bot 
const prefix = "_";
//The prefix one
client.on("message", async message => {

    //Checklist for the code to run
    //What is sent for the bot needs to be text,and needs to have the prefix for the bot 
    if (message.channel.type != 'text' || message.author.bot) return;
    if (!message.guild) return; /* ANTI ERROR NAS DMS*/
    if (!message.content.startsWith(prefix)) return;
    //Getting the text for the message sent
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    //All the options that are available with the prefix 
    switch (cmd) {

        //Ping option for checking possible problems with the api or bot 
        case 'ping': 
            let msg = await message.channel.send('Ping');
            msg.edit('Ping:\nLatency is' + Math.floor(msg.createdTimestamp - message.createdTimestamp) + 'ms \n API Latency is ' + Math.round(client.ping) + 'ms');

        
        break;

        //Crab option that send the gif of the crab when the user requests
        case 'crab': 
        message.channel.send("https://tenor.com/view/crab-safe-dance-gif-13211112");
        
        break;

        //Champion option that gets the fuction getRnd that randomizes a number and choses a champion from the array champions
        case 'champion': 
        let rnd = getRnd(1, 148)
        let champions = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho gath', 'Corki', 'Darius', 'Diana', 'Draven', 'Dr.Mundo', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Khazix', 'Kindred', 'Kled', 'Kog maw', 'Leblanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Reksai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Senna', 'Sett', 'Shaco', 'Shen', 'Shyvanna', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udry', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel koz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Yummi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']
        message.channel.send('Random Champion is ' + champions[rnd])
        
        break;

        //Porn option that gets a random porn video from pornhub
        case 'porn': 

        message.channel.send("https://www.pornhub.com/random")

        break;
        //Cs option to call everyone who plays cs
        case 'cs':
            message.channel.send("Can you guys play cs", {
                tts: true
                });
            message.channel.send("<@198930470061211648> <@198869765039718400> <@177175891078676482> <@160788066678734849> <@198887105143767040> <@195638742864625664>")    
         break;
            

            

     case 'rune': {

        let toni = 1;
        let path = ['Precision', 'Domination', 'Sorcery', 'Resolve', 'Inspiration'];
        let Precision_keystones = ['Press the attack', 'Lethal Tempo', 'Fleetwork', 'Conqueror'];
        let Precision_a = ['Overheal', 'Triumph', 'Presense of Mind'];
        let Precision_b = ['Alacrity', 'Tenacity', 'Bloodline'];
        let Precision_c = ['Coup de Grace', 'Cut Down', 'Last Stand'];
        let Domination_keystones = ['Electrocute', 'Predator', 'Dark Harvest', 'Hail of blades'];
        let Domination_a = ['Cheap Shot', 'Taste of blood', 'Sudden Impact'];
        let Domination_b = ['Zombie ward', 'Ghost poro', 'Eyeball Collection'];
        let Domination_c = ['Ravenous Hunter', 'Ingenious Hunter', 'Relenteless Hunter', 'Ultimate Hunter'];
        let Sorcery_keystones = ['Summon Aery', 'Arcane Comet', 'Phase Rush'];
        let Sorcery_a = ['Nullifying orb', 'Manaflow band', 'Nimbus Cloak'];
        let Sorcery_b = ['Transcendense', 'Celerity', 'Absolute Focus'];
        let Sorcery_c = ['Scorch', 'WaterWalking', 'Gathering Storm'];
        let Resolve_keystones = ['Ghasp', 'Aftershock', 'Guardian'];
        let Resolve_a = ['Demolish', 'Font of Fife', 'Shield Bash'];
        let Resolve_b = ['Conditioning', 'Second wind', 'Bone plating'];
        let Resolve_c = ['Overgrow', 'Revitalize', 'Unflinching'];
        let Inspiration_keystones = ['Glacial Augment', 'Unsealed Spellbook', 'Ommistone'];
        let Inspiration_a = ['Hextech flash', 'Magical Footwear', 'Perfect timming'];
        let Inspiration_b = ['Future market', 'Minion dematerializer', 'Biscuit Delivery'];
        let Inspiration_c = ['Cosmic Insight', 'Aproach Velocity', 'Time warp tonic'];
        let a;
        let b;

        while (toni == 1) {
            
            let rnd = getRnd(1, 5); 
            a = path[rnd];
            rnd = getRnd(1, 5);
            b = path[rnd];

            if (a != b) {
                toni = 0

            }

        }
        let rnd;
        /*Primary Path */
        switch (a) {
            case 'Precision': {
                rnd = getRnd(1, 4);
                message.channel.send(Precision_keystones[rnd]);
                rnd = getRnd(1, 3);
                message.channel.send(Precision_a[rnd]);
                rnd = getRnd(1, 3);
                message.channel.send(Precision_b[rnd]);
                rnd = getRnd(1, 3);
                message.channel.send(Precision_c[rnd]);
            }

            break;
        case 'Domination': {
            rnd = getRnd(1, 4);
            message.channel.send(Domination_keystones[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Domination_a[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Domination_b[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Domination_c[rnd]);
        }


        break;
        case 'Sorcery': {
            rnd = getRnd(1, 4);
            message.channel.send(Sorcery_keystones[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Sorcery_a[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Sorcery_b[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Sorcery_c[rnd]);


        }


        break;
        case 'Resolve': {
            rnd = getRnd(1, 4);
            message.channel.send(Resolve_keystones[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Resolve_a[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Resolve_b[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Resolve_c[rnd]);



        }


        break;
        case 'Inspiration': {
            rnd = getRnd(1, 4);
            message.channel.send(Inspiration_keystones[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Inspiration_a[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Inspiration_b[rnd]);
            rnd = getRnd(1, 3);
            message.channel.send(Inspiration_c[rnd]);


        }


        break;
        }
        /*Secondary Path*/
        let c;
        let d;
        switch(b)
        {
            case 'Precision': {
                
                while (toni == 1) {
                    
                    let rnd = getRnd(1, 3);
                    c = rnd
                    rnd = getRnd(1, 3);
                    d = rnd;
        
                    if (c != d) {
                        toni = 0;
        
                    }
        
                }
                if (c == 1 || d == 1)
                {
                    rnd = getRnd(1,3);
                    message.channel.send(Precision_a[rnd]);
                
                }
                if (c == 2 || d == 2)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Precision_b[rnd]);
                }
                if (c == 3 || d == 3)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Precision_c[rnd]);
                }
                
            }
            break;
            case 'Domination': {
                
                while (toni == 1) {
                    
                    let rnd = getRnd(1, 3);
                    c = rnd
                    rnd = getRnd(1, 3);
                    d = rnd;
        
                    if (c != d) {
                        toni = 0;
        
                    }
        
                }
                if (c == 1 || d == 1)
                {
                    rnd = getRnd(1,3);
                    message.channel.send(Domination_a[rnd]);
                
                }
                if (c == 2 || d == 2)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Domination_b[rnd]);
                }
                if (c == 3 || d == 3)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Domination_c[rnd]);
                }
                
            }
            break;
            case 'Sorcery': {
                
                while (toni == 1) {
                    
                    let rnd = getRnd(1, 3);
                    c = rnd
                    rnd = getRnd(1, 3);
                    d = rnd;
        
                    if (c != d) {
                        toni = 0;
        
                    }
        
                }
                if (c == 1 || d == 1)
                {
                    rnd = getRnd(1,3);
                    message.channel.send(Sorcery_a[rnd]);
                
                }
                if (c == 2 || d == 2)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Sorcery_b[rnd]);
                }
                if (c == 3 || d == 3)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Sorcery_c[rnd]);
                }
                
            }
            break;
            case 'Resolve': {
                
                while (toni == 1) {
                    
                    let rnd = getRnd(1, 3);
                    c = rnd
                    rnd = getRnd(1, 3);
                    d = rnd;
        
                    if (c != d) {
                        toni = 0;
        
                    }
        
                }
                if (c == 1 || d == 1)
                {
                    rnd = getRnd(1,3);
                    message.channel.send(Resolve_a[rnd]);
                
                }
                if (c == 2 || d == 2)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Resolve_b[rnd]);
                }
                if (c == 3 || d == 3)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Resolve_c[rnd]);
                }
                
            }
            break;
            case 'Inspiration': {
                
                while (toni == 1) {
                    
                    let rnd = getRnd(1, 3);
                    c = rnd
                    rnd = getRnd(1, 3);
                    d = rnd;
        
                    if (c != d) {
                        toni = 0;
        
                    }
        
                }
                if (c == 1 || d == 1)
                {
                    rnd = getRnd(1,3);
                    message.channel.send(Inspiration_a[rnd]);
                
                }
                if (c == 2 || d == 2)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Inspiration_b[rnd]);
                }
                if (c == 3 || d == 3)
                {
                    rnd = getRnd(1, 3);
                    message.channel.send(Inspiration_c[rnd]);
                }
                
            }
            break;






         }












    }
    break


    default:



        break;

    }



});
//Ban and kick options only avaibable for the admins and botcontrollers respectively
client.on('message', message => {
    //CHANGE LATER WHEN BOT IS READY
    //The ids from the certain roles
    let botcontroller = message.member.roles.has('217716503729012736');
    let admin = message.member.roles.has('217716522808901632')
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        //Kick option only avaibable to the bot controllers
        case 'kick':
            if (botcontroller) {

                if (!args[1]) message.channel.send('DIGA ME UM!')

                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member.kick('Kicked!').then(() => {
                            message.reply('The member' + ' ' + user.tag + ' ' + 'was kicked');
                        }).catch(error => {
                            message.reply('I was unable to kick the member');
                            console.log(error)
                        });

                    } else {
                        message.reply('That member is not in the server')

                    }

                }
            }
            //In case that you try to ban a user that is more powerfull than you
            else {
                message.channel.send("You don't have enough power to this command")

            }

        break;

        case 'ban':
            //Ban option only avaibable to the Admins
            if (admin) {

                if (!args[1]) message.channel.send('DIGA ME UM!')
                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member.ban({
                            reason: 'Imagine being Banned by a bot '
                        }).then(() => {
                            message.reply('The member' + ' ' + user.tag + ' ' + 'was BANNED');
                        })

                    } else {
                        message.reply('That member is not in the server')

                    }

                }
            }
            //Ban option only avaibable to the Admins
            else {
                message.channel.send("You don't have enough power to this command")
            }

        break;

        }
})

//Test detection used for detecting certain words from normal text 
client.on("message", async message => {
   //Checklist necessary for the bot to run
    if (message.channel.type != 'text' || message.author.bot) return;
    if (!message.guild) return; /* ANTI ERROR NAS DMS*/
    /*The bot divides the message that the user who made the request  and search for the trigger words and then he tells the user to stfu*/
    let messageraw = message.content;
    let autor = message.author;
    let messagetext = messageraw.trim().toLowerCase();
    let messagesplit = messagetext.split(' ');
    var resposta;
    var resposta1;    
    resposta = (Boolean(messagesplit.includes("outlander")) || Boolean(messagesplit.includes("jojo")));
    resposta1 = (Boolean(messagesplit.includes("oof")))
    if(Boolean(resposta) == true)
    {
        message.channel.send(autor + " " + "shut the fuck up", {
            tts: true
            });

    }
    else(Boolean(resposta1) == true)
    {
        message.channel.send("OOF!")
    }


       
       
})

client.login(process.env.token);