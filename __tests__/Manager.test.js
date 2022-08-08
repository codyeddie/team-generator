const Manager = require('../lib/Manager');

test('creates the manager object', () => {
    const employee = new Manager();
    expect(typeof(employee)).toBe("object");
});

test('creates office number for manager', () => {
    const phoneNum = '123-456-7890';
    const employee = new Manager('Cody', 1, 'email@email.com', phoneNum
    );

    expect(employee.officeNumber).toBe(phoneNum);
});

test('get office numbef frot the getOfficeNumber()', () => {
    const phoneNum = '123-456-7890';
    const employee = new Manager('Cody', 1, 'email@email.com', phoneNum);

    expect(employee.getOfficeNumber()).toBe(phoneNum);
});

test('return manager as employee role using getRole()', () => {
    const role = 'Manager';
    const employee = new Manager('Cody', 1, 'email@email.com', '123-456-7890');

    expect(employee.getRole()).toBe(role);
});