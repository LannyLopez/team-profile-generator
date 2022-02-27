const Employee = require ('../lib/Employee');

test('create an employee object',()=>{
    const employee = new Employee('Joe', 1, 'JoeMama@mail.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Get employee name',()=>{
    const employee = new Employee('Joe', 1, 'JoeMama@mail.com')

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Get employee id', ()=>{
    const employee = new Employee('Joe', 1, 'JoeMama@mail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Get employee email',()=>{
    const employee = new Employee('Joe', 1, 'JoeMama@mail.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', ()=>{
    const employee = new Employee('Joe', 1 ,'JoeMama@mail.com')

    expect(employee.getRole()).toBe('Employee');
})