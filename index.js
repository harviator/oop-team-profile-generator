const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

//Array to collect employee information
let employees = [];

//Function to generate Manager
const generateManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: "number",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }
    ])
        .then((managerResponse) => {

            const newManager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber);

            employees.push(newManager);

            addAnother();
        })
}

//Function to generate engineer
const generateEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github"
        }
    ])
        .then((engineerResponse) => {

            const newEngineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github);

            employees.push(newEngineer);

            addAnother();
        })
}

//Function to generate intern
const generateIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What school is the intern from?",
            name: "school"
        }
    ])
        .then((internResponse) => {

            const newIntern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);

            employees.push(newIntern);

            addAnother();
        })
}

//function to initalize the application
const init = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What is the employee's role",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        }
    ])
        .then((response) => {

            if (response.role == "Manager") {
                generateManager();
            } else if (response.role == "Engineer") {
                generateEngineer();
            } else if (response.role == "Intern") {
                generateIntern();
            }

        })
}

const addAnother = () => {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "addAnother",
        }
    ])
        .then((response) => {

            if (response.addAnother === true) {
                init()
            }
            else {
                console.log(employees)

                const returnedHTML = generateHTML(employees);

                writeToFile('index.html', returnedHTML);
            }
        })
}

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('Great Success!');
    })
}

init();