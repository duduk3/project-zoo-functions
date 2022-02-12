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

let obj = {};

const allEmployees = (arg) => {
  employees.reduce((acc, emp) => {
    if (!arg) {
      obj = [...acc, ...[{
        id: emp.id,
        fullName: `${emp.firstName} ${emp.lastName}`,
        species: emp.responsibleFor.map((name) => getNameById(name)),
        locations: emp.responsibleFor.map((name) => getLocal(name)),
      }]];
      return obj;
    }
    return obj;
  }, []);
  return obj;
};

const searchEmployee = (arg) => {
  let cutName = '';
  const { name: full } = arg;
  if (full) {
    cutName = full.split(' ');
  }
  employees.reduce((acc, emp) => {
    if (emp.id === arg.id || emp.firstName === cutName[0] || emp.lastName === cutName[0]) {
      obj = {
        id: emp.id,
        fullName: `${emp.firstName} ${emp.lastName}`,
        species: emp.responsibleFor.map((name) => getNameById(name)),
        locations: emp.responsibleFor.map((name) => getLocal(name)),
      };
      return obj;
    }

    return obj;
  }, []);
};

const verifyArg = (arg) => {
  const { name, id } = arg;
  let full = '';
  if (name) {
    full = name.split(' ');
  }
  const fisrstVerify = employees.some((nam) => nam.firstName === full[0]);
  const lastVerify = employees.some((nam) => nam.lastName === full[0]);
  const idVerify = employees.some((nam) => nam.id === id);
  if (fisrstVerify || lastVerify || idVerify) return true;
};

function getEmployeesCoverage(arg) {
  if (!arg) {
    allEmployees(arg);
    return obj;
  }
  if (verifyArg(arg)) {
    searchEmployee(arg);
    return obj;
  }
  if (!verifyArg(arg)) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
