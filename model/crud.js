'use strict'

module.exports = (function () {
  const mongoose = require('mongoose')
    , dbInit = require('./dbConnect')(mongoose)
    ;

  let models = {}
  , newObj
  ;
  models.users = require('./models/userModels')(mongoose);


  function Crud() {}

  Crud.prototype.create = async function(model, obj) {
    if (!this.read(obj.id)) {
      newObj = new models[model](obj);
      return await newObj.save().
      then(() => console.log('add new user'));
    }
    
  }
  Crud.prototype.read = async function(userId) {
    return await models.users.find({id: userId})
  }
  Crud.prototype.allRead = async function() {
    return await models.users.find({});
  }

  return new Crud();
}());