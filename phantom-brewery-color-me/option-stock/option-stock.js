// ===== Option Stock Page Specific JavaScript =====

// Sample stock data
const stockData = [
    {
        id: 1,
        name: '幻の一滴',
        category: 'プレミアム',
        price: 15000,
        stock: 5,
        status: 'limited'
    },
    {
        id: 2,
        name: '静寂の響き',
        category: 'プレミアム',
        price: 8500,
        stock: 12,
        status: 'in-stock'
    },
    {
        id: 3,
        name: '和の余韻',
        category: 'プレミアム',
        price: 6200,
        stock: 25,
        status: 'in-stock'
    },
    {
        id: 4,
        name: '四季の彩り',
        category: '限定商品',
        price: 12000,
        stock: 3,
        status: 'limited'
    },
    {
        id: 5,
        name: '職人の心',
        category: 'プレミアム',
        price: 9500,
        stock: 8,
        status: 'low-stock'
    },
    {
        id: 6,
        name: 'ギフトセット 和の美',
        category: 'ギフト',
        price: 18000,
        stock: 15,
        status: 'in-stock'
    },
    {
        id: 7,
        name: '凛とした味わい',
        category: 'プレミアム',
        price: 7800,
        stock: 0,
        status: 'out-of-stock'
    },
    {
        id: 8,
        name: '粋な一杯',
        category: 'プレミアム',
        price: 6800,
        stock: 18,
        status: 'in-stock'
    }
];

// Initialize stock table
document.addEventListener('DOMContentLoaded', function() {
    loadStockTable();
});

// Load stock table
function loadStockTable() {
    const tbody = document.getElementById('stock-table-body');
    
    tbody.innerHTML = stockData.map(item => `
        <tr>
            <td class="product-name">${item.name}</td>
            <td class="category">${item.category}</td>
            <td class="price">¥${item.price.toLocaleString()}</td>
            <td class="stock">${item.stock}個</td>
            <td class="status">
                <span class="status-indicator status-${item.status}"></span>
                <span class="status-text">${getStatusText(item.status)}</span>
            </td>
            <td class="actions">
                <a href="../product-detail/product-detail.html?id=${item.id}" class="btn btn--secondary btn--small">詳細</a>
                ${item.stock > 0 ? 
                    `<button class="btn btn--primary btn--small" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">カート追加</button>` :
                    `<button class="btn btn--secondary btn--small" disabled>在庫切れ</button>`
                }
            </td>
        </tr>
    `).join('');
}

// Get status text
function getStatusText(status) {
    const statusTexts = {
        'in-stock': '在庫あり',
        'low-stock': '在庫少',
        'out-of-stock': '在庫切れ',
        'limited': '限定商品'
    };
    return statusTexts[status] || '';
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