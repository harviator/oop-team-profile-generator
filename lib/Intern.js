const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        // gets school from input
    }

    getRole() {
        //over-riden to return 'Intern'
    }
}

module.exports = Intern;