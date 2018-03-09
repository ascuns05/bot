module.exports = function(mongoose) {

  return mongoose.Schema({ 
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  });

}