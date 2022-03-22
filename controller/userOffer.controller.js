const userOffer = require("../models/userOffer.js");

exports.insertOfferDataForUser = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    //user
    const userOfferData = new userOffer({
      offerid: parseInt(req.params.offerid),
      userid: parseInt(req.params.userid),
      offerUsedOn: req.body.offerUsedOn ? req.body.offerUsedOn : new Date()
    });
   
    // Save user offer data in the database
    userOffer.insertUserOfferData(userOfferData, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };

  exports.findOfferForUsers = (req, res) => {
    userOffer.findOfferForUsers(req.params.userid, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found offer with user id ${req.params.userid}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving offer with user id " + req.params.userid
          });
        }
      } else res.send(data);
    });
  };