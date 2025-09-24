# Interview Page Design Deliverables

## Project Overview
**Project**: ファミリー工房 インタビューページ デザインリニューアル  
**Target**: Mobile-first responsive design (750px @2x)  
**Content**: Interview page about Family Kobo renovation company  
**Goal**: Improve visibility, readability, and brand versatility while maintaining existing content

## Design Specifications

### File Naming Convention
- `interview_smp_v1.ai` - Adobe Illustrator source file
- `interview_smp_v1.psd` - Photoshop source file  
- `interview_smp_v1.png` - High-resolution PNG export
- `interview_smp_v1.jpg` - Web-optimized JPG export

### Export Specifications
- **Resolution**: 750px width (@2x for mobile)
- **Format**: JPG (70-85% quality), PNG (transparent background)
- **Color Space**: sRGB
- **DPI**: 72 DPI for web

### Layer Organization
```
01_Header
├── Logo
├── Navigation
└── Background

02_Hero
├── Background Gradient
├── Title Text
├── Subtitle Text
├── CTA Button
└── Decorative Elements

03_Profile
├── Profile Card
├── Avatar
├── Name/Title
└── Tags

04_Reviews
├── Review Card 1
├── Review Card 2
├── Review Card 3
└── Star Ratings

05_QA_Section1
├── Section Title
├── Q&A Card
├── Quote Block
└── Image

06_QA_Section2
├── Section Title
├── Q&A Card
├── Quote Block
└── Image

07_Summary
├── Section Title
└── Summary Card

08_Footer
├── Footer Content
└── Background
```

## Color Specifications

### Primary Palette
- **Primary Blue**: #0F62FE (RGB: 15, 98, 254)
- **Primary Light**: #4C9AFF (RGB: 76, 154, 255)
- **Primary Dark**: #0043CE (RGB: 0, 67, 206)

### Neutral Palette
- **Text Primary**: #222222 (RGB: 34, 34, 34)
- **Text Secondary**: #555555 (RGB: 85, 85, 85)
- **Text Tertiary**: #888888 (RGB: 136, 136, 136)
- **Background**: #FFFFFF (RGB: 255, 255, 255)
- **Background Light**: #F8FAFC (RGB: 248, 250, 252)
- **Border**: #E5E7EB (RGB: 229, 231, 235)

## Typography Specifications

### Font Stack
- **Primary**: Noto Sans JP
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Type Scale
- **H1**: 28px / 700 weight / 1.4 line-height
- **H2**: 22px / 600 weight / 1.5 line-height
- **H3**: 18px / 600 weight / 1.5 line-height
- **Body**: 16px / 400 weight / 1.6 line-height
- **Small**: 14px / 400 weight / 1.5 line-height
- **Meta**: 13px / 400 weight / 1.4 line-height

## Component Specifications

### Cards
- **Border Radius**: 12px
- **Padding**: 20px
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Border**: 1px solid #E5E7EB

### Buttons
- **Height**: 44px minimum
- **Border Radius**: 12px
- **Padding**: 12px 20px
- **Font Weight**: 600

### Profile Images
- **Size**: 64px diameter
- **Border Radius**: 50%
- **Border**: 2px solid #E5E7EB

### Quote Blocks
- **Left Border**: 4px solid #0F62FE
- **Background**: #F8FAFC
- **Padding**: 16px 20px
- **Border Radius**: 8px

## Spacing System (4pt Grid)

### Spacing Values
- **4px**: Micro spacing
- **8px**: Small spacing
- **12px**: Medium-small spacing
- **16px**: Medium spacing
- **20px**: Medium-large spacing
- **24px**: Large spacing
- **32px**: Extra large spacing
- **40px**: Section spacing
- **48px**: Major section spacing

### Layout Margins
- **Side Margins**: 16-20px
- **Section Spacing**: 40-48px
- **Component Spacing**: 16-24px

## Accessibility Requirements

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Clear focus states

### Touch Targets
- **Minimum Size**: 44px x 44px
- **Spacing**: 8px minimum between targets

### Typography
- **Minimum Size**: 16px for body text
- **Line Height**: 1.5-1.7 for readability

## Implementation Guidelines

### CSS Structure
```css
/* Base Styles */
body {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #222222;
}

/* Component Styles */
.card {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-primary {
  background: #0F62FE;
  color: white;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 600;
  min-height: 44px;
}
```

### HTML Structure
```html
<section class="hero">
  <div class="container">
    <h1 class="hero-title">Page Title</h1>
    <p class="hero-subtitle">Subtitle</p>
    <a href="#" class="cta-button">Call to Action</a>
  </div>
</section>

<section class="profile">
  <div class="profile-card">
    <div class="profile-header">
      <div class="profile-image"></div>
      <div class="profile-info">
        <h3>Name</h3>
        <p>Title</p>
      </div>
    </div>
  </div>
</section>
```

## Quality Assurance Checklist

### Design Review
- [ ] All text is readable and properly sized
- [ ] Color contrast meets WCAG AA standards
- [ ] Spacing follows 4pt grid system
- [ ] Components are consistent across sections
- [ ] Mobile-first responsive design
- [ ] Touch targets are 44px minimum

### Technical Review
- [ ] CSS is implementable and maintainable
- [ ] Images are optimized for web
- [ ] Fonts have proper fallbacks
- [ ] Layout works across different screen sizes
- [ ] Accessibility features are implemented

### Content Review
- [ ] All original content is preserved
- [ ] Text hierarchy is clear and logical
- [ ] Images have appropriate alt text
- [ ] Links and buttons are clearly identifiable

## Delivery Package

### Source Files
1. **Adobe Illustrator**: `interview_smp_v1.ai`
   - Vector graphics and text
   - Organized layers
   - Export settings configured

2. **Photoshop**: `interview_smp_v1.psd`
   - Raster images and effects
   - Layer styles
   - Smart objects

### Export Files
1. **High-resolution PNG**: `interview_smp_v1.png`
   - 750px width
   - Transparent background
   - Lossless compression

2. **Web-optimized JPG**: `interview_smp_v1.jpg`
   - 750px width
   - 70-85% quality
   - Optimized for web

### Documentation
1. **Style Guide**: `style_guide.md`
2. **Design System**: `design_system.md`
3. **Implementation Guide**: `implementation.md`

## Browser Support
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 10+