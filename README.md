ReadMe
installation:

step1: npm i express request mysql2 cors body-parser --save

step2:	npm install -g nodemon

step3: add configuration in db.config.js

step4: nodemon index.js





**API's**

a) Offer Creation:
1. GET:  get all the offers present in system :         http://localhost:8080/api/offer
2. POST: creates an new offer                 :         http://localhost:8080/api/offer
                                                        Body: {    "title":"3",    "description":"3"  }
3. GET  : Get offer by id                     :         http://localhost:8080/api/offer/2

b) user creation
1. GET:  get all the users present in system :         http://localhost:8080/api/user
2. POST: creates an new user                 :         http://localhost:8080/api/user
                                                        Body: {    "username":"happy"  }
3. GET  : Get user by id                     :         http://localhost:8080/api/user/2

c) user offer data (screen 3)
1. GET offer for particular user              :       http://localhost:8080/api/user/1/offer/    
2. save offer used by user                    :       http://localhost:8080/api/user/1/offer/1
                                                         body : {"offerUsedOn":"2022-01-01"}







**Database Tables : **

CREATE TABLE IF NOT EXISTS `offer` (
  offerid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `user` (
  userid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `useroffer` (
  userofferid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userid int(11) NOT NULL,
  offerid int(11) NOT NULL,
  offerUsedOn Date,
  FOREIGN KEY (userid) REFERENCES user(userid),
  FOREIGN KEY (offerid) REFERENCES offer(offerid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
