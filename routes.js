var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

var db = require('./db.js')

module.exports = {
  getHome: getHome,
  getLandscapes: getLandscapes
}

function getHome (req, res) {
  var data = {
    title: "New Zealand Photo Gallery"
  }
  res.render('home', data)
}

function getLandscapes (req, res) {
  
}
