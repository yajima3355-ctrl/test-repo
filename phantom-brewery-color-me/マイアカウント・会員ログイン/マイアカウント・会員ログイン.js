// Phantom Brewery - Account Page JavaScript
// 静謐の中に宿る、和の余韻 - マイアカウント・会員ログインページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAccountPage();
});

// Initialize Account Page
function initializeAccountPage() {
    initializeLoginForm();
    initializeRegisterForm();
    initializeFormValidation();
}

// Initialize Login Form
function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateLoginForm()) {
            submitLoginForm();
        }
    });
}

// Initialize Register Form
function initializeRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateRegisterForm()) {
            submitRegisterForm();
        }
    });
    
    // Password confirmation validation
    const passwordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    confirmPasswordInput.addEventListener('input', function() {
        validatePasswordMatch();
    });
}

// Validate Login Form
function validateLoginForm() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    let isValid = true;
    
    if (!email) {
        showFieldError('loginEmail', 'メールアドレスを入力してください');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('loginEmail', '有効なメールアドレスを入力してください');
        isValid = false;
    }
    
    if (!password) {
        showFieldError('loginPassword', 'パスワードを入力してください');
        isValid = false;
    }
    
    return isValid;
}

// Validate Register Form
function validateRegisterForm() {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const birthDate = document.getElementById('birthDate').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    let isValid = true;
    
    if (!name) {
        showFieldError('registerName', 'お名前を入力してください');
        isValid = false;
    }
    
    if (!email) {
        showFieldError('registerEmail', 'メールアドレスを入力してください');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('registerEmail', '有効なメールアドレスを入力してください');
        isValid = false;
    }
    
    if (!password) {
        showFieldError('registerPassword', 'パスワードを入力してください');
        isValid = false;
    } else if (password.length < 8) {
        showFieldError('registerPassword', 'パスワードは8文字以上で入力してください');
        isValid = false;
    }
    
    if (!confirmPassword) {
        showFieldError('confirmPassword', 'パスワード確認を入力してください');
        isValid = false;
    } else if (password !== confirmPassword) {
        showFieldError('confirmPassword', 'パスワードが一致しません');
        isValid = false;
    }
    
    if (!birthDate) {
        showFieldError('birthDate', '生年月日を入力してください');
        isValid = false;
    } else {
        const age = calculateAge(new Date(birthDate));
        if (age < 20) {
            showFieldError('birthDate', '20歳未満の方はご利用できません');
            isValid = false;
        }
    }
    
    if (!agreeTerms) {
        showFieldError('agreeTerms', '利用規約に同意してください');
        isValid = false;
    }
    
    return isValid;
}

// Validate Password Match
function validatePasswordMatch() {
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (confirmPassword && password !== confirmPassword) {
        showFieldError('confirmPassword', 'パスワードが一致しません');
    } else {
        clearFieldError('confirmPassword');
    }
}

// Calculate Age
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
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

// Submit Login Form
function submitLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    
    showLoading(submitBtn);
    
    // Simulate login
    setTimeout(() => {
        hideLoading(submitBtn);
        showSuccess('ログインしました。', loginForm);
        
        // Redirect to account dashboard (placeholder)
        setTimeout(() => {
            alert('アカウントダッシュボードに移動します（実装予定）');
        }, 1000);
    }, 2000);
}

// Submit Register Form
function submitRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    const submitBtn = registerForm.querySelector('button[type="submit"]');
    
    showLoading(submitBtn);
    
    // Simulate registration
    setTimeout(() => {
        hideLoading(submitBtn);
        showSuccess('会員登録が完了しました。', registerForm);
        
        // Reset form
        registerForm.reset();
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
        });
    });
}

// Export functions for external use
window.AccountPage = {
    initializeAccountPage,
    validateLoginForm,
    validateRegisterForm,
    submitLoginForm,
    submitRegisterForm
};