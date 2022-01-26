/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// Objeto
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

const list = [4, 5, 6];

for (const i in list) {
  console.log(i); // "0", "1", "2",
}

for (const i of list) {
  console.log(i); // "4", "5", "6"
}

