const sql = require("./db.js");
// constructor
const userOffer = function(user) {
  this.userid = user.userid;
  this.offerid = user.offerid;
  this.offerUsedOn  = user.offerUsedOn;
};

userOffer.insertUserOfferData = (newUserOfferData, result) => {
  
  sql.query("INSERT INTO useroffer SET ?", newUserOfferData, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created user: ", { id: res.insertId, ...newUserOfferData });
    result(null, { id: res.insertId, ...newUserOfferData });
  });
};

userOffer.findOfferForUsers = (userid, result) => {
  return new Promise(resolve => {
    sql.query(`SELECT * FROM userOffer where userid = ${userid}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        resolve(result(err, null));
        return;
      }
      if (res.length) {
        console.log("found offer for user: ", res);
        resolve(result(null, res));
        return;
      }
      // not found user with the id
      resolve(result({ kind: "not_found" }, null));
    });
  });
  
};
module.exports = userOffer;