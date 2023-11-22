const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Inspiration = require('./../models/Inspiration')

// GET all inspirations----------------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
   User.find({email: req.body.email})
      .then(inspiration => {
        if(inspiration == null){
          return res.status(404).json({
            message: "No inspiration found"
          })
        }
        res.json(inspiration)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "Problem getting inspiration"
        })
      })  
  })
  
  // export
  module.exports = router
  
