let TelegramBot = require('node-telegram-bot-api')
, token = '384921691:AAEPgUNJGCazCM0YcftGwIVHokl1c7jpygE'
, shedule = require('../model/shedule')
;


var bot = new TelegramBot(token, {polling: true});
let data = [];

bot.onText(/\/start/, msg => {
  console.log(msg);
  data.push( msg.from);
  let text = shedule[1].join('\n');
  bot.sendMessage(msg.chat.id, text );
});

setInterval(sendShelude, 5*60000);

function sendShelude() {
  let date = new Date();
  
}

module.exports = data;