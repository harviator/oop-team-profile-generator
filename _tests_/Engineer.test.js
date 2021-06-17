const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getGithub() test", () => {
        it("should return the objects GitHub value using the getGithub method", () => {
        
            const github = "face";

            const obj = new Engineer("Templeton", 2, "tpeck@theateam.com", github);

            expect(obj.getGithub()).toEqual(github);
        });
    });
});