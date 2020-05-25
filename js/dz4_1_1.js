'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
};
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};
let product1 = new Product("яблоки", 100);
product1.make25PercentDiscount();

console.log(product1);