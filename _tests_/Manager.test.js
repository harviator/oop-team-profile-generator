const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getOfficeNumber() test", () => {
        it("should return the objects office number value using the getOfficeNumber method", () => {
        
            const officeNumber = 1;

            const obj = new Manager("John", 1, "jsmith@theateam.com", officeNumber);

            expect(obj.getOfficeNumber()).toEqual(officeNumber);
        });
    });
});