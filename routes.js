var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

var db = require('./db.js')

module.exports = {
  getHome: getHome,
  getLandscapes: getLandscapes,
  getCityscapes: getCityscapes,
  getSunsets: getSunsets,
  getAnimals: getAnimals
}

function getHome (req, res) {
  db.getHomePics()
    .then(function(images) {
      var data = {
        title: "New Zealand Photo Gallery | Home",
        images: images
      }
      res.render('home', data)
    })
    .catch(function (err) {
   res.status(500).send('Error' + err.message)
 })
}

function getLandscapes (req, res) {
  db.landscapes()
    .then(function(images) {
      var data = {
        title: "New Zealand Photo Gallery | Landscapes",
        images: images
      }
      res.render('gallery', data)
    })
}

function getCityscapes (req, res) {
  db.cityscapes()
    .then(function(images) {
      var data = {
        title: "New Zealand Photo Gallery | Cityscapes",
        images: images
      }
      res.render('gallery', data)
    })
}

function getSunsets (req, res) {
  db.sunsets()
    .then(function(images) {
      var data = {
        title: "New Zealand Photo Gallery | Sunsets and Sunrises",
        images: images
      }
      res.render('gallery', data)
    })
}

function getAnimals (req, res) {
  db.animals()
    .then(function(images) {
      var data = {
        title: "New Zealand Photo Gallery | Animals and Birds",
        images: images
      }
      res.render('gallery', data)
    })
}
