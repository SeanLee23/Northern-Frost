function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
        cart.addItem(product);
        updateCartUI();
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addItem(product) {
        this.items.push(product);
        this.total += product.price;
    }
}

const cart = new Cart();

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';

    cart.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name + " - $" + item.price;
        cartItemsContainer.appendChild(li);
    });

    cartTotalElement.textContent = cart.total.toFixed(2);
}

window.onload = function() {
    displayProducts(products);
};

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
        cart.addItem(product);
        updateCartUI();
    }
}

function removeFromCart(productId) {
    const index = cart.items.findIndex(item => item.id === productId);
    if (index !== -1) {
        const removedProduct = cart.items.splice(index, 1)[0];
        cart.total -= removedProduct.price;
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';

    cart.items.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        li.appendChild(img);
        const details = document.createElement('div');
        details.textContent = item.name + " - $" + item.price;
        li.appendChild(details);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            removeFromCart(item.id);
        });
        li.appendChild(removeBtn);
        cartItemsContainer.appendChild(li);
    });

    cartTotalElement.textContent = cart.total.toFixed(2);
}