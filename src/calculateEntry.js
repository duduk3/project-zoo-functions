const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
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
