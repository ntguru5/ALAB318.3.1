const express = require("express");
const router = express.Router();

// place to store comments
const comments = [];

router.get('/', (req, res) => {
  console.log("This is the comments route");
  res.json(comments)
});










module.exports = router;
