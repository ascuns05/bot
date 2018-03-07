module.exports = {
  path: 'mongodb://admin:backdoor@ds251598.mlab.com:51598/shedule-bot'
  , options: {
    autoReconnect: true,
    useMongoClient: true,
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500, 
    poolSize: 10
  }
}