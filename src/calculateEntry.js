const data = require('../data/zoo_data');

const { prices } = data;

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

function calculateEntry(entrants) {
  if (entrants === '' || entrants === undefined) {
    return 0;
  }
  if (Object.values(entrants).length === 0 || entrants.length === 0) {
    return 0;
  }
  const newEntrants = countEntrants(entrants);
  const total = (entry) => {
    const totalAdults = entry.adult * prices.adult;
    const totalChilds = entry.child * prices.child;
    const totalSeniors = entry.senior * prices.senior;
    return totalAdults + totalChilds + totalSeniors;
  };
  return total(newEntrants);
}

module.exports = { calculateEntry, countEntrants };
