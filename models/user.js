const sql = require("./db.js");
// constructor
const user = function(user) {
  this.username = user.username; 
};
user.create = (newUser, result) => {
  
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};
user.findById = (id, result) => {
  sql.query(`SELECT * FROM user WHERE userid = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};
user.getAll = (result) => {
  let query = "SELECT * FROM user";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("user: ", res);
    result(null, res);
  });
};
module.exports = user;