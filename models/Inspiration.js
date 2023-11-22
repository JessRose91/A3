const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')

// schema
const inspirationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    text: {
        type: String,
    }
  
  
}, { timestamps: true })

//model
const inspirationModel = mongoose.Model ('Inspiration', inspirationSchema)

//export
module.exports = inspirationModel