const data = require('../data/zoo_data');

const entrantsDudu = [
  { name: 'edu', age: 5 },
  { name: 'dudu', age: 5 },
  { name: 'du', age: 5 },
  { name: 'eduardo', age: 18 },
  { name: 'duda', age: 18 },
  { name: 'duduka', age: 50 },
];

function countEntrants(entrants) {
  const isChild = entrants.filter(({ age }) => age < 18);
  const isAdult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const isSenior = entrants.filter(({ age }) => age >= 50);
  // if (isChild.length > 0) {
  //   console.log(isChild.length);
  // }
  return {
    child: isChild.length,
    adult: isAdult.length,
    senior: isSenior.length,
  };
}

console.log(countEntrants(entrantsDudu));

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
