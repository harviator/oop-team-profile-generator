function generateManager(manager) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${manager.getId()}</li>
            <li class="list-group-item">${manager.getEmail()}</li>
            <li class="list-group-item">${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`
}

function generateEngineer(engineer) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.getId()}</li>
            <li class="list-group-item">${engineer.getEmail()}</li>
            <li class="list-group-item">${engineer.getGithub()}</li>
        </ul>
    </div>
</div>`
}

function generateIntern(intern) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${intern.getId()}</li>
            <li class="list-group-item">${intern.getEmail()}</li>
            <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
    </div>
</div>`
}


function generateHTML(employees) {
    
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    ${employees.map((employee) => {
        if (employee.getRole() == "Manager") {
            return generateManager(employee);
        } else if (employee.getRole() == "Engineer") {
            return generateEngineer(employee);
        } else if (employee.getRole() == "Intern") {
            return generateIntern(employee);
        }
    })}
    </body>
    </html>`
}

module.exports = generateHTML;