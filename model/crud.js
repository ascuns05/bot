'use strict'

module.exports = (function () {
  const mongoose = require('mongoose')
    , dbInit = require('./dbConnect')(mongoose)
    ;

  let models = {}
  ;
  models.users = require('./models/userModels')(mongoose);
  models.controls = require('./models/controlsModel')(mongoose);

  function Crud() {}

  Crud.prototype.createUser = async function(obj) {
    this.readUser(obj.id).then(res => {
      if (!res.length) {
        let newUser = new models.users(obj);
        return newUser.save().
        then(() => console.log('add new user'));
      }
    });
  }

  Crud.prototype.readUser = async function( userId) {
    return await models.users.find({id: userId})
  }
  Crud.prototype.allUserRead = async function() {
    return await models.users.find({});
  }
  Crud.prototype.allControlsRead = async function() {
    return await models.controls.find({});
  }
  Crud.prototype.updateOption = async function(optionType, name) {
    return await models.controls.findOneAndUpdate({type: optionType}, {value: name}, {upsert: true}, function(err, doc) {
      if(err){
          console.log("Something wrong when updating data!");
      }
      console.log(doc);
    });
  }
  Crud.prototype.createOption = async function(obj) {
    this.readOption(obj.type).then(res => {
      if (!res.length) {
        let newOption = new models.controls(obj);
        return newOption.save().
        then(() => console.log('add new option'));
      }
    });
  }
  Crud.prototype.readOption = async function(optionType) {
    return await models.controls.find({type: optionType});
  }
  return new Crud();
}());