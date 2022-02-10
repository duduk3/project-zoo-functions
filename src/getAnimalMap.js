const data = require('../data/zoo_data');

const arrayNames = data.species.reduce((acc, specie) => ({
  ...acc, [specie.name]: specie.residents.map((resident) => resident.name),
}), {});

const arrayFemale = data.species.reduce((acc, specie) => ({
  ...acc,
  [specie.name]: specie.residents
    .filter((resident) => resident.sex === 'female')
    .map((n) => n.name),
}), {});

const arrayMale = data.species.reduce((acc, specie) => ({
  ...acc,
  [specie.name]: specie.residents
    .filter((resident) => resident.sex === 'male')
    .map((n) => n.name),
}), {});

const arraySorted = (array) => {
  Object.keys(array).map((k) => array[k].sort());
};

const objAniLocals = data.species.reduce((acc, e) => ({ ...acc, ...{ [e.location]: [] } }), {});

const allSpeciesLocation = () => {
  data.species.forEach((elem) => {
    objAniLocals[elem.location] = [...objAniLocals[elem.location], ...[elem.name]];
  });
};

const nameSpeciesLocation = (array) => {
  data.species.forEach((elem) => {
    objAniLocals[`${elem.location}`] = [
      ...objAniLocals[`${elem.location}`],
      { [`${elem.name}`]: [...array[`${elem.name}`]] }];
  });
};

const filterSex = (sex) => {
  if (sex === 'female') {
    return arrayFemale;
  }
  if (sex === 'male') {
    return arrayMale;
  }
  return arrayNames;
};

function getAnimalMap(options) {
  if (!options || options.includeNames !== true) {
    allSpeciesLocation();
    return objAniLocals;
  }

  const { sorted = false, sex: sexo } = options;

  if (sorted) arraySorted(filterSex(sexo));

  nameSpeciesLocation(filterSex(sexo));

  return objAniLocals;
}

console.log(getAnimalMap({ includeNames: true, sorted: false, sex: 'male' }));

module.exports = getAnimalMap;
