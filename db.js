exports = module.exports = function(app, config) {
  var random = require("randomstring");
  var PouchDB = require('pouchdb');
  PouchDB.plugin(require('pouchdb-find'));
  var dbList = {};
  var mod = {
    save: function(object, name) {
      if (typeof object._id === "undefined") object._id = "id-" + random.generate(32);
      if (typeof dbList[name] === "undefined") dbList[name] = new PouchDB(name);
      var db = dbList[name];
      return db.put(object);
    },
    record: function(selector, name) {
      return new Promise(async function(resolve, reject) {
        var {list} = await app.wrapper("list", mod.records(selector, name));
        if (typeof list !== "undefined" && list.length > 0) {
          resolve(list[0]);
        } else {
          reject(true);
        }
      });
    },
    records: function(selector, name) {
      return new Promise(async function(resolve, reject) {
        if (typeof dbList[name] === "undefined") dbList[name] = new PouchDB(name);
        var db = dbList[name];
        var {error, result} = await app.wrapper("result", db.find({selector: selector}));
        if (typeof result !== "undefined" && typeof result.docs !== "undefined") {
          resolve(result.docs);
        } else {
          reject(true);
        }
      });
    }
  };
  return mod;
};