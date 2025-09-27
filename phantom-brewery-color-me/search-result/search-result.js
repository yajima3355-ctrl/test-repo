// ===== Search Result Page Specific JavaScript =====

// Sample product data for search
const searchProducts = [
    {
        id: 1,
        name: '幻の一滴',
        description: '最高級の米と水で醸造された、まさに幻の日本酒。職人の技が光る特別な一品です。',
        price: 15000,
        category: 'premium',
        keywords: ['幻', '一滴', '最高級', '職人', '特別', '日本酒']
    },
    {
        id: 2,
        name: '静寂の響き',
        description: '静寂の中に宿る、深い味わいの純米大吟醸。和の美学を表現した逸品です。',
        price: 8500,
        category: 'premium',
        keywords: ['静寂', '響き', '純米大吟醸', '和', '美学', '逸品']
    },
    {
        id: 3,
        name: '和の余韻',
        description: '伝統と革新が調和した、モダンな味わい。現代の感性を表現した日本酒です。',
        price: 6200,
        category: 'premium',
        keywords: ['和', '余韻', '伝統', '革新', 'モダン', '現代']
    },
    {
        id: 4,
        name: '四季の彩り',
        description: '四季折々の美しさを表現した限定商品。春の桜、夏の緑、秋の紅葉、冬の雪をイメージ。',
        price: 12000,
        category: 'limited',
        keywords: ['四季', '彩り', '限定', '春', '夏', '秋', '冬', '桜', '紅葉']
    },
    {
        id: 5,
        name: '職人の心',
        description: '長年の経験と技術が詰まった、職人魂を感じる日本酒。伝統の技を継承した逸品です。',
        price: 9500,
        category: 'premium',
        keywords: ['職人', '心', '経験', '技術', '魂', '伝統', '技', '継承']
    },
    {
        id: 6,
        name: 'ギフトセット 和の美',
        description: '大切な方への贈り物に最適なギフトセット。美しい包装と共にお届けします。',
        price: 18000,
        category: 'gift',
        keywords: ['ギフト', 'セット', '和', '美', '贈り物', '包装']
    },
    {
        id: 7,
        name: '凛とした味わい',
        description: '飾り立てない美しさを表現した、凛とした味わいの日本酒。シンプルな中に深みがあります。',
        price: 7800,
        category: 'premium',
        keywords: ['凛', '味わい', '美しさ', 'シンプル', '深み']
    },
    {
        id: 8,
        name: '粋な一杯',
        description: '現代的な知性を表現した、粋な味わいの日本酒。モダンな感性が光る一品です。',
        price: 6800,
        category: 'premium',
        keywords: ['粋', '一杯', '現代', '知性', 'モダン', '感性']
    }
];

let searchQuery = '';
let searchResults = [];

// Initialize search page
document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    searchQuery = urlParams.get('q') || '';
    
    // Update page content
    updateSearchQuery();
    
    // Perform search
    performSearchFromQuery();
    
    // Setup search input
    setupSearchInput();
});

// Update search query display
function updateSearchQuery() {
    const queryElement = document.getElementById('search-query');
    const subtitleElement = document.getElementById('search-subtitle');
    
    if (searchQuery) {
        queryElement.textContent = searchQuery;
        subtitleElement.style.display = 'block';
    } else {
        subtitleElement.style.display = 'none';
    }
}

// Perform search from query
function performSearchFromQuery() {
    if (!searchQuery) {
        showNoResults();
        return;
    }
    
    // Show loading state
    showLoading();
    
    // Simulate search delay
    setTimeout(() => {
        searchResults = searchProducts.filter(product => {
            const searchTerms = searchQuery.toLowerCase().split(' ');
            return searchTerms.some(term => 
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term) ||
                product.keywords.some(keyword => keyword.toLowerCase().includes(term))
            );
        });
        
        displaySearchResults();
    }, 500);
}

// Display search results
function displaySearchResults() {
    const resultsGrid = document.getElementById('results-grid');
    const resultsCount = document.getElementById('results-count');
    const noResults = document.getElementById('no-results');
    
    // Update results count
    resultsCount.textContent = `検索結果: ${searchResults.length}件`;
    
    if (searchResults.length === 0) {
        resultsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    resultsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    // Display results
    resultsGrid.innerHTML = searchResults.map(product => `
        <a href="../product-detail/product-detail.html?id=${product.id}" class="result-item">
            <div class="result-item-image">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+" alt="${product.name}" loading="lazy">
            </div>
            <div class="result-item-content">
                <h3 class="result-item-name">${highlightSearchTerms(product.name)}</h3>
                <p class="result-item-description">${highlightSearchTerms(product.description)}</p>
                <div class="result-item-price">¥${product.price.toLocaleString()}</div>
                <div class="result-item-actions">
                    <span class="btn btn--view">詳細を見る</span>
                    <button class="btn btn--primary btn--small" onclick="event.preventDefault(); addToCart(${product.id}, '${product.name}', ${product.price})">カートに追加</button>
                </div>
            </div>
        </a>
    `).join('');
}

// Highlight search terms in text
function highlightSearchTerms(text) {
    if (!searchQuery) return text;
    
    const searchTerms = searchQuery.toLowerCase().split(' ');
    let highlightedText = text;
    
    searchTerms.forEach(term => {
        if (term.length > 0) {
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark style="background: #d4af37; color: #1a1a1a; padding: 0.1rem 0.2rem;">$1</mark>');
        }
    });
    
    return highlightedText;
}

// Show loading state
function showLoading() {
    const resultsGrid = document.getElementById('results-grid');
    const noResults = document.getElementById('no-results');
    
    resultsGrid.style.display = 'none';
    noResults.style.display = 'none';
    
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.textContent = '検索中';
    loadingDiv.id = 'loading-indicator';
    
    const container = document.querySelector('.results-container');
    container.appendChild(loadingDiv);
}

// Show no results
function showNoResults() {
    const resultsGrid = document.getElementById('results-grid');
    const noResults = document.getElementById('no-results');
    const loadingIndicator = document.getElementById('loading-indicator');
    
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
    
    resultsGrid.style.display = 'none';
    noResults.style.display = 'block';
    
    document.getElementById('results-count').textContent = '検索結果: 0件';
}

// Setup search input
function setupSearchInput() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.value = searchQuery;
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Perform search from input
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        // Update URL
        const url = new URL(window.location);
        url.searchParams.set('q', query);
        window.history.pushState({}, '', url);
        
        // Update search query and perform search
        searchQuery = query;
        updateSearchQuery();
        performSearchFromQuery();
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