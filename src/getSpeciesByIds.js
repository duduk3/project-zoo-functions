const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  ids.reduce((id) => id !== '', []);
  const speciesId = data.species.filter(({ id }) => {
    const getSpecie = () => {
      for (let i = 0; i < ids.length; i += 1) {
        if (id === ids[i]) {
          return id === ids[i];
        }
      }
    };
    return getSpecie();
  });
  return speciesId;
}

module.exports = getSpeciesByIds;
