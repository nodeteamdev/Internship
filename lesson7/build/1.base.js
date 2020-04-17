const isDone = false;
const decimal = 6;
const color = 'blue';
const list = [1, 2, 3];
const x = ['yay', 2];
const u = undefined;
const n = null;
const notSure = 4;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
function error(message) {
    throw new Error(message);
}
(() => {
    let someValue = 'this is a string';
    let strLength = someValue.length;
})();
(() => {
    let someValue = 'this is a string';
    let strLength = someValue.length;
})();
