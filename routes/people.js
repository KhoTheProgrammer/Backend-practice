const express = require('express')
const router = express.Router();

const {people} = require("../data")
router.get("/", (req,res) =>{
    res.json({success: true, data: people});
  })
  
  router.post("/", (req, res) => {
    res.send('Success')
  })

module.exports = { router }