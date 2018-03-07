module.exports = function(mongoose) {
  let dbConfig = require('./dbConfig');

  mongoose.connect(dbConfig.path, dbConfig.options);

  function log(msg) {
    let date = new Date();
    console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}::${date.getMilliseconds()}]: ${msg}.`);
  }

  mongoose.connection.on('connecting', () => {
    log('Connecting to DB');
  });

  mongoose.connection.on('connected', () => {
    log('DB connected');
  });

  mongoose.connection.on('error', () => {
    log('DB connect error. Closing app');
    process.exit(0);
  });

  mongoose.connection.on('disconnected', () => {
    log('DB disconnected. Trying to reconnect');
  });

  mongoose.connection.on('reconnected', () => {
    log('DB reconnected');
  });

  mongoose.connection.on('open', () => {
    log('Connection open');
  });
}