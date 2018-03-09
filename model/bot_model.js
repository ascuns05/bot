let TelegramBot = require('node-telegram-bot-api')
// , token = '384921691:AAEPgUNJGCazCM0YcftGwIVHokl1c7jpygE'
, shedule = require('./shedule')
, db = require('./crud')
;

Promise.all([db.readOption('botToken'), db.readOption('sheduleTime')]).then( (src) => {
  var token = src[0][0].value;
  var time = src[1][0].value
  var bot = new TelegramBot(token, {polling: true});

  let KB = {
    getShedule: 'Получить расписание'
  }
  
  bot.onText(/\/start/, msg => {
    let date = new Date();
    console.log(shedule[date.getWeek()%2][date.getDay()]);

    bot.sendMessage(msg.chat.id, shedule[date.getWeek()%2][date.getDay()].join('\n'), {
      reply_markup: {
        keyboard: [
          [KB.getShedule]
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
    if (date.getHours() === time-3 && !isSend && date.getDay() !== 0) {
  
      db.allUserRead().then(data => {
        for (var i = 0; i < data.length; i++) {
          bot.sendMessage(data[i].id, text);
        }
        isSend = !isSend;
      });
  
    }
  }
  
});


function saveUser(obj) {
  newUser = {
    id: obj.id,
    name: obj.first_name + ' ' + obj.last_name,
    username: obj.username,
    lang: obj.language_code
  }
  db.createUser(newUser);
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
