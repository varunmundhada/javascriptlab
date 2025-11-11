let cart = [];
const TAX_RATE = 0.05; // 5% tax

function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    renderCart();
}

function addToCart(buttonElement) {
    const productCard = buttonElement.closest('.product-card');
    const productName = productCard.dataset.name;
    const productPrice = parseFloat(productCard.dataset.price);

    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    saveCart();
    renderCart();
}

function updateQuantity(productName, newQuantity) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productName);
        } else {
            item.quantity = newQuantity;
        }
    }
    saveCart();
    renderCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    saveCart();
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = (item.price * item.quantity).toFixed(2);
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price.toFixed(2)} x </span>
                </div>
                <div class="cart-item-actions">
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="updateQuantity('${item.name}', parseInt(this.value))">
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                    <span class="item-total">$${itemTotal}</span>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
    calculateBill();
}

function calculateBill() {
    let subtotal = 0;
    let totalItems = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        totalItems += item.quantity;
    });

    const tax = subtotal * TAX_RATE;
    const grandTotal = subtotal + tax;

    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add some items before checking out.");
        return;
    }
    const grandTotal = document.getElementById('grand-total').textContent;
    alert(`Thank you for your purchase!\nYour total bill is $${grandTotal}.`);
    cart = []; // Clear cart after checkout
    saveCart();
    renderCart();
}

// Load cart when the page loads
document.addEventListener('DOMContentLoaded', loadCart);