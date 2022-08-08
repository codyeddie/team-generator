const Intern = require('../lib/Intern');

test('creates the intern class', () => {
    const employee = new Intern();
    expect(typeof(employee)).toBe("object");
});

test('creates the school that intern attended', () => {
    const school = 'UVU';
    const employee = new Intern('Cody', 1, 'email@email.com', school);

    expect(employee.school).toBe(school);
});

test('loads employee school using getSchool()', () => {
    const school = 'UVU';
    const employee = new Intern('Cody', 1, 'email@email.com', school);

    expect(employee.getSchool()).toBe(school);
})

test('return employee role from getRole()', () => {
    const role = 'Intern';
    const employee = new Intern('Cody', 1, 'email@email.com', 'UVU');

    expect(employee.getRole()).toBe(role);
});