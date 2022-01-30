const data = require('../data/zoo_data');

const objAnimalsLocations = data.species.reduce((acc, { location }) => ({
  ...acc, [location]: [],
}), {});

console.log(objAnimalsLocations);

const arrayAnimalsNames = data.species.reduce((acc, specie) => ({
  ...acc, [specie.name]: specie.residents.map((resident) => resident.name),
}), {});

console.log(arrayAnimalsNames);

const allSpeciesLocation = (options) => {
  if (options === undefined || options === '') {
    data.species.forEach((specie) => {
      const getLocal = specie.location;
      objAnimalsLocations[getLocal] = [...objAnimalsLocations[getLocal], specie.name];
      return objAnimalsLocations;
    });
  }
  return objAnimalsLocations;
};

const allSpeciesIncludeNames = (includeNames) => {
  if (includeNames) {
  }
  return objAnimalsLocations;
};

function getAnimalMap(options) {
  allSpeciesLocation(options);
  if (options !== undefined) {
    const { includeNames, sorted = false, sex: sexo } = options;
    // allSpeciesIncludeNames(includeNames);
  }
  // if (sexo === 'female') {
  //   console.log('com sexo female');
  // } else if (sexo === 'female') {
  //   console.log('com sexo male');
  // }
  // if (sorted) {
  //   console.log('com sorted');
  // }
  return objAnimalsLocations;
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
