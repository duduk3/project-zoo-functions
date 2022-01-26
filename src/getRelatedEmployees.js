const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const namesFilter = employees.filter((employee) => {
      if (employee.managers.includes(managerId)) {
        const { firstName } = employee;
        return firstName;
      }
    });
    return namesFilter.map((name) => name.firstName);
  }
}

console.log(getRelatedEmployees(stephanieId));

module.exports = { isManager, getRelatedEmployees };
