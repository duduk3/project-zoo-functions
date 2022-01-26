const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const specie = species.filter(({ name }) => animal === name);
  return specie[0].residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
