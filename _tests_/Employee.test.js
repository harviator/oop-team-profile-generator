const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });
    })
    describe("getName() test", () => {
        it("should return the objects name value using the getname method", () => {
            
            const name = "Joem";

            const obj = new Employee(name);

            expect(obj.getName()).toEqual(name);
        }
    })
    
})