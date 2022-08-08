// importing employee object
const Employee = require("./Employee");
// engineer constructor and super extending from employee class 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    // returning engineer's github  
    getGithub() {
        return this.github;
    }
    // return's employee's role as engineer
    getRole() {
        return "Engineer";
    }
}
// export this module 
module.exports = Engineer;

