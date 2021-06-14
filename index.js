const inquirer = require('inquirer');
const fs = require('fs');

let employees = [];

const Manager = require('./lib/Manager');
//how do I override the roles?

const generateManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }
    ])
    .then((managerResponse) => {
        const newManager = new Manager(managerResponse);

        employees.push(newManager);
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
            type: "input",
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
        const newEngineer = new Engineer(engineerResponse);

        employees.push(newEngineer);
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
            type: "input",
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
        const newIntern = new Intern(internResponse);

        employees.push(newIntern);
    })
}

