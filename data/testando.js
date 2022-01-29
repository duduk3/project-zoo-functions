const data = require('./zoo_data');

const { hours } = data;

const days = Object.keys(hours);

console.log(hours);

console.log(days);
// const newObj = species.reduce((acc, specie) => ({
//   ...acc, [specie.location]: [],
// }), {});

// const speciesLocation = (local) => {
//   if (local === '' || local === undefined) {
//     species.forEach((specie) => {
//       const getLocal = specie.location;
//       newObj[getLocal] = [...newObj[getLocal], specie.name];
//       return newObj;
//     }, newObj);
//     return newObj;
//   }
// };

// console.log(speciesLocation(''));

// const nameForSpecie = (arg) => {
//   const { location: local, sex: sexo, sorted } = arg;

//   if (sorted) {
//     console.log('show');
//   }
//   return speciesLocation;
// };

// // console.log(nameForSpecie({ location: 'NE', sex: 'male', sorted: true }));

let newObj = {
  chave: ['valor1', 2, true],
  chave2: ['valor', 12, false],
};

const local = 'NE';

newObj = { ...newObj, chave3: ['chaves', 10, false] };
// newObj[local] = [13];

console.log(newObj);

const newObjSpecies = {
  lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'],
  tigers: ['Shu', 'Esther'],
  bears: ['Hiram', 'Edwardo', 'Milan'],
  penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'],
  otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'],
  frogs: ['Cathey', 'Annice'],
  snakes: ['Paulette', 'Bill'],
  elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'],
  giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'],
};

console.log(Object.entries(newObjSpecies));

let timeA = 1000;
let timeB = 500;
let numA = 4;
let numB = 6;
let numC = 2;

const sum = (a, b) => a + b;

setTimeout(() => {
  numC = sum(numA, numB);
  console.log(numC);
}, timeA);

console.log(numC);

setTimeout(() => {
  console.log(sum(numA, numC) === numB);
}, timeB);
