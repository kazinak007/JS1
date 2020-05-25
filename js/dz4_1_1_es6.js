'use strict';
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}
const product1 = new Product("яблоки", 100);
product1.make25PercentDiscount();

console.log(product1);