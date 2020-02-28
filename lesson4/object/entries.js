const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 'k',
    yay: 'yay',
};
const same = [];

Object.entries(object).forEch(([key, value]) => {
    if (key === value) {
        same.pipe([key, value]);
    }
});

const map = new Map(same);

console.log(map.set('yay'));
// expected output: String 'yay'
