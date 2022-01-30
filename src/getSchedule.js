/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
const data = require('../data/zoo_data');

const { hours } = data;

const ob = {};

const allDates = () => {
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      const { open } = hours[day];
      const { close } = hours[day];
      const show = data.species.filter((sp) => sp.availability.includes(day)).map((e) => (e.name));
      Object.assign(ob, { [day]: { officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: show,
      } });
    } else {
      Object.assign(ob, { [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
    }
  });
  return ob;
};

const schedules = allDates();
const days = Object.keys(hours);
const animals = data.species.map((esp) => esp.name);
let animalForDay = [];

const scheduleForSpecie = (animal) => {
  data.species.filter((specie) => {
    if (animal === specie.name) {
      animalForDay = specie.availability;
      return animalForDay;
    }
    return animalForDay;
  });
};

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    scheduleForSpecie(scheduleTarget);
    return animalForDay;
  }
  if (days.includes(scheduleTarget)) {
    const day = days.filter((d) => scheduleTarget.includes(d));
    return {
      [day[0]]: schedules[day[0]],
    };
  }
  return schedules;
}

module.exports = getSchedule;
