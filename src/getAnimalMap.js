const data = require('../data/zoo_data');

const newObj = data.species.reduce((acc, { location }) => ({
  ...acc, [location]: [],
}), {});

console.log(newObj);

const newObjSpecies = data.species.reduce((acc, { name }) => ({
  ...acc, [name]: [],
}), []);


const animalsNames = data.species.map((specie) => specie.residents);


const allSpeciesLocation = (options) => {
  if (options === undefined || options === '') {
    data.species.forEach((specie) => {
      const getLocal = specie.location;
      newObj[getLocal] = [...newObj[getLocal], specie.name];
      return newObj;
    });
  }
  return newObj;
};

const allSpeciesIncludeNames = (includeNames) => {
  if (includeNames) {
    data.species.forEach((specie) => {
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

console.log(getAnimalMap());

module.exports = getAnimalMap;
