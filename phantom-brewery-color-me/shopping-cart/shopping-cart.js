// ===== Shopping Cart Page Specific JavaScript =====

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
    updateCartSummary();
});

// Load cart items from localStorage
function loadCartItems() {
    const cartItems = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('phantomBreweryCart')) || [];
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3 class="empty-cart-title">カートが空です</h3>
                <p class="empty-cart-description">商品をカートに追加してからご注文ください。</p>
                <a href="../product-list/product-list.html" class="btn btn--primary">商品を見る</a>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">¥${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" min="1" max="10" class="quantity-input" onchange="updateQuantity(${item.id}, parseInt(this.value))">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-total">¥${(item.price * item.quantity).toLocaleString()}</div>
            <button class="cart-item-remove" onclick="removeItem(${item.id})">削除</button>
        </div>
    `).join('');
}

// Update quantity
function updateQuantity(id, quantity) {
    if (quantity < 1) {
        removeItem(id);
        return;
    }
    
    if (quantity > 10) {
        quantity = 10;
    }
    
    const cart = JSON.parse(localStorage.getItem('phantomBreweryCart')) || [];
    const item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('phantomBreweryCart', JSON.stringify(cart));
        loadCartItems();
        updateCartSummary();
        
        // Update cart count in header
        if (typeof app !== 'undefined') {
            app.updateCartDisplay();
        }
    }
}

// Remove item from cart
function removeItem(id) {
    const cart = JSON.parse(localStorage.getItem('phantomBreweryCart')) || [];
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('phantomBreweryCart', JSON.stringify(updatedCart));
    
    loadCartItems();
    updateCartSummary();
    
    // Update cart count in header
    if (typeof app !== 'undefined') {
        app.updateCartDisplay();
    }
}

// Update cart summary
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('phantomBreweryCart')) || [];
    
    if (cart.length === 0) {
        document.getElementById('subtotal').textContent = '¥0';
        document.getElementById('total').textContent = '¥0';
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 10000 ? 0 : 800;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `¥${subtotal.toLocaleString()}`;
    document.getElementById('shipping').textContent = `¥${shipping.toLocaleString()}`;
    document.getElementById('total').textContent = `¥${total.toLocaleString()}`;
    
    // Update shipping message
    const shippingElement = document.getElementById('shipping');
    if (subtotal >= 10000) {
        shippingElement.textContent = '送料無料';
        shippingElement.style.color = '#d4af37';
    } else {
        shippingElement.textContent = `¥${shipping.toLocaleString()}`;
        shippingElement.style.color = '#1a1a1a';
    }
}

// Proceed to checkout
function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('phantomBreweryCart')) || [];
    
    if (cart.length === 0) {
        alert('カートが空です。商品を追加してからご注文ください。');
        return;
    }
    
    // In a real application, this would redirect to a checkout page
    alert('購入手続きページへ進みます。\n（デモ版のため、実際の決済は行われません）');
    
    // For demo purposes, we'll just show a success message
    setTimeout(() => {
        alert('ご注文ありがとうございました！\n商品は3-5営業日でお届けいたします。');
        
        // Clear cart after successful order
        localStorage.removeItem('phantomBreweryCart');
        loadCartItems();
        updateCartSummary();
        
        // Update cart count in header
        if (typeof app !== 'undefined') {
            app.updateCartDisplay();
        }
    }, 1000);
}