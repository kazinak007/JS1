'use strict'
let a2 = 2;
let x2 = 1 + (a2 *= 2); // оператор присваивания с умножением будет x=1+(a=2*2)=5
console.log(x2);