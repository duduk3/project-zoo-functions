const data = require('../data/zoo_data');

const emptyArray = [];

// eslint-disable-next-line sonarjs/cognitive-complexity
function getSpeciesByIds(...ids) {
  for (let index = 0; index < ids.length; index += 1) {
    if (ids[index] === '') {
      return emptyArray;
    }
  }
  // eslint-disable-next-line array-callback-return
  return data.species.filter(({ id }) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (id === ids[i]) {
        return id === ids[i];
      }
    }
  });
}

module.exports = getSpeciesByIds;
