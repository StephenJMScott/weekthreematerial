describe("Calculator", function(){
    
    beforeEach(function(){
       calc = new Calculator();
    });
    
    describe("Addition function", function(){
        it("should add two numbers together and return the result", function(){
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        
        it("should not return 4 if the parameters given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
        
        it("Should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
        
    });
    
    describe("Subtraction function", function() {
        it("Should take one number away from the other and return the result", function(){
            calc.sub(5);
            calc.sub(3);
            expect(calc.value).toBe(2);
        });
        
        it("Should not return 2 if the parameters given don't result in 2", function() {
            calc.sub(5);
            calc.sub(1);
            expect(calc.value).toBe(4);
        });
        
        it("Should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            calc.sub();
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
    })
    
    describe("Multiplication function", function() {
        it("Should multiply two numbers together and return the result", function(){
            calc.mul(5);
            calc.mul(3);
            expect(calc.value).toBe(15);
        });
        
        it("Should not return 15 if the parameters given don't result in 15", function() {
            calc.mul(5);
            calc.mul(2);
            expect(calc.value).toBe(10);
        });
        
        it("Should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            calc.mul();
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
    })
    
    describe("Division function", function() {
        it("Should take one number and display a result of how many times that number divides into the other", function(){
            calc.div(6);
            calc.div(3);
            expect(calc.value).toBe(2);
        });
        
        it("Should not return 2 if the parameters given don't result in 2", function() {
            calc.div(10);
            calc.div(2);
            expect(calc.value).toBe(5);
        });
        
        it("Should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            calc.div();
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
        
        it("Should have called the alert function if either number is Zero", function() {
            spyOn(window, "alert");
            calc.div(0);/*--must enter an actual 0 as leaving this empty makes it fail the condition where it is looking for a number--*/
            expect(window.alert).toHaveBeenCalledWith("Can't divide by Zero!");
        });
    })
});