'use strict'
let a = parseInt(+prompt("Число А "));
let b = parseInt(+prompt("Число B "));
let c;
if (a >= 0 & b >= 0) {
    c = a - b;
    console.log("Разность чисел ${с}");
}
if (a < 0 & b < 0) {
    c = a * b;
    console.log("Произведение чисел" + c);
}
if (Math.sign(a) != Math.sign(b) & Math.sign(a) != NaN & Math.sign(b) != NaN) {
    c = a + b;
    console.log("Сумма чисел" + c);
}
if (a !== Number & b !== Number) {
    alert("Не число");
}