function addition(firstNumber, secondNumber){
    if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number"){
        var sum = firstNumber + secondNumber;
        return sum;
    } else {
        alert("Arguments must both be a number");
        
    }

}