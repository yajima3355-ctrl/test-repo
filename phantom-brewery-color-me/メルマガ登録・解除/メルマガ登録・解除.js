// Phantom Brewery - Newsletter Page JavaScript
// 静謐の中に宿る、和の余韻 - メルマガ登録・解除ページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNewsletterPage();
});

// Initialize Newsletter Page
function initializeNewsletterPage() {
    initializeNewsletterForm();
    initializeUnsubscribeForm();
    initializeFormValidation();
}

// Initialize Newsletter Form
function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateNewsletterForm()) {
            submitNewsletterForm();
        }
    });
}

// Initialize Unsubscribe Form
function initializeUnsubscribeForm() {
    const unsubscribeForm = document.getElementById('unsubscribeForm');
    
    unsubscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateUnsubscribeForm()) {
            submitUnsubscribeForm();
        }
    });
}

// Validate Newsletter Form
function validateNewsletterForm() {
    const email = document.getElementById('email').value.trim();
    const agreeTerms = document.getElementById('agreeTerms').checked;
    let isValid = true;
    
    if (!email) {
        showFieldError('email', 'メールアドレスを入力してください');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('email', '有効なメールアドレスを入力してください');
        isValid = false;
    }
    
    if (!agreeTerms) {
        showFieldError('agreeTerms', 'プライバシーポリシーに同意してください');
        isValid = false;
    }
    
    return isValid;
}

// Validate Unsubscribe Form
function validateUnsubscribeForm() {
    const email = document.getElementById('unsubscribeEmail').value.trim();
    let isValid = true;
    
    if (!email) {
        showFieldError('unsubscribeEmail', 'メールアドレスを入力してください');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('unsubscribeEmail', '有効なメールアドレスを入力してください');
        isValid = false;
    }
    
    return isValid;
}

// Submit Newsletter Form
function submitNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    
    showLoading(submitBtn);
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading(submitBtn);
        showSuccess('メルマガに登録しました。ありがとうございます。', newsletterForm);
        
        // Reset form
        newsletterForm.reset();
    }, 2000);
}

// Submit Unsubscribe Form
function submitUnsubscribeForm() {
    const unsubscribeForm = document.getElementById('unsubscribeForm');
    const submitBtn = unsubscribeForm.querySelector('button[type="submit"]');
    
    showLoading(submitBtn);
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading(submitBtn);
        showSuccess('メルマガの配信を停止しました。', unsubscribeForm);
        
        // Reset form
        unsubscribeForm.reset();
    }, 2000);
}

// Initialize Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    showFieldError(this.id, 'この項目は必須です');
                } else {
                    clearFieldError(this.id);
                }
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this.id);
            });
        });
    });
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
window.NewsletterPage = {
    initializeNewsletterPage,
    validateNewsletterForm,
    validateUnsubscribeForm,
    submitNewsletterForm,
    submitUnsubscribeForm
};