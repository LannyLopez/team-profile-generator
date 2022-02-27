const Intern = require('../lib/Intern');

test('create Intern object', ()=>{
    const intern = new Intern('Mason', 3 , 'mason@mail.com', 'SLCC');

    expect(intern.school).toEqual(expect.any(String));
});

test('Gets school from student', ()=>{
    const intern = new Intern('Mason', 3 , 'mason@mail.com', 'SLCC');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Interns role',()=>{
    const intern = new Intern('Mason', 3 , 'mason@mail.com', 'SLCC');

    expect(intern.getRole()).toEqual('Intern');
});