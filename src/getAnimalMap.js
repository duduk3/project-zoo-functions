const data = require('../data/zoo_data');

const allAnimals = data.species;

function Prepare(residents, sexo) {
  return residents
    .filter(({ sex }) => sex === sexo || !sexo)
    .map((animal) => animal.name);
}

function Region(includeName, sex, sortedBy) {
  const result = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  return allAnimals.reduce((acc, { location, name, residents }) => {
    if (includeName) {
      const prepared = Prepare(residents, sex);
      acc[location].push({
        [name]: sortedBy ? prepared.sort() : prepared,
      });
    } else {
      acc[location].push(name);
    }
    return acc;
  }, result);
}

function getAnimalMap(
  options = { includeNames: false, sex: false, sorted: false },
) {
  if (!options.includeNames) {
    return Region(options.includeNames, options.sex, options.sorted);
  }
  return Region(options.includeNames, options.sex, options.sorted);
}


module.exports = getAnimalMap;