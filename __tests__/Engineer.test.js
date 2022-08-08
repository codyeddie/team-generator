const Engineer = require('../lib/Engineer');

test('creates the engineer object', () => {
    const employee = new Engineer();
    expect(typeof (employee)).toBe("object");
});

test('creates engineer github username', () => {
    const github = 'githubusername';
    const employee = new Engineer('Cody ', 1, 'email@email.com', github);

    expect(employee.github).toBe(github);
});

test('using getGithub() to get github username', () => {
    const github = 'githubusername';
    const employee = new Engineer('Cody', 1, 'email@email.com', github);

    expect(employee.getGithub()).toBe(github);
})

test('getRole() should return Engineer', () => {
    const role = 'Engineer';
    const employee = new Engineer('Cody', 1, 'email@email.com', 'githubusername');

    expect(employee.getRole()).toBe(role);
});