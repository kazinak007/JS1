'use strict'

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return plus(arg1, arg2);
        case "-":
            return minus(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        case "/":
            return divide(arg1, arg2);
    }

}
console.log(mathOperation(2, 5, "+"));
console.log(mathOperation(2, 5, "-"));
console.log(mathOperation(2, 5, "*"));
console.log(mathOperation(2, 5, "/"));