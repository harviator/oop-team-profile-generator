const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require()

let employees = [];


//how do I override the roles?

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

        console.log(managerResponse);

        const newManager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber);

        console.log(newManager)


        employees.push(newManager);

        console.log(employees);
    })
}

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

        console.log(engineerResponse);

        const newEngineer = new Engineer(engineerResponse);

        employees.push(newEngineer);

        console.log(employees);
    })
}

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

        console.log(internResponse);

        const newIntern = new Intern(internResponse);

        employees.push(newIntern);

        console.log(employees);
    })
}

const addAnother = () => {

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

        console.log(response);

        if (response.role == "Manager") {
            generateManager();
        } else if (response.name == "Engineer") {
            generateEngineer();
        } else if (response.name == "Intern") {
            generateIntern();
        }
    })
}

init();