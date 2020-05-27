'use strict';
let x = getNumber(parseInt(prompt("Введите число от 0 - 999")));
/**
 * Функция преобразует число в объект
 * @param {int} x Введенное число.
 * @returns {{unit: int, tens: int, hundereds: int}} Единицы десятки сотни. 
 */
function getNumber(x) {
    if (Number.isInteger(x) || x >= 0 || x <= 999) {

    }
    return x = {
        hundereds: Math.floor(x / 100),
        tens: Math.floor(x / 10) % 10,
        unit: x % 10
    };
}
console.log(x);