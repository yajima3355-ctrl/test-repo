// ===== Product Detail Page Specific JavaScript =====

// Sample product data
const productData = {
    1: {
        id: 1,
        name: '幻の一滴',
        description: '最高級の米と水で醸造された、まさに幻の日本酒。職人の技が光る特別な一品です。',
        detailedDescription: '江戸時代から続く伝統の技と、現代の技術を融合させて生まれた最高級の日本酒です。一粒一粒厳選された酒米と、清らかな地下水を使用し、時間をかけて丁寧に醸造されました。香り高く、味わい深い逸品をお楽しみください。',
        price: 15000,
        category: 'premium',
        badge: 'limited',
        images: [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+PC9zdmc+',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+'
        ],
        alcoholContent: '15-16度',
        capacity: '720ml',
        ingredients: '米、米麹、水'
    },
    2: {
        id: 2,
        name: '静寂の響き',
        description: '静寂の中に宿る、深い味わいの純米大吟醸。和の美学を表現した逸品です。',
        detailedDescription: '静寂の中に宿る和の余韻を表現した純米大吟醸です。精米歩合50%以下に仕上げた酒米を使用し、低温でじっくりと醸造しました。上品な香りと深い味わいが特徴の逸品です。',
        price: 8500,
        category: 'premium',
        badge: 'popular',
        images: [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+PC9zdmc+',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+'
        ],
        alcoholContent: '14-15度',
        capacity: '720ml',
        ingredients: '米、米麹、水'
    },
    3: {
        id: 3,
        name: '和の余韻',
        description: '伝統と革新が調和した、モダンな味わい。現代の感性を表現した日本酒です。',
        detailedDescription: '伝統的な製法を守りながら、現代の感性を取り入れたモダンな日本酒です。若い世代にも親しみやすい味わいで、和食だけでなく洋食にも合わせやすい仕上がりとなっています。',
        price: 6200,
        category: 'premium',
        badge: 'new',
        images: [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+PC9zdmc+'
        ],
        alcoholContent: '13-14度',
        capacity: '720ml',
        ingredients: '米、米麹、水'
    }
};

let currentProduct = null;
let currentQuantity = 1;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadProduct();
    loadRelatedProducts();
});

// Load product data
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    
    currentProduct = productData[productId];
    if (!currentProduct) {
        currentProduct = productData[1];
    }
    
    displayProduct();
}

// Display product information
function displayProduct() {
    // Update breadcrumb
    document.getElementById('breadcrumb-product').textContent = currentProduct.name;
    
    // Update product info
    document.getElementById('product-title').textContent = currentProduct.name;
    document.getElementById('product-description').textContent = currentProduct.description;
    document.getElementById('detailed-description').textContent = currentProduct.detailedDescription;
    document.getElementById('price-amount').textContent = `¥${currentProduct.price.toLocaleString()}`;
    
    // Update badge
    const badge = document.getElementById('product-badge');
    badge.textContent = getBadgeText(currentProduct.badge);
    badge.className = `product-badge product-badge--${currentProduct.badge}`;
    
    // Update specs
    document.getElementById('alcohol-content').textContent = currentProduct.alcoholContent;
    document.getElementById('capacity').textContent = currentProduct.capacity;
    document.getElementById('ingredients').textContent = currentProduct.ingredients;
    
    // Update images
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = currentProduct.images[0];
    mainImage.alt = currentProduct.name;
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (currentProduct.images[index]) {
            thumb.src = currentProduct.images[index];
            thumb.alt = `${currentProduct.name} ${index + 1}`;
        }
    });
}

// Get badge text
function getBadgeText(badge) {
    const badgeTexts = {
        'limited': '限定',
        'premium': 'プレミアム',
        'popular': '人気',
        'new': '新作',
        'gift': 'ギフト'
    };
    return badgeTexts[badge] || '';
}

// Change main image
function changeMainImage(src) {
    document.getElementById('main-product-image').src = src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src) {
            thumb.classList.add('active');
        }
    });
}

// Quantity controls
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
        currentQuantity = quantityInput.value;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        currentQuantity = quantityInput.value;
    }
}

// Add to cart
function addToCart() {
    if (typeof app !== 'undefined' && currentProduct) {
        app.addToCart({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            quantity: parseInt(document.getElementById('quantity').value)
        });
        
        // Show success animation
        const addBtn = document.querySelector('.btn--primary');
        const originalText = addBtn.innerHTML;
        addBtn.innerHTML = '<svg class="icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/></svg>追加済み';
        addBtn.style.background = '#c5282f';
        
        setTimeout(() => {
            addBtn.innerHTML = originalText;
            addBtn.style.background = '';
        }, 2000);
    }
}

// Add to wishlist
function addToWishlist() {
    // Simple wishlist functionality
    const wishBtn = document.querySelector('.btn--secondary');
    const originalText = wishBtn.innerHTML;
    wishBtn.innerHTML = '<svg class="icon" viewBox="0 0 24 24"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/></svg>お気に入り追加済み';
    wishBtn.style.background = '#d4af37';
    wishBtn.style.color = '#1a1a1a';
    
    setTimeout(() => {
        wishBtn.innerHTML = originalText;
        wishBtn.style.background = '';
        wishBtn.style.color = '';
    }, 2000);
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab panel
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
}

// Load related products
function loadRelatedProducts() {
    const relatedGrid = document.getElementById('related-products');
    const relatedProducts = Object.values(productData).filter(product => product.id !== currentProduct.id).slice(0, 4);
    
    relatedGrid.innerHTML = relatedProducts.map(product => `
        <a href="product-detail.html?id=${product.id}" class="related-item">
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <div class="related-item-content">
                <h4 class="related-item-name">${product.name}</h4>
                <div class="related-item-price">¥${product.price.toLocaleString()}</div>
            </div>
        </a>
    `).join('');
}

// Quantity input change handler
document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            const value = parseInt(this.value);
            if (value < 1) this.value = 1;
            if (value > 10) this.value = 10;
            currentQuantity = this.value;
        });
    }
});