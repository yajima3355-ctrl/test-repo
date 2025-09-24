// ふくどくや LP JavaScript

// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    // 初期化処理
    initializeApp();
    
    // スクロールアニメーション
    setupScrollAnimations();
    
    // 固定ボトムCTAの表示制御
    setupFixedCTA();
    
    // 価格カードのホバー効果
    setupPriceCards();
    
    // 社会的証明のカウントアップアニメーション
    setupCountUpAnimation();
});

// アプリ初期化
function initializeApp() {
    console.log('ふくどくや LP が読み込まれました');
    
    // モーダルの初期化
    const modal = document.getElementById('appraisalModal');
    if (modal) {
        // モーダル外クリックで閉じる
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// スクロールアニメーション設定
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素を監視
    const animateElements = document.querySelectorAll('.price-card, .feature-item, .testimonial');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// 固定ボトムCTAの表示制御
function setupFixedCTA() {
    const fixedCTA = document.querySelector('.fixed-bottom-cta');
    if (!fixedCTA) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateCTA() {
        const scrollY = window.scrollY;
        
        // 下にスクロールしている場合は非表示、上にスクロールしている場合は表示
        if (scrollY > lastScrollY && scrollY > 100) {
            fixedCTA.style.transform = 'translateY(100%)';
        } else {
            fixedCTA.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateCTA);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// 価格カードのホバー効果
function setupPriceCards() {
    const priceCards = document.querySelectorAll('.price-card');
    
    priceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// カウントアップアニメーション
function setupCountUpAnimation() {
    const countElements = document.querySelectorAll('.proof-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCountUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    countElements.forEach(el => {
        observer.observe(el);
    });
}

// カウントアップアニメーション実行
function animateCountUp(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const duration = 2000; // 2秒
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // 数値のフォーマット
        if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (element.textContent.includes(',')) {
            element.textContent = Math.floor(current).toLocaleString();
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// 査定申し込みモーダルを開く
function openAppraisal() {
    const modal = document.getElementById('appraisalModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // スクロール防止
        
        // アナリティクスイベント送信（実装時）
        trackEvent('appraisal_modal_opened');
    }
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById('appraisalModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // スクロール復活
    }
}

// LINEで相談
function contactLine() {
    // LINE公式アカウントのURL（実際のURLに置き換え）
    const lineUrl = 'https://line.me/R/ti/p/@fukudokuya';
    window.open(lineUrl, '_blank');
    
    // アナリティクスイベント送信
    trackEvent('contact_line_clicked');
    
    closeModal();
}

// WEBフォーム
function contactWeb() {
    // WEBフォームのURL（実際のURLに置き換え）
    const webFormUrl = 'https://fukudokuya.com/contact';
    window.open(webFormUrl, '_blank');
    
    // アナリティクスイベント送信
    trackEvent('contact_web_clicked');
    
    closeModal();
}

// 電話で相談
function contactPhone() {
    const phoneNumber = '086-476-3385';
    
    // モバイルデバイスの場合は電話アプリを開く
    if (isMobile()) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // PCの場合は電話番号をクリップボードにコピー
        copyToClipboard(phoneNumber);
        showNotification('電話番号をクリップボードにコピーしました: ' + phoneNumber);
    }
    
    // アナリティクスイベント送信
    trackEvent('contact_phone_clicked');
    
    closeModal();
}

// モバイルデバイス判定
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// クリップボードにコピー
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // フォールバック
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// 通知表示
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #E3002B;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 3000;
        font-size: 14px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // 3秒後に自動削除
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// アナリティクスイベント送信（実装時）
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4 の場合
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Google Tag Manager の場合
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': eventName,
            ...parameters
        });
    }
    
    console.log('Event tracked:', eventName, parameters);
}

// スクロール位置に基づくCTA表示制御
function updateCTAVisibility() {
    const heroSection = document.querySelector('.hero-section');
    const fixedCTA = document.querySelector('.fixed-bottom-cta');
    
    if (!heroSection || !fixedCTA) return;
    
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollY = window.scrollY;
    
    if (scrollY > heroBottom) {
        fixedCTA.style.display = 'block';
    } else {
        fixedCTA.style.display = 'none';
    }
}

// スクロールイベントリスナー
window.addEventListener('scroll', updateCTAVisibility);

// ページ読み込み時のCTA表示状態を設定
window.addEventListener('load', updateCTAVisibility);

// 価格カードクリック時の詳細表示
function showPriceDetails(cardElement) {
    const title = cardElement.querySelector('.card-title').textContent;
    const price = cardElement.querySelector('.price-highlight').textContent;
    const details = cardElement.querySelector('.card-details').textContent;
    
    const detailModal = document.createElement('div');
    detailModal.className = 'modal';
    detailModal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h3>${title}</h3>
            <div class="price-detail">
                <div class="detail-price">${price}</div>
                <div class="detail-info">${details}</div>
            </div>
            <p class="detail-note">※実際の査定額は状態により変動します</p>
            <button class="cta-button primary" onclick="openAppraisal()">
                この商品を査定依頼する
            </button>
        </div>
    `;
    
    document.body.appendChild(detailModal);
    detailModal.style.display = 'block';
}

// 価格カードにクリックイベントを追加
document.addEventListener('DOMContentLoaded', function() {
    const priceCards = document.querySelectorAll('.price-card');
    priceCards.forEach(card => {
        card.addEventListener('click', function() {
            showPriceDetails(this);
        });
        
        // アクセシビリティのためキーボード操作も対応
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showPriceDetails(this);
            }
        });
        
        // タブインデックスを設定
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', '価格詳細を表示');
    });
});

// パフォーマンス最適化
function optimizePerformance() {
    // 画像の遅延読み込み
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // エラーをアナリティクスに送信（実装時）
    trackEvent('javascript_error', {
        error_message: e.error.message,
        error_stack: e.error.stack
    });
});

// ページ離脱時のイベント送信
window.addEventListener('beforeunload', function() {
    trackEvent('page_exit', {
        time_on_page: Date.now() - performance.timing.navigationStart
    });
});

// 初期化完了
console.log('ふくどくや LP JavaScript が正常に読み込まれました');