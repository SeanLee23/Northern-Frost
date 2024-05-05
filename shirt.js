class Product {
    constructor(id, name, price, imageUrl, width, height) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.width = width; 
        this.height = height; 
    }
}

const products = [
    new Product(1, 'Black Northern Frost', 25, 'img/shirt 1.jpg', 200, 300), 
    new Product(2, 'White Nothern Frost', 25, 'img/shirt 2.jpg', 200, 300), 
    new Product(3, 'Blue Nothern Frost', 25, 'img/shirt 3.jpg', 200, 300),
    new Product(4, 'White Nothern Frost', 25, 'img/shirt 4.jpg', 200, 300),
    new Product(5, 'Blue Nothern Frost', 25, 'img/shirt 5.jpg', 200, 300), 
    new Product(6, 'White Long Sleeve', 25, 'img/shirt 6.jpg', 200, 300), 
    new Product(7, 'White Long Sleeve', 25, 'img/shirt 7.jpg', 200, 300) 
];