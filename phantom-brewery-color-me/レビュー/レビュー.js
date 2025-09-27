// Phantom Brewery - Review Page JavaScript
// 静謐の中に宿る、和の余韻 - レビューページJavaScript

// Sample review data
const reviews = [
    {
        id: 1,
        productId: 1,
        productName: '幻の一滴',
        reviewerName: '田中 太郎',
        rating: 5,
        title: 'まさに幻の味わい',
        content: '最高級の米と水で醸造されたというだけあって、本当に幻の味わいでした。香りも上品で、一口飲むたびに日本の美意識を感じられます。',
        date: '2024-01-15'
    },
    {
        id: 2,
        productId: 2,
        productName: '静寂の響き',
        reviewerName: '佐藤 花子',
        rating: 4,
        title: '静寂の中の深い味わい',
        content: '静寂という名にふさわしい、深く落ち着いた味わいです。純米大吟醸の特徴がよく表現されていて、とても満足しています。',
        date: '2024-01-10'
    },
    {
        id: 3,
        productId: 3,
        productName: '和の余韻',
        reviewerName: '山田 次郎',
        rating: 5,
        title: '伝統と革新の調和',
        content: '伝統的な日本酒の良さを保ちながら、現代的な味わいも感じられる素晴らしい商品です。友人にもおすすめしました。',
        date: '2024-01-08'
    }
];

let currentPage = 1;
const reviewsPerPage = 5;
let filteredReviews = [...reviews];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeReviewPage();
});

// Initialize Review Page
function initializeReviewPage() {
    initializeReviewForm();
    initializeReviewFilters();
    loadReviews();
    initializeLoadMore();
}

// Initialize Review Form
function initializeReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateReviewForm()) {
            submitReviewForm();
        }
    });
    
    // Initialize rating stars
    initializeRatingStars();
}

// Initialize Rating Stars
function initializeRatingStars() {
    const ratingInputs = document.querySelectorAll('.rating-input input[type="radio"]');
    
    ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
            const rating = parseInt(this.value);
            updateRatingDisplay(rating);
        });
    });
}

// Update Rating Display
function updateRatingDisplay(rating) {
    const stars = document.querySelectorAll('.rating-input .star');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = 'var(--color-accent)';
        } else {
            star.style.color = 'var(--color-neutral-300)';
        }
    });
}

// Validate Review Form
function validateReviewForm() {
    const product = document.getElementById('productSelect').value;
    const name = document.getElementById('reviewerName').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');
    const title = document.getElementById('reviewTitle').value.trim();
    const content = document.getElementById('reviewContent').value.trim();
    const agreeTerms = document.getElementById('agreeTerms').checked;
    let isValid = true;
    
    if (!product) {
        showFieldError('productSelect', '商品を選択してください');
        isValid = false;
    }
    
    if (!name) {
        showFieldError('reviewerName', 'お名前を入力してください');
        isValid = false;
    }
    
    if (!rating) {
        showFieldError('rating', '評価を選択してください');
        isValid = false;
    }
    
    if (!title) {
        showFieldError('reviewTitle', 'レビュータイトルを入力してください');
        isValid = false;
    }
    
    if (!content) {
        showFieldError('reviewContent', 'レビュー内容を入力してください');
        isValid = false;
    } else if (content.length < 10) {
        showFieldError('reviewContent', 'レビュー内容は10文字以上で入力してください');
        isValid = false;
    }
    
    if (!agreeTerms) {
        showFieldError('agreeTerms', 'レビューの投稿に同意してください');
        isValid = false;
    }
    
    return isValid;
}

// Submit Review Form
function submitReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    const submitBtn = reviewForm.querySelector('button[type="submit"]');
    
    showLoading(submitBtn);
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading(submitBtn);
        showSuccess('レビューを投稿しました。ありがとうございます。', reviewForm);
        
        // Reset form
        reviewForm.reset();
        updateRatingDisplay(0);
        
        // Reload reviews
        loadReviews();
    }, 2000);
}

// Initialize Review Filters
function initializeReviewFilters() {
    const productFilter = document.getElementById('productFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    
    if (productFilter) {
        productFilter.addEventListener('change', applyFilters);
    }
    
    if (ratingFilter) {
        ratingFilter.addEventListener('change', applyFilters);
    }
}

// Apply Filters
function applyFilters() {
    const productFilter = document.getElementById('productFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    
    let filtered = [...reviews];
    
    // Product filter
    if (productFilter && productFilter.value) {
        filtered = filtered.filter(review => review.productId === parseInt(productFilter.value));
    }
    
    // Rating filter
    if (ratingFilter && ratingFilter.value) {
        filtered = filtered.filter(review => review.rating === parseInt(ratingFilter.value));
    }
    
    filteredReviews = filtered;
    currentPage = 1;
    
    // Reload reviews
    loadReviews();
}

// Load Reviews
function loadReviews() {
    const reviewList = document.getElementById('reviewList');
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const reviewsToShow = filteredReviews.slice(startIndex, endIndex);
    
    if (currentPage === 1) {
        reviewList.innerHTML = '';
    }
    
    reviewsToShow.forEach(review => {
        const reviewItem = createReviewItem(review);
        reviewList.appendChild(reviewItem);
    });
    
    // Update load more button visibility
    updateLoadMoreButton();
}

// Create Review Item
function createReviewItem(review) {
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item fade-in';
    
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    reviewItem.innerHTML = `
        <div class="review-header">
            <div class="review-meta">
                <div class="reviewer-name">${review.reviewerName}</div>
                <div class="review-product">${review.productName}</div>
            </div>
            <div class="review-rating">
                ${stars}
            </div>
        </div>
        <div class="review-title">${review.title}</div>
        <div class="review-content-text">${review.content}</div>
        <div class="review-date">${formatDate(review.date)}</div>
    `;
    
    return reviewItem;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initialize Load More
function initializeLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            loadReviews();
        });
    }
}

// Update Load More Button
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    
    if (loadMoreBtn) {
        if (currentPage >= totalPages) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }
}

// Show Field Error
function showFieldError(fieldId, message) {
    clearFieldError(fieldId);
    
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: var(--color-error);
        font-size: var(--font-size-xs);
        margin-top: var(--spacing-xs);
    `;
    
    field.parentElement.appendChild(errorDiv);
    field.style.borderColor = 'var(--color-error)';
}

// Clear Field Error
function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.parentElement.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '';
}

// Export functions for external use
window.ReviewPage = {
    initializeReviewPage,
    validateReviewForm,
    submitReviewForm,
    loadReviews,
    applyFilters
};