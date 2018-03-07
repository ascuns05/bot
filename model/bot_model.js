let TelegramBot = require('node-telegram-bot-api')
, token = '384921691:AAEPgUNJGCazCM0YcftGwIVHokl1c7jpygE'
, shedule = require('./shedule')
, db = require('./crud')
;
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, msg => {
  let date = new Date();
  bot.sendMessage(msg.chat.id, shedule[date.getWeek()%2][date.getDay()].join('\n'), {
    reply_markup: {
      keyboard: [
        ['Получить расписание']
      ]
    }
  } );
  saveUser(msg.from);
});

let isSend = false;
setInterval(sendShelude, 1000);

function sendShelude() {
  let date = new Date();  
  let text = shedule[date.getWeek()%2][date.getDay()].join('\n');
  if (date.getHours() === 8 && !isSend) {
    for (key in data) {
      bot.sendMessage(key, text);
    }
    isSend = !isSend;
  }
}

function saveUser(obj) {
  newUser = {
    id: obj.id,
    name: obj.first_name + ' ' + obj.last_name,
    username: obj.username,
    lang: obj.language_code
  }
  db.create('users', newUser);
}
// getWeek
Date.prototype.getWeek = function () {
  var target  = new Date(this.valueOf());
  var dayNr   = (this.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  var firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() != 4) {
      target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000);
}
