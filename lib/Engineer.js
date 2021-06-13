const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGithub() {
        // gets github from input
    }

    getRole() {
        //over-riden to return 'Engineer'
    }
}