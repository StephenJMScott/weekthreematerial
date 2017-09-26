// function addition(firstNumber, secondNumber){
//     if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number"){
//         var sum = firstNumber + secondNumber;
//         return sum;
//     } else {
//         alert("Arguments must both be a number");
        
//     }
    /*This is from an earlier part*/
// }

Calculator=function(){
    this.value=0;
};

Calculator.prototype.add =function(number){
    if (typeof(number) == "number") {
        if(this.value == 0) {
        this.value = number;
    } else {
        this.value += number;
    }
    } else {
        alert("Arguments must both be a number");
    }
    
};

Calculator.prototype.sub=function(number){
    if (typeof(number) == "number") {
        if(this.value == 0) {
        this.value = number;
    } else {
        this.value -= number;
    }
    } else {
        alert("Arguments must both be a number");
    }
    
};

Calculator.prototype.mul =function(number){
    if (typeof(number) == "number") {
        if(this.value == 0) {
        this.value = number;
    } else {
        this.value *= number;
    }
    } else {
        alert("Arguments must both be a number");
    }
    
};

Calculator.prototype.div =function(number){
    if (typeof(number) == "number"){
        if(number==0){
            alert("Can't divide by Zero!");
        }
        else{
            
        
        if(this.value == 0) {
        this.value = number;
    } else {
        this.value /= number;
    } }
    } else {
        alert("Arguments must both be a number");
    } 
    
};