// Phantom Brewery - Contact Page JavaScript
// 静謐の中に宿る、和の余韻 - お問合せページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeContactPage();
});

// Initialize Contact Page
function initializeContactPage() {
    initializeContactForm();
    initializeFormValidation();
    initializeFormSubmission();
}

// Initialize Contact Form
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Add focus/blur effects
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// Initialize Form Validation
function initializeFormValidation() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
}

// Validate Form
function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate Field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'この項目は必須です';
    }
    
    // Email validation
    if (fieldName === 'email' && value && !validateEmail(value)) {
        isValid = false;
        errorMessage = '有効なメールアドレスを入力してください';
    }
    
    // Phone validation
    if (fieldName === 'phone' && value && !validatePhone(value)) {
        isValid = false;
        errorMessage = '有効な電話番号を入力してください';
    }
    
    // Message length validation
    if (fieldName === 'message' && value && value.length < 10) {
        isValid = false;
        errorMessage = 'お問い合わせ内容は10文字以上で入力してください';
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

// Show Field Error
function showFieldError(field, message) {
    clearFieldError(field);
    
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
function clearFieldError(field) {
    const errorDiv = field.parentElement.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '';
}

// Initialize Form Submission
function initializeFormSubmission() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
}

// Submit Form
function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    showLoading(submitBtn);
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading(submitBtn);
        
        // Show success message
        showSuccess('お問い合わせを受け付けました。ありがとうございます。', form);
        
        // Reset form
        form.reset();
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 2000);
}

// Export functions for external use
window.ContactPage = {
    initializeContactPage,
    validateForm,
    submitForm
};