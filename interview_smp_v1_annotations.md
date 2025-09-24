# Interview Page Design Annotations & Specifications

## Design File Specifications

### Canvas Size & Resolution
- **Width**: 750px (@2x for mobile)
- **Height**: 3000px (estimated)
- **Resolution**: 144 DPI (for print quality)
- **Color Mode**: RGB
- **Background**: White (#FFFFFF)

### Export Specifications

#### High-Resolution Files
- **PNG**: 750x3000px, 144 DPI, Transparent background
- **JPG**: 750x3000px, 144 DPI, 85% quality, White background

#### Web-Optimized Files
- **PNG**: 375x1500px, 72 DPI, Transparent background
- **JPG**: 375x1500px, 72 DPI, 75% quality, White background

## Design Annotations

### 1. Header Section (0-64px)
```
Position: Top 0-64px
Background: #FFFFFF
Border: Bottom 1px solid #E5E7EB
Padding: 16px horizontal, 16px vertical

Components:
- Logo: 24px circle (#0F62FE) + text (16px, #222222)
- Menu: 24px hamburger icon (#222222)
- Spacing: 20px margins
```

### 2. Hero Section (64-384px)
```
Position: 64-384px
Background: Linear gradient #4C9AFF to #0F62FE (135°)
Padding: 48px vertical, 20px horizontal
Text Color: White

Components:
- Title: 28px, 700 weight, center aligned
- Subtitle: 18px, 400 weight, 90% opacity
- CTA Button: White background, 12px radius, 44px height
- Decorative: Subtle grain texture overlay
```

### 3. Profile Section (424-564px)
```
Position: 424-564px
Card: White background, 12px radius, 1px border (#E5E7EB)
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Padding: 24px

Components:
- Profile Image: 64px circle, #F8FAFC background
- Name: 18px, 600 weight, #222222
- Title: 14px, 400 weight, #555555
- Tags: 13px, 500 weight, #F8FAFC background
```

### 4. Reviews Section (584-1040px)
```
Position: 584-1040px
Section Title: 22px, 600 weight, #222222
Underline: 2px solid #0F62FE, 40px width

Review Cards (3 cards):
- Background: White, 12px radius
- Border: 1px solid #E5E7EB
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Padding: 20px

Components per card:
- Stars: 5x 16px yellow stars (#FCD34D)
- Date: 13px, #888888
- Review Text: 16px, #222222
- Highlighted Text: 16px, 600 weight, #0F62FE
- Tag: 12px, #4C9AFF background, white text
```

### 5. Q&A Section 1 (1080-1640px)
```
Position: 1080-1640px
Section Title: 22px, 600 weight, #222222
Underline: 2px solid #0F62FE, 40px width

Q&A Card:
- Background: White, 12px radius
- Border: 1px solid #E5E7EB
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Padding: 20px

Question:
- Q Icon: 24px circle (#0F62FE), white "Q"
- Text: 18px, 600 weight, #0F62FE

Answer:
- Text: 16px, 400 weight, #222222

Quote Block:
- Background: #F8FAFC
- Left Border: 4px solid #0F62FE
- Quote Mark: 48px serif, #0F62FE, 30% opacity
- Text: 18px, 500 weight, #222222
- Highlighted: 18px, 600 weight, #0F62FE

Image Section:
- Container: #F3F4F6 background, 12px radius
- Shadow: 0 4px 6px rgba(0,0,0,0.1)
- Caption: 14px, #555555, centered
```

### 6. Q&A Section 2 (1740-2260px)
```
Position: 1740-2260px
[Similar structure to Q&A Section 1]
```

### 7. Summary Section (2360-2520px)
```
Position: 2360-2520px
Section Title: 22px, 600 weight, #222222
Underline: 2px solid #0F62FE, 40px width

Summary Card:
- Background: #F8FAFC
- Border: 1px solid #E5E7EB
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Padding: 24px
- Text: 16px, 400 weight, #222222
```

### 8. Footer Section (2560-2640px)
```
Position: 2560-2640px
Background: #F8FAFC
Border: Top 1px solid #E5E7EB
Padding: 32px vertical
Text: 14px, #555555, centered
```

## Color Specifications

### Primary Colors
- **Primary Blue**: #0F62FE (RGB: 15, 98, 254)
- **Primary Light**: #4C9AFF (RGB: 76, 154, 255)
- **Primary Dark**: #0043CE (RGB: 0, 67, 206)

### Text Colors
- **Primary Text**: #222222 (RGB: 34, 34, 34)
- **Secondary Text**: #555555 (RGB: 85, 85, 85)
- **Tertiary Text**: #888888 (RGB: 136, 136, 136)

### Background Colors
- **White**: #FFFFFF (RGB: 255, 255, 255)
- **Light Gray**: #F8FAFC (RGB: 248, 250, 252)
- **Border Gray**: #E5E7EB (RGB: 229, 231, 235)

### Accent Colors
- **Star Rating**: #FCD34D (RGB: 252, 211, 77)
- **Success**: #10B981 (RGB: 16, 185, 129)
- **Warning**: #F59E0B (RGB: 245, 158, 11)

## Typography Specifications

### Font Family
- **Primary**: Noto Sans JP
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Serif**: serif (for quote marks)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semi-Bold**: 600
- **Bold**: 700

### Font Sizes (@2x)
- **H1 (Hero Title)**: 56px (28px base)
- **H2 (Section Title)**: 44px (22px base)
- **H3 (Subsection)**: 36px (18px base)
- **Body Large**: 36px (18px base)
- **Body**: 32px (16px base)
- **Body Small**: 28px (14px base)
- **Meta**: 26px (13px base)

### Line Heights
- **Headings**: 1.4
- **Subheadings**: 1.5
- **Body Text**: 1.6
- **Small Text**: 1.5

## Spacing System (4pt Grid @2x)

### Base Unit: 8px (4px * 2)
- **Micro**: 8px
- **Small**: 16px
- **Medium-Small**: 24px
- **Medium**: 32px
- **Medium-Large**: 40px
- **Large**: 48px
- **Extra Large**: 64px
- **Section**: 80px
- **Major Section**: 96px

### Component Spacing
- **Card Padding**: 40px (20px * 2)
- **Section Margins**: 96px (48px * 2)
- **Element Spacing**: 32px (16px * 2)
- **Text Spacing**: 24px (12px * 2)

## Border Radius (@2x)
- **Small**: 16px (8px * 2)
- **Medium**: 24px (12px * 2)
- **Large**: 32px (16px * 2)

## Shadows (@2x)
- **Light**: 0 2px 6px rgba(0, 0, 0, 0.1)
- **Medium**: 0 8px 12px rgba(0, 0, 0, 0.1)

## Accessibility Specifications

### Color Contrast
- **Normal Text**: 4.5:1 minimum (WCAG AA)
- **Large Text**: 3:1 minimum (WCAG AA)
- **Interactive Elements**: 4.5:1 minimum

### Touch Targets
- **Minimum Size**: 88px (44px * 2)
- **Spacing**: 16px minimum between targets

### Focus States
- **Outline**: 4px solid #0F62FE
- **Offset**: 4px from element

## Implementation Notes

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
  
  --space-4: 8px;
  --space-8: 16px;
  --space-12: 24px;
  --space-16: 32px;
  --space-20: 40px;
  --space-24: 48px;
  --space-32: 64px;
  --space-40: 80px;
  --space-48: 96px;
  
  --radius-8: 16px;
  --radius-12: 24px;
  --radius-16: 32px;
  
  --shadow-1: 0 2px 6px rgba(0, 0, 0, 0.1);
  --shadow-2: 0 8px 12px rgba(0, 0, 0, 0.1);
}
```

### Responsive Breakpoints
- **Mobile**: 360px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Browser Support
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 10+

## File Naming Convention

### Source Files
- `interview_smp_v1.ai` - Adobe Illustrator source
- `interview_smp_v1.psd` - Photoshop source
- `interview_smp_v1.svg` - Vector source

### Export Files
- `interview_smp_v1.png` - High-resolution PNG
- `interview_smp_v1.jpg` - High-resolution JPG
- `interview_smp_v1_web.png` - Web-optimized PNG
- `interview_smp_v1_web.jpg` - Web-optimized JPG

### Documentation
- `interview_smp_v1_specs.pdf` - Design specifications
- `interview_smp_v1_annotations.pdf` - Design annotations
- `interview_smp_v1_styleguide.pdf` - Style guide