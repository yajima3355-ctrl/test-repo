// ===== Review Page Specific JavaScript =====

// Sample reviews data
const reviewsData = [
    {
        id: 1,
        productId: 1,
        productName: '幻の一滴',
        rating: 5,
        title: 'まさに幻の味わい',
        content: '期待をはるかに上回る素晴らしい日本酒でした。香りも味も上品で、特別な日にぴったりです。',
        reviewerName: '田中様',
        date: '2024年9月15日'
    },
    {
        id: 2,
        productId: 2,
        productName: '静寂の響き',
        rating: 5,
        title: '静寂の中の深い味わい',
        content: '名前の通り、静寂の中に宿る深い味わいが印象的でした。純米大吟醸の良さが存分に味わえます。',
        reviewerName: '佐藤様',
        date: '2024年9月10日'
    },
    {
        id: 3,
        productId: 3,
        productName: '和の余韻',
        rating: 4,
        title: 'モダンな和の味わい',
        content: '伝統と革新が調和した、現代的な味わいが素晴らしいです。若い世代にも親しみやすい仕上がり。',
        reviewerName: '山田様',
        date: '2024年9月8日'
    },
    {
        id: 4,
        productId: 1,
        productName: '幻の一滴',
        rating: 5,
        title: '最高級の日本酒',
        content: '最高級の米と水で醸造されたというだけあって、味わいが格別です。ギフトとしても喜ばれました。',
        reviewerName: '鈴木様',
        date: '2024年9月5日'
    },
    {
        id: 5,
        productId: 4,
        productName: '四季の彩り',
        rating: 5,
        title: '四季を感じる限定品',
        content: '四季折々の美しさを表現した限定商品。春の桜、夏の緑、秋の紅葉、冬の雪をイメージできる味わいです。',
        reviewerName: '高橋様',
        date: '2024年9月3日'
    }
];

let displayedReviews = 3;
let allReviews = [...reviewsData];

// Initialize review page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('review-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleReviewSubmit();
    });
    
    // Add form validation
    addFormValidation();
    
    // Load initial reviews
    loadReviews();
});

// Handle review form submission
function handleReviewSubmit() {
    const form = document.getElementById('review-form');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateReviewForm()) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '投稿中...';
    submitBtn.disabled = true;
    
    // Simulate review submission
    setTimeout(() => {
        // Create new review
        const newReview = {
            id: Date.now(),
            productId: formData.get('product'),
            productName: getProductName(formData.get('product')),
            rating: parseInt(formData.get('rating')),
            title: formData.get('title'),
            content: formData.get('content'),
            reviewerName: formData.get('name'),
            date: new Date().toLocaleDateString('ja-JP')
        };
        
        // Add to reviews
        allReviews.unshift(newReview);
        
        // Show success message
        showSuccessMessage('レビューを投稿しました！');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove error states
        clearFormErrors();
        
        // Reload reviews
        loadReviews();
    }, 1500);
}

// Validate review form
function validateReviewForm() {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors();
    
    // Required fields
    const requiredFields = ['product', 'rating', 'title', 'content', 'name', 'email'];
    
    requiredFields.forEach(fieldName => {
        const field = document.getElementById(`review-${fieldName}`) || document.querySelector(`input[name="${fieldName}"]`);
        if (!field || !field.value.trim()) {
            showFieldError(field, 'この項目は必須です');
            isValid = false;
        }
    });
    
    // Email validation
    const emailField = document.getElementById('reviewer-email');
    if (emailField.value && !isValidEmail(emailField.value)) {
        showFieldError(emailField, '正しいメールアドレスを入力してください');
        isValid = false;
    }
    
    return isValid;
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Get product name by ID
function getProductName(productId) {
    const products = {
        '1': '幻の一滴',
        '2': '静寂の響き',
        '3': '和の余韻',
        '4': '四季の彩り',
        '5': '職人の心',
        '6': 'ギフトセット 和の美',
        '7': '凛とした味わい',
        '8': '粋な一杯'
    };
    return products[productId] || '商品名不明';
}

// Show field error
function showFieldError(field, message) {
    if (!field) return;
    
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Clear form errors
function clearFormErrors() {
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
    
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
}

// Show success message
function showSuccessMessage(message) {
    const form = document.getElementById('review-form');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Add form validation
function addFormValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remove error state on input
            this.classList.remove('error');
            const errorMessage = this.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
    });
    
    // Rating validation
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
            this.classList.remove('error');
            const errorMessage = this.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'この項目は必須です');
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, '正しいメールアドレスを入力してください');
        return false;
    }
    
    return true;
}

// Load reviews
function loadReviews() {
    const container = document.getElementById('reviews-container');
    const reviewsToShow = allReviews.slice(0, displayedReviews);
    
    container.innerHTML = reviewsToShow.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-name">${review.reviewerName}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            </div>
            <div class="review-title">${review.title}</div>
            <div class="review-content-text">${review.content}</div>
            <div class="review-product">商品: ${review.productName}</div>
        </div>
    `).join('');
    
    // Update load more button
    const loadMoreBtn = document.querySelector('.load-more button');
    if (displayedReviews >= allReviews.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

// Load more reviews
function loadMoreReviews() {
    displayedReviews += 3;
    loadReviews();
}