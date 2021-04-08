
var uniqueRandomArray = require('unique-random-array');
var StarWarsNames = require('./starwars-names.json');

module.exports = {
  all: StarWarsNames,
  random: uniqueRandomArray(starWarsNames)
}