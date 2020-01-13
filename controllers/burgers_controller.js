const express = require("express");
const router = express.Router();
const db = require('../models');


router.get("/", function (req, res) {
  db.burger.findAll({}).then(function (data) {
    const hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {


  db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(data) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(data);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

router.put("/api/burgers/:id", function (req, res) {
 
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
    console.log("id : "+ req.params.id + "devoured : " + req.body.devoured)
  });













module.exports = router;