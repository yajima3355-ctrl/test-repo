# Implementation Guide for Interview Page Design

## Overview
This guide provides detailed implementation instructions for the redesigned interview page, following the design system and specifications outlined in the style guide.

## HTML Structure

### Basic Page Structure
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ファミリー工房 インタビューページ</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <div class="logo-icon"></div>
                    <span>ロコミランキング</span>
                </div>
                <button class="menu-toggle" aria-label="メニューを開く">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">ファミリー工房が口コミ高評価を獲得しているワケとは？<br>一暮らしを変えるリフォームを、もっと身近に。</h1>
                <p class="hero-subtitle">徹底解説 - ロコミ評価研究員インタビュー</p>
                <a href="#" class="cta-button">ファミリー工房 公式HPはこちら</a>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
        <div class="container">
            <!-- Profile Section -->
            <section class="section">
                <div class="profile-card">
                    <div class="profile-header">
                        <div class="profile-image">
                            <img src="profile-image.jpg" alt="ファミリー工房 担当者">
                        </div>
                        <div class="profile-info">
                            <h3>ファミリー工房 担当者</h3>
                            <p>リフォーム専門会社</p>
                        </div>
                    </div>
                    <div class="profile-tags">
                        <span class="tag">リフォーム</span>
                        <span class="tag">30年実績</span>
                        <span class="tag">高評価</span>
                    </div>
                </div>
            </section>

            <!-- Reviews Section -->
            <section class="section">
                <h2 class="section-title">この記事でわかるファミリー工房の評価・ロコミ</h2>
                
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-rating">
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                        </div>
                        <span class="review-date">2015/06/02</span>
                    </div>
                    <p class="review-text">「何もわからなかったけど<strong>安心して進められた</strong>」</p>
                    <span class="review-tag">リフォーム</span>
                </div>

                <!-- Additional review cards... -->
            </section>

            <!-- Q&A Section -->
            <section class="section">
                <h2 class="section-title">初めてのリフォームにも寄り添える対応力</h2>
                
                <div class="qa-card">
                    <div class="qa-question">初めてのリフォームで不安を感じるお客様に対して、どのような対応を心がけていますか？</div>
                    <div class="qa-answer">
                        初めてのリフォームは確かに不安が大きいものです。私たちはまず、お客様の不安を理解し、一つ一つ丁寧に説明することを心がけています。契約書も分かりやすく作成し、プロセスを明確にすることで、安心して進めていただけるよう努めています。
                    </div>
                </div>

                <div class="quote-block">
                    <p class="quote-text">「何もわからなかったけど<strong>安心して進められた</strong>」</p>
                    <p class="quote-author">- お客様の声</p>
                </div>

                <div class="image-section">
                    <div class="image-container">
                        <img src="contract-sample.jpg" alt="契約書のサンプル">
                    </div>
                    <p class="image-caption">このような契約書を作成しております。</p>
                </div>
            </section>

            <!-- Additional sections... -->
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>© 2024 ファミリー工房. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>
```

## CSS Implementation

### CSS Custom Properties Setup
```css
:root {
  /* Color System */
  --primary-blue: #0F62FE;
  --primary-light: #4C9AFF;
  --primary-dark: #0043CE;
  --text-primary: #222222;
  --text-secondary: #555555;
  --text-tertiary: #888888;
  --bg-white: #FFFFFF;
  --bg-light: #F8FAFC;
  --border-light: #E5E7EB;
  --border-medium: #D1D5DB;
  
  /* Spacing System (4pt grid) */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;
  
  /* Border Radius */
  --radius-8: 8px;
  --radius-12: 12px;
  --radius-16: 16px;
  
  /* Shadows */
  --shadow-1: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-2: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Component Classes
```css
/* Card Base */
.card {
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-12);
  padding: var(--space-20);
  box-shadow: var(--shadow-1);
}

/* Button Primary */
.button-primary {
  background: var(--primary-blue);
  color: white;
  padding: var(--space-12) var(--space-24);
  border-radius: var(--radius-12);
  font-weight: 600;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
}

.button-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

/* Quote Block */
.quote-block {
  background: var(--bg-light);
  border-left: 4px solid var(--primary-blue);
  padding: var(--space-20);
  border-radius: var(--radius-8);
  position: relative;
}

.quote-block::before {
  content: '"';
  position: absolute;
  top: var(--space-8);
  left: var(--space-16);
  font-size: 48px;
  color: var(--primary-blue);
  opacity: 0.3;
  font-family: serif;
}
```

## JavaScript Functionality

### Basic Interactions
```javascript
// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Add menu toggle logic here
            console.log('Menu toggled');
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
```

## CMS Integration

### Block Structure for CMS
```html
<!-- Profile Block -->
<div class="profile-block" data-block="profile">
    <div class="profile-card">
        <div class="profile-header">
            <div class="profile-image">
                <img src="{{profile_image}}" alt="{{profile_name}}">
            </div>
            <div class="profile-info">
                <h3>{{profile_name}}</h3>
                <p>{{profile_title}}</p>
            </div>
        </div>
        <div class="profile-tags">
            {{#each tags}}
            <span class="tag">{{this}}</span>
            {{/each}}
        </div>
    </div>
</div>

<!-- Q&A Block -->
<div class="qa-block" data-block="qa">
    <h2 class="section-title">{{section_title}}</h2>
    {{#each qa_items}}
    <div class="qa-card">
        <div class="qa-question">{{question}}</div>
        <div class="qa-answer">{{answer}}</div>
    </div>
    {{/each}}
</div>

<!-- Quote Block -->
<div class="quote-block" data-block="quote">
    <p class="quote-text">{{quote_text}}</p>
    <p class="quote-author">{{quote_author}}</p>
</div>
```

## Performance Optimization

### Image Optimization
```html
<!-- Responsive images -->
<picture>
    <source media="(max-width: 480px)" srcset="image-mobile.webp">
    <source media="(max-width: 768px)" srcset="image-tablet.webp">
    <img src="image-desktop.webp" alt="Description" loading="lazy">
</picture>

<!-- Lazy loading -->
<img src="image.jpg" alt="Description" loading="lazy" decoding="async">
```

### CSS Optimization
```css
/* Critical CSS - inline in head */
.hero {
    background: linear-gradient(135deg, #4C9AFF 0%, #0F62FE 100%);
    color: white;
    padding: 48px 0;
    text-align: center;
}

/* Non-critical CSS - load async */
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## Testing Checklist

### Accessibility Testing
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus states are visible
- [ ] Touch targets are 44px minimum
- [ ] Screen reader compatibility

### Performance Testing
- [ ] Page load time under 3 seconds
- [ ] Images optimized for web
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] Fonts loaded efficiently

### Cross-browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

## Deployment Notes

### File Structure
```
project/
├── index.html
├── styles/
│   ├── main.css
│   ├── components.css
│   └── responsive.css
├── scripts/
│   └── main.js
├── images/
│   ├── hero-bg.jpg
│   ├── profile-image.jpg
│   └── contract-sample.jpg
└── fonts/
    └── noto-sans-jp.woff2
```

### Build Process
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Optimize images
npm run optimize-images

# Deploy
npm run deploy
```

This implementation guide provides a complete roadmap for developers to implement the redesigned interview page while maintaining the design system and accessibility standards.