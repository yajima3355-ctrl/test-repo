// Phantom Brewery - Privacy Policy Page JavaScript
// 静謐の中に宿る、和の余韻 - プライバシーポリシーページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePrivacyPolicyPage();
});

// Initialize Privacy Policy Page
function initializePrivacyPolicyPage() {
    initializeScrollToTop();
    initializePrintFunction();
    initializeTableOfContents();
}

// Initialize Scroll to Top
function initializeScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑ トップへ';
    scrollToTopBtn.className = 'btn btn--secondary';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        display: none;
    `;
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
}

// Initialize Print Function
function initializePrintFunction() {
    const printButton = document.createElement('button');
    printButton.textContent = '印刷';
    printButton.className = 'btn btn--secondary';
    printButton.style.marginTop = 'var(--spacing-lg)';
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    const privacyContent = document.querySelector('.privacy-content');
    if (privacyContent) {
        privacyContent.appendChild(printButton);
    }
}

// Initialize Table of Contents
function initializeTableOfContents() {
    const headings = document.querySelectorAll('.privacy-content h2');
    
    if (headings.length > 3) {
        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        toc.innerHTML = '<h3>目次</h3><ul></ul>';
        
        const tocList = toc.querySelector('ul');
        
        headings.forEach((heading, index) => {
            const id = `section-${index + 1}`;
            heading.id = id;
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = heading.textContent;
            a.addEventListener('click', function(e) {
                e.preventDefault();
                heading.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
            
            li.appendChild(a);
            tocList.appendChild(li);
        });
        
        const privacyContent = document.querySelector('.privacy-content');
        if (privacyContent) {
            privacyContent.insertBefore(toc, privacyContent.firstChild);
        }
        
        // Add TOC styles
        const tocStyles = `
            .table-of-contents {
                background-color: var(--color-neutral-100);
                padding: var(--spacing-lg);
                border-radius: var(--radius-lg);
                margin-bottom: var(--spacing-xl);
                border-left: 4px solid var(--color-primary);
            }
            
            .table-of-contents h3 {
                color: var(--color-primary);
                margin-bottom: var(--spacing-md);
                font-size: var(--font-size-lg);
            }
            
            .table-of-contents ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .table-of-contents li {
                margin-bottom: var(--spacing-sm);
            }
            
            .table-of-contents a {
                color: var(--color-text-secondary);
                text-decoration: none;
                transition: color var(--transition-fast);
            }
            
            .table-of-contents a:hover {
                color: var(--color-primary);
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = tocStyles;
        document.head.appendChild(styleSheet);
    }
}

// Print Styles
const printStyles = `
    @media print {
        .header, .footer, .nav__actions {
            display: none !important;
        }
        
        .page-header {
            background: none !important;
            padding: 1rem 0 !important;
        }
        
        .content {
            padding: 0 !important;
        }
        
        .privacy-content {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
        }
        
        .table-of-contents {
            page-break-after: always;
        }
        
        h2 {
            page-break-before: auto;
        }
    }
`;

// Add print styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = printStyles;
document.head.appendChild(styleSheet);

// Export functions for external use
window.PrivacyPolicy = {
    initializePrivacyPolicyPage,
    initializeScrollToTop,
    initializePrintFunction,
    initializeTableOfContents
};