let TelegramBot = require('node-telegram-bot-api')
, token = '384921691:AAEPgUNJGCazCM0YcftGwIVHokl1c7jpygE'
;

var bot = new TelegramBot(token, {polling: true});

bot.onText('/\/echo (.+)/', function (msg, match) {
    let fromId = msg.from.id;
    let resp = match[1];
    bot.sendMessage(fromId, resp);
    console.log(msg);
});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Бот в процессе создания');
});