let TelegramBot = require('node-telegram-bot-api')
, token = '384921691:AAEPgUNJGCazCM0YcftGwIVHokl1c7jpygE'
, shedule = require('../model/shedule')
, fs = require('fs')
;

var bot = new TelegramBot(token, {polling: true});
let data = {};

bot.onText(/\/start/, msg => {
  console.log(msg);
  data[msg.from.id] = msg.from;
  let date = new Date();
  let text = shedule.odd[date.getDay()].join('\n');
  bot.sendMessage(msg.chat.id, text );
});

let isSend = false;
setInterval(sendShelude, 1000);

function sendShelude() {
  let date = new Date();  
  let text = shedule.odd[date.getDay()].join('\n');
  if (date.getHours() === 13 && !isSend) {
    for (key in data) {
      bot.sendMessage(key, text);
    }
    isSend = !isSend;
  }
}



module.exports = data;