const sql = require("./db.js");
// constructor
const offer = function(offer) {
  this.title = offer.title;
  this.description = offer.description;
};
offer.create = (newOffer, result) => {
  
  sql.query("INSERT INTO Offer SET ?", newOffer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created offer: ", { id: res.insertId, ...newOffer });
    result(null, { id: res.insertId, ...newOffer });
  });
};
offer.findById = (id, result) => {
  sql.query(`SELECT * FROM offer WHERE offerid = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found offer: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found offer with the id
    result({ kind: "not_found" }, null);
  });
};
offer.getAll = (result) => {
  let query = "SELECT * FROM offer";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("offer: ", res);
    result(null, res);
  });
};

module.exports = offer;