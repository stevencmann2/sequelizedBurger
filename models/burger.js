const orm = require('../config/orm.js');



const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};





// // select all from table
// orm.selectAll("burgers");

// // Insert One into the Table
// //table, tableCol, valOfCol.
// orm.insertOne("burgers", "burger_name", ""); //// EMPTY STRING? for value? or function?

// //Update one in the table
// // table, tableCol, valOfCol, tableColtwo, valofColtwo
// orm.updateOne("burgers", "burger_name", "id", "");


module.exports = burger;