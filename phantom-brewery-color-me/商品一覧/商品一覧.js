// Phantom Brewery - Product List Page JavaScript
// 静謐の中に宿る、和の余韻 - 商品一覧ページJavaScript

// Sample product data
const products = [
    {
        id: 1,
        name: '幻の一滴',
        description: '最高級の米と水で醸造された、まさに幻の日本酒',
        price: 15000,
        category: 'premium',
        badge: '限定',
        image: 'product1.jpg'
    },
    {
        id: 2,
        name: '静寂の響き',
        description: '静寂の中に宿る、深い味わいの純米大吟醸',
        price: 8500,
        category: 'premium',
        badge: '人気',
        image: 'product2.jpg'
    },
    {
        id: 3,
        name: '和の余韻',
        description: '伝統と革新が調和した、モダンな味わい',
        price: 6200,
        category: 'seasonal',
        badge: '新作',
        image: 'product3.jpg'
    },
    {
        id: 4,
        name: '桜の舞',
        description: '春の訪れを感じさせる、上品な香りの日本酒',
        price: 4800,
        category: 'seasonal',
        badge: '季節限定',
        image: 'product4.jpg'
    },
    {
        id: 5,
        name: '月下美人',
        description: '夜の静寂を表現した、神秘的な味わい',
        price: 12000,
        category: 'premium',
        badge: '限定',
        image: 'product5.jpg'
    },
    {
        id: 6,
        name: '風の詩',
        description: '自然の風を感じさせる、爽やかな味わい',
        price: 3500,
        category: 'gift',
        badge: 'ギフト',
        image: 'product6.jpg'
    }
];

let currentPage = 1;
const itemsPerPage = 6;
let filteredProducts = [...products];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProductList();
});

// Initialize Product List
function initializeProductList() {
    loadProducts();
    initializeFilters();
    initializeLoadMore();
}

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Update load more button visibility
    updateLoadMoreButton();
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.innerHTML = `
        <div class="product-image">
            <div class="product-badge">${product.badge}</div>
            <div class="product-placeholder">${product.name}</div>
        </div>
        <div class="product-content">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="price-amount">¥${product.price.toLocaleString()}</span>
                <span class="price-unit">/瓶</span>
            </div>
            <div class="product-actions">
                <button class="btn btn--primary btn--small" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                    カートに追加
                </button>
                <button class="btn btn--secondary btn--small" onclick="viewProduct(${product.id})">
                    詳細を見る
                </button>
            </div>
        </div>
    `;
    
    // Add click to view product
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.product-actions')) {
            viewProduct(product.id);
        }
    });
    
    return card;
}

// Initialize Filters
function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
    
    // Apply URL parameters
    applyUrlFilters();
}

// Apply Filters
function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    let filtered = [...products];
    
    // Category filter
    if (categoryFilter && categoryFilter.value) {
        filtered = filtered.filter(product => product.category === categoryFilter.value);
    }
    
    // Price filter
    if (priceFilter && priceFilter.value) {
        const [min, max] = priceFilter.value.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        filtered = filtered.filter(product => {
            if (max === Infinity) {
                return product.price >= min;
            }
            return product.price >= min && product.price <= max;
        });
    }
    
    // Sort
    if (sortFilter && sortFilter.value) {
        switch (sortFilter.value) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                // Simple popularity based on price (higher price = more popular)
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
            default:
                // Keep original order
                break;
        }
    }
    
    filteredProducts = filtered;
    currentPage = 1;
    
    // Clear existing products
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    // Load filtered products
    loadProducts();
}

// Apply URL Filters
function applyUrlFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
            applyFilters();
        }
    }
}

// Initialize Load More
function initializeLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            loadProducts();
        });
    }
}

// Update Load More Button
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    if (loadMoreBtn) {
        if (currentPage >= totalPages) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }
}

// View Product
function viewProduct(productId) {
    window.location.href = `../商品詳細/商品詳細.html?id=${productId}`;
}

// Export functions for external use
window.ProductList = {
    initializeProductList,
    loadProducts,
    applyFilters,
    viewProduct
};