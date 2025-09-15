// Phantom Brewery EC - Main JavaScript
// ブランドコンセプト: 「静謐の中に宿る、和の余韻」

class PhantomBreweryApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupLoadingScreen();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupNavigation();
    this.setupSmoothScrolling();
    this.setupVideoControls();
  }

  // ローディング画面の制御
  setupLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    if (!loadingScreen || !mainContent) {
      console.log('Loading elements not found, skipping loading screen');
      return;
    }
    
    // ページ読み込み完了後にローディング画面を非表示
    const hideLoading = () => {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.style.opacity = '1';
        mainContent.classList.add('loaded');
        
        // ローディング画面を完全に削除
        setTimeout(() => {
          if (loadingScreen && loadingScreen.parentNode) {
            loadingScreen.style.display = 'none';
          }
        }, 600);
      }, 800); // さらに短縮
    };
    
    // 複数のイベントで確実に実行
    if (document.readyState === 'complete') {
      hideLoading();
    } else {
      window.addEventListener('load', hideLoading);
      // バックアップとして DOMContentLoaded も使用
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(hideLoading, 500);
      });
    }
  }

  // スクロール効果の設定
  setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // ヘッダーの背景変更
      if (currentScrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // スクロール方向に応じたヘッダーの表示/非表示
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    });
  }

  // アニメーションの設定
  setupAnimations() {
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

    // アニメーション対象要素を監視
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // パララックス効果
    this.setupParallaxEffect();
  }

  // パララックス効果
  setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.seasonal-bg');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }

  // ナビゲーションの設定
  setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });

      // ナビゲーションリンククリック時の処理
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            this.smoothScrollTo(targetElement);
          }
          
          // モバイルメニューを閉じる
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        });
      });
    }
  }

  // スムーススクロール
  setupSmoothScrolling() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          this.smoothScrollTo(targetElement);
        }
      });
    });
  }

  // スムーススクロール実行
  smoothScrollTo(element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  // ビデオコントロール（現在は画像を使用）
  setupVideoControls() {
    const heroVideo = document.querySelector('.hero-video video');
    const heroImage = document.querySelector('.hero-background');
    
    if (heroVideo) {
      // ビデオの自動再生設定
      heroVideo.addEventListener('loadeddata', () => {
        heroVideo.play().catch(e => {
          console.log('Video autoplay failed:', e);
        });
      });

      // ビデオのループ設定
      heroVideo.addEventListener('ended', () => {
        heroVideo.currentTime = 0;
        heroVideo.play();
      });

      // ビデオの品質設定
      heroVideo.addEventListener('canplay', () => {
        heroVideo.style.opacity = '1';
      });
    } else if (heroImage) {
      // 画像の場合は即座に表示
      heroImage.style.opacity = '1';
      console.log('Hero background image loaded');
    }
  }

  // 障子演出のページ遷移アニメーション
  createShojiTransition(targetUrl) {
    const shoji = document.createElement('div');
    shoji.className = 'shoji-transition';
    shoji.innerHTML = `
      <div class="shoji-panel shoji-left"></div>
      <div class="shoji-panel shoji-right"></div>
    `;
    
    document.body.appendChild(shoji);
    
    // アニメーション開始
    setTimeout(() => {
      shoji.classList.add('active');
    }, 10);
    
    // ページ遷移
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 800);
  }

  // 季節の背景切り替え
  updateSeasonalBackground() {
    const now = new Date();
    const month = now.getMonth() + 1;
    let season = 'spring';
    
    if (month >= 3 && month <= 5) season = 'spring';
    else if (month >= 6 && month <= 8) season = 'summer';
    else if (month >= 9 && month <= 11) season = 'autumn';
    else season = 'winter';
    
    // 季節に応じた背景色の調整
    document.documentElement.style.setProperty('--current-season', season);
  }

  // 商品カードのホバー効果
  setupProductCardEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // フォームのバリデーション
  setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // バリデーション
        if (this.validateForm(data)) {
          this.submitForm(data);
        }
      });
    });
  }

  // フォームバリデーション
  validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
      errors.push('お名前を正しく入力してください');
    }
    
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push('メールアドレスを正しく入力してください');
    }
    
    if (errors.length > 0) {
      this.showNotification(errors.join('<br>'), 'error');
      return false;
    }
    
    return true;
  }

  // メールアドレスバリデーション
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // フォーム送信
  submitForm(data) {
    // 実際の送信処理はここに実装
    this.showNotification('お問い合わせありがとうございます。', 'success');
  }

  // 通知表示
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // 表示アニメーション
    setTimeout(() => {
      notification.classList.add('active');
    }, 10);
    
    // 自動非表示
    setTimeout(() => {
      notification.classList.remove('active');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 5000);
    
    // 手動閉じる
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.classList.remove('active');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    });
  }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
  new PhantomBreweryApp();
  
  // 緊急時のフォールバック - 5秒後に強制的にローディングを非表示
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
      console.log('Emergency fallback: Force hiding loading screen');
      loadingScreen.classList.add('hidden');
      loadingScreen.style.display = 'none';
      
      if (mainContent) {
        mainContent.style.opacity = '1';
        mainContent.classList.add('loaded');
      }
    }
  }, 5000);
});

// ページ遷移時の処理
window.addEventListener('beforeunload', () => {
  // ページ遷移時のクリーンアップ処理
});

// リサイズ時の処理
window.addEventListener('resize', () => {
  // リサイズ時の処理
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// 初期化時にビューポート高さを設定
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);