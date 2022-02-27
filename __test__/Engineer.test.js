const Engineer = require('../lib/Engineer');

test('Create Engineer object',()=>{
    const engineer = new Engineer('Tom', 2, 'TomAs@mail.com', 'tomAsGithub')

    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineers github',()=>{
    const engineer = new Engineer('Tom', 2, 'TomAs@mail.com', 'tomAsGithub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('get engineers role',()=>{
    const engineer = new Engineer('Tom', 2, 'TomAs@mail.com', 'tomAsGithub')

    expect(engineer.getRole()).toEqual('Engineer');
})