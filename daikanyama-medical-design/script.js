// スライダー機能
class Slider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.nav-dot');
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5秒
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // ドットクリックイベント
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // 自動再生開始
        this.startAutoPlay();
        
        // ホバー時に自動再生停止
        const sliderContainer = document.querySelector('.hero-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                this.stopAutoPlay();
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                this.startAutoPlay();
            });
        }
        
        // タッチイベント対応
        this.addTouchEvents();
    }
    
    goToSlide(index) {
        // 現在のスライドを非表示
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // 新しいスライドを表示
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    addTouchEvents() {
        const sliderContainer = document.querySelector('.hero-slider');
        if (!sliderContainer) return;
        
        let startX = 0;
        let endX = 0;
        
        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            // スワイプの閾値
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // 左スワイプ - 次のスライド
                    this.nextSlide();
                } else {
                    // 右スワイプ - 前のスライド
                    const prevIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
                    this.goToSlide(prevIndex);
                }
            }
        });
    }
}

// スムーススクロール
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // アンカーリンクにスムーススクロールを適用
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    this.scrollToElement(target);
                }
            });
        });
    }
    
    scrollToElement(element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// スクロールアニメーション
class ScrollAnimation {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }
    
    init() {
        // Intersection Observerがサポートされているかチェック
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, this.observerOptions);
            
            // アニメーション対象要素を監視
            this.observeElements();
        }
    }
    
    observeElements() {
        const elements = document.querySelectorAll('.kpi-card, .course-card, .testimonial, .case, .step, .role, .factor');
        elements.forEach(element => {
            element.classList.add('scroll-animate');
            this.observer.observe(element);
        });
    }
}

// メソッドページのナビゲーション
class MethodNavigation {
    constructor() {
        this.navItems = document.querySelectorAll('.method-nav-item');
        this.sections = document.querySelectorAll('.method-section');
        this.init();
    }
    
    init() {
        if (this.navItems.length === 0) return;
        
        // ナビゲーションアイテムのクリックイベント
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    this.scrollToSection(targetSection);
                }
            });
        });
        
        // スクロール時のアクティブ状態更新
        window.addEventListener('scroll', () => {
            this.updateActiveNav();
        });
    }
    
    scrollToSection(section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const navHeight = document.querySelector('.method-nav').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight - navHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    
    updateActiveNav() {
        const scrollPosition = window.scrollY + 200;
        
        this.sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // アクティブ状態をリセット
                this.navItems.forEach(item => item.classList.remove('active'));
                
                // 対応するナビゲーションアイテムをアクティブに
                const targetNav = document.querySelector(`.method-nav-item[href="#${section.id}"]`);
                if (targetNav) {
                    targetNav.classList.add('active');
                }
            }
        });
    }
}

// フォーム機能
class FormHandler {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }
    
    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(form);
            });
        });
    }
    
    handleSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // バリデーション
        if (this.validateForm(data)) {
            this.submitForm(data);
        }
    }
    
    validateForm(data) {
        // 基本的なバリデーション
        const requiredFields = ['name', 'email'];
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                this.showError(`${field}は必須項目です`);
                isValid = false;
            }
        });
        
        // メールアドレスの形式チェック
        if (data.email && !this.isValidEmail(data.email)) {
            this.showError('正しいメールアドレスを入力してください');
            isValid = false;
        }
        
        return isValid;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showError(message) {
        // エラーメッセージ表示
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            background: #fed7d7;
            color: #c53030;
            padding: 10px;
            border-radius: 4px;
            margin: 10px 0;
            border: 1px solid #feb2b2;
        `;
        
        // 既存のエラーメッセージを削除
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // フォームの前にエラーメッセージを挿入
        const form = document.querySelector('form');
        if (form) {
            form.parentNode.insertBefore(errorDiv, form);
            
            // 3秒後にエラーメッセージを削除
            setTimeout(() => {
                errorDiv.remove();
            }, 3000);
        }
    }
    
    submitForm(data) {
        // 実際の送信処理（ここではコンソールに出力）
        console.log('Form submitted:', data);
        
        // 成功メッセージ表示
        this.showSuccess('送信が完了しました。担当より1営業日以内にご連絡します。');
    }
    
    showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            background: #c6f6d5;
            color: #22543d;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
            border: 1px solid #9ae6b4;
            text-align: center;
            font-weight: 500;
        `;
        
        // フォームの前に成功メッセージを挿入
        const form = document.querySelector('form');
        if (form) {
            form.parentNode.insertBefore(successDiv, form);
            
            // 5秒後に成功メッセージを削除
            setTimeout(() => {
                successDiv.remove();
            }, 5000);
        }
    }
}

