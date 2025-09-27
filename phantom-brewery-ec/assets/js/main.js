// ===== Phantom Brewery EC - Main JavaScript =====

class PhantomBreweryApp {
    constructor() {
        this.cart = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupAnimations();
        this.updateCartDisplay();
    }

    setupEventListeners() {
        // Navigation smooth scrolling
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Add to cart buttons
        document.querySelectorAll('.btn--small').forEach(btn => {
            if (btn.textContent.includes('カートに追加')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.addToCart(btn);
                });
            }
        });

        // Cart button
        const cartBtn = document.querySelector('.btn--cart');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                this.showCart();
            });
        }

        // Mobile menu toggle (if needed)
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

            // Parallax effect for seasonal elements
            this.updateParallax(scrollTop);
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
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.product__card, .process__step, .story__text').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Seasonal animation
        this.setupSeasonalAnimation();
    }

    setupSeasonalAnimation() {
        const seasonalElements = document.querySelectorAll('.seasonal__element');
        seasonalElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 5}s`;
        });
    }

    updateParallax(scrollTop) {
        const seasonalElements = document.querySelectorAll('.seasonal__element');
        seasonalElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrollTop * 0.1}deg)`;
        });
    }

    addToCart(button) {
        const productCard = button.closest('.product__card');
        const productName = productCard.querySelector('.product__name').textContent;
        const productPrice = productCard.querySelector('.price__amount').textContent;
        
        const product = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            quantity: 1
        };

        // Check if product already exists in cart
        const existingProduct = this.cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            this.cart.push(product);
        }

        this.updateCartDisplay();
        this.showAddToCartAnimation(button);
        this.showNotification(`${productName}をカートに追加しました`);
    }

    updateCartDisplay() {
        const cartCount = document.querySelector('.cart__count');
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

    showAddToCartAnimation(button) {
        button.style.transform = 'scale(0.95)';
        button.style.background = '#c5282f';
        button.textContent = '追加済み';
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.background = '';
            button.textContent = 'カートに追加';
        }, 1000);
    }

    showCart() {
        if (this.cart.length === 0) {
            this.showNotification('カートは空です');
            return;
        }

        // Create cart modal
        const modal = document.createElement('div');
        modal.className = 'cart-modal';
        modal.innerHTML = `
            <div class="cart-modal__overlay">
                <div class="cart-modal__content">
                    <div class="cart-modal__header">
                        <h3>カート</h3>
                        <button class="cart-modal__close">&times;</button>
                    </div>
                    <div class="cart-modal__body">
                        ${this.cart.map(item => `
                            <div class="cart-item">
                                <div class="cart-item__info">
                                    <h4>${item.name}</h4>
                                    <p>${item.price}</p>
                                </div>
                                <div class="cart-item__quantity">
                                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                                    <span>${item.quantity}</span>
                                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                                </div>
                                <button class="remove-btn" data-id="${item.id}">削除</button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="cart-modal__footer">
                        <div class="cart-total">
                            合計: ¥${this.calculateTotal()}
                        </div>
                        <button class="btn btn--primary">購入手続きへ</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .cart-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 2000;
            }
            .cart-modal__overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }
            .cart-modal__content {
                background: #fafafa;
                border-radius: 0;
                max-width: 500px;
                width: 100%;
                max-height: 80vh;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            .cart-modal__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid #eee;
            }
            .cart-modal__close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            }
            .cart-modal__body {
                flex: 1;
                overflow-y: auto;
                padding: 1rem;
            }
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
            .cart-modal__footer {
                padding: 1.5rem;
                border-top: 1px solid #eee;
            }
            .cart-total {
                font-size: 1.2rem;
                font-weight: 700;
                color: #d4af37;
                margin-bottom: 1rem;
            }
        `;
        document.head.appendChild(style);

        // Event listeners for modal
        modal.querySelector('.cart-modal__close').addEventListener('click', () => {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });

        modal.querySelector('.cart-modal__overlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                document.body.removeChild(modal);
                document.head.removeChild(style);
            }
        });

        // Quantity buttons
        modal.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const action = e.target.dataset.action;
                this.updateCartQuantity(id, action);
                this.showCart(); // Refresh cart
            });
        });

        // Remove buttons
        modal.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.removeFromCart(id);
                this.showCart(); // Refresh cart
            });
        });
    }

    updateCartQuantity(id, action) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            if (action === 'increase') {
                item.quantity += 1;
            } else if (action === 'decrease' && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
        this.updateCartDisplay();
    }

    removeFromCart(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.updateCartDisplay();
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => {
            const price = parseInt(item.price.replace(/[¥,]/g, ''));
            return total + (price * item.quantity);
        }, 0).toLocaleString();
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 2rem;
            background: #d4af37;
            color: #1a1a1a;
            padding: 1rem 1.5rem;
            border-radius: 0;
            z-index: 3000;
            font-weight: 300;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
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
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    setupMobileMenu() {
        // Add mobile menu toggle if needed
        const navContainer = document.querySelector('.nav__container');
        if (window.innerWidth <= 768) {
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
document.addEventListener('DOMContentLoaded', () => {
    new PhantomBreweryApp();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Refresh mobile menu setup if needed
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn && window.innerWidth > 768) {
        mobileMenuBtn.remove();
        const navMenu = document.querySelector('.nav__menu');
        navMenu.style.cssText = '';
    }
});