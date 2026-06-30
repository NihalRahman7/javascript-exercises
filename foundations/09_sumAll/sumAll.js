const sumAll = function(num1, num2) {
    let sumNum = 0;

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    

    if (num1 < num2){
        for (; num1 <= num2; num1++){
            sumNum += num1;
        }
    }
    else if (num1 > num2) {
        for (; num1 >= num2; num1--){
            sumNum += num1;
        }
    }

    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
