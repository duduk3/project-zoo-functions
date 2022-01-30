const data = require('./zoo_data');

// const newObj = {};

// const animalsLocation = data.species.reduce((acc, specie) => ({
//   ...acc, [specie.location]: data.species.filter((takenames) => specie.location === takenames.location).map((resident) => resident.name),
// }), {});

// const fillSpecies = () => {
// };

// fillSpecies();

// console.log(animalsLocation);

// //* * */ =======================================

// // function groupBy (array, key) {
// // 	return array.reduce((acc, item) => ({
// //       ...acc,
// //       [item[key]]: [...(acc[item[key]] ?? []), item],
// //     }),
// //   {});
// //   return 'any';
// // };

// //* * */ =======================================

// //  (result[value] || (result[value] = [])).push(key);

// //* =======================================*/

// const dor = 'pain';

// //   _.reduce([1, 2], function(sum, n) {
// //     return sum + n;
// //   }, 0);
// //   // => 3

// const novoAgrup = data.species.reduce((result, value) => {
//   result[value.name] = (value.residents.map((resident) => resident.name));
//   return result;
// }, {});

// console.log(novoAgrup.lions);

// const { species } = data;

// function groupBy (array, key) {
// 	return array.reduce((acc, item) => {
//     	if (!acc[item[key]]) acc[item[key]] = []
//         acc[item[key]].push(item)
//         return acc
//     }, {})
// }


console.log(data.hours.Saturday.close);
