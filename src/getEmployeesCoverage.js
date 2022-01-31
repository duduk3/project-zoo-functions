const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

let newEmployee = [];

const filterEmployees = (arg) => {
  const { name, id } = arg;
  employees.filter((employee) => {
    if (name === employee.firstName || name === employee.lastName || id === employee.id) {
      newEmployee = [...newEmployee, employee];
    }
    return true;
  });
  return false;
};

const getNameById = (id) => species.filter((element) => id === element.id).map((el) => el.name);

const getLocal = (id) => species.filter((element) => id === element.id).map((el) => el.location);

const idAnimal = '';

function getEmployeesCoverage(arg) {
  const getEmployeeData = filterEmployees(arg);
  return employees.reduce((acc, el) => {
    const { responsibleFor } = el;
    const specieName = responsibleFor.reduce((acum, item) => [...acum, ...getNameById(item)], []);
    const specieLocal = responsibleFor.reduce((acumulator, item) => [...acumulator, ...getLocal(item)], []);
    const fullName = `${el.firstName} ${el.lastName}`;
    return {
      id: el.id,
      fullName,
      species: specieName,
      locations: specieLocal,
    };
  }, {});
}

console.log(getEmployeesCoverage({ name: 'Nelson' }));

module.exports = getEmployeesCoverage;
