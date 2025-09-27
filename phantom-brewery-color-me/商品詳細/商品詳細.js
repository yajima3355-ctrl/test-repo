// Phantom Brewery - Product Detail Page JavaScript
// 静謐の中に宿る、和の余韻 - 商品詳細ページJavaScript

// Sample product data
const productData = {
    1: {
        id: 1,
        name: '幻の一滴',
        description: '最高級の米と水で醸造された、まさに幻の日本酒。職人の技が生み出す至高の味わいをお楽しみください。',
        price: 15000,
        badge: '限定',
        images: ['product1-1.jpg', 'product1-2.jpg', 'product1-3.jpg'],
        sizes: [
            { value: '720ml', price: 15000 },
            { value: '1800ml', price: 35000 }
        ],
        specifications: {
            alcohol: '15度',
            ingredients: '米、米麹',
            polishing: '50%',
            manufacturer: 'Phantom Brewery'
        }
    },
    2: {
        id: 2,
        name: '静寂の響き',
        description: '静寂の中に宿る、深い味わいの純米大吟醸。伝統の技と現代の技術が融合した逸品です。',
        price: 8500,
        badge: '人気',
        images: ['product2-1.jpg', 'product2-2.jpg'],
        sizes: [
            { value: '720ml', price: 8500 },
            { value: '1800ml', price: 20000 }
        ],
        specifications: {
            alcohol: '16度',
            ingredients: '米、米麹',
            polishing: '40%',
            manufacturer: 'Phantom Brewery'
        }
    }
};

let currentProduct = null;
let selectedSize = '720ml';
let quantity = 1;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProductDetail();
});

// Initialize Product Detail
function initializeProductDetail() {
    loadProductData();
    initializeProductImages();
    initializeProductOptions();
    initializeProductTabs();
    initializeProductActions();
}

// Load Product Data
function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    
    currentProduct = productData[productId] || productData[1];
    
    // Update page content
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('productDescription').textContent = currentProduct.description;
    document.getElementById('productBadge').textContent = currentProduct.badge;
    document.getElementById('priceAmount').textContent = `¥${currentProduct.price.toLocaleString()}`;
    
    // Update page title
    document.title = `${currentProduct.name} - Phantom Brewery`;
}

// Initialize Product Images
function initializeProductImages() {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    
    if (currentProduct.images && currentProduct.images.length > 0) {
        // Set main image
        mainImage.src = currentProduct.images[0];
        mainImage.alt = currentProduct.name;
        
        // Create thumbnails
        currentProduct.images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.style.backgroundImage = `url(${image})`;
            thumbnail.style.backgroundSize = 'cover';
            thumbnail.style.backgroundPosition = 'center';
            
            thumbnail.addEventListener('click', function() {
                // Update main image
                mainImage.src = image;
                
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
            
            thumbnailContainer.appendChild(thumbnail);
        });
    }
}

// Initialize Product Options
function initializeProductOptions() {
    const sizeSelect = document.getElementById('sizeSelect');
    const quantityInput = document.getElementById('quantityInput');
    const quantityDecrease = document.getElementById('quantityDecrease');
    const quantityIncrease = document.getElementById('quantityIncrease');
    
    // Size selection
    if (sizeSelect && currentProduct.sizes) {
        sizeSelect.innerHTML = '';
        currentProduct.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size.value;
            option.textContent = size.value;
            sizeSelect.appendChild(option);
        });
        
        sizeSelect.addEventListener('change', function() {
            selectedSize = this.value;
            updatePrice();
        });
    }
    
    // Quantity controls
    if (quantityDecrease) {
        quantityDecrease.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
            }
        });
    }
    
    if (quantityIncrease) {
        quantityIncrease.addEventListener('click', function() {
            if (quantity < 10) {
                quantity++;
                quantityInput.value = quantity;
            }
        });
    }
    
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            const value = parseInt(this.value);
            if (value >= 1 && value <= 10) {
                quantity = value;
            } else {
                this.value = quantity;
            }
        });
    }
}

// Update Price
function updatePrice() {
    const selectedSizeData = currentProduct.sizes.find(size => size.value === selectedSize);
    if (selectedSizeData) {
        document.getElementById('priceAmount').textContent = `¥${selectedSizeData.price.toLocaleString()}`;
    }
}

// Initialize Product Tabs
function initializeProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab panel
            tabPanels.forEach(panel => panel.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Update specifications
    updateSpecifications();
}

// Update Specifications
function updateSpecifications() {
    if (currentProduct.specifications) {
        const specTable = document.querySelector('.spec-table');
        if (specTable) {
            specTable.innerHTML = '';
            
            Object.entries(currentProduct.specifications).forEach(([key, value]) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${getSpecLabel(key)}</td>
                    <td>${value}</td>
                `;
                specTable.appendChild(row);
            });
        }
    }
}

// Get Specification Label
function getSpecLabel(key) {
    const labels = {
        alcohol: 'アルコール度数',
        ingredients: '原料',
        polishing: '精米歩合',
        manufacturer: '製造元'
    };
    return labels[key] || key;
}

// Initialize Product Actions
function initializeProductActions() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const selectedSizeData = currentProduct.sizes.find(size => size.value === selectedSize);
            const price = selectedSizeData ? selectedSizeData.price : currentProduct.price;
            
            addToCart(currentProduct.id, currentProduct.name, price, quantity);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const selectedSizeData = currentProduct.sizes.find(size => size.value === selectedSize);
            const price = selectedSizeData ? selectedSizeData.price : currentProduct.price;
            
            // Add to cart and redirect to checkout
            addToCart(currentProduct.id, currentProduct.name, price, quantity);
            window.location.href = '../ショッピングカート/ショッピングカート.html';
        });
    }
}

// Export functions for external use
window.ProductDetail = {
    initializeProductDetail,
    loadProductData,
    updatePrice,
    updateSpecifications
};