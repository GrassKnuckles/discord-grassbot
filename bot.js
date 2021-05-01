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
  '"The redstone here is pretty simple" -Mumbo Jumbo'
]

//commands
client.on('message', gotMessage);
async function gotMessage(msg) {
  if (msg.content === "|q") {
    const r = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[r]);
  }
  if (msg.content === "|help") {
    msg.channel.send("**Here's a list of all the commands** \n `''|q' To show random quotes for when you're bored` \n \n More will be added soon");
  }
  if (msg.content === "|gif") {
    let url = `https://g.tenor.com/v1/search?q=cat&key=${process.env.TENORKEY}&limit=8`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    const r = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[r].url);
  }
}
