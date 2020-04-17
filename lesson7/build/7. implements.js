class User {
    constructor(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname) {
        return `${this.name} ${surname}`;
    }
}
let tom = new User(1, 'Tom', 23);
console.log(tom.getFullName('Simpson'));
