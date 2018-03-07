module.exports = function(mongoose) {
  return mongoose.model('User', require('../shemas/userShema')(mongoose));
}