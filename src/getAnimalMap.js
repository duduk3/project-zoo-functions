const data = require('../data/zoo_data');

const { species } = data;

const newObj = species.reduce((acc, specie) => ({
  ...acc, [specie.location]: [],
}), {});

const speciesLocation = () => {
  species.forEach((specie) => {
    const getLocal = specie.location;
    newObj[getLocal] = [...newObj[getLocal], specie.name];
    return newObj;
  }, newObj);
  return newObj;
};

function getAnimalMap(options) {
  if (options === undefined || options === '') {
    return speciesLocation();
  }
  // const { location: local, sex: sexo, sorted } = options;
  // if (local === '' || local === undefined) {
  // }
  return 'aqui';
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
