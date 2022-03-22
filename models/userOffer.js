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
  sql.query(`SELECT * FROM userOffer where userid = ${userid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found offer for user: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};
module.exports = userOffer;