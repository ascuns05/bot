module.exports = function(mongoose) {
  return mongoose.model('users', require('../shemas/userShema')(mongoose));
}