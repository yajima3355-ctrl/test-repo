# Interview Page Style Guide / UI Kit

## Color Palette

### Primary Colors
```
Primary Blue: #0F62FE
Primary Blue Light: #4C9AFF  
Primary Blue Dark: #0043CE
```

### Neutral Colors
```
Text Primary: #222222
Text Secondary: #555555
Text Tertiary: #888888
Background White: #FFFFFF
Background Light: #F8FAFC
Border Light: #E5E7EB
Border Medium: #D1D5DB
```

### Accent Colors
```
Success: #10B981
Warning: #F59E0B
Error: #EF4444
```

## Typography

### Font Families
- **Japanese**: Noto Sans JP
- **English**: Inter
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Type Scale
```
H1 (Page Title): 28px / 1.4 line-height / 700 weight
H2 (Section Title): 22px / 1.5 line-height / 600 weight  
H3 (Subsection): 18px / 1.5 line-height / 600 weight
Body Large: 18px / 1.6 line-height / 400 weight
Body: 16px / 1.6 line-height / 400 weight
Body Small: 14px / 1.5 line-height / 400 weight
Meta: 13px / 1.4 line-height / 400 weight
```

## Spacing System (4pt Grid)

```
4px  - Micro spacing
8px  - Small spacing  
12px - Medium-small spacing
16px - Medium spacing
20px - Medium-large spacing
24px - Large spacing
32px - Extra large spacing
40px - Section spacing
48px - Major section spacing
```

## Component Specifications

### Cards
- **Border Radius**: 12px
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Padding**: 20px
- **Background**: #FFFFFF
- **Border**: 1px solid #E5E7EB

### Buttons
- **Primary**: Blue background (#0F62FE), white text
- **Secondary**: White background, blue text (#0F62FE), blue border
- **Border Radius**: 12px
- **Height**: 44px minimum
- **Padding**: 12px 20px
- **Font Weight**: 600

### Profile Images
- **Size**: 64px diameter
- **Border Radius**: 50% (circular)
- **Border**: 2px solid #E5E7EB
- **Background**: #F8FAFC

### Quote Blocks
- **Left Border**: 4px solid #0F62FE
- **Background**: #F8FAFC
- **Padding**: 16px 20px
- **Border Radius**: 8px
- **Quote Mark**: 48px, opacity 0.3

### Q&A Cards
- **Question Prefix**: "Q:" in blue circle (24px)
- **Question Text**: 18px, weight 600, color #0F62FE
- **Answer Text**: 16px, weight 400, color #222222
- **Card Padding**: 20px
- **Card Margin**: 20px bottom

### Review Cards
- **Star Rating**: 16px yellow stars (#FCD34D)
- **Date**: 13px, color #888888
- **Review Text**: 16px, color #222222
- **Tags**: 12px, background #4C9AFF, white text

### Images
- **Border Radius**: 12px
- **Shadow**: 0 4px 6px rgba(0, 0, 0, 0.1)
- **Caption**: 14px, color #555555, centered

## Layout Guidelines

### Mobile Constraints
- **Safe Width**: 360-390px
- **Side Margins**: 16-20px
- **Max Content Width**: 750px (@2x)

### Accessibility Standards
- **Minimum Touch Target**: 44px
- **Contrast Ratio**: WCAG AA compliant (4.5:1 minimum)
- **Text Size**: 16px minimum for body text
- **Line Height**: 1.5-1.7 for readability
- **Focus States**: 2px solid #0F62FE outline

## CSS Implementation

### CSS Custom Properties
```css
:root {
  --color-primary: #0F62FE;
  --color-primary-light: #4C9AFF;
  --color-primary-dark: #0043CE;
  --color-text-primary: #222222;
  --color-text-secondary: #555555;
  --color-text-tertiary: #888888;
  --color-background: #FFFFFF;
  --color-background-light: #F8FAFC;
  --color-border: #E5E7EB;
  --color-border-medium: #D1D5DB;
  
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;
  
  --radius-8: 8px;
  --radius-12: 12px;
  --radius-16: 16px;
  
  --shadow-1: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-2: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Component Classes
```css
.card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-12);
  padding: var(--space-20);
  box-shadow: var(--shadow-1);
}

.button-primary {
  background: var(--color-primary);
  color: white;
  padding: var(--space-12) var(--space-24);
  border-radius: var(--radius-12);
  font-weight: 600;
  min-height: 44px;
}

.quote-block {
  background: var(--color-background-light);
  border-left: 4px solid var(--color-primary);
  padding: var(--space-20);
  border-radius: var(--radius-8);
}
```

## Responsive Breakpoints
- **Mobile**: 360px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## Implementation Notes

### CMS Integration
- Use semantic HTML structure with section elements
- Implement reusable component blocks
- Ensure text remains editable (avoid outlining)
- Use CSS custom properties for easy theme switching

### Performance Considerations
- Optimize images for web (WebP format preferred)
- Use system fonts to avoid font loading delays
- Implement lazy loading for images
- Minimize CSS and JavaScript

### Browser Support
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Graceful degradation for older browsers
- Progressive enhancement approach