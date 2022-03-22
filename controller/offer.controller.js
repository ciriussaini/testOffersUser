const offer = require("../models/offer.js");

exports.create = (req, res) => {
    // Validate request 
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Offer
    const offerData = new offer({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false
    });
    // Save Offer in the database
    offer.create(offerData, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Offer."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    // const title = req.query.title;
    offer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving offers."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    offer.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found offer with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving offer with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };