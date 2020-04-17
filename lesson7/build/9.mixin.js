class Animal {
    feed() {
        console.log('make eat');
    }
}
class Car {
    constructor() {
        this.speed = 0;
    }
    move() {
        if (this.speed == 0) {
            console.log('stop');
        }
        else if (this.speed > 0) {
            console.log(`speed is ${this.speed}`);
        }
    }
}
class Horse {
    constructor() {
        this.speed = 0;
    }
}
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(Horse, [Animal, Car]);
let pony = new Horse();
pony.feed();
pony.move();
pony.speed = 4;
pony.move();
