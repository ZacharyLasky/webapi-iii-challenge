const express = "express";
const router = require("express").Router();
const database = require("../users/userDb");

router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  database
    .insert(data)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.post("/:id/posts", validateUserId, (req, res) => {
  const data = req.body;
  database
    .insert(data)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

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
  const id = req.params.id;

  database
    .getById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {
  const id = req.params.id;
  
  next();
}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
