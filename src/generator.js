const genIntern = function (intern) {
    return `
    <div>
        <h4>${intern.name}</h4>
        <span>Intern</span>
        <ul>
            <li>ID: ${intern.id}</li>
            <li>
                Email: <a href="mailto:${intern.email}">${intern.email}</a>
            </li>
            <li>${intern.school}</li>
        </ul>
    </div>
    `;
}

const genEngineer = function (engineer) {
    return `
    <div>
        <h4>${engineer.name}</h4>
        <span>Engineer</span>
        <ul>
            <li>ID: ${engineer.id}</li>
            <li>
                Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li>
                Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </li>
        </ul>
    </div>
    `;
}

const genManager = function (manager) {
    return `
    <div>
        <h4>${manager.name}</h4>
        <span>Manager</span>
        <ul>
            <li>ID: ${manager.id}</li>
            <li>
                Email: <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li>Office no. ${manager.office}</li>
        </ul>
    </div>
    `;
}

genHTML = (data) => {
    employeeArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Intern') {
            const internDiv = genIntern(employee);

            employeeArray.push(internDiv);
        }

        if (role === 'Engineer') {
            const engineerDiv = genEngineer(employee);

            employeeArray.push(engineerDiv);
        }

        if (role === 'Manager') {
            const managerDiv = genManager(employee);

            employeeArray.push(managerDiv);
        }
    }

    const employeeDiv = employeeArray.join('');
    const genTeam = genPage(employeeDiv);
    return genTeam;
}

const genPage = function (employeeDiv) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
	    <meta charset="utf-8">
	    <title>Team Generator</title>
    </head>
    <body>
        <main>
            <div>${employeeDiv}</div>
        </main>
    </body>
    </html>
    `;
}

module.exports = genHTML;