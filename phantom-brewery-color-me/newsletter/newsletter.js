// ===== Newsletter Page Specific JavaScript =====

// Initialize newsletter forms
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribe-form');
    const unsubscribeForm = document.getElementById('unsubscribe-form');
    
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSubscribe();
    });
    
    unsubscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleUnsubscribe();
    });
    
    // Add form validation
    addFormValidation();
});

// Handle subscribe form
function handleSubscribe() {
    const form = document.getElementById('subscribe-form');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateSubscribeForm()) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '登録中...';
    submitBtn.disabled = true;
    
    // Simulate subscription
    setTimeout(() => {
        // Show success message
        showSuccessMessage('メルマガに登録しました！', form);
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove error states
        clearFormErrors(form);
    }, 1500);
}

// Handle unsubscribe form
function handleUnsubscribe() {
    const form = document.getElementById('unsubscribe-form');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateUnsubscribeForm()) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '解除中...';
    submitBtn.disabled = true;
    
    // Simulate unsubscription
    setTimeout(() => {
        // Show success message
        showSuccessMessage('メルマガを解除しました。', form);
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove error states
        clearFormErrors(form);
    }, 1500);
}

// Validate subscribe form
function validateSubscribeForm() {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors(document.getElementById('subscribe-form'));
    
    const name = document.getElementById('subscribe-name');
    const email = document.getElementById('subscribe-email');
    const privacy = document.getElementById('subscribe-privacy');
    
    // Name validation
    if (!name.value.trim()) {
        showFieldError(name, 'お名前を入力してください');
        isValid = false;
    }
    
    // Email validation
    if (!email.value.trim()) {
        showFieldError(email, 'メールアドレスを入力してください');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showFieldError(email, '正しいメールアドレスを入力してください');
        isValid = false;
    }
    
    // Privacy policy validation
    if (!privacy.checked) {
        showFieldError(privacy, 'プライバシーポリシーに同意してください');
        isValid = false;
    }
    
    return isValid;
}

// Validate unsubscribe form
function validateUnsubscribeForm() {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors(document.getElementById('unsubscribe-form'));
    
    const email = document.getElementById('unsubscribe-email');
    
    // Email validation
    if (!email.value.trim()) {
        showFieldError(email, 'メールアドレスを入力してください');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showFieldError(email, '正しいメールアドレスを入力してください');
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
function clearFormErrors(form) {
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
    
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
}

// Show success message
function showSuccessMessage(message, form) {
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
    const forms = document.querySelectorAll('.form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('.form-input, .form-select');
        
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
        
        // Checkbox validation
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                this.classList.remove('error');
                const errorMessage = this.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
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