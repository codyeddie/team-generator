// importing employee class object 
const Employee = require("./Employee");
// manager constructor and super extending from employee class 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }
    // has office number specific to manager
    getOfficeNumber() {
        return this.officeNumber;
    }
    // will return manager
    getRole() {
        return "Manager";
    }
}
// exports this throughout the folder
module.exports = Manager;