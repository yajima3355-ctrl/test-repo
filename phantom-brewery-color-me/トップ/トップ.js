// Phantom Brewery - Top Page JavaScript
// 静謐の中に宿る、和の余韻 - トップページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTopPage();
});

// Initialize Top Page
function initializeTopPage() {
    initializeHeroAnimations();
    initializeProductCards();
    initializeSeasonalBackground();
    initializeScrollEffects();
}

// Hero Animations
function initializeHeroAnimations() {
    const sakeVessel = document.querySelector('.sake__vessel');
    const sakeDrop = document.querySelector('.sake__drop');
    
    if (sakeVessel && sakeDrop) {
        // Add hover effect to sake vessel
        sakeVessel.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });
        
        sakeVessel.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click effect to sake drop
        sakeDrop.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'drop 3s ease-in-out infinite';
            }, 100);
        });
    }
}

// Product Cards
function initializeProductCards() {
    const productCards = document.querySelectorAll('.product__card');
    
    productCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            const badge = this.querySelector('.product__badge');
            if (badge) {
                badge.style.transform = 'scale(1.1)';
                badge.style.transition = 'transform 0.2s ease-in-out';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const badge = this.querySelector('.product__badge');
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
        });
        
        // Add click to add to cart animation
        const addToCartBtn = card.querySelector('.btn--primary');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }
    });
}

// Seasonal Background
function initializeSeasonalBackground() {
    const seasonalElements = document.querySelectorAll('.seasonal__element');
    
    seasonalElements.forEach((element, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 1000);
        
        // Add click interaction
        element.addEventListener('click', function() {
            this.style.opacity = '0.3';
            setTimeout(() => {
                this.style.opacity = '0.1';
            }, 1000);
        });
    });
}

// Scroll Effects
function initializeScrollEffects() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            // Parallax effect for hero section
            const scrolled = currentScrollY / window.innerHeight;
            hero.style.transform = `translateY(${scrolled * 50}px)`;
            
            // Seasonal elements parallax
            const seasonalElements = document.querySelectorAll('.seasonal__element');
            seasonalElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform += ` translateY(${currentScrollY * speed}px)`;
            });
        }
        
        lastScrollY = currentScrollY;
    });
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export functions for external use
window.TopPage = {
    initializeTopPage,
    initializeHeroAnimations,
    initializeProductCards,
    initializeSeasonalBackground,
    initializeScrollEffects
};