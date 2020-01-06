const connection = require('./connection.js') ;

const orm = {
//selectAll()
selectAll: function(table) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
//insertOne()
insertOne: function(table, tableCol, valOfCol) {
    const queryString = "INSERT INTO ?? ?? VALUES ?";
    connection.query(queryString, [table, tableCol, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
//updateOne()
updateOne: function(table, tableCol, valOfCol, tableColtwo, valofColtwo) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, tableCol, valOfCol, tableColtwo, valofColtwo], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },


}
module.exports = orm; 