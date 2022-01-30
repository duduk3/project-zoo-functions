const data = require('../data/zoo_data');

const { hours } = data;

const obj = {};

const allDates = () => {
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      const { open } = hours[day];
      const { close } = hours[day];
      Object.assign(obj, { [day]: { officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: data.species.filter((specie) => specie.availability.includes(day)).map((e) => (e.name)),
      } });
    } else {
      Object.assign(obj, { [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
    }
  });
  return obj;
};

console.log(allDates());

function getSchedule(scheduleTarget) {
  if (scheduleTarget || scheduleTarget === undefined) {
    allDates();
  }
}

module.exports = getSchedule;
