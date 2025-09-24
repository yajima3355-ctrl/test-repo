# Interview Page Design System

## Color Palette (Blue-based)

### Primary Colors
- **Primary Blue**: #0F62FE (IBM Blue)
- **Primary Blue Light**: #4C9AFF (Lighter variant)
- **Primary Blue Dark**: #0043CE (Darker variant)

### Neutral Colors
- **Text Primary**: #222222 (Main text)
- **Text Secondary**: #555555 (Secondary text)
- **Text Tertiary**: #888888 (Meta text)
- **Background White**: #FFFFFF
- **Background Light**: #F8FAFC
- **Border Light**: #E5E7EB
- **Border Medium**: #D1D5DB

### Accent Colors
- **Success**: #10B981 (Green for positive elements)
- **Warning**: #F59E0B (Amber for highlights)
- **Error**: #EF4444 (Red for errors)

## Typography Scale

### Font Stack
- **Primary**: Noto Sans JP, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **English**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Type Scale
- **H1 (Page Title)**: 28px / 1.4 line-height / 700 weight
- **H2 (Section Title)**: 22px / 1.5 line-height / 600 weight
- **H3 (Subsection)**: 18px / 1.5 line-height / 600 weight
- **Body Large**: 18px / 1.6 line-height / 400 weight
- **Body**: 16px / 1.6 line-height / 400 weight
- **Body Small**: 14px / 1.5 line-height / 400 weight
- **Meta**: 13px / 1.4 line-height / 400 weight

## Spacing System (4pt Grid)

### Base Unit: 4px
- **4px**: Micro spacing
- **8px**: Small spacing
- **12px**: Medium-small spacing
- **16px**: Medium spacing
- **20px**: Medium-large spacing
- **24px**: Large spacing
- **32px**: Extra large spacing
- **40px**: Section spacing
- **48px**: Major section spacing

## Component Specifications

### Cards
- **Border Radius**: 12px
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Padding**: 20px
- **Background**: #FFFFFF

### Buttons
- **Primary**: Blue background, white text, 12px border radius
- **Secondary**: White background, blue text, blue border
- **Height**: 44px minimum (accessibility)
- **Padding**: 12px 20px

### Profile Images
- **Size**: 64px diameter
- **Border Radius**: 50% (circular)
- **Border**: 2px solid #E5E7EB

### Quote Blocks
- **Left Border**: 4px solid #0F62FE
- **Background**: #F8FAFC
- **Padding**: 16px 20px
- **Border Radius**: 8px

## Layout Guidelines

### Mobile Constraints
- **Safe Width**: 360-390px
- **Side Margins**: 16-20px
- **Max Content Width**: 750px (@2x)

### Accessibility
- **Minimum Touch Target**: 44px
- **Contrast Ratio**: WCAG AA compliant (4.5:1 minimum)
- **Text Size**: 16px minimum for body text
- **Line Height**: 1.5-1.7 for readability

## Implementation Notes

### CSS Tokens
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

### Responsive Breakpoints
- **Mobile**: 360px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+