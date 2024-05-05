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
    new Product(1, 'Blue Nothern Frost', 45, 'img/pant 1.jpg', 200, 300), 
    new Product(2, 'White Nothern Frost', 45, 'img/pant 2.jpg', 200, 300)
];