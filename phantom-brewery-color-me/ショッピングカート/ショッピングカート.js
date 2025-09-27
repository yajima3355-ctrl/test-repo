// Phantom Brewery - Shopping Cart Page JavaScript
// 静謐の中に宿る、和の余韻 - ショッピングカートページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeShoppingCart();
});

// Initialize Shopping Cart
function initializeShoppingCart() {
    loadCartItems();
    initializeCartActions();
    updateCartSummary();
}

// Load Cart Items
function loadCartItems() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        emptyCart.style.display = 'block';
        cartSummary.style.display = 'none';
        return;
    }
    
    cartItems.style.display = 'block';
    emptyCart.style.display = 'none';
    cartSummary.style.display = 'block';
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartItems.appendChild(cartItem);
    });
}

// Create Cart Item
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <div class="cart-item-image">
            ${item.name}
        </div>
        <div class="cart-item-info">
            <h3 class="cart-item-name">${item.name}</h3>
            <p class="cart-item-description">職人の技が生み出す、至高の味わい</p>
        </div>
        <div class="cart-item-price">¥${item.price.toLocaleString()}</div>
        <div class="cart-item-quantity">
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" 
                       onchange="updateQuantity(${item.id}, parseInt(this.value))">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem(${item.id})" title="削除">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
                </svg>
            </button>
        </div>
    `;
    
    return cartItem;
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeItem(productId);
        return;
    }
    
    if (newQuantity > 10) {
        newQuantity = 10;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('phantom-brewery-cart', JSON.stringify(cart));
        loadCartItems();
        updateCartSummary();
        updateCartCount();
    }
}

// Remove Item
function removeItem(productId) {
    if (confirm('この商品をカートから削除しますか？')) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('phantom-brewery-cart', JSON.stringify(cart));
        loadCartItems();
        updateCartSummary();
        updateCartCount();
    }
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal >= 10000 ? 0 : 1000;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `¥${subtotal.toLocaleString()}`;
    document.getElementById('shipping').textContent = `¥${shipping.toLocaleString()}`;
    document.getElementById('total').textContent = `¥${total.toLocaleString()}`;
    
    // Update shipping message
    const shippingElement = document.getElementById('shipping');
    if (shipping === 0) {
        shippingElement.textContent = '送料無料';
        shippingElement.style.color = 'var(--color-success)';
    } else {
        shippingElement.textContent = `¥${shipping.toLocaleString()}`;
        shippingElement.style.color = 'var(--color-text-secondary)';
    }
}

// Initialize Cart Actions
function initializeCartActions() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('カートが空です。商品を追加してからご利用ください。');
                return;
            }
            
            // Redirect to checkout page (placeholder)
            alert('レジに進みます（実装予定）');
        });
    }
    
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function() {
            window.location.href = '../商品一覧/商品一覧.html';
        });
    }
}

// Export functions for external use
window.ShoppingCart = {
    initializeShoppingCart,
    loadCartItems,
    updateQuantity,
    removeItem,
    updateCartSummary
};