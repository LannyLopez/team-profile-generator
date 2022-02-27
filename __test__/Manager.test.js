const Manager = require('../lib/Manager');

test('create the manager object',()=>{
    const manager = new Manager('Sarah', 4, 'Sarah@mail.com', 3)

    expect(manager.office).toEqual(expect.any(Number));
});

test('Gets office number',()=>{
    const manager = new Manager('Sarah', 4, 'Sarah@mail.com', 3)

    expect(manager.getOffice()).toEqual(expect.any(Number));
});

test('gets Managers role',()=>{
    const manager = new Manager('Sarah', 4, 'Sarah@mail.com', 3)

    expect(manager.getRole()).toEqual('Manager')
})