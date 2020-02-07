const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];

// sort in descending order
const descOrder = arr.sort((a, b) => a > b ? 1 : 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// sort in ascending order
const ascOrder = alpha.sort((a, b) => a > b ? 1 : 1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
