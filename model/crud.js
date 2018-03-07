'use strict'

module.exports = (function () {
  const mongoose = require('mongoose')
    , dbInit = require('./dbConnect')(mongoose)
    ;

  let models = {}
  ;
  models.users = require('./models/userModels')(mongoose);


  function Crud() {}

  Crud.prototype.create = async function(model, obj) {
    this.read(obj.id).then(res => {
      if (!res.length) {
        let newUser = new models[model](obj);
        return newUser.save().
        then(() => console.log('add new user'));
      }
    });
  }
  Crud.prototype.read = async function(userId) {
    return await models.users.find({id: userId})
  }
  Crud.prototype.allRead = async function() {
    return await models.users.find({});
  }

  return new Crud();
}());