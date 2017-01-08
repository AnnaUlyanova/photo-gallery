var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  landscapes: landscapes,
  cityscapes: cityscapes,
  sunsets: sunsets,
  animals: animals,
  getHomePics: getHomePics
}

function landscapes() {
  return connection ('images')
    .where({type: 'Landscapes'})
}

function cityscapes() {
  return connection ('images')
    .where({type: 'Cityscapes'})
}

function sunsets() {
  return connection ('images')
    .where({type: 'Sunsets and Sunrises'})
}

function animals() {
  return connection ('images')
    .where({type: 'Wildlife'})
}

function getHomePics() {
  return connection ('images')
    .where({home: 'true'})
}
