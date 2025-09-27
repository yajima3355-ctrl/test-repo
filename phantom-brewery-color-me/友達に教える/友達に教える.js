// Phantom Brewery - Share Page JavaScript
// 静謐の中に宿る、和の余韻 - 友達に教えるページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSharePage();
});

// Initialize Share Page
function initializeSharePage() {
    initializeShareForm();
    initializeShareOptions();
    initializeUrlCopy();
}

// Initialize Share Form
function initializeShareForm() {
    const shareForm = document.getElementById('shareForm');
    
    shareForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateShareForm()) {
            submitShareForm();
        }
    });
}

// Validate Share Form
function validateShareForm() {
    const friendName = document.getElementById('friendName').value.trim();
    const friendEmail = document.getElementById('friendEmail').value.trim();
    const yourName = document.getElementById('yourName').value.trim();
    const yourEmail = document.getElementById('yourEmail').value.trim();
    let isValid = true;
    
    if (!friendName) {
        showFieldError('friendName', '友達のお名前を入力してください');
        isValid = false;
    }
    
    if (!friendEmail) {
        showFieldError('friendEmail', '友達のメールアドレスを入力してください');
        isValid = false;
    } else if (!validateEmail(friendEmail)) {
        showFieldError('friendEmail', '有効なメールアドレスを入力してください');
        isValid = false;
    }
    
    if (!yourName) {
        showFieldError('yourName', 'あなたのお名前を入力してください');
        isValid = false;
    }
    
    if (!yourEmail) {
        showFieldError('yourEmail', 'あなたのメールアドレスを入力してください');
        isValid = false;
    } else if (!validateEmail(yourEmail)) {
        showFieldError('yourEmail', '有効なメールアドレスを入力してください');
        isValid = false;
    }
    
    return isValid;
}

// Submit Share Form
function submitShareForm() {
    const shareForm = document.getElementById('shareForm');
    const submitBtn = shareForm.querySelector('button[type="submit"]');
    
    showLoading(submitBtn);
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading(submitBtn);
        showSuccess('友達にシェアしました。', shareForm);
        
        // Reset form
        shareForm.reset();
    }, 2000);
}

// Initialize Share Options
function initializeShareOptions() {
    // Social media sharing functions are defined globally
    window.shareToTwitter = shareToTwitter;
    window.shareToFacebook = shareToFacebook;
    window.shareToLine = shareToLine;
}

// Share to Twitter
function shareToTwitter() {
    const productSelect = document.getElementById('productSelect');
    const selectedProduct = productSelect.options[productSelect.selectedIndex].text;
    const shareText = `Phantom Breweryの「${selectedProduct}」をチェック！静謐の中に宿る、和の余韻。`;
    const shareUrl = 'https://phantom-brewery.com';
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

// Share to Facebook
function shareToFacebook() {
    const shareUrl = 'https://phantom-brewery.com';
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

// Share to LINE
function shareToLine() {
    const productSelect = document.getElementById('productSelect');
    const selectedProduct = productSelect.options[productSelect.selectedIndex].text;
    const shareText = `Phantom Breweryの「${selectedProduct}」をチェック！静謐の中に宿る、和の余韻。`;
    const shareUrl = 'https://phantom-brewery.com';
    
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    
    window.open(lineUrl, '_blank', 'width=600,height=400');
}

// Initialize URL Copy
function initializeUrlCopy() {
    window.copyUrl = copyUrl;
}

// Copy URL
function copyUrl() {
    const urlInput = document.getElementById('shareUrl');
    const copyBtn = document.querySelector('.url-copy button');
    
    // Select and copy the URL
    urlInput.select();
    urlInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Show success feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'コピー完了！';
        copyBtn.style.backgroundColor = 'var(--color-success)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy URL: ', err);
        alert('URLのコピーに失敗しました。手動でコピーしてください。');
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
window.SharePage = {
    initializeSharePage,
    validateShareForm,
    submitShareForm,
    shareToTwitter,
    shareToFacebook,
    shareToLine,
    copyUrl
};