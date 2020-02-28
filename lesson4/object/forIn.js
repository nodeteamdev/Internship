/* eslint-disable no-restricted-syntax */
const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
    this.red = 'color';
}

ColoredTriangle.prototype = triangle;

const obj = new ColoredTriangle();

for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(`obj.${prop} = ${obj[prop]}`);
    }
}

// expected output: "obj.color = red"
