// Phantom Brewery EC - Product Detail JavaScript
// ブランドコンセプト: 「静謐の中に宿る、和の余韻」

class ProductDetailApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupThumbnailGallery();
    this.setupQuantityControls();
    this.setupTabSwitching();
    this.setupPurchaseActions();
    this.setupProductAnimations();
  }

  // サムネイルギャラリーの設定
  setupThumbnailGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image .image-placeholder');
    
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        // アクティブクラスの切り替え
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
        
        // メイン画像の更新
        const bgClass = thumbnail.querySelector('.seasonal-bg').className;
        mainImage.innerHTML = `
          <div class="${bgClass}"></div>
          <div class="image-overlay">
            <div class="product-badge">夏限定</div>
          </div>
        `;
        
        // アニメーション効果
        mainImage.style.opacity = '0';
        setTimeout(() => {
          mainImage.style.opacity = '1';
        }, 150);
      });
    });
  }

  // 数量コントロールの設定
  setupQuantityControls() {
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('#quantity');
    
    if (minusBtn && plusBtn && quantityInput) {
      minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
          this.updateTotalPrice();
        }
      });
      
      plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        const maxValue = parseInt(quantityInput.max);
        if (currentValue < maxValue) {
          quantityInput.value = currentValue + 1;
          this.updateTotalPrice();
        }
      });
      
      quantityInput.addEventListener('change', () => {
        const value = parseInt(quantityInput.value);
        const min = parseInt(quantityInput.min);
        const max = parseInt(quantityInput.max);
        
        if (value < min) quantityInput.value = min;
        if (value > max) quantityInput.value = max;
        
        this.updateTotalPrice();
      });
    }
  }

  // 合計価格の更新
  updateTotalPrice() {
    const quantity = parseInt(document.querySelector('#quantity').value);
    const basePrice = 8800;
    const totalPrice = basePrice * quantity;
    
    // 合計価格表示エリアがあれば更新
    const totalPriceElement = document.querySelector('.total-price');
    if (totalPriceElement) {
      totalPriceElement.textContent = `¥${totalPrice.toLocaleString()}`;
    }
  }

  // タブ切り替えの設定
  setupTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // アクティブクラスの切り替え
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        tabPanels.forEach(panel => {
          panel.classList.remove('active');
          if (panel.id === targetTab) {
            panel.classList.add('active');
          }
        });
        
        // アニメーション効果
        const activePanel = document.getElementById(targetTab);
        if (activePanel) {
          activePanel.style.opacity = '0';
          activePanel.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            activePanel.style.opacity = '1';
            activePanel.style.transform = 'translateY(0)';
          }, 100);
        }
      });
    });
  }

  // 購入アクションの設定
  setupPurchaseActions() {
    const addToCartBtn = document.querySelector('.add-to-cart');
    const buyNowBtn = document.querySelector('.buy-now');
    
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        this.addToCart();
      });
    }
    
    if (buyNowBtn) {
      buyNowBtn.addEventListener('click', () => {
        this.buyNow();
      });
    }
  }

  // カートに追加
  addToCart() {
    const quantity = parseInt(document.querySelector('#quantity').value);
    const productName = document.querySelector('.product-title').textContent;
    
    // カートアニメーション
    this.showCartAnimation();
    
    // 成功メッセージ
    this.showNotification(`${productName}を${quantity}個カートに追加しました`, 'success');
    
    // カートの状態を更新（実際の実装ではAPIコール）
    this.updateCartCount(quantity);
  }

  // 今すぐ購入
  buyNow() {
    const quantity = parseInt(document.querySelector('#quantity').value);
    const productName = document.querySelector('.product-title').textContent;
    
    // 購入確認
    if (confirm(`${productName}を${quantity}個購入しますか？`)) {
      // 購入処理（実際の実装では決済ページへリダイレクト）
      this.showNotification('購入手続きに進みます', 'info');
      
      // 決済ページへのリダイレクト（実際の実装）
      // window.location.href = '/checkout';
    }
  }

  // カートアニメーション
  showCartAnimation() {
    const btn = document.querySelector('.add-to-cart');
    const originalText = btn.textContent;
    
    btn.textContent = '追加中...';
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      btn.textContent = '✓ 追加完了';
      btn.style.background = 'var(--color-gold)';
      btn.style.color = 'var(--color-ink)';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.transform = 'scale(1)';
        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    }, 500);
  }

  // カート数の更新
  updateCartCount(quantity) {
    // カートアイコンやカウンターの更新
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const currentCount = parseInt(cartCount.textContent) || 0;
      cartCount.textContent = currentCount + quantity;
      cartCount.style.display = 'block';
    }
  }

  // 商品アニメーションの設定
  setupProductAnimations() {
    // スクロール時のアニメーション
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

    // アニメーション対象要素
    const animatedElements = document.querySelectorAll('.product-specs, .purchase-form, .shipping-info, .tab-panel');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    // 表示時のアニメーション
    const handleVisible = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    };

    const visibleObserver = new IntersectionObserver(handleVisible, observerOptions);
    animatedElements.forEach(el => {
      visibleObserver.observe(el);
    });
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
    
    // 通知スタイル
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--color-gofun-white);
      border: 1px solid var(--color-gold);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      box-shadow: var(--shadow-lg);
      z-index: 3000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease-out;
    `;
    
    if (type === 'success') {
      notification.style.borderColor = '#4CAF50';
    } else if (type === 'error') {
      notification.style.borderColor = '#f44336';
    }
    
    document.body.appendChild(notification);
    
    // 表示アニメーション
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自動非表示
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 4000);
    
    // 手動閉じる
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    });
  }

  // 画像ズーム機能
  setupImageZoom() {
    const mainImage = document.querySelector('.main-image');
    
    if (mainImage) {
      mainImage.addEventListener('click', () => {
        this.openImageModal();
      });
      
      mainImage.style.cursor = 'zoom-in';
    }
  }

  // 画像モーダル
  openImageModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <img src="" alt="商品画像" class="modal-image">
        </div>
      </div>
    `;
    
    // モーダルスタイル
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      z-index: 4000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
    
    // 表示アニメーション
    setTimeout(() => {
      modal.style.opacity = '1';
    }, 10);
    
    // 閉じる処理
    const closeModal = () => {
      modal.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(modal)) {
          document.body.removeChild(modal);
        }
      }, 300);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    // ESCキーで閉じる
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
  new ProductDetailApp();
});