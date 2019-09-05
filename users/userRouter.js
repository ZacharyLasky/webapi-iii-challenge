const express = "express";
const router = require("express").Router();
const database = require("../users/userDb");

router.post("/", validateUser, (req, res) => {
    database
      .insert(req.body.name)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json({ message: error });
        console.log(error)
      });
});

// router.post("/:id/posts", validateUserId, (req, res) => {
  
// });

router.get("/", (req, res) => {
  database
    .get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.get("/:id", validateUserId, (req, res) => {
  database.getById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({message: error})
    })
});

// router.get("/:id/posts", (req, res) => {});

router.delete("/:id", validateUserId, (req, res) => {
  database.remove(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({message: error})
    })
});

router.put("/:id", validateUserId, (req, res) => {
  database.update(req.params.id, req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({message: error})
    })
});

//custom middleware

function validateUserId(req, res, next) {
  database.getById(req.params.id) 
   .then(user => {
     if (user) {
       next();
     }
     else {
       res.status(404).json({message: "invalid id"})
     }
   })
}

function validateUser(req, res, next) {
  if (!req.body.name) {
    res.status(400).json({message: "provide name"})
  }
  next();
}

function validatePost(req, res, next) {}

module.exports = router;
