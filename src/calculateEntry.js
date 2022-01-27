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
  if (entrants === '' || entrants === [] || entrants === {}) {
    return 0;
  }
  const isChild = entrants.filter(({ age }) => age < 18);
  const isAdult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const isSenior = entrants.filter(({ age }) => age >= 50);
  return {
    child: isChild.length,
    adult: isAdult.length,
    senior: isSenior.length,
  };
}

console.log(countEntrants(entrantsDudu));

function calculateEntry(entrants) {
  if (entrants === '' || entrants === undefined) {
    return 0;
  }
  if (Object.values(entrants).length === 0 || entrants.length === 0) {
    return 0;
  }
  const newEntrants = countEntrants(entrants);
  const total = (entry) => entry.adult * 49.99 + entry.child * 20.99 + entry.senior * 24.99;
  return total(newEntrants);
}

console.log(calculateEntry(entrantsDudu));

module.exports = { calculateEntry, countEntrants };
