const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const namesManager = employees;
  if (isManager(managerId)) {
    return namesManager.filter((employee) => {
      const getName = () => {
        if (employee.managers.includes(managerId)) {
          const { firstName } = employee;
          return firstName;
        }
      };
      return getName();
    }).map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
