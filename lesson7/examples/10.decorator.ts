function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set;
 
    descriptor.set = function (value: string) {
        if (value === 'admin') {
            throw new Error('Invalid value');
        }
 
        oldSet.call(this, value);
    }
}

class Admins {
    private _name: string;

    constructor(name: string){
        this.name = name;
    }
     
    public get name(): string {
        return this._name;
    }
    
    @validator
    public set name(n: string) {
        this._name = n;
    }
}

let alex = new Admins('Alex');

alex.name = 'admin';

console.log(alex.name);