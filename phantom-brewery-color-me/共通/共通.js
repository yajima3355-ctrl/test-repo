// Phantom Brewery - Common JavaScript
// 静謐の中に宿る、和の余韻 - 共通JavaScript

// Global Variables
let cart = JSON.parse(localStorage.getItem('phantom-brewery-cart')) || [];
let isMenuOpen = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    updateCartCount();
    initializeSearch();
    initializeSmoothScroll();
    initializeFadeInAnimations();
    initializeMobileMenu();
}

// Cart Functions
function addToCart(productId, productName, price, quantity = 1) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: quantity
        });
    }
    
    localStorage.setItem('phantom-brewery-cart', JSON.stringify(cart));
    updateCartCount();
    showCartNotification(productName);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('phantom-brewery-cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('phantom-brewery-cart', JSON.stringify(cart));
            updateCartCount();
        }
    }
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart__count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = cartCount > 0 ? 'block' : 'none';
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function clearCart() {
    cart = [];
    localStorage.setItem('phantom-brewery-cart', JSON.stringify(cart));
    updateCartCount();
}

// Cart Notification
function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <svg class="icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
            </svg>
            <span>${productName} をカートに追加しました</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search Functions
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        // Redirect to search results page
        window.location.href = `../商品検索結果/商品検索結果.html?q=${encodeURIComponent(query)}`;
    }
}

// Smooth Scroll
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fade In Animations
function initializeFadeInAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// Mobile Menu
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    const navMenu = document.querySelector('.nav__menu');
    
    if (navMenu) {
        navMenu.classList.toggle('nav__menu--open', isMenuOpen);
    }
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        minimumFractionDigits: 0
    }).format(price);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9-+()\s]+$/;
    return re.test(phone) && phone.replace(/[^0-9]/g, '').length >= 10;
}

// Loading States
function showLoading(element) {
    if (element) {
        element.style.opacity = '0.6';
        element.style.pointerEvents = 'none';
        
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = `
            <div class="spinner"></div>
        `;
        
        // Add spinner styles
        spinner.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.appendChild(spinner);
    }
}

function hideLoading(element) {
    if (element) {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
        
        const spinner = element.querySelector('.loading-spinner');
        if (spinner) {
            element.removeChild(spinner);
        }
    }
}

// Error Handling
function showError(message, element = null) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    errorDiv.style.cssText = `
        background: var(--color-error);
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        margin: 16px 0;
        font-size: 14px;
    `;
    
    if (element) {
        element.insertBefore(errorDiv, element.firstChild);
    } else {
        document.body.appendChild(errorDiv);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

// Success Messages
function showSuccess(message, element = null) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    successDiv.style.cssText = `
        background: var(--color-success);
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        margin: 16px 0;
        font-size: 14px;
    `;
    
    if (element) {
        element.insertBefore(successDiv, element.firstChild);
    } else {
        document.body.appendChild(successDiv);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.parentNode.removeChild(successDiv);
        }
    }, 5000);
}

// Local Storage Helpers
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
        return false;
    }
}

function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        return null;
    }
}

// Export functions for use in other scripts
window.PhantomBrewery = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartTotal,
    clearCart,
    formatPrice,
    formatDate,
    validateEmail,
    validatePhone,
    showLoading,
    hideLoading,
    showError,
    showSuccess,
    saveToStorage,
    loadFromStorage
};