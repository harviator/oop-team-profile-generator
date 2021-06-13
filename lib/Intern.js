const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        // gets github from input
    }

    getRole() {
        //over-riden to return 'Intern'
    }
}