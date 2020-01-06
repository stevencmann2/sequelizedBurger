const orm = require('../config/orm.js');

// select all from table
orm.selectAll("burgers");

// Insert One into the Table
//table, tableCol, valOfCol.
orm.insertOne("burgers", "burger_name", ""); //// EMPTY STRING? for value? 

//Update one in the table
// table, tableCol, valOfCol, tableColtwo, valofColtwo
orm.updateOne("burgers", "burger_name", "id", "");


module.export = burger;