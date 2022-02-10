/* eslint-disable max-lines-per-function */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

const getNameById = (id) => species
  .filter((element) => id === element.id)
  .reduce((a, el) => el.name, []);

const getLocal = (id) => species
  .filter((element) => id === element.id)
  .reduce((a, el) => el.location, []);

function getEmployeesCoverage(arg) {
  let cutName = '';
  if (arg) {
    const { name: full } = arg;
    if (full) {
      cutName = full.split(' ');
    }
  }
  let obj = {};
  employees.reduce((acc, emp) => {
    if (!arg) {
      obj = [...acc, ...[{
        id: emp.id,
        fullName: `${emp.firstName} ${emp.lastName}`,
        species: emp.responsibleFor.map((name) => getNameById(name)),
        location: emp.responsibleFor.map((name) => getLocal(name)),
      }]];
      return obj;
    }
    if (emp.id === arg.id || emp.firstName === cutName[0] || emp.lastName === cutName[0]) {
      obj = {
        id: emp.id,
        fullName: `${emp.firstName} ${emp.lastName}`,
        species: emp.responsibleFor.map((name) => getNameById(name)),
        location: emp.responsibleFor.map((name) => getLocal(name)),
      };
      return obj;
    }
    return obj;
  }, []);
  return obj;
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
