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
    new Product(2, 'Northen Frost Bracelet', 25, 'img/brace 2.jpg', 200, 300), 
    new Product(3, 'White Nothern Frost', 20, 'img/bag 1.jpg', 200, 300),
    new Product(4, 'Nothern Frost Phone case', 25, 'img/phone 1.jpg', 200, 300) 
]