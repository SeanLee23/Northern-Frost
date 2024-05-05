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
    new Product(1, 'Northen Frost Bracelet', 35, 'img/brace 1.jpg', 200, 300), 
    new Product(2, 'Northen Frost Bracelet', 25, 'img/brace 2.jpg', 200, 300), 
    new Product(3, 'Northen Frost Bracelet', 25, 'img/brace 3.jpg', 200, 300),
    new Product(4, 'Nothern Frost Necklace', 25, 'img/neck 1.jpg', 200, 300),
    new Product(5, 'Nothern Frost Necklace', 25, 'img/neck 2.jpg', 200, 300), 
    new Product(6, 'Northern Frost Necklace', 35, 'img/neck 3.jpg', 200, 300), 
    new Product(7, 'Northern Frost Necklace', 55, 'img/neck 4.jpg', 200, 300),
    new Product(8, 'Nothern Frost Water Bottle', 30, 'img/water 1.jpg', 200, 300), 
    new Product(9, 'Nothern Frost Water Bottle', 30, 'img/water 3.jpg', 200, 300), 
    new Product(10, 'Nothern Frost Phone case', 25, 'img/phone 1.jpg', 200, 300) 
];