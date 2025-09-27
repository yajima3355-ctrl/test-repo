// ===== Account Page Specific JavaScript =====

// Initialize account forms
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleRegister();
    });
    
    // Add form validation
    addFormValidation();
});

// Handle login
function handleLogin() {
    const form = document.getElementById('login-form');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateLoginForm()) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'ログイン中...';
    submitBtn.disabled = true;
    
    // Simulate login
    setTimeout(() => {
        // Show success message
        showSuccessMessage('ログインしました。');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear form
        form.reset();
        
        // In a real application, redirect to user dashboard
        setTimeout(() => {
            alert('ログイン成功！\n（デモ版のため、実際のログイン処理は行われません）');
        }, 1000);
    }, 1500);
}

// Handle register
function handleRegister() {
    const form = document.getElementById('register-form');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateRegisterForm()) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '登録中...';
    submitBtn.disabled = true;
    
    // Simulate registration
    setTimeout(() => {
        // Show success message
        showSuccessMessage('会員登録が完了しました。');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear form
        form.reset();
        
        // In a real application, redirect to login or dashboard
        setTimeout(() => {
            alert('会員登録完了！\n（デモ版のため、実際の登録処理は行われません）');
        }, 1000);
    }, 2000);
}

// Validate login form
function validateLoginForm() {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors('login-form');
    
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    
    // Email validation
    if (!email.value.trim()) {
        showFieldError(email, 'メールアドレスを入力してください');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showFieldError(email, '正しいメールアドレスを入力してください');
        isValid = false;
    }
    
    // Password validation
    if (!password.value.trim()) {
        showFieldError(password, 'パスワードを入力してください');
        isValid = false;
    }
    
    return isValid;
}

// Validate register form
function validateRegisterForm() {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors('register-form');
    
    const name = document.getElementById('register-name');
    const email = document.getElementById('register-email');
    const password = document.getElementById('register-password');
    const confirmPassword = document.getElementById('register-confirm-password');
    const privacy = document.getElementById('register-privacy');
    
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
    
    // Password validation
    if (!password.value.trim()) {
        showFieldError(password, 'パスワードを入力してください');
        isValid = false;
    } else if (password.value.length < 6) {
        showFieldError(password, 'パスワードは6文字以上で入力してください');
        isValid = false;
    }
    
    // Confirm password validation
    if (!confirmPassword.value.trim()) {
        showFieldError(confirmPassword, 'パスワード確認を入力してください');
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showFieldError(confirmPassword, 'パスワードが一致しません');
        isValid = false;
    }
    
    // Privacy policy validation
    if (!privacy.checked) {
        showFieldError(privacy, 'プライバシーポリシーに同意してください');
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
function clearFormErrors(formId) {
    const form = document.getElementById(formId);
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
    
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
}

// Show success message
function showSuccessMessage(message) {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        
        form.insertBefore(successDiv, form.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    });
}

// Add form validation
function addFormValidation() {
    const forms = document.querySelectorAll('.form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('.form-input');
        
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
    
    // Password validation
    if (field.type === 'password' && value && value.length < 6) {
        showFieldError(field, 'パスワードは6文字以上で入力してください');
        return false;
    }
    
    return true;
}