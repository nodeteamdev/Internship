interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}

class User implements IUser {
    id: number;
    name: string;
    age: number;

    constructor(userId: number, userName: string, userAge: number) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }

    getFullName(surname: string): string {

        return `${this.name} ${surname}`;
    }
}

let tom = new User(1, 'Tom', 23);

console.log(tom.getFullName('Simpson'));