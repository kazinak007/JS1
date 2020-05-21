'use strict'
let arrnumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 0;
for (let i = 0; i < arrnumber.length; i++) {
    if (arrnumber[i] == 0) {
        arrnumber[i] = arrnumber[i] + "- Это Ноль"
    } else if (arrnumber[i] % 2 == 1) {
        arrnumber[i] = arrnumber[i] + "- Нечетное число";
    } else if (arrnumber[i] % 2 == 0) {
        arrnumber[i] = arrnumber[i] + "- Четное число";
    }
}
console.log(arrnumber);
arrnumber.forEach(element => console.log(element));