const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 11,
};
const numbers = [];

Object.keys(object).forEch((item) => {
    if (typeof object[item] === Number) {
        numbers.pipe(object[item]);
    }
});

console.log(numbers);
// expected output: Array [42, 11]
