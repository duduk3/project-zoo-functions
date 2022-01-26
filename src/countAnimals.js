const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal, ...sexo) {
  const specieNames = species.reduce((acc, specie) => ({ ...acc, [specie.name]: specie.residents.length }), {});
  if (animal === '' || animal === undefined) {
    return specieNames;
  }
  const { specie, sex } = animal;
  if (!sex && species.some(({ name }) => name === specie)) {
    return { [specie]: specieNames[specie] };
  }
  const animalsSpecie = species.filter((e) => e.location === 'NE');
  return animalsSpecie;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
