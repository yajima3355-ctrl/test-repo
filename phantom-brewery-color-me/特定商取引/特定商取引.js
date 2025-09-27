// Phantom Brewery - Commercial Law Page JavaScript
// 静謐の中に宿る、和の余韻 - 特定商取引ページJavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCommercialLawPage();
});

// Initialize Commercial Law Page
function initializeCommercialLawPage() {
    initializeTableInteractions();
    initializePrintFunction();
}

// Initialize Table Interactions
function initializeTableInteractions() {
    const tableRows = document.querySelectorAll('.info-table tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = var(--color-neutral-100);
            this.style.transition = 'background-color 0.2s ease-in-out';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

// Initialize Print Function
function initializePrintFunction() {
    // Add print button if needed
    const printButton = document.createElement('button');
    printButton.textContent = '印刷';
    printButton.className = 'btn btn--secondary';
    printButton.style.marginTop = 'var(--spacing-lg)';
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    const legalInfo = document.querySelector('.legal-info');
    if (legalInfo) {
        legalInfo.appendChild(printButton);
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
        
        .legal-info {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
        }
        
        .info-table {
            page-break-inside: avoid;
        }
        
        .notice {
            page-break-inside: avoid;
        }
    }
`;

// Add print styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = printStyles;
document.head.appendChild(styleSheet);

// Export functions for external use
window.CommercialLaw = {
    initializeCommercialLawPage,
    initializeTableInteractions,
    initializePrintFunction
};