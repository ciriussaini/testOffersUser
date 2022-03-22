module.exports = app => {
    const offer = require("../controller/offer.controller.js");
    var router = require("express").Router();
    // Create a new Offer
    router.post("/", offer.create);
    
    // Retrieve all Offers
    router.get("/", offer.findAll);
    
    // Retrieve a single Offer with id
    router.get("/:id", offer.findOne);


    
    
    
    app.use('/api/offer', router);

  };