const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');
const genHTML = require('./src/generator');

const employeeArray = [];
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Name is required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the Manager's office number.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter a valid office number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager (name, id, email, office);
        employeeArray.push(manager);
        console.log(manager);
    })
};
const addEmployee = () => {
    console.log(' - - - Add Employees - - - ');
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'roles',
            message: "Please select your Employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the Employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Employee's github username.",
            when: (input) => input.roles === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Employee's school.",
            when: (input) => input.roles === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then (employeeData => {
        let { name, id, email, roles, github, school, confirmEmployee } = employeeData;
        let employee;
        if (roles === 'Intern') {
            employee = new Intern (name, id, email, github, school);
            console.log(employee);
        } else if (roles ==='Engineer') {
            employee = new Engineer (name, id, email,);
            console.log(employee);
        }
        employeeArray.push(employee);
        if (confirmEmployee) {
            return addEmployee(employeeArray);
        } else {
             return employeeArray;
         }
     })
 }; 
 

 const writeFile = data => {
     fs.writeFile('./dist/index.html', data, err => {
         if (err) {
             console.log(err);
             return;
         } else {
             console.log("Your team page has been generated! Congrats!")
         }
     })
 };

 addManager()
     .then(addEmployee)
     .then(employee => {
         return genHTML(employeeArray);
     })
     .then(pageHTML => {
         return writeFile(pageHTML);
     })
     .catch(err => {
         console.log(err);
     });