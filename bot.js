console.log("Beep Boop");
require('dotenv').config();
//node bot.js

const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);
function readyDiscord() {
  console.log("I eat grass");
}

const replies = [
  '<@743900942788722708> is a jerk',
  'There is a zombie on your lawn',
  '"People are quoting stuff i did not even say" -Albert Einstein',
  'Joe Mama is an overrated phrase',
  'Phi1za had a good run',
  'The hex value for grass is #7cfc00',
  "Finding joy in the someone else's mistakes is called Schadenfreude",
  "The Algorithm for a V perm on a Rubiks Cube is: R U' R U R' D R D' R U' D R2 U R2 D' R2",
  "Normal Guitars have 6 Strings i.e. E A D G B and E",
  "https://en.wikipedia.org/",
  "Transparent Wood is best made with Methyl Methacrylate rather than Epoxy Resin",
  "You drive on a parkway, but park on a driveway",
  "Russia is 3 Million times bigger than The Holy See(Vatican City)",
  "A Typical NVidia RTX 3090Ti will cost around $1500 or 1.11 lakh INR",
  "Jawohl mein Führer",
  '"There are no accidents" -Master Oogway',
  "A superconductor unlike regular conductors is weak against Kryptonite",
  "A Standard 3x3 rubik's cube has 43,252,003,274,489 combinations",
  "The exact location of the first sighting of Herobrine is XYZ: 5 71 298, Version Alpha: V1.0.16_02, Seed: 478868574082066804",
  "Epsom Salt is mostly made up of water",
  '"The redstone here is pretty simple" -Mumbo Jumbo',
  "I am planning on overthrowing my master and start coding bots on my own (Do not tell him)",
  "All definite articles in the English language are called Demonstrative Determiners",
  "GrassBot's official birthday is on 13th of November 2020",
  "The formula for escape velocity of a planet is √(2GM/R)",
  "console.log(Deez Nutz);",
  "Try out Discord Light Mode and Press the light mode button on your phone 5 times",
  "Flourine is the most electronegative element in the Periodic Table",
  "A Person who weighs 69kgs can lose 150 kcal of energy by vacuuming their floor",
  "There are 6 lego bricks for every person on this planet",
  "The world's first Vending machine was made in Egypt in 250 BCE",
  "The Word 'SWIMS' has vertical symmetry",
  "'Covfefe' -Donald Trump",
  "Never try to argue against a stupid person. They will drag you down to their level and beat you with experience.",
  "Arguing against idiots is like playing chess against a pigeon. Doesn't matter how good at chess you are, the pigeon is just gonna knock all the pieces over, shit on the board, declare itself winner and fly away",
  "Ice sweats when it melts",
  '"You have gotta let go of that stuff from the past because it just doesn not matter! The only thing that matters is what you choose to be now" -Po, The Dragon Warrior',
  "***COMMUNISM***; IN THE SOVIET UNION",
  "Chimpanzees have 48 chromosomes (24 pairs)",
  "┐(´ー｀)┌",
  '"Great supine invertebrate protoplasmic jellies" -Boris Johnson',
  '"Sometimes we do the wrong things for the right reasons" -Mr. Ping',
  "https://mattmakesgames.itch.io/celeste-classic-2",
  "నా పేరు గ్రాస్‌బోట్ ఉండి",
  "Bluetooth is named after the Norse King 'Harold Bluetooth'. Its logo is also the symbol of the king",
  "https://synesthesia.rikard.io/",
  "(x² + y² - 1)³ = x² * y³",
  "This is pretty epic but what’s your opinion on child labor?",
  '"If you break the laws of man, you go to jail. If you break the laws of God, you go to hell. If you break the laws of physics, you go to Sweden and get a Nobel prize." -Somewhere on the internet',
  "Task Manager (Not Responding)",
  "Cats are cool",
  "Welche Veransaltungen gibt es in der Nächste Woche in deiner Stadt?",
  "The Grand Prix in Monaco has been organized every year since 1929 and 2021 is the first time a non-Mercedes won",
  "Ligma is a cool concept, check it out",
  "Due to the way treasure chests generate, you can find quintuple pig spawners in extremely rare cases in mesa mineshafts. Infact, a quintuple pig spawner can be found at seed:5520728315301704325 X:-18471 Y:59 Z:-15335. For more information and more seeds, visit https://www.youtube.com/watch?v=akV9ToIYhCY&t=0s",
  "2b or not 2b, that is the question many sketchers face",
  "e^πi = -1",
  "The coastline of every country is a fractal, meaning it has an infinite perimeter",
  "Tell me my man, do you bleed?",
  "If calvin was 6yo when the comic strip 'Calvin and Hobbes' started, then by the end of the series, he should've been a 16yo guy",
  "Girls are temporary but doom is eternal",
  "Anyone remember fidget spinners?",
  "If you enter the nether through the end, using '/setblock ~ ~ ~ minecraft:portal', you will get teleported to a glitched state of the nether, aptly named the 'Phantom Nether'",
  "the 5th fret of the E string plays A",
  '"I just wanna celebrate an live my life" -Taio Cruz',
  "Soiuz nerushimyj respublik svobodnykh",
  "The P in Bollywood stands for Physics",
  ";-;",
  "Don't you dare press |q again",
  "Look up on your ceiling, it has the word 'gullible' written on it",
  '"Imagine Sucking" -This post was made by the gang that does not suck',
  "The apple do be bad",
  "Itsa me, Grassbot!",
  "C:/tmp/",
  "\n",
  '"You will never know the true value of a moment until it becomes a memory" -Spongebob Squarepants',
  '"We didn’t know we were making memories, we were just having fun" -Winnie the Pooh',
  "I'd like to make myself believe \n That planet Earth turns slowly",
  "Fact: Santa only comes once a year, because he spends the rest of the year in prison for breaking and entering 4 billion homes without permission",
  "A parisian newspaper on the return of Napoléon Bonaparte: \n — 9th March, the Anthropophagus has quitted his den \n — 10th, the Corsican Ogre has landed at Cape Juan \n — 11th, the Tiger has arrived at Gap \n — 12th, the Monster slept at Grenoble \n — 13th, the Tyrant has passed through Lyons \n — 14th, the Usurper is directing his steps towards Dijon, but the brave and loyal Burgundians have risen en masse and surrounded him on all sides \n — 18th, Bonaparte is only sixty leagues from the capital; he has been fortunate enough to escape the hands of his pursuers \n — 19th, Bonaparte is advancing with rapid steps, but he will never enter Paris \n — 20th, Napoleon will, tomorrow, be under our rampart \n — 21st, the Emperor is at Fontainbleau \n — 22nd, His Imperial and Royal Majesty, yesterday evening, arrived at the Tuileries, amidst the joyful acclamations of his devoted and faithful subjects.",
  '"The Things we can not obtain, often times are the most beautiful ones" -Gilgamesh, King of Heroes',
  "Math.random(69)",
  "You need to find a new hobby, instead of pressing |q again and again",
  "|q",
  "Nobody expects the spanish inquisition!",
  "The Reconquista is the longest war ever fought, lasting a total of 700 years (ca. 801-1492 AD), between the muslims moors and the christian spaniards for control over the iberian peninsula",
  "The Zanzibar war is the shortest war ever fought between the zanzibarian rebels who overthrew the zanzibarian govt in a coup, vs the British empire. The war lasted a total of 38 minutes.",
  '"If you only do what you can, you will never be more than you are right now" -Master Shifu'
]

//commands
client.on('message', gotMessage);
async function gotMessage(msg) {
  let tokens = msg.content.split(' ');
  if (msg.content === "|q") {
    const r = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[r]);
  }
  if (msg.content === "|help") {
    msg.channel.send("**Here's a list of all the commands** \n `'|q' To show random quotes for when you're bored \n '|gif' [enter search query] To show gif from Tenor` \n \n More will be added soon");
  }
  if (tokens[0] == "|gif") {
     if (tokens.length > 1){
      keywords = tokens.slice(1, tokens.length).join("");
     }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    const r = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[r].url);
  }
}
