module.exports = app => {
    const user = require("../controller/user.controller.js");
    var router = require("express").Router();
    // Create a new User
    router.post("/", user.create);
    
    // Retrieve all Users
    router.get("/", user.findAll);
    
    // Retrieve a single User with id
    router.get("/:id", user.findOne);


    
    
    
    app.use('/api/user', router);

  };