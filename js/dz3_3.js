'use strict'
/**
 *  на каждый товар применить скидку 15%
 */
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (discount) {
    discount.price = discount.price - (discount.price * 15 / 100);
})
console.log(products);