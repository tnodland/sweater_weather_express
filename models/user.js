'use strict';
var randomstring = require("randomstring");
var bcrypt = require('bcrypt');
var saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    api_key: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

  User.createUser = function(body) {
    if (body.password === body.password_confirmation) {
      var user = User.create({
        email: body.email,
        password: bcrypt.hashSync(body.password, saltRounds),
        api_key: randomstring.generate()
      })
    };
    return user
  };

  User.validateLogin = function(body) {
  return new Promise(function (resolve, reject){
    User.findOne({
      where: {
        email: body.email
      }
    })
    .then(user => {
      if (bcrypt.compareSync(body.password, user.password)) {
        resolve(user);
      }
      else {
        reject(error);
      }
    })
    .catch(error => {
      reject(error);
    });
  })


  return User;
};
