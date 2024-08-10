const product = {
    name: 'shocks',
    price: 150,
    rating: {
        stars: 4.5,
        count: 80
    },
    brand: 'lotto',
    'total-sold': 170,
    tag: function message() {
        console.log("shoe");
    }
}

function _run() {
    console.log(product.name);
    console.log(product.rating.stars);
    console.log(product.brand);

    product.brand = 'apex';
    console.log(product);

    //destructuring
    const { brand } = product;
    console.log(brand);

    const { name, price } = product;
    console.log(name + ' ' + price);

    //shorthand property
    const product2 = {
        name,
        method() {
            console.log('Hello World');
        }
    }
    console.log(product2.name);

    console.log(product['total-sold']);

    product['total-sold'] = 200;
    console.log(product['total-sold']);
    product.tag();

    const jsonString = JSON.stringify(product);
    console.log(jsonString);

    const jsonToObject = JSON.parse(jsonString);
    console.log(jsonToObject);
}
