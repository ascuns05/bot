module.exports = function(mongoose) {

  return mongoose.Schema({ 
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: null
    },
  });

}