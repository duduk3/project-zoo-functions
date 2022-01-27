const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId)) {
      const namesFilter = employees.filter((employee) => {
        if (employee.managers.includes(managerId)) {
          const { firstName } = employee;
          return firstName;
        }
        return namesFilter;
      });
      return namesFilter.map((name) => name.firstName);
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { isManager, getRelatedEmployees };
