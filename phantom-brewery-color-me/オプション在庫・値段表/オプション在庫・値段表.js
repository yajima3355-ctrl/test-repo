// Phantom Brewery - Option Stock Page JavaScript
// 静謐の中に宿る、和の余韻 - オプション在庫・値段表ページJavaScript

// Sample stock data
const stockData = [
    {
        id: 1,
        name: '幻の一滴',
        category: 'premium',
        capacity: '720ml',
        price: 15000,
        stock: 15,
        status: 'in-stock'
    },
    {
        id: 2,
        name: '幻の一滴',
        category: 'premium',
        capacity: '1800ml',
        price: 35000,
        stock: 5,
        status: 'low-stock'
    },
    {
        id: 3,
        name: '静寂の響き',
        category: 'premium',
        capacity: '720ml',
        price: 8500,
        stock: 25,
        status: 'in-stock'
    },
    {
        id: 4,
        name: '静寂の響き',
        category: 'premium',
        capacity: '1800ml',
        price: 20000,
        stock: 0,
        status: 'out-of-stock'
    },
    {
        id: 5,
        name: '和の余韻',
        category: 'seasonal',
        capacity: '720ml',
        price: 6200,
        stock: 30,
        status: 'in-stock'
    },
    {
        id: 6,
        name: '桜の舞',
        category: 'seasonal',
        capacity: '720ml',
        price: 4800,
        stock: 3,
        status: 'low-stock'
    },
    {
        id: 7,
        name: '月下美人',
        category: 'premium',
        capacity: '720ml',
        price: 12000,
        stock: 20,
        status: 'in-stock'
    },
    {
        id: 8,
        name: '風の詩',
        category: 'gift',
        capacity: '720ml',
        price: 3500,
        stock: 40,
        status: 'in-stock'
    }
];

let filteredStock = [...stockData];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeStockPage();
});

// Initialize Stock Page
function initializeStockPage() {
    initializeFilters();
    loadStockTable();
    updateStockSummary();
}

// Initialize Filters
function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const stockFilter = document.getElementById('stockFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (stockFilter) {
        stockFilter.addEventListener('change', applyFilters);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
}

// Apply Filters
function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const stockFilter = document.getElementById('stockFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    let filtered = [...stockData];
    
    // Category filter
    if (categoryFilter && categoryFilter.value) {
        filtered = filtered.filter(item => item.category === categoryFilter.value);
    }
    
    // Stock filter
    if (stockFilter && stockFilter.value) {
        filtered = filtered.filter(item => item.status === stockFilter.value);
    }
    
    // Price filter
    if (priceFilter && priceFilter.value) {
        const [min, max] = priceFilter.value.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        filtered = filtered.filter(item => {
            if (max === Infinity) {
                return item.price >= min;
            }
            return item.price >= min && item.price <= max;
        });
    }
    
    filteredStock = filtered;
    
    // Update table and summary
    loadStockTable();
    updateStockSummary();
}

// Load Stock Table
function loadStockTable() {
    const tableBody = document.getElementById('stockTableBody');
    tableBody.innerHTML = '';
    
    filteredStock.forEach(item => {
        const row = createStockRow(item);
        tableBody.appendChild(row);
    });
}

// Create Stock Row
function createStockRow(item) {
    const row = document.createElement('tr');
    
    const statusClass = `stock-status--${item.status}`;
    const statusText = getStatusText(item.status);
    
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${getCategoryText(item.category)}</td>
        <td>${item.capacity}</td>
        <td>¥${item.price.toLocaleString()}</td>
        <td>${item.stock}</td>
        <td><span class="stock-status ${statusClass}">${statusText}</span></td>
        <td>
            <button class="btn btn--primary btn--small" onclick="viewProduct(${item.id})" ${item.status === 'out-of-stock' ? 'disabled' : ''}>
                ${item.status === 'out-of-stock' ? '在庫切れ' : '詳細を見る'}
            </button>
        </td>
    `;
    
    return row;
}

// Get Status Text
function getStatusText(status) {
    const statusTexts = {
        'in-stock': '在庫あり',
        'low-stock': '在庫少',
        'out-of-stock': '在庫切れ'
    };
    return statusTexts[status] || status;
}

// Get Category Text
function getCategoryText(category) {
    const categoryTexts = {
        'premium': 'プレミアム',
        'limited': '限定',
        'seasonal': '季節限定',
        'gift': 'ギフト'
    };
    return categoryTexts[category] || category;
}

// Update Stock Summary
function updateStockSummary() {
    const totalProducts = document.getElementById('totalProducts');
    const inStockCount = document.getElementById('inStockCount');
    const lowStockCount = document.getElementById('lowStockCount');
    const outOfStockCount = document.getElementById('outOfStockCount');
    
    const counts = filteredStock.reduce((acc, item) => {
        acc.total++;
        acc[item.status]++;
        return acc;
    }, { total: 0, 'in-stock': 0, 'low-stock': 0, 'out-of-stock': 0 });
    
    totalProducts.textContent = counts.total;
    inStockCount.textContent = counts['in-stock'];
    lowStockCount.textContent = counts['low-stock'];
    outOfStockCount.textContent = counts['out-of-stock'];
}

// Export to CSV
function exportToCSV() {
    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'stock-list.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Generate CSV
function generateCSV() {
    const headers = ['商品名', 'カテゴリー', '容量', '価格', '在庫数', '在庫状況'];
    const csvRows = [headers.join(',')];
    
    filteredStock.forEach(item => {
        const row = [
            item.name,
            getCategoryText(item.category),
            item.capacity,
            item.price,
            item.stock,
            getStatusText(item.status)
        ];
        csvRows.push(row.join(','));
    });
    
    return csvRows.join('\n');
}

// Print Table
function printTable() {
    const printWindow = window.open('', '_blank');
    const tableContent = document.getElementById('stockTable').outerHTML;
    
    printWindow.document.write(`
        <html>
            <head>
                <title>在庫・価格一覧</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
                    th { background-color: #f2f2f2; }
                    .stock-status { padding: 4px 8px; border-radius: 4px; font-size: 12px; }
                    .stock-status--in-stock { background-color: #4CAF50; color: white; }
                    .stock-status--low-stock { background-color: #FF9800; color: white; }
                    .stock-status--out-of-stock { background-color: #f44336; color: white; }
                </style>
            </head>
            <body>
                <h1>Phantom Brewery - 在庫・価格一覧</h1>
                <p>出力日時: ${new Date().toLocaleString('ja-JP')}</p>
                ${tableContent}
            </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// View Product
function viewProduct(productId) {
    window.location.href = `../商品詳細/商品詳細.html?id=${productId}`;
}

// Export functions for external use
window.OptionStock = {
    initializeStockPage,
    applyFilters,
    exportToCSV,
    printTable,
    viewProduct
};