module.exports = function(mongoose) {
  return mongoose.model('controls', require('../shemas/controlsShema')(mongoose));
}