var orm = require("../config/orm.js");

var burger = {
    // See all the burgers
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // Create a new burger on the list
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    // Update an existing burger
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb){
      orm.delete("burgers", condition, function(res) {
        cb(res);
      })
    }
  };
  
  // Export the database functions for the controller.
  module.exports = burger;