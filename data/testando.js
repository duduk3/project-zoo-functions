const data = require('./zoo_data');

const { species } = data;

const newObj = species.reduce((acc, specie) => ({
  ...acc, [specie.location]: [],
}), {});

const speciesLocation = (local) => {
  if (local === '' || local === undefined) {
    species.forEach((specie) => {
      const getLocal = specie.location;
      newObj[getLocal] = [...newObj[getLocal], specie.name];
      return newObj;
    }, newObj);
    return newObj;
  }
};

console.log(speciesLocation(''));

const nameForSpecie = (arg) => {
  const { location: local, sex: sexo, sorted } = arg;

  if (sorted) {
    console.log('show');
  }
  return speciesLocation;
};

// console.log(nameForSpecie({ location: 'NE', sex: 'male', sorted: true }));
