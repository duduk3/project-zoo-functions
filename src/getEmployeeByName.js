const data = require('../data/zoo_data');

const { employees } = data;

const emptyObject = {};
function getEmployeeByName(employeeName) {
  if (employeeName === '' || employeeName === undefined) {
    return emptyObject;
  }
  const first = employees.filter(({ firstName }) => firstName === employeeName);
  const last = employees.filter(({ lastName }) => lastName === employeeName);
  if (last.length === 0) {
    return first[0];
  }
  return last[0];
}

module.exports = getEmployeeByName;
