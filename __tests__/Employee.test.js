// import employee object to run test 
const Employee = require('../lib/Employee');

test('this should create the employee object/class', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('this should create the employee name', () => {
    const name = 'Cody';
    const emp = new Employee(name);

    expect(emp.name).toBe('Cody');
});

test('this should create the employee id', () => {
    const testId = '1';
    const employee = new Employee('Cody', testId);

    expect(employee.id).toBe(testId);
});

test('should create an employee email', () => {
    const email = 'email@email.com';
    const employee = new Employee('Cody', 1, email);

    expect(employee.email).toBe(email); 
});

test('this should get the name from getName()', () => {
    const name = 'Cody';
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

test('this should get the Id from getId()', () => {
    const id = 1;
    const employee = new Employee('Cody', id);

    expect(employee.getId()).toBe(id);
});

test('this should get the email from getEmail()', () => {
    const email = 'email@email.com';
    const employee = new Employee('Cody', 1, email);

    expect(employee.getEmail()).toBe(email);
});

test('this should return employee role using getRole()', () => {
    const role = 'Employee';
    const employee = new Employee('Cody', 1, 'email@email.com');

    expect(employee.getRole()).toBe(role);
});