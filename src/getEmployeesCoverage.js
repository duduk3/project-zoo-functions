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
  const { name: fullName, id } = arg;
  let cutName = '';
  if (fullName) {
    cutName = fullName.split(' ');
  }
  let obj = {};
  employees.reduce((acc, emp) => {
    if (emp.id === id || emp.firstName === cutName[0] || emp.lastName === cutName[0]) {
      obj = {
        id: emp.id,
        fullName: `${emp.firstName} ${emp.lastName}`,
        species: emp.responsibleFor.map((name) => getNameById(name)),
        location: emp.responsibleFor.map((name) => getLocal(name)),
      };
    }
    return obj;
  }, {});
  return obj;
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
