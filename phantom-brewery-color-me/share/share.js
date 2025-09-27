// ===== Share Page Specific JavaScript =====

// Initialize share form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('share-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleShareSubmit();
    });
    
    // Add form validation
    addFormValidation();
});

// Handle share form submission
function handleShareSubmit() {
    const form = document.getElementById('share-form');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateShareForm()) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '送信中...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showSuccessMessage('友達にメールを送信しました！');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove error states
        clearFormErrors();
    }, 2000);
}

// Validate share form
function validateShareForm() {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors();
    
    // Required fields
    const requiredFields = ['friend-name', 'friend-email', 'your-name', 'your-email'];
    
    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (!field.value.trim()) {
            showFieldError(field, 'この項目は必須です');
            isValid = false;
        }
    });
    
    // Email validation
    const friendEmail = document.getElementById('friend-email');
    const yourEmail = document.getElementById('your-email');
    
    if (friendEmail.value && !isValidEmail(friendEmail.value)) {
        showFieldError(friendEmail, '正しいメールアドレスを入力してください');
        isValid = false;
    }
    
    if (yourEmail.value && !isValidEmail(yourEmail.value)) {
        showFieldError(yourEmail, '正しいメールアドレスを入力してください');
        isValid = false;
    }
    
    return isValid;
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show field error
function showFieldError(field, message) {
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
    const form = document.getElementById('share-form');
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
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
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

// Social sharing functions
function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Phantom Brewery - 静謐の中に宿る、和の余韻');
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

function shareToLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Phantom Brewery - 静謐の中に宿る、和の余韻');
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`;
    window.open(lineUrl, '_blank', 'width=600,height=400');
}

// Copy link function
function copyLink() {
    const linkInput = document.getElementById('share-link');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Show success message
        const copyBtn = event.target;
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'コピー済み';
        copyBtn.style.background = '#d4af37';
        copyBtn.style.color = '#1a1a1a';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
            copyBtn.style.color = '';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy link: ', err);
        alert('リンクのコピーに失敗しました。手動でコピーしてください。');
    }
}