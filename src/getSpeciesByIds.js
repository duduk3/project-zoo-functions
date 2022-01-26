const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  ids.reduce((id) => id !== '', []);
  return data.species.filter(({ id }) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (id === ids[i]) {
        return id === ids[i];
      }
    }
  });
}

module.exports = getSpeciesByIds;
