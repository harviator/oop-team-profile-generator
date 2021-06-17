const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getSchool() test", () => {
        it("should return the objects school value using the getSchool method", () => {
        
            const school = "UofT";

            const obj = new Intern("H.M.'Howling Mad' Murdock", 4, "hmurdock@theateam.com", school);

            expect(obj.getSchool()).toEqual(school);
        });
    });
});