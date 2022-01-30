const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

let newEmployee = [];

const filterEmployees = (arg) => {
  const { name, id } = arg;
  employees.forEach((employee) => {
    if (name === employee.firstName || name === employee.lastName || id === employee.id) {
      newEmployee = [...newEmployee, employee];
    }
  });
  return newEmployee;
};
console.log(filterEmployees({ name: 'Spry' }));

function getEmployeesCoverage(arg) {
  const getEmployeeData = filterEmployees(arg);
  return getEmployeeData.reduce((acc, el) => {
    const specieName = [];
    data.species.forEach((spec) => {
      if (el.responsibleFor === spec.id) {
        specieName.push(spec.name);
      }
    });
    const fullName = `${el.firstName} ${el.lastName}`;
    return {
      id: el.id,
      fullName,
      species: [...specieName],

    };
  }, {});
}

console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
