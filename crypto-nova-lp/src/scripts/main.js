/**
 * Crypto Nova Landing Page - Main JavaScript
 * Handles interactions, animations, and user experience
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    // Initialize components
    initNavigation();
    initScrollAnimations();
    initFAQ();
    initParticles();
    initCounters();
    initFormHandling();
    initAnalytics();
    
    // Performance optimizations
    lazyLoadImages();
    preloadCriticalResources();
    
    console.log('🚀 Crypto Nova LP initialized successfully');
}

/**
 * Navigation functionality
 */
function initNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Header scroll effect
    let lastScrollY = 0;
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    }, 16));
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isOpen);
            navMenu.classList.toggle('is-open');
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    if (navMenu.classList.contains('is-open')) {
                        navToggle.setAttribute('aria-expanded', 'false');
                        navMenu.classList.remove('is-open');
                    }
                }
            }
        });
    });
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Stagger animation for child elements
                const children = entry.target.querySelectorAll('.animate-on-scroll');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('is-visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale'
    );
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Add scroll classes to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
}

/**
 * FAQ accordion functionality
 */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq__question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            // Close all other FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    const otherAnswer = otherQuestion.nextElementSibling;
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                    }
                }
            });
            
            // Toggle current FAQ
            question.setAttribute('aria-expanded', !isExpanded);
            
            if (answer) {
                if (!isExpanded) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0';
                }
            }
        });
    });
}

/**
 * Particle animation system
 */
function initParticles() {
    const particleContainer = document.querySelector('.hero__particles');
    if (!particleContainer) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-accent)'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: particle-float ${Math.random() * 10 + 15}s linear infinite;
            animation-delay: ${Math.random() * -20}s;
        `;
        particleContainer.appendChild(particle);
    }
}

/**
 * Animated counters
 */
function initCounters() {
    const counters = document.querySelectorAll('.stat__number');
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.textContent.replace(/[^\d.]/g, ''));
        const suffix = counter.textContent.replace(/[\d.]/g, '');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            const displayValue = Math.floor(current * 10) / 10;
            counter.textContent = displayValue + suffix;
        }, 16);
    };
    
    // Intersection observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

/**
 * Form handling and validation
 */
function initFormHandling() {
    const ctaButtons = document.querySelectorAll('[data-action]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const action = button.getAttribute('data-action');
            
            // Add loading state
            button.classList.add('btn--loading');
            button.setAttribute('aria-disabled', 'true');
            
            // Track analytics event
            trackEvent('cta_click', {
                action: action,
                location: getButtonLocation(button)
            });
            
            // Simulate form submission
            setTimeout(() => {
                button.classList.remove('btn--loading');
                button.setAttribute('aria-disabled', 'false');
                
                // Show success message or redirect
                if (action.includes('register')) {
                    showRegistrationModal();
                } else if (action === 'demo') {
                    showDemoModal();
                }
            }, 1500);
        });
    });
}

/**
 * Analytics tracking
 */
function initAnalytics() {
    // Track page view
    trackEvent('page_view', {
        page: 'landing_page',
        timestamp: new Date().toISOString()
    });
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', throttle(() => {
        const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScrollDepth) {
            maxScrollDepth = scrollPercent;
            
            // Track milestone scroll depths
            if ([25, 50, 75, 90].includes(scrollPercent)) {
                trackEvent('scroll_depth', {
                    depth: scrollPercent,
                    page: 'landing_page'
                });
            }
        }
    }, 1000));
    
    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', {
            duration: timeOnPage,
            page: 'landing_page'
        });
    });
}

/**
 * Lazy load images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Preload critical resources
 */
function preloadCriticalResources() {
    const criticalImages = [
        './assets/img/hero-device.png',
        './assets/img/logo.svg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

/**
 * Utility Functions
 */

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

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

function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Console logging for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('📊 Analytics Event:', eventName, parameters);
    }
}

function getButtonLocation(button) {
    const section = button.closest('.section, .hero, .header');
    return section ? section.className.split(' ')[0] : 'unknown';
}

function showRegistrationModal() {
    // Create modal for registration
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__backdrop"></div>
        <div class="modal__content">
            <h2>無料登録</h2>
            <p>メールアドレスを入力して、Crypto Novaを始めましょう。</p>
            <form class="registration-form">
                <input type="email" placeholder="メールアドレス" required>
                <button type="submit" class="btn btn--primary">登録する</button>
            </form>
            <button class="modal__close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Modal functionality
    const closeModal = () => {
        modal.remove();
    };
    
    modal.querySelector('.modal__close').addEventListener('click', closeModal);
    modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    
    // Form submission
    modal.querySelector('.registration-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        trackEvent('registration_attempt', { email: email });
        
        // Simulate registration
        setTimeout(() => {
            alert('登録が完了しました！確認メールをお送りしました。');
            closeModal();
        }, 1000);
    });
}

function showDemoModal() {
    // Create modal for demo
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__backdrop"></div>
        <div class="modal__content">
            <h2>デモ動画</h2>
            <div class="demo-video">
                <p>Crypto Novaのデモ動画をご覧いただき、ありがとうございます。</p>
                <p>実際のプラットフォームでは、リアルタイムの取引データとAI分析をご確認いただけます。</p>
            </div>
            <button class="modal__close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Modal functionality
    const closeModal = () => {
        modal.remove();
    };
    
    modal.querySelector('.modal__close').addEventListener('click', closeModal);
    modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    
    trackEvent('demo_view', { source: 'landing_page' });
}

// CSS for modals (injected dynamically)
const modalStyles = `
    .modal {
        position: fixed;
        inset: 0;
        z-index: 1050;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    }
    
    .modal__backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
    }
    
    .modal__content {
        position: relative;
        background: var(--gradient-card);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--radius-xl);
        padding: var(--space-8);
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        animation: scaleIn 0.3s ease-out;
    }
    
    .modal__close {
        position: absolute;
        top: var(--space-4);
        right: var(--space-4);
        background: none;
        border: none;
        font-size: var(--font-size-2xl);
        color: var(--color-text-secondary);
        cursor: pointer;
        transition: color var(--transition-base);
    }
    
    .modal__close:hover {
        color: var(--color-text-primary);
    }
    
    .registration-form {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        margin-top: var(--space-6);
    }
    
    .registration-form input {
        padding: var(--space-4);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--radius-base);
        background: var(--color-background-card);
        color: var(--color-text-primary);
        font-size: var(--font-size-base);
    }
    
    .registration-form input:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
    }
    
    .demo-video {
        margin-top: var(--space-6);
        padding: var(--space-6);
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--radius-base);
        text-align: center;
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Error handling
window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error);
    trackEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno
    });
});

// Performance monitoring
window.addEventListener('load', () => {
    // Measure Core Web Vitals
    if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        trackEvent('page_performance', {
            load_time: Math.round(loadTime),
            dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)
        });
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}