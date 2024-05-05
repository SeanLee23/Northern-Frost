function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.items.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateTotal();
}

function updateTotal() {
    const totalAmount = document.getElementById('total-amount');
    totalAmount.textContent = '$' + cart.total.toFixed(2);
}

function processCheckout() {
    alert('Redirecting to payment page...');
}

window.onload = function() {
    displayCartItems();

    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', processCheckout);
};

function processCheckout() {
    alert('Redirecting to payment page...');
}

window.onload = function() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', processCheckout);
    }
};

function redirectToCheckout() {
    window.location.href = "check.html";
}