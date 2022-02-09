const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

let newEmployee = [];

const filterEmployees = (arg) => {
  const { name, id } = arg;
  employees.filter((employee) => {
    if (name === employee.firstName || name === employee.lastName || id === employee.id) {
      newEmployee = [...newEmployee, employee];
      return newEmployee;
    }
    newEmployee = [...newEmployee, employee];
    return newEmployee;
  });
  return newEmployee;
};

const getNameById = (id) => species.filter((element) => id === element.id).map((el) => el.name);

const getLocal = (id) => species.filter((element) => id === element.id).map((el) => el.location);

function getEmployeesCoverage(arg) {
  if (arg === true) {
    return filterEmployees(arg);
  }
  return employees.reduce((acc, el) => {
    const { responsibleFor } = el;
    const specieName = responsibleFor.reduce((acum, item) => [...acum, ...getNameById(item)], []);
    const locals = responsibleFor.reduce((ac, item) => [...ac, ...getLocal(item)], []);
    const fullName = `${el.firstName} ${el.lastName}`;
    acc = [...[acc],
      ...[{
        id: el.id,
        fullName,
        species: [...specieName],
        locations: [...locals],
      }]];
    return acc;
  }, []);
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
