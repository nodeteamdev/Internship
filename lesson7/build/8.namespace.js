var Personnel;
(function (Personnel) {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    Personnel.Employee = Employee;
    function work(emp) {
        console.log(emp.name, 'is working');
    }
    Personnel.work = work;
    Personnel.defaultUser = {
        name: 'Kate'
    };
})(Personnel || (Personnel = {}));
const Bob = new Personnel.Employee('Bob');
Personnel.work(Bob);
