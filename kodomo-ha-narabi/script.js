// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initParallax();
    initTabs();
    initFAQ();
    initSmoothScroll();
    initHeaderScroll();
    initFormValidation();
    initAnimations();
});

// Parallax Effect for Hero Background
function initParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const hero = document.querySelector('.hero');
    
    if (!parallaxLayers.length || !hero) return;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const heroHeight = hero.offsetHeight;
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.min(scrolled / heroHeight, 1);
        
        // Update each layer based on scroll progress
        parallaxLayers.forEach((layer, index) => {
            const layerIndex = index + 1;
            const translateY = rate * (layerIndex * 0.1);
            
            // Show/hide layers based on scroll progress
            if (scrollProgress > (layerIndex - 1) * 0.2) {
                layer.style.opacity = Math.min((scrollProgress - (layerIndex - 1) * 0.2) * 5, 1);
            } else {
                layer.style.opacity = 0;
            }
            
            layer.style.transform = `translateY(${translateY}px)`;
        });
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', () => {
        requestTick();
        ticking = false;
    });
}

// Tab Functionality
function initTabs() {
    // Guide tabs
    const guideTabButtons = document.querySelectorAll('.guide-tabs .tab-btn');
    const guideTabPanels = document.querySelectorAll('.guide-tabs .tab-panel');
    
    guideTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            guideTabButtons.forEach(btn => btn.classList.remove('active'));
            guideTabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Step tabs
    const stepTabButtons = document.querySelectorAll('.step-tabs .tab-btn');
    const stepTabPanels = document.querySelectorAll('.step-tabs .tab-panel');
    
    stepTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            stepTabButtons.forEach(btn => btn.classList.remove('active'));
            stepTabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateHeader);
}

// Form Validation
function initFormValidation() {
    const form = document.querySelector('.form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email) {
            showNotification('お名前とメールアドレスは必須項目です。', 'error');
            return;
        }
        
        if (!isValidEmail(data.email)) {
            showNotification('正しいメールアドレスを入力してください。', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('お問い合わせを受け付けました。ありがとうございます！', 'success');
        form.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: var(--font-secondary);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .case-card, .contact-card, .step-item, .check-item, .growth-card, .pack-feature');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .feature-card,
    .case-card,
    .contact-card,
    .step-item,
    .check-item,
    .growth-card,
    .pack-feature {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Enhanced floating animation for hero elements */
    .floating-elements > div {
        animation-duration: 4s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    
    .tooth-icon {
        animation-name: floatTooth;
    }
    
    .star-icon {
        animation-name: floatStar;
    }
    
    .heart-icon {
        animation-name: floatHeart;
    }
    
    @keyframes floatTooth {
        0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
        }
        50% { 
            transform: translateY(-20px) rotate(5deg); 
        }
    }
    
    @keyframes floatStar {
        0%, 100% { 
            transform: translateY(0px) scale(1); 
        }
        50% { 
            transform: translateY(-15px) scale(1.1); 
        }
    }
    
    @keyframes floatHeart {
        0%, 100% { 
            transform: translateY(0px) scale(1); 
        }
        50% { 
            transform: translateY(-25px) scale(1.2); 
        }
    }
    
    /* Loading animation for images */
    .placeholder-image {
        animation: pulse 2s ease-in-out infinite;
    }
    
    /* Hover effects for interactive elements */
    .btn:hover {
        transform: translateY(-2px) scale(1.05);
    }
    
    .feature-card:hover,
    .case-card:hover,
    .contact-card:hover {
        transform: translateY(-8px) scale(1.02);
    }
    
    /* Mobile menu toggle (if needed) */
    @media (max-width: 768px) {
        .main-nav {
            display: none;
        }
        
        .main-nav.active {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        
        .nav-list {
            flex-direction: column !important;
            gap: 15px !important;
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle functionality
function initMobileMenu() {
    const header = document.querySelector('.header-content');
    const nav = document.querySelector('.main-nav');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--primary-blue);
        cursor: pointer;
        padding: 10px;
    `;
    
    // Add mobile menu button to header
    header.appendChild(mobileMenuBtn);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Show mobile menu button on small screens
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMobileMenu(e) {
        if (e.matches) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
            nav.classList.remove('active');
        }
    }
    
    mediaQuery.addListener(handleMobileMenu);
    handleMobileMenu(mediaQuery);
}

// Initialize mobile menu
initMobileMenu();

// Utility function to debounce events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll performance
const optimizedScrollHandler = debounce(() => {
    // Any additional scroll-based functionality can be added here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading state for better UX
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: '🦷';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        z-index: 10000;
        animation: pulse 1s ease-in-out infinite;
    }
`;
document.head.appendChild(loadingStyle);