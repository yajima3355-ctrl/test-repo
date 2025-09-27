// ===== Product List Page Specific JavaScript =====

// Sample product data
const products = [
    {
        id: 1,
        name: '幻の一滴',
        description: '最高級の米と水で醸造された、まさに幻の日本酒。職人の技が光る特別な一品です。',
        price: 15000,
        category: 'premium',
        badge: 'limited',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+'
    },
    {
        id: 2,
        name: '静寂の響き',
        description: '静寂の中に宿る、深い味わいの純米大吟醸。和の美学を表現した逸品です。',
        price: 8500,
        category: 'premium',
        badge: 'popular',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+PC9zdmc+'
    },
    {
        id: 3,
        name: '和の余韻',
        description: '伝統と革新が調和した、モダンな味わい。現代の感性を表現した日本酒です。',
        price: 6200,
        category: 'premium',
        badge: 'new',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+'
    },
    {
        id: 4,
        name: '四季の彩り',
        description: '四季折々の美しさを表現した限定商品。春の桜、夏の緑、秋の紅葉、冬の雪をイメージ。',
        price: 12000,
        category: 'limited',
        badge: 'limited',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+'
    },
    {
        id: 5,
        name: '職人の心',
        description: '長年の経験と技術が詰まった、職人魂を感じる日本酒。伝統の技を継承した逸品です。',
        price: 9500,
        category: 'premium',
        badge: 'premium',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+PC9zdmc+'
    },
    {
        id: 6,
        name: 'ギフトセット 和の美',
        description: '大切な方への贈り物に最適なギフトセット。美しい包装と共にお届けします。',
        price: 18000,
        category: 'gift',
        badge: 'gift',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+'
    },
    {
        id: 7,
        name: '凛とした味わい',
        description: '飾り立てない美しさを表現した、凛とした味わいの日本酒。シンプルな中に深みがあります。',
        price: 7800,
        category: 'premium',
        badge: 'popular',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+'
    },
    {
        id: 8,
        name: '粋な一杯',
        description: '現代的な知性を表現した、粋な味わいの日本酒。モダンな感性が光る一品です。',
        price: 6800,
        category: 'premium',
        badge: 'new',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+PC9zdmc+'
    }
];

let currentCategory = 'all';
let currentSort = 'newest';
let currentPage = 1;
const itemsPerPage = 6;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeSorting();
    renderProducts();
    initializePagination();
    
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        currentCategory = category;
        updateActiveFilter(category);
    }
});

// Initialize filter functionality
function initializeFilters() {
    const filterLinks = document.querySelectorAll('.filter__link');
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            currentCategory = category;
            currentPage = 1;
            
            updateActiveFilter(category);
            renderProducts();
            updatePagination();
        });
    });
}

// Update active filter
function updateActiveFilter(category) {
    const filterLinks = document.querySelectorAll('.filter__link');
    filterLinks.forEach(link => {
        link.classList.remove('filter__link--active');
        if (link.dataset.category === category) {
            link.classList.add('filter__link--active');
        }
    });
}

// Initialize sorting functionality
function initializeSorting() {
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        currentPage = 1;
        renderProducts();
        updatePagination();
    });
}

// Get filtered and sorted products
function getFilteredProducts() {
    let filteredProducts = products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }
    
    // Sort products
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            // Sort by badge priority (limited > premium > popular > new)
            const badgePriority = { 'limited': 4, 'premium': 3, 'popular': 2, 'new': 1 };
            filteredProducts.sort((a, b) => (badgePriority[b.badge] || 0) - (badgePriority[a.badge] || 0));
            break;
        case 'newest':
        default:
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
    }
    
    return filteredProducts;
}

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    const filteredProducts = getFilteredProducts();
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state__icon">🍶</div>
                <h3 class="empty-state__title">商品が見つかりませんでした</h3>
                <p class="empty-state__description">他のカテゴリーをお試しください。</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = paginatedProducts.map(product => `
        <div class="product__card fade-in">
            <div class="product__image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product__badge product__badge--${product.badge}">
                    ${getBadgeText(product.badge)}
                </div>
            </div>
            <div class="product__content">
                <h3 class="product__name">${product.name}</h3>
                <p class="product__description">${product.description}</p>
                <div class="product__price">
                    <span class="price__amount">¥${product.price.toLocaleString()}</span>
                    <span class="price__unit">/瓶</span>
                </div>
                <div class="product__actions">
                    <a href="../product-detail/product-detail.html?id=${product.id}" class="btn btn--view">詳細を見る</a>
                    <button class="btn btn--primary btn--small" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">カートに追加</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add fade-in animation
    setTimeout(() => {
        const cards = productsGrid.querySelectorAll('.fade-in');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
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

// Initialize pagination
function initializePagination() {
    const prevBtn = document.querySelector('.pagination__btn--prev');
    const nextBtn = document.querySelector('.pagination__btn--next');
    const numbers = document.querySelectorAll('.pagination__number');
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            updatePagination();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const filteredProducts = getFilteredProducts();
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            updatePagination();
        }
    });
    
    numbers.forEach((number, index) => {
        number.addEventListener('click', () => {
            currentPage = index + 1;
            renderProducts();
            updatePagination();
        });
    });
}

// Update pagination
function updatePagination() {
    const filteredProducts = getFilteredProducts();
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    const prevBtn = document.querySelector('.pagination__btn--prev');
    const nextBtn = document.querySelector('.pagination__btn--next');
    const numbersContainer = document.querySelector('.pagination__numbers');
    
    // Update prev/next buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Update page numbers
    numbersContainer.innerHTML = '';
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
        const numberBtn = document.createElement('button');
        numberBtn.className = `pagination__number ${i === currentPage ? 'pagination__number--active' : ''}`;
        numberBtn.textContent = i;
        numberBtn.addEventListener('click', () => {
            currentPage = i;
            renderProducts();
            updatePagination();
        });
        numbersContainer.appendChild(numberBtn);
    }
}

// Add to cart function
function addToCart(id, name, price) {
    if (typeof app !== 'undefined') {
        app.addToCart({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
}