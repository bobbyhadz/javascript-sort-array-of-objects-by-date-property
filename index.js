// EXAMPLE 1 - Sort an Array of Objects by Date property in JavaScript

const arr1 = [
  {id: 3, date: new Date(2022, 1, 24)},
  {id: 5, date: new Date(2027, 1, 24)},
  {id: 2, date: new Date(2023, 1, 24)},
];

// ✅ Sort in Ascending order (low to high)
const sortedAsc = arr1.sort(
  (objA, objB) => Number(objA.date) - Number(objB.date),
);

// 👇️ {id: 3, date: Thu Feb 24 2022,
//     id: 2, date: Fri Feb 24 2023
//     id: 5, date: Wed Feb 24 2027}
console.log(sortedAsc);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sort an Array of Objects by Date property with string values

// const arr1 = [
//   {id: 3, date: '2022-02-24'},
//   {id: 5, date: '2027-02-24'},
//   {id: 2, date: '2023-02-24'},
// ].map(obj => {
//   return {...obj, date: new Date(obj.date)};
// });

// console.log(arr1);

// // ✅ Sort in Ascending order (low to high)
// const sortedAsc = arr1.sort(
//   (objA, objB) => Number(objA.date) - Number(objB.date),
// );

// // 👇️ {id: 3, date: Thu Feb 24 2022,
// //     id: 2, date: Fri Feb 24 2023
// //     id: 5, date: Wed Feb 24 2027}
// console.log(sortedAsc);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sort an Array of Objects by Date property without mutation

// const arr1 = [
//   {id: 3, date: new Date(2022, 1, 24)},
//   {id: 5, date: new Date(2027, 1, 24)},
//   {id: 2, date: new Date(2023, 1, 24)},
// ];

// // ✅ Sort in Ascending order (low to high)
// const sortedAsc = [...arr1].sort(
//   (objA, objB) => Number(objA.date) - Number(objB.date),
// );

// // 👇️ {id: 3, date: Thu Feb 24 2022,
// //     id: 2, date: Fri Feb 24 2023
// //     id: 5, date: Wed Feb 24 2027}
// console.log(sortedAsc);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Sort an Array of Objects by Date property in descending order

// const arr1 = [
//   {id: 3, date: new Date(2022, 1, 24)},
//   {id: 5, date: new Date(2027, 1, 24)},
//   {id: 2, date: new Date(2023, 1, 24)},
// ];

// // ✅ Sort in Descending order (high to low)
// const sortedDesc = arr1.sort(
//   (objA, objB) => Number(objB.date) - Number(objA.date),
// );

// //  👇️ {id: 5, date: Wed Feb 24 2027,
// //      id: 2, date: Fri Feb 24 2023,
// // ️     id: 3, date: Thu Feb 24 2022}
// console.log(sortedDesc);

// // 👇️ 1645454934750
// console.log(new Date().getTime());
