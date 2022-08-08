// importing the employee class module 
const Employee = require("./Employee");
// intern constructor and super extending from employee class 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    // return an intern's school
    getSchool() {
        return this.school;
    }
    // return's an employee's role as intern
    getRole() {
        return "Intern";
    }
}
// use intern throughout the function
module.exports = Intern;