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
    new Product(1, 'Blue Nothern Frost', 30, 'img/back 1.jpg', 200, 300), 
    new Product(2, 'Blue Nothern Frost', 65, 'img/back 2.jpg', 200, 300),
    new Product(3, 'Blue Nothern Frost', 60, 'img/back 3.jpg', 200, 300), 
    new Product(4, 'White Nothern Frost', 20, 'img/bag 1.jpg', 200, 300),
    new Product(5, 'Blue Nothern Frost', 30, 'img/bag 2.jpg', 200, 300), 
    new Product(6, 'White Nothern Frost', 50, 'img/bag 3.jpg', 200, 300)
];