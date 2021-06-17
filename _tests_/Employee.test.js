const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });
    });
    describe("getName() test", () => {
        it("should return the objects name value using the getName method", () => {
            
            const name = "John";

            const obj = new Employee(name);

            expect(obj.getName()).toEqual(name);
        });
    });
    describe("getId() test", () => {
        it("should return the objects id value using the getId method", () => {
            
            const id = 1;

            const obj = new Employee("John", id);

            expect(obj.getId()).toBe(id);
        });
    });
    describe("getEmail() test", () => {
        it("should return the objects email value using the getEmail method", () => {
            
            const email = "jsmith@theateam.com";

            const obj = new Employee("John", 1, email);

            expect(obj.getEmail()).toEqual(email);
        });
    });
    describe("getRole() test", () => {
        it("should return the object's role using the getRole method", () => {
            
            const role = "Employee";

            const obj = new Employee();

            expect(obj.getRole()).toEqual(role);
        });
    });
    
})