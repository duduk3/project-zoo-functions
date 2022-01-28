const data = require('../data/zoo_data');

const { species } = data;

const newObj = species.reduce((acc, { location }) => ({
  ...acc, [location]: [],
}), {});

const newObjSpecies = species.reduce((acc, { name }) => ({
  ...acc, [name]: [],
}), {});

const allSpeciesLocation = (options) => {
  if (options === undefined || options === '') {
    species.forEach((specie) => {
      const getLocal = specie.location;
      newObj[getLocal] = [...newObj[getLocal], specie.name];
      return newObj;
    });
  }
  return newObj;
};

const allSpeciesIncludeNames = (includeNames) => {
  if (includeNames) {
    species.forEach((specie) => {
      const getLocal = specie.location;
      const newObjSpecies2 = newObjSpecies;
      specie.residents.forEach((resident) => {
        const getSpecie = specie.name;
        newObjSpecies2[getSpecie] = [...newObjSpecies2[getSpecie], resident.name];
        return newObjSpecies;
      });
      newObj[getLocal] = [...newObj[getLocal], newObjSpecies[specie.name]];

      return newObj;
    });
  }
  return newObjSpecies;
};

const allSpeciesForSex = (includeNames) => {
  if (includeNames) {
    species.forEach((specie) => {
      const getLocal = specie.location;
      specie.residents.forEach((resident) => {
        newObj[getLocal] = [...newObj[getLocal], { getlocal: resident.name }];
      });
      return newObjSpecies;
    });
  }
  return newObj;
};

function getAnimalMap(options) {
  allSpeciesLocation(options);
  if (options !== undefined) {
    const { includeNames, sorted = false, sex: sexo } = options;
    allSpeciesIncludeNames(includeNames);
  }
  // if (sexo === 'female') {
  //   console.log('com sexo female');
  // } else if (sexo === 'female') {
  //   console.log('com sexo male');
  // }
  // if (sorted) {
  //   console.log('com sorted');
  // }
  return newObj;
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
