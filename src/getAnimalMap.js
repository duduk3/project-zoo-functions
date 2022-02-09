const data = require('../data/zoo_data');

const arrayNames = data.species.reduce((acc, specie) => ({
  ...acc, [specie.name]: specie.residents.map((resident) => resident.name),
}), {});

const femaleFiltered = () => {
  data.species.reduce((acc, specie) => ({
    ...acc,
    [specie.name]: specie.residents
      .filter((resident) => resident.sex === 'female')
      .map((n) => n.name),
  }), {});
};

const maleFiltered = () => {
  data.species.reduce((acc, specie) => ({
    ...acc,
    [specie.name]: specie.residents
      .filter((resident) => resident.sex === 'male')
      .map((n) => n.name),
  }), {});
};

const filterSex = (sex) => {
  if (sex === 'female') femaleFiltered();
  if (sex === 'male') maleFiltered();
};

const arraySorted = () => {
  Object.keys(arrayNames).map((k) => arrayNames[k].sort());
};

const objAniLocals = data.species.reduce((acc, e) => ({ ...acc, ...{ [e.location]: [] } }), {});

const allSpeciesLocation = (options) => {
  data.species.forEach((elem) => {
    objAniLocals[elem.location] = [...objAniLocals[elem.location], ...[elem.name]];
  });
};

const nameSpeciesLocation = (options) => {
  data.species.forEach((elem) => {
    objAniLocals[`${elem.location}`] = [
      ...objAniLocals[`${elem.location}`],
      { [`${elem.name}`]: [...arrayNames[`${elem.name}`]] }];
  });
};

function getAnimalMap(options) {
  if (!options) {
    allSpeciesLocation(options);
    return objAniLocals;
  }

  const { sorted = false, sex: sexo } = options;

  filterSex(sexo);

  if (sorted) arraySorted();

  nameSpeciesLocation(options);

  return objAniLocals;
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
