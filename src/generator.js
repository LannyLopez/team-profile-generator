const genIntern = function (intern){
    return `
    <div>
        <h3>${intern.name}</h3>
        <span>Intern</span>
        <ul>
            <li>${intern.id}</li>
            <li>${intern.school}</li>
            <li>${intern.email}</li>
        </ul>
    </div>
        `;
}

const genEngineer = function(engineer){
    `<div>
    <h3>${engineer.name}</h3>
    <span>Engineer</span>
    <ul>
        <li>${engineer.id}</li>
        <li>${engineer.school}</li>
        <li>${engineer.email}</li>
    </ul>
</div>`;
}
const genManager = function(manager){
    `<div>
    <h3>${manager.name}</h3>
    <span>Manager</span>
    <ul>
        <li>${manager.id}</li>
        <li>${manager.school}</li>
        <li>${manager.email}</li>
    </ul>
</div>`;
}

genHTML = (data) =>{
    employeeArray =[];

    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'intern'){
            const internDiv = genIntern(employee);

            employeeArray.push(internDiv)
        }

        if(role === 'Engineer'){
            const engineerDiv = genEngineer(employee);

            employeeArray.push(engineerDiv)
        }

        if(role === 'Manager'){
            const managerDiv = genManager(employee);

            employeeArray.push(managerDiv)
        }
    }
    const employeeDiv = employeeArray.join('');
    const genTeam = genPage(employeeDiv);
    return genTeam;
}

const genPage = function(employeeDiv){
    return`
    <!DOCTYPE HTML>
    <html lang="em">
    <head>
        <meta charset="UTF-8">
        <title>TEAM GENERATOR</title>
    </head>
    <body>
        <main>
            <div>${employeeDiv}</div>
        </main>
    </body>
    </html>
    `
}

module.exports = genHTML;