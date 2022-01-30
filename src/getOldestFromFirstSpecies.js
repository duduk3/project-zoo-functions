const data = require('../data/zoo_data');

const { employees } = data;

const speciesForManager = employees.reduce((acc, item) => {
  const employeeId = item.id;
  acc[employeeId] = [];
  acc[employeeId].push(item.responsibleFor);
  return acc;
}, {});

const getfirstAnimal = (employeeId) => speciesForManager[employeeId][0][0];

function getOldestFromFirstSpecies(id) {
  const animal1 = getfirstAnimal(id);
  const animalsData = data.species.filter((specie) => specie.id === animal1)[0].residents;
  let old = 0;
  let older;
  Object.values(animalsData).forEach((animal) => {
    if (animal.age > old) {
      old = animal.age;
      older = animal;
    }
    return older;
  });
  return Object.values(older);
}

module.exports = getOldestFromFirstSpecies;
