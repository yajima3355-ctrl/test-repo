// ===== Phantom Brewery - Common JavaScript =====

class PhantomBreweryApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('phantomBreweryCart')) || [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupAnimations();
        this.updateCartDisplay();
        this.setupSearch();
    }

    setupEventListeners() {
        // Navigation smooth scrolling
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Cart button
        const cartBtn = document.querySelector('.btn--cart');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                this.showCart();
            });
        }

        // Mobile menu toggle
        this.setupMobileMenu();
    }

    setupScrollEffects() {
        let lastScrollTop = 0;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Header background opacity based on scroll
            if (scrollTop > 100) {
                header.style.background = 'rgba(26, 26, 26, 0.98)';
            } else {
                header.style.background = 'rgba(26, 26, 26, 0.95)';
            }

            // Hide/show header on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    setupSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        if (searchInput && searchBtn) {
            const performSearch = () => {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `../search-result/search-result.html?q=${encodeURIComponent(query)}`;
                }
            };

            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    }

    addToCart(product) {
        const existingProduct = this.cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += product.quantity || 1;
        } else {
            this.cart.push({
                ...product,
                quantity: product.quantity || 1
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showNotification(`${product.name}をカートに追加しました`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    saveCart() {
        localStorage.setItem('phantomBreweryCart', JSON.stringify(this.cart));
    }

    updateCartDisplay() {
        const cartCount = document.querySelector('.cart__count');
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Add pulse animation when cart is updated
            if (totalItems > 0) {
                cartCount.style.animation = 'pulse 0.6s ease';
                setTimeout(() => {
                    cartCount.style.animation = '';
                }, 600);
            }
        }
    }

    showCart() {
        if (this.cart.length === 0) {
            this.showNotification('カートは空です');
            return;
        }

        // Create cart modal
        const modal = document.createElement('div');
        modal.className = 'modal show';
        modal.innerHTML = `
            <div class="modal__overlay"></div>
            <div class="modal__content">
                <div class="modal__header">
                    <h3>ショッピングカート</h3>
                    <button class="modal__close">&times;</button>
                </div>
                <div class="modal__body">
                    ${this.cart.map(item => `
                        <div class="cart-item">
                            <div class="cart-item__info">
                                <h4>${item.name}</h4>
                                <p>¥${item.price.toLocaleString()}</p>
                            </div>
                            <div class="cart-item__quantity">
                                <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                            </div>
                            <button class="remove-btn" onclick="app.removeFromCart(${item.id})">削除</button>
                        </div>
                    `).join('')}
                </div>
                <div class="modal__footer">
                    <div class="cart-total">
                        合計: ¥${this.calculateTotal()}
                    </div>
                    <button class="btn btn--primary" onclick="window.location.href='../shopping-cart/shopping-cart.html'">購入手続きへ</button>
                </div>
            </div>
        `;

        // Add cart item styles
        const style = document.createElement('style');
        style.textContent = `
            .cart-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                border-bottom: 1px solid #eee;
            }
            .cart-item__info {
                flex: 1;
            }
            .cart-item__quantity {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .quantity-btn {
                width: 30px;
                height: 30px;
                border: 1px solid #ddd;
                background: #fff;
                cursor: pointer;
            }
            .remove-btn {
                background: #c5282f;
                color: #fafafa;
                border: none;
                padding: 0.5rem 1rem;
                cursor: pointer;
                font-size: 0.8rem;
            }
            .cart-total {
                font-size: 1.2rem;
                font-weight: 700;
                color: #d4af37;
                margin-bottom: 1rem;
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(modal);

        // Event listeners for modal
        modal.querySelector('.modal__close').addEventListener('click', () => {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });

        modal.querySelector('.modal__overlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                document.body.removeChild(modal);
                document.head.removeChild(style);
            }
        });
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0).toLocaleString();
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    setupMobileMenu() {
        // Add mobile menu toggle if needed
        if (window.innerWidth <= 768) {
            const navContainer = document.querySelector('.nav__container');
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '☰';
            mobileMenuBtn.style.cssText = `
                background: none;
                border: none;
                color: #fafafa;
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
            `;

            const navMenu = document.querySelector('.nav__menu');
            navMenu.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: #1a1a1a;
                flex-direction: column;
                padding: 1rem;
                display: none;
            `;

            mobileMenuBtn.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            });

            navContainer.appendChild(mobileMenuBtn);
        }
    }
}

// Add CSS animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(animationStyles);

// Initialize app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PhantomBreweryApp();
});

// Handle window resize
window.addEventListener('resize', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn && window.innerWidth > 768) {
        mobileMenuBtn.remove();
        const navMenu = document.querySelector('.nav__menu');
        navMenu.style.cssText = '';
    }
});

// Export for use in other scripts
window.PhantomBreweryApp = PhantomBreweryApp;