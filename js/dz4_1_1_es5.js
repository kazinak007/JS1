'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function (price) {
    this.price = this.price - this.price * 0.25;
};

let x = new Product("яблоки", 400);
console.log(x);
x.make25PercentDiscount();
console.log(x);