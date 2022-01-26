const data = require('./zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  ids.reduce((id) => id !== '', []);
  return species.filter(({ id }) => {
    for (const i of ids) {
      if (i === id) {
        return i === id;
      }
    }
  });
}

module.exports = getSpeciesByIds;
