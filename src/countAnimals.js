const data = require('../data/zoo_data');

const { species } = data;
const specieNames = species;

function countAnimals(animal) {
  specieNames.reduce((acc, specie) => ({ ...acc, [specie.name]: specie.residents.length }), {});
  if (animal === '' || animal === undefined) {
    return specieNames;
  }
  const { specie, sex } = animal;
  if (!sex && species.some(({ name }) => name === specie)) {
    return specieNames[specie];
  }
  const animalsSpecie = species.filter(({ name }) => name === specie);
  const animalsSpecieSex = animalsSpecie[0].residents.filter((resident) => (resident.sex === sex));
  return animalsSpecieSex.length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
