module.exports = app => {
    const userOffer = require("../controller/userOffer.controller.js");
    var router = require("express").Router();
   
    
    // save offer data for user
    router.post("/:userid/offer/:offerid", userOffer.insertOfferDataForUser);

    // Retrieve offers data for single User with id's
    router.get("/:userid/offer/", userOffer.findOfferForUsers);
    
    
    app.use('/api/user', router);

  };