// Phantom Brewery EC - Animation Controller
// ブランドコンセプト: 「静謐の中に宿る、和の余韻」

class AnimationController {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupPageTransitions();
    this.setupHoverEffects();
    this.setupTextAnimations();
    this.setupParallaxEffects();
  }

  // スクロールアニメーションの設定
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // 遅延アニメーション
          if (entry.target.dataset.delay) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, parseInt(entry.target.dataset.delay));
          }
        }
      });
    }, observerOptions);

    // アニメーション対象要素を監視
    const animatedElements = document.querySelectorAll('.scroll-reveal, .fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // ページ遷移アニメーション
  setupPageTransitions() {
    // 障子演出のページ遷移
    this.setupShojiTransition();
    
    // フェード遷移
    this.setupFadeTransition();
    
    // ページロードアニメーション
    this.setupPageLoadAnimation();
  }

  // 障子演出の設定
  setupShojiTransition() {
    const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        // 外部リンクやアンカーリンクは除外
        if (link.href.includes('mailto:') || 
            link.href.includes('tel:') || 
            link.href.startsWith('#') ||
            link.target === '_blank') {
          return;
        }
        
        e.preventDefault();
        this.createShojiTransition(link.href);
      });
    });
  }

  // 障子演出の実行
  createShojiTransition(targetUrl) {
    const shoji = document.createElement('div');
    shoji.className = 'shoji-transition';
    shoji.innerHTML = `
      <div class="shoji-panel shoji-left"></div>
      <div class="shoji-panel shoji-right"></div>
    `;
    
    document.body.appendChild(shoji);
    
    // アニメーション開始
    requestAnimationFrame(() => {
      shoji.classList.add('active');
    });
    
    // ページ遷移
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 800);
  }

  // フェード遷移の設定
  setupFadeTransition() {
    const fadeLinks = document.querySelectorAll('.fade-link');
    
    fadeLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.createFadeTransition(link.href);
      });
    });
  }

  // フェード遷移の実行
  createFadeTransition(targetUrl) {
    const fade = document.createElement('div');
    fade.className = 'fade-transition';
    
    document.body.appendChild(fade);
    
    // フェードイン
    requestAnimationFrame(() => {
      fade.classList.add('active');
    });
    
    // ページ遷移
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 600);
  }

  // ページロードアニメーション
  setupPageLoadAnimation() {
    const loadAnimation = document.createElement('div');
    loadAnimation.className = 'page-load-animation';
    loadAnimation.innerHTML = `
      <div class="page-load-content">
        <div class="page-load-logo">Phantom Brewery</div>
        <div class="page-load-subtitle">静謐の中に宿る、和の余韻</div>
      </div>
    `;
    
    document.body.appendChild(loadAnimation);
    
    // ページ読み込み完了後に非表示
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadAnimation.classList.add('hidden');
        setTimeout(() => {
          if (document.body.contains(loadAnimation)) {
            document.body.removeChild(loadAnimation);
          }
        }, 800);
      }, 1500);
    });
  }

  // ホバー効果の設定
  setupHoverEffects() {
    // カードのホバー効果
    const cards = document.querySelectorAll('.product-card, .card');
    cards.forEach(card => {
      card.classList.add('hover-lift');
    });

    // ボタンのホバー効果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.classList.add('hover-glow');
    });

    // 画像のホバー効果
    const images = document.querySelectorAll('.product-image, .story-image');
    images.forEach(img => {
      img.classList.add('hover-scale');
    });
  }

  // テキストアニメーションの設定
  setupTextAnimations() {
    // タイプライター効果
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(el => {
      this.createTypewriterEffect(el);
    });

    // テキストリビール効果
    const textRevealElements = document.querySelectorAll('.text-reveal');
    textRevealElements.forEach(el => {
      this.createTextRevealEffect(el);
    });
  }

  // タイプライター効果の作成
  createTypewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.classList.add('typewriter');
    
    let i = 0;
    const timer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(timer);
        element.classList.remove('typewriter');
      }
    }, 100);
  }

  // テキストリビール効果の作成
  createTextRevealEffect(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.transitionDelay = `${i * 0.05}s`;
      element.appendChild(span);
    }
  }

  // パララックス効果の設定
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element, .seasonal-bg');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate}px)`;
      });
      
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick);
  }

  // 季節の背景アニメーション
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
    
    // 季節の背景要素にアニメーションクラスを追加
    const seasonalElements = document.querySelectorAll('.seasonal-bg');
    seasonalElements.forEach(el => {
      el.classList.add('seasonal-bg-animated');
    });
  }

  // プログレスバーのアニメーション
  animateProgressBar(element, targetPercent, duration = 1000) {
    const progressFill = element.querySelector('.progress-fill');
    if (!progressFill) return;
    
    let start = 0;
    const increment = targetPercent / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      progressFill.style.width = `${Math.min(start, targetPercent)}%`;
      
      if (start >= targetPercent) {
        clearInterval(timer);
      }
    }, 16);
  }

  // パルスアニメーション
  createPulseEffect(element, duration = 2000) {
    element.classList.add('pulse');
    
    setTimeout(() => {
      element.classList.remove('pulse');
    }, duration);
  }

  // ワイプアニメーション
  createWipeEffect(element) {
    element.classList.add('wipe-reveal');
    
    setTimeout(() => {
      element.classList.add('visible');
    }, 100);
  }

  // カードフリップアニメーション
  setupCardFlip() {
    const flipCards = document.querySelectorAll('.card-flip');
    
    flipCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.card-flip-inner').style.transform = 'rotateY(180deg)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.querySelector('.card-flip-inner').style.transform = 'rotateY(0deg)';
      });
    });
  }

  // ローディングスピナーの作成
  createLoadingSpinner(container) {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    container.appendChild(spinner);
    return spinner;
  }

  // ローディングドットの作成
  createLoadingDots(container) {
    const dots = document.createElement('div');
    dots.className = 'loading-dots';
    dots.textContent = '読み込み中';
    container.appendChild(dots);
    return dots;
  }

  // アニメーションの一時停止
  pauseAnimations() {
    document.body.style.animationPlayState = 'paused';
    document.body.style.transitionPlayState = 'paused';
  }

  // アニメーションの再開
  resumeAnimations() {
    document.body.style.animationPlayState = 'running';
    document.body.style.transitionPlayState = 'running';
  }

  // アニメーション設定のリセット
  resetAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-reveal, .fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
      el.classList.remove('visible');
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
    });
  }
}

// アニメーションコントローラーの初期化
document.addEventListener('DOMContentLoaded', () => {
  const animationController = new AnimationController();
  
  // 季節の背景を更新
  animationController.updateSeasonalBackground();
  
  // グローバルにアクセス可能にする
  window.AnimationController = animationController;
});

// リサイズ時の処理
window.addEventListener('resize', () => {
  // パララックス効果の再計算
  if (window.AnimationController) {
    window.AnimationController.setupParallaxEffects();
  }
});

// ページの可視性変更時の処理
document.addEventListener('visibilitychange', () => {
  if (window.AnimationController) {
    if (document.hidden) {
      window.AnimationController.pauseAnimations();
    } else {
      window.AnimationController.resumeAnimations();
    }
  }
});