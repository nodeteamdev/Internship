class Animal {
    feed(): void {
        console.log('make eat');
    }
}

class Car {
    speed: number = 0;

    move(): void {
        if (this.speed == 0) {
            console.log('stop');
        } else if (this.speed > 0) {
            console.log(`speed is ${this.speed}`);
        }
    }
}

class Horse implements Animal, Car {
    speed: number = 0;
    
    feed: () => void;
    move: () => void;
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(Horse, [Animal, Car]);

let pony: Horse = new Horse();
pony.feed();
pony.move();
pony.speed = 4;
pony.move();