// レスポンシブナビゲーション
class ResponsiveNavigation {
    constructor() {
        this.menuButton = null;
        this.navMenu = null;
        this.init();
    }
    
    init() {
        // モバイルメニューボタンを作成
        this.createMobileMenu();
        
        // ウィンドウリサイズイベント
        window.addEventListener('resize', () => {
            this.handleResize();
        });
        
        // 初期状態の設定
        this.handleResize();
    }
    
    createMobileMenu() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        // メニューボタンを作成
        this.menuButton = document.createElement('button');
        this.menuButton.className = 'mobile-menu-button';
        this.menuButton.innerHTML = '☰';
        this.menuButton.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            padding: 10px;
            color: #3182ce;
        `;
        
        // ナビゲーションメニューを取得
        this.navMenu = document.querySelector('.main-nav');
        
        if (this.navMenu) {
            // メニューボタンをナビゲーションの前に挿入
            this.navMenu.parentNode.insertBefore(this.menuButton, this.navMenu);
            
            // クリックイベント
            this.menuButton.addEventListener('click', () => {
                this.toggleMenu();
            });
        }
    }
    
    toggleMenu() {
        if (this.navMenu) {
            this.navMenu.classList.toggle('mobile-open');
            this.menuButton.classList.toggle('active');
        }
    }
    
    handleResize() {
        const isMobile = window.innerWidth <= 768;
        
        if (this.menuButton) {
            this.menuButton.style.display = isMobile ? 'block' : 'none';
        }
        
        if (this.navMenu) {
            if (!isMobile) {
                this.navMenu.classList.remove('mobile-open');
                this.menuButton.classList.remove('active');
            }
        }
    }
}

// パフォーマンス最適化
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // 画像の遅延読み込み
        this.lazyLoadImages();
        
        // スクロールイベントの最適化
        this.optimizeScrollEvents();
    }
    
    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    optimizeScrollEvents() {
        let ticking = false;
        
        const updateScrollElements = () => {
            // スクロール関連の処理
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        });
    }
}

// アクセシビリティ改善
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }
    
    init() {
        // キーボードナビゲーション
        this.enhanceKeyboardNavigation();
        
        // フォーカス管理
        this.manageFocus();
        
        // ARIA属性の追加
        this.addAriaAttributes();
    }
    
    enhanceKeyboardNavigation() {
        // スライダーのキーボード操作
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                const slider = document.querySelector('.hero-slider');
                if (slider && slider.matches(':hover')) {
                    e.preventDefault();
                    // スライダーのキーボード操作を実装
                }
            }
        });
    }
    
    manageFocus() {
        // モーダルやドロップダウンのフォーカス管理
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // 開いているモーダルやドロップダウンを閉じる
                const openElements = document.querySelectorAll('.mobile-open, .active');
                openElements.forEach(element => {
                    element.classList.remove('mobile-open', 'active');
                });
            }
        });
    }
    
    addAriaAttributes() {
        // スライダーにARIA属性を追加
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.setAttribute('role', 'region');
            slider.setAttribute('aria-label', 'メインスライダー');
        }
        
        // ナビゲーションメニューにARIA属性を追加
        const nav = document.querySelector('.main-nav');
        if (nav) {
            nav.setAttribute('role', 'navigation');
            nav.setAttribute('aria-label', 'メインナビゲーション');
        }
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // 各機能を初期化
    new Slider();
    new SmoothScroll();
    new ScrollAnimation();
    new MethodNavigation();
    new FormHandler();
    new ResponsiveNavigation();
    new PerformanceOptimizer();
    new AccessibilityEnhancer();
    
    // ページ読み込み完了の通知
    console.log('代官山MEDICAL サイトが正常に読み込まれました');
});

// エラーハンドリング
window.addEventListener('error', (e) => {
    console.error('JavaScript エラー:', e.error);
});

// サービスワーカーの登録（オフライン対応）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker 登録成功:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker 登録失敗:', error);
            });
    });
}