// BUBBLE SORT = quadratic
// function sortCarByYearDescendingly(cars) {
//   if (cars.length <= 1) return cars || [];
//   const n = cars.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (cars[j].year < cars[j + 1].year) {
//         [cars[j + 1], cars[j]] = [cars[j], cars[j + 1]];
//       }
//     }
//   }
//   return cars;
// }

// QUICK SORT = recursive, o(log n), divide & conquer method
function sortCarByYearDescendingly(cars) {
  if (cars.length <= 1) return cars || [];
  const n = cars.length;
  const pivot = cars[0];
  const left = [];
  const right = [];

  for (let i = 1; i < n; i++) {
    if (cars[i].year > pivot.year) {
      left.push(cars[i]);
    } else {
      right.push(cars[i]);
    }
  }

  return [
    ...sortCarByYearDescendingly(left),
    pivot,
    ...sortCarByYearDescendingly(right),
  ];
}
