# Kadence Theme & Blocks - Complete Setup Guide for Vet3 Equine Care

This comprehensive guide will walk you through setting up the Vet3 Equine Care website in WordPress using Kadence Theme and Kadence Blocks with exact design specifications.

---

## Table of Contents

1. [Initial WordPress Setup](#1-initial-wordpress-setup)
2. [Installing Kadence Theme & Blocks](#2-installing-kadence-theme--blocks)
3. [Theme Customizer Settings](#3-theme-customizer-settings)
4. [Global Color Palette Configuration](#4-global-color-palette-configuration)
5. [Typography Configuration](#5-typography-configuration)
6. [Header Configuration](#6-header-configuration)
7. [Footer Configuration](#7-footer-configuration)
8. [Page Templates Setup](#8-page-templates-setup)
9. [Building Individual Pages](#9-building-individual-pages)
10. [Custom CSS & JavaScript](#10-custom-css--javascript)
11. [Final Testing & Optimization](#11-final-testing--optimization)

---

## 1. Initial WordPress Setup

### Prerequisites
- WordPress 6.0+ installed
- Admin access to WordPress dashboard
- Basic familiarity with WordPress block editor

### Recommended Plugins
```
✓ Kadence Theme (Free or Pro)
✓ Kadence Blocks (Free or Pro)
✓ Kadence Starter Templates (optional, for inspiration)
✓ Contact Form 7 or WPForms (for forms)
✓ Smash Balloon Social Photo Feed (for Instagram)
```

---

## 2. Installing Kadence Theme & Blocks

### Step 1: Install Kadence Theme
1. Go to **Appearance → Themes**
2. Click **Add New**
3. Search for "Kadence"
4. Click **Install** then **Activate**

### Step 2: Install Kadence Blocks
1. Go to **Plugins → Add New**
2. Search for "Kadence Blocks"
3. Click **Install Now** then **Activate**

### Step 3: Initial Kadence Setup Wizard
1. Navigate to **Appearance → Kadence**
2. Complete the setup wizard:
   - Select "Full Site Editing" or "Classic" (recommend Classic for easier management)
   - Skip starter templates (we're building from scratch)
   - Install recommended plugins if needed

---

## 3. Theme Customizer Settings

Access: **Appearance → Customize**

### General Settings

**Site Identity**
```
Site Title: Vet3 Equine Care
Tagline: Fully Mobile Independent Equine Vets
Upload Logo: Use the logo.png from export/assets/
Logo Height: 56px
```

**Layout**
```
Content Width: 1280px
Sidebar Default: No Sidebar
Page Layout: Fullwidth
```

**Performance**
```
✓ Enable Lazy Load for Images
✓ Optimize Google Fonts Loading
✓ Load Google Fonts Locally (if available)
```

---

## 4. Global Color Palette Configuration

Access: **Appearance → Customize → General → Colors**

### Configure Global Palette (EXACT COLORS FROM DESIGN SYSTEM)

Kadence allows you to set up a global color palette. Configure exactly these colors:

#### Palette Slot 1 - Primary
```
Name: Primary
Hex: #090B21
HSL: hsl(235, 95%, 13%)
Usage: Main brand color, navigation, primary buttons, dark sections
```

#### Palette Slot 2 - Accent
```
Name: Accent
Hex: #54BFED
HSL: hsl(200, 85%, 65%)
Usage: Links, icons, highlights, secondary buttons, call-to-action elements
```

#### Palette Slot 3 - Foreground
```
Name: Foreground
Hex: #131626
HSL: hsl(235, 50%, 15%)
Usage: Body text, headings, primary content text
```

#### Palette Slot 4 - Background
```
Name: Background
Hex: #FFFFFF
HSL: hsl(0, 0%, 100%)
Usage: Page backgrounds, card backgrounds, clean white surfaces
```

#### Palette Slot 5 - Secondary
```
Name: Secondary
Hex: #F0F4F6
HSL: hsl(200, 20%, 95%)
Usage: Section backgrounds, hover states, subtle backgrounds
```

#### Palette Slot 6 - Muted
```
Name: Muted
Hex: #F4F7F8
HSL: hsl(200, 15%, 96%)
Usage: Subtle backgrounds, disabled states, light sections
```

#### Palette Slot 7 - Muted Foreground
```
Name: Muted Text
Hex: #667080
HSL: hsl(235, 20%, 50%)
Usage: Secondary text, descriptions, labels
```

#### Palette Slot 8 - Border
```
Name: Border
Hex: #D9E3E8
HSL: hsl(200, 20%, 90%)
Usage: Card borders, dividers, input borders, separators
```

### Additional Color Settings

**Link Colors**
```
Link Color: Palette - Accent (#54BFED)
Link Hover Color: Darken Accent by 10%
```

**Button Default Colors** (we'll configure specific button styles later)
```
Background: Palette - Primary (#090B21)
Text: #FFFFFF
Hover Background: Darken Primary by 10%
Border Radius: 6px
```

---

## 5. Typography Configuration

Access: **Appearance → Customize → General → Typography**

### Base Typography

**Body Font**
```
Font Family: System Stack
  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
Font Size: 16px (1rem)
Line Height: 1.5
Font Weight: 400 (Regular)
Color: Palette - Foreground (#131626)
```

### Heading Fonts

**All Headings (H1-H6) Base Settings**
```
Font Family: System Stack (same as body)
Font Weight: 700 (Bold)
Color: Palette - Foreground (#131626)
```

**H1 Settings**
```
Font Size Desktop: 60px (3.75rem)
Font Size Tablet: 48px (3rem)
Font Size Mobile: 36px (2.25rem)
Line Height: 1.2
Letter Spacing: -0.02em
```

**H2 Settings**
```
Font Size Desktop: 48px (3rem)
Font Size Tablet: 40px (2.5rem)
Font Size Mobile: 30px (1.875rem)
Line Height: 1.3
Letter Spacing: -0.01em
```

**H3 Settings**
```
Font Size Desktop: 30px (1.875rem)
Font Size Tablet: 26px (1.625rem)
Font Size Mobile: 24px (1.5rem)
Line Height: 1.4
```

**H4 Settings**
```
Font Size Desktop: 24px (1.5rem)
Font Size Tablet: 22px (1.375rem)
Font Size Mobile: 20px (1.25rem)
Line Height: 1.4
Font Weight: 600 (Semibold)
```

**Paragraph Settings**
```
Font Size: 16px (1rem)
Line Height: 1.75
Margin Bottom: 16px
Color: Palette - Foreground
```

---

## 6. Header Configuration

Access: **Appearance → Customize → Header**

### Header Layout

**Header Style**
```
Layout: Standard
Container: Contained (1280px)
Height Desktop: 80px
Height Mobile: 64px
Sticky: Yes
Background: Palette - Background (#FFFFFF)
Border Bottom: 1px solid Palette - Border (#D9E3E8)
Z-Index: 50
```

### Header Elements

**Logo Settings**
```
Position: Left
Logo Image: Upload logo.png
Logo Height Desktop: 56px
Logo Height Mobile: 40px
Logo Link: Home page
Padding: 12px 0
```

**Navigation Menu**
```
Position: Center/Right
Menu: Create "Primary Menu" with:
  - Home
  - About
  - Services
  - Zone Visit
  - Contact

Menu Item Styling:
  Font Size: 14px
  Font Weight: 500
  Padding: 8px 16px
  Border Radius: 8px (0.5rem)
  Gap Between Items: 8px
  
  Default State:
    Color: Palette - Muted Text (#667080)
    Background: Transparent
    Transition: all 0.2s ease
  
  Hover State:
    Color: Palette - Foreground (#131626)
    Background: Palette - Secondary (#F0F4F6)
  
  Active State:
    Color: Palette - Foreground (#131626)
    Background: Palette - Secondary (#F0F4F6)
    Font Weight: 600
```

**Header Buttons - STEP BY STEP GUIDE**

Kadence allows you to add custom content and buttons to the header using the Header Builder.

### STEP 1: Access Header Builder
```
Navigate: Appearance → Customize → Header Builder
```

### STEP 2: Add Button Elements to Header

In the Header Builder, you'll see a visual layout of your header. You need to add TWO button elements.

**For Desktop Header:**
1. Click on the header row where you want buttons (typically "Right" section)
2. Click the "+" icon to add elements
3. Add "Button" element twice (for Register and Phone buttons)
4. Drag them to position next to each other on the right side

**Button Placement:**
```
Left: Logo
Center: Navigation Menu
Right: Button 1 (Register) + Button 2 (Phone)
```

### STEP 3: Configure Register Button (Button 1)

Click on the first button element to open its settings:

```
Label: "Register"
Link: /register (or full URL: https://yourdomain.com/register)
Link Target: Same window

STYLE SETTINGS:
Size: Small
Background Color: Palette - Primary (#090B21)
Text Color: White (#FFFFFF)
Border: None
Border Radius: 6px
Font Size: 14px
Font Weight: 500
Padding: 8px 16px (Top/Bottom: 8px, Left/Right: 16px)

HOVER STATE:
Background Color: Darken Primary by 10% (or use #070916)
Text Color: White (#FFFFFF)
Transition: 0.2s ease

SPACING:
Margin Right: 8px (to add gap between buttons)
```

### STEP 4: Configure Phone Button (Button 2)

Click on the second button element to open its settings:

```
Label: "📞 24/7 On-Call" (use emoji or add icon if Kadence supports)
Link: tel:01603123456
Link Target: Same window

STYLE SETTINGS:
Size: Small
Background Color: Transparent or Palette - Background (#FFFFFF)
Text Color: Palette - Foreground (#131626)
Border: 1px solid Palette - Border (#D9E3E8)
Border Radius: 6px
Font Size: 14px
Font Weight: 500
Padding: 8px 16px

HOVER STATE:
Background Color: Palette - Secondary (#F0F4F6)
Text Color: Palette - Foreground (#131626)
Border Color: Palette - Border (#D9E3E8)
Transition: 0.2s ease
```

**Alternative: Use HTML in Button Label**
If Kadence allows HTML in button labels, use this for the phone icon:
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg> 24/7 On-Call
```

### STEP 5: Mobile Header Buttons

**For Mobile Header:**
1. In Header Builder, switch to "Mobile" view (toggle at top)
2. Add the same two buttons to the mobile header or mobile drawer
3. For mobile drawer menu, buttons should appear AFTER menu items

```
Mobile Button Settings (both buttons):
Width: Full width (100%)
Margin: 16px (all sides) for first button
Margin: 0 16px 16px 16px for second button
Display: Stack vertically
Font Size: 16px
Padding: 12px 16px
```

### Mobile Header Configuration

**Mobile Menu Setup**
```
Access: Header Builder → Mobile View (toggle at top)

Breakpoint: 768px and below
Toggle Icon: Hamburger (☰ three horizontal lines)
Toggle Position: Right side of header
Toggle Color: Palette - Foreground (#131626)

Mobile Drawer Settings:
  Slide Direction: From right
  Background: Palette - Background (#FFFFFF)
  Width: 300px (or 100% for full-screen)
  Overlay: Yes
  Overlay Opacity: 40%
  Close Icon: X (top right of drawer)
```

**Mobile Menu Structure**
```
Order in Mobile Drawer:
1. Navigation menu items (vertical stack)
2. Register Button
3. Phone Button

Menu Items Styling:
  Display: Vertical stack (one item per line)
  Width: 100%
  Padding: 12px 16px
  Border Bottom: 1px solid Palette - Border (#D9E3E8)
  Font Size: 16px
  Font Weight: 500
  Color: Palette - Muted Text (#667080)
  Active Color: Palette - Foreground (#131626)
  Active Background: Palette - Secondary (#F0F4F6)
```

**Mobile Button Styling:**

Register Button (Mobile):
```
Width: calc(100% - 32px)
Margin: 16px 16px 8px 16px
Padding: 12px 16px
Background: Palette - Primary (#090B21)
Text Color: White (#FFFFFF)
Border Radius: 6px
Font Size: 16px
Font Weight: 500
Text Align: Center
```

Phone Button (Mobile):
```
Width: calc(100% - 32px)
Margin: 0 16px 16px 16px
Padding: 12px 16px
Background: Transparent
Text Color: Palette - Foreground (#131626)
Border: 1px solid Palette - Border (#D9E3E8)
Border Radius: 6px
Font Size: 16px
Font Weight: 500
Text Align: Center
```

**Troubleshooting Mobile Buttons:**
- If buttons don't show: Check Header Builder → Mobile → Drawer Content → Add buttons manually
- If buttons overlap: Set explicit width and margins as shown above
- If drawer doesn't close: Enable "Close on link click" in mobile menu settings
```

### COMMON BUTTON ISSUES & SOLUTIONS

**Problem: Two buttons don't appear side by side on desktop**
```
Solution:
1. In Header Builder, ensure buttons are in the same "Row" element
2. Check that the header row has enough space (use 3-column layout: Logo | Menu | Buttons)
3. Set button container to "Horizontal" layout
4. Add margin-right: 8px to first button for spacing
5. If using custom HTML, wrap both buttons in a flex container:
   <div style="display: flex; gap: 8px;">
     [Button 1]
     [Button 2]
   </div>
```

**Problem: Phone link (tel:) doesn't work**
```
Solution:
1. Ensure link format is exactly: tel:01603123456 (no spaces)
2. Check button element accepts URL/link field (some elements only accept page links)
3. If using HTML button, use: <a href="tel:01603123456">Button Text</a>
4. Test on mobile device (tel: links don't work in desktop browsers)
```

**Problem: Buttons look different than expected**
```
Solution:
1. Clear browser cache and Kadence cache
2. Check Global Styles → Buttons for default button styling conflicts
3. Add !important to button styles if needed
4. Use Kadence's "Custom CSS" for button classes:
   
   .kadence-header-button.button-1 {
     background: #090B21 !important;
     color: #FFFFFF !important;
   }
   
   .kadence-header-button.button-2 {
     background: transparent !important;
     border: 1px solid #D9E3E8 !important;
   }
```

**Problem: Buttons not showing on mobile**
```
Solution:
1. Toggle to "Mobile View" in Header Builder
2. Check if buttons are added to Mobile Header OR Mobile Drawer
3. Mobile and Desktop headers are configured separately
4. For drawer menu: Add buttons in Drawer Content section
5. Enable "Show in mobile" for each button element
```

**Problem: Button spacing/alignment issues**
```
Solution:
1. Desktop: Set header row to use flexbox with justify-content: space-between
2. Buttons container: display: flex, align-items: center, gap: 8px
3. Mobile: Set buttons to width: 100%, with proper margins (16px)
4. Use Kadence's spacing controls (padding/margin) instead of custom CSS
```

**Problem: Icon not showing in phone button**
```
Solution:
1. If Kadence supports icon field: Select phone icon from icon library
2. If not: Use emoji 📞 in button text
3. Or use SVG code in HTML mode (if available)
4. Or use Font Awesome: <i class="fa fa-phone"></i> 24/7 On-Call
```

**ALTERNATIVE METHOD: Custom HTML Element**

If Kadence buttons aren't working correctly, use a custom HTML element instead:

```html
<!-- Add this as a Custom HTML element in Header Builder -->
<div class="header-buttons" style="display: flex; gap: 8px; align-items: center;">
  <a href="/register" class="btn-register" style="
    display: inline-flex;
    align-items: center;
    background: #090B21;
    color: #FFFFFF;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.2s;
  " onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
    Register
  </a>
  
  <a href="tel:01603123456" class="btn-phone" style="
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    color: #131626;
    padding: 8px 16px;
    border: 1px solid #D9E3E8;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
  " onmouseover="this.style.backgroundColor='#F0F4F6'" onmouseout="this.style.backgroundColor='transparent'">
    📞 <span class="desktop-only">24/7 On-Call</span>
  </a>
</div>

<style>
@media (max-width: 768px) {
  .header-buttons {
    flex-direction: column;
    width: 100%;
  }
  .header-buttons a {
    width: 100%;
    justify-content: center;
  }
  .desktop-only {
    display: inline;
  }
}
</style>
```

This custom HTML will work reliably across all themes and configurations.

---

## 7. Footer Configuration

Access: **Appearance → Customize → Footer**

### Footer Layout

**Footer Builder**
```
Enable Footer Builder: Yes
Number of Rows: 2
  - Row 1: Main footer content (3 columns)
  - Row 2: Bottom bar (disclaimer & copyright)
```

**Row 1 - Main Footer**
```
Background: Palette - Primary (#090B21)
Text Color: #FFFFFF
Padding: 48px top, 48px bottom
Padding Mobile: 32px top, 32px bottom
Container: Contained (1280px)

Columns: 3 columns (Desktop)
  Column 1 Width: 33.33%
  Column 2 Width: 33.33%
  Column 3 Width: 33.33%
  
Mobile: Stack to 1 column
Column Gap: 32px
Row Gap Mobile: 32px
```

### Footer Content

**Column 1 - About**
```
Widget: Text/HTML Widget

Content:
---
<h3>Vet3 Equine Care</h3>
<p>Independent equine care team operating across Norfolk & Suffolk, providing 24/7 on-call support for your horses.</p>
---

Styling:
  H3 Font Size: 18px
  H3 Font Weight: 600
  H3 Margin Bottom: 16px
  H3 Color: #FFFFFF
  
  P Font Size: 14px
  P Opacity: 0.9
  P Line Height: 1.75
  P Color: #FFFFFF
```

**Column 2 - Quick Links**
```
Widget: Navigation Menu Widget

Menu: Create "Footer Menu" with:
  - Home
  - About Us
  - Services
  - Zone Visit
  - Register
  - Contact
  - Terms & Conditions
  - Privacy Policy

Styling:
  H3: "Quick Links"
  H3 Font Size: 18px
  H3 Font Weight: 600
  H3 Margin Bottom: 16px
  H3 Color: #FFFFFF
  
  Links Font Size: 14px
  Links Line Height: 2
  Links Color: #FFFFFF
  Links Opacity: 0.9
  Links Hover Opacity: 1
  Links Hover: Underline
```

**Column 3 - Contact**
```
Widget: Text/HTML Widget

Content:
---
<h3>Contact Us</h3>
<div class="footer-contact">
  <strong>24/7 Emergency</strong>
  <a href="tel:01603123456">01603 123 456</a>
</div>
<div class="footer-contact">
  <strong>WhatsApp</strong>
  <a href="https://wa.me/441603123456">01603 123 456</a>
  <span class="text-xs">Only 8:30am - 5:30pm</span>
</div>
<div class="footer-contact">
  <strong>Email</strong>
  <a href="mailto:info@vet3equine.co.uk">info@vet3equine.co.uk</a>
</div>
<div class="footer-social">
  [Social Icons - Facebook, Instagram]
</div>
---

Styling:
  H3 Font Size: 18px
  H3 Font Weight: 600
  H3 Margin Bottom: 16px
  
  .footer-contact Display: Flex column
  .footer-contact Gap: 4px
  .footer-contact Margin Bottom: 16px
  
  Strong Font Weight: 600
  Strong Font Size: 14px
  Strong Opacity: 0.75
  
  Links Font Size: 16px
  Links Color: #FFFFFF
  Links Opacity: 0.9
  Links Hover Opacity: 1
  
  .text-xs Font Size: 12px
  .text-xs Opacity: 0.7
```

**Row 2 - Bottom Bar**
```
Background: Palette - Primary (#090B21)
Text Color: #FFFFFF
Opacity: 0.75
Padding: 32px top, 32px bottom
Padding Mobile: 24px top, 24px bottom
Border Top: 1px solid rgba(255,255,255,0.2)

Layout: 2 columns on Desktop, 1 column on Mobile
  Left: Disclaimer text
  Right: Copyright text (align right on desktop)

Font Size: 12px
Line Height: 1.5
Max Width: 1280px
Container: Centered
```

---

## 8. Page Templates Setup

### Create Blank Template

1. **Go to Appearance → Kadence → Page Templates**
2. **Create New Template**:
   ```
   Name: Fullwidth Blank
   Type: Page
   Layout: No Sidebar
   Header: Show
   Footer: Show
   Content Area: Full Width
   Remove Title: Yes
   Remove Container: Yes
   ```

This template will be used for all pages to give you complete control over the layout with Kadence Blocks.

---

## 9. Building Individual Pages

### Home Page

**Create New Page**
```
Title: Home
URL: / (set as homepage in Settings → Reading)
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

#### Section 1: Hero Section
```
Block: Kadence Row Layout
Columns: 1
Background: Image (upload hero-equine-photo.jpg)
Background Overlay: Palette - Primary (#090B21) at 40% opacity
Background Position: Center
Background Size: Cover
Min Height: 500px (mobile), 600px (desktop)
Vertical Align: Middle
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Advanced Heading (H1):
      Text: "Fully Mobile Independent Equine Vets"
      Color: #FFFFFF
      Font Size: 36px (mobile), 60px (desktop)
      Line Height: 1.2
      Margin Bottom: 16px
      Max Width: 768px
      Text Align: Left
  
  - Advanced Paragraph:
      Text: "Serving Norfolk & Suffolk with regular zone visits across the region. Expert, independent veterinary care for your horses, delivered directly to you."
      Color: #FFFFFF
      Opacity: 0.95
      Font Size: 16px (mobile), 20px (desktop)
      Line Height: 1.75
      Max Width: 672px
      Margin Bottom: 32px
  
  - Kadence Row Layout (for buttons):
      Columns: 2 (mobile: 1)
      Gap: 16px
      Max Width: fit-content
      
      Button 1:
        Text: "Register Your Horse"
        Link: /register
        Background: Palette - Accent (#54BFED)
        Color: Palette - Primary (#090B21)
        Padding: 12px 32px
        Border Radius: 6px
        Font Size: 16px
        Font Weight: 500
        Hover: Opacity 0.9
      
      Button 2:
        Text: "Call 24/7 Support"
        Icon: Phone (lucide-react)
        Link: tel:01603123456
        Style: Outline
        Border: 2px solid #FFFFFF
        Background: Transparent
        Text Color: #FFFFFF
        Padding: 12px 32px
        Border Radius: 6px
        Font Size: 16px
        Font Weight: 500
        Hover: Background rgba(255,255,255,0.1)
```

#### Section 2: About Preview
```
Block: Kadence Row Layout
Background: Palette - Background (#FFFFFF)
Padding: 64px top, 64px bottom (mobile: 48px)
Container: Contained (1280px)

Inner Content:
  - Advanced Heading (H2):
      Text: "Fully Mobile Independent Equine Vets"
      Align: Center
      Color: Palette - Foreground
      Max Width: 768px
      Margin: 0 auto 16px auto
      Font Size: 30px (mobile), 48px (desktop)
  
  - Advanced Paragraph:
      Text: "We are a fully mobile, independent equine-only practice operating across Norfolk and Suffolk. Our team of experienced veterinarians provides comprehensive care for your horses with regular zone visits throughout the region."
      Align: Center
      Color: Palette - Muted Text (#667080)
      Font Size: 16px (mobile), 18px (desktop)
      Line Height: 1.75
      Max Width: 768px
      Margin: 0 auto 48px auto
  
  - Emergency Contact Card:
      Block: Kadence Advanced Card
      Background: Palette - Secondary (#F0F4F6)
      Border: 1px solid Palette - Border
      Border Radius: 24px
      Padding: 24px (mobile: 20px)
      Max Width: 672px
      Margin: 0 auto
      Box Shadow: 0 1px 3px rgba(0,0,0,0.1)
      
      Content Layout (Flex row, center aligned):
        - Icon (Phone):
            Size: 24px
            Color: Palette - Accent
            Margin Right: 12px
        
        - Text Block:
            Display: Flex column
            
            Label:
              Text: "24/7 Emergency Line"
              Font Size: 14px
              Color: Palette - Muted Text
              Margin Bottom: 4px
            
            Phone Link:
              Text: "01603 123 456"
              Font Size: 20px (mobile: 18px)
              Font Weight: 700
              Color: Palette - Foreground
              Link: tel:01603123456
```

#### Section 3: Team Preview
```
Block: Kadence Row Layout
Background: Palette - Muted (#F4F7F8)
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Advanced Heading (H2):
      Text: "Meet Our Expert Team"
      Align: Center
      Margin Bottom: 16px
      Font Size: 30px (mobile), 48px (desktop)
  
  - Advanced Paragraph:
      Text: "Experienced, independent veterinarians dedicated to your horse's health"
      Align: Center
      Color: Palette - Muted Text
      Margin: 0 auto 48px auto
      Max Width: 672px
  
  - Kadence Row Layout (Staff Grid):
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1152px
      Margin: 0 auto
      
      Staff Cards (repeat 3 times for preview):
        Block: Kadence Advanced Card
        
        Card Structure:
          Background: #FFFFFF
          Border: 1px solid Palette - Border (#D9E3E8)
          Border Radius: 16px
          Padding: 0
          Overflow: Hidden
          Transition: all 0.3s ease
          Hover: Box Shadow (0 10px 30px rgba(0,0,0,0.1))
          Hover: Transform translateY(-4px)
        
        Inner Blocks:
          - Image Block:
              Aspect Ratio: 1:1 (square)
              Object Fit: Cover
              Border Radius: 16px 16px 0 0
          
          - Content Wrapper (padding: 24px):
              
              - Advanced Heading (H3):
                  Text: [Staff Name]
                  Font Size: 20px
                  Font Weight: 600
                  Margin Bottom: 8px
                  Color: Palette - Foreground
              
              - Advanced Paragraph (Role):
                  Text: [Role]
                  Font Size: 14px
                  Font Weight: 500
                  Color: Palette - Accent (#54BFED)
                  Margin Bottom: 12px
              
              - Advanced Paragraph (Bio):
                  Text: [Short bio]
                  Font Size: 14px
                  Line Height: 1.75
                  Color: Palette - Muted Text
  
  - Advanced Button:
      Text: "Meet the Full Team"
      Link: /about
      Style: Outline
      Border: 1px solid Palette - Border
      Background: Transparent
      Color: Palette - Foreground
      Padding: 10px 24px
      Border Radius: 6px
      Align: Center
      Margin Top: 32px
      Hover: Background Palette - Secondary
```

#### Section 4: Services Preview
```
Block: Kadence Row Layout
Background: Palette - Background (#FFFFFF)
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Advanced Heading (H2):
      Text: "Our Equine Services"
      Align: Center
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Text: "Comprehensive veterinary care for your horses"
      Align: Center
      Color: Palette - Muted Text
      Margin: 0 auto 48px auto
  
  - Kadence Row Layout (Services Grid):
      Columns: 3 (tablet: 2, mobile: 1)
      Row Gap: 24px
      Column Gap: 24px
      Max Width: 1280px
      Margin: 0 auto
      
      Service Cards (6 total in preview, 2 rows):
        Block: Kadence Advanced Card
        
        Card Structure:
          Background: #FFFFFF
          Border: 1px solid Palette - Border (#D9E3E8)
          Border Radius: 16px
          Padding: 24px
          Transition: all 0.3s ease
          Hover: Box Shadow (0 8px 24px rgba(0,0,0,0.08))
        
        Inner Elements:
          - Kadence Icon Block (Icon Wrapper):
              Background: rgba(84, 191, 237, 0.1)
              Size: 48px
              Border Radius: 12px
              Padding: 12px
              Icon Color: Palette - Accent (#54BFED)
              Icon Size: 24px
              Margin Bottom: 16px
              Transition: transform 0.2s ease
              Hover: Scale 1.1
          
          - Advanced Heading (H3):
              Text: [Service Name]
              Font Size: 18px
              Font Weight: 600
              Margin Bottom: 12px
              Color: Palette - Foreground
          
          - Advanced Paragraph:
              Text: [Service Description]
              Font Size: 14px
              Line Height: 1.75
              Color: Palette - Muted Text (#667080)
  
  - Advanced Button:
      Text: "View All Services"
      Link: /services
      Background: Palette - Primary
      Color: #FFFFFF
      Padding: 12px 32px
      Border Radius: 6px
      Align: Center
      Margin Top: 32px
```

#### Section 5: Testimonials
```
Block: Kadence Row Layout
Background: Palette - Muted (#F4F7F8)
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Advanced Heading (H2):
      Text: "What Our Clients Say"
      Align: Center
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Text: "Trusted by horse owners across Norfolk & Suffolk"
      Align: Center
      Color: Palette - Muted Text
      Margin: 0 auto 48px auto
  
  - Kadence Row Layout (Testimonial Grid):
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1152px
      Margin: 0 auto
      
      Testimonial Cards (3 total):
        Block: Kadence Advanced Card
        
        Card Structure:
          Background: #FFFFFF
          Border: 1px solid Palette - Border
          Border Radius: 16px
          Padding: 32px (mobile: 24px)
          Transition: box-shadow 0.3s ease
          Hover: Box Shadow (0 10px 30px rgba(0,0,0,0.1))
        
        Inner Elements:
          - Icon Block (Quote Icon):
              Icon: Quote (lucide-react)
              Size: 40px
              Color: Palette - Accent
              Opacity: 0.3
              Margin Bottom: 16px
          
          - Advanced Paragraph (Quote):
              Text: [Testimonial Quote]
              Font Style: Italic
              Font Size: 14px
              Line Height: 1.75
              Color: Palette - Muted Text
              Margin Bottom: 24px
          
          - Kadence Divider:
              Height: 1px
              Color: Palette - Border
              Margin Bottom: 16px
          
          - Advanced Paragraph (Name):
              Text: [Client Name]
              Font Size: 14px
              Font Weight: 600
              Color: Palette - Foreground
              Margin Bottom: 4px
          
          - Advanced Paragraph (Location):
              Text: [Location]
              Font Size: 14px
              Color: Palette - Muted Text
```

#### Section 6: Zone Visit CTA
```
Block: Kadence Row Layout
Background: Palette - Muted (#F4F7F8)
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Kadence Advanced Card (Main CTA Card):
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 24px
      Padding: 48px (mobile: 32px)
      Max Width: 896px
      Margin: 0 auto
      Box Shadow: 0 10px 40px rgba(0,0,0,0.08)
      
      Content (Centered):
        - Icon Wrapper:
            Background: rgba(84, 191, 237, 0.1)
            Size: 64px
            Border Radius: 50%
            Padding: 16px
            Margin: 0 auto 16px auto
            
            Icon (Map Pin):
              Size: 32px
              Color: Palette - Accent
        
        - Advanced Heading (H2):
            Text: "Are We In Your Area?"
            Align: Center
            Font Size: 30px (mobile: 24px)
            Margin Bottom: 16px
        
        - Advanced Paragraph:
            Text: "We operate zone visits across Norfolk & Suffolk. Check our schedule to see when we'll be in your area for routine appointments."
            Align: Center
            Font Size: 16px
            Line Height: 1.75
            Color: Palette - Muted Text
            Max Width: 600px
            Margin: 0 auto 32px auto
        
        - Advanced Button:
            Text: "View Zone Map & Schedule"
            Icon: Map Pin
            Icon Position: Left
            Link: /zone-visit
            Background: Palette - Primary (#090B21)
            Color: #FFFFFF
            Padding: 12px 32px
            Border Radius: 6px
            Font Size: 16px
            Font Weight: 500
            Align: Center
            Margin Bottom: 16px
        
        - Advanced Paragraph (Contact Info):
            Align: Center
            
            Text/Link:
              Text: "Call us: "
              Link Text: "01603 123 456"
              Link: tel:01603123456
              Color: Palette - Accent
              Font Weight: 600
              Font Size: 14px
```

#### Section 7: Final CTA
```
Block: Kadence Row Layout
Background: Palette - Primary (#090B21)
Padding: 64px top, 64px bottom (mobile: 48px)
Text Align: Center

Inner Blocks:
  - Advanced Heading (H2):
      Text: "Join Our Independent Equine Practice"
      Color: #FFFFFF
      Font Size: 30px (mobile), 48px (desktop)
      Margin Bottom: 16px
      Max Width: 768px
      Margin: 0 auto 16px auto
  
  - Advanced Paragraph:
      Text: "Register your horse with Vet3 Equine Care today for expert, independent veterinary services delivered directly to you."
      Color: #FFFFFF
      Opacity: 0.95
      Font Size: 16px (mobile), 18px (desktop)
      Line Height: 1.75
      Max Width: 672px
      Margin: 0 auto 32px auto
  
  - Advanced Button:
      Text: "Register Now"
      Link: /register
      Background: Palette - Accent (#54BFED)
      Color: Palette - Primary (#090B21)
      Padding: 12px 32px
      Border Radius: 6px
      Font Size: 16px
      Font Weight: 500
      Hover: Opacity 0.9
```

---

### About Page

**Create New Page**
```
Title: About Us
URL: /about
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

#### Section 1: Hero (Text Only)
```
Block: Kadence Row Layout
Background: Palette - Muted (#F4F7F8)
Padding: 64px top, 64px bottom (mobile: 48px)
Container: Contained (1280px)

Inner Blocks:
  - Advanced Heading (H1):
      Text: "Meet Our Fully Mobile Independent Equine Veterinary Team"
      Align: Center
      Color: Palette - Foreground
      Max Width: 768px
      Margin: 0 auto 24px auto
      Font Size: 36px (mobile), 60px (desktop)
  
  - Advanced Paragraph:
      Text: "A dedicated team of experienced equine veterinarians providing comprehensive care across Norfolk & Suffolk"
      Align: Center
      Font Size: 18px (mobile: 16px)
      Line Height: 1.75
      Color: Palette - Muted Text
      Max Width: 768px
      Margin: 0 auto
```

#### Section 2: All Staff Grid
```
Block: Kadence Row Layout
Background: Palette - Background (#FFFFFF)
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Kadence Row Layout:
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1152px
      Margin: 0 auto
      
      Staff Cards (7 total):
        Same structure as Home page staff cards
        All team members displayed
```

#### Section 3: Instagram Feed
```
Block: Kadence Row Layout
Background: Palette - Muted (#F4F7F8)
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Advanced Heading (H2):
      Text: "Follow Us On Instagram"
      Align: Center
      Margin Bottom: 16px
      
      Icon (Instagram):
        Display: Inline
        Size: 32px
        Color: Palette - Accent
        Vertical Align: Middle
  
  - Advanced Paragraph:
      Text: "@vet3equine"
      Align: Center
      Font Size: 18px
      Color: Palette - Accent
      Font Weight: 500
      Margin Bottom: 48px
  
  - Kadence Row Layout (Instagram Grid):
      Columns: 4 (tablet: 2, mobile: 2)
      Column Gap: 16px
      Row Gap: 16px
      Max Width: 1152px
      Margin: 0 auto
      
      Instagram Post Placeholders (8 total):
        Block: Kadence Advanced Card or Image Block
        Aspect Ratio: 1:1 (square)
        Border Radius: 12px
        Background: Linear Gradient (Palette - Primary to Palette - Accent)
        Overlay: Instagram icon centered
        Link: https://instagram.com/vet3equine
        Target: _blank
        Transition: opacity 0.3s ease
        Hover: Opacity 0.9
        
        Inner Content:
          - Icon (Instagram):
              Size: 48px
              Color: rgba(255,255,255,0.8)
              Position: Absolute center
```

#### Section 4: CTA
```
Same as Home page final CTA section
```

---

### Services Page

**Create New Page**
```
Title: Services
URL: /services
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

#### Section 1: Hero
```
Block: Kadence Row Layout
Background: Palette - Muted
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Advanced Heading (H1):
      Text: "Fully Mobile Independent Equine Vets - Norfolk & Suffolk"
      Align: Center
      Max Width: 768px
      Margin: 0 auto 24px auto
  
  - Advanced Paragraph:
      Text: "Comprehensive equine veterinary services delivered directly to you through our regular zone visits"
      Align: Center
      Font Size: 18px (mobile: 16px)
      Color: Palette - Muted Text
      Max Width: 672px
      Margin: 0 auto
```

#### Section 2: Services (Mobile - Accordion)
```
Block: Kadence Accordion Block
Visibility: Mobile and Tablet only (< 1024px)
Background: Palette - Background
Padding: 48px 16px
Max Width: 896px
Margin: 0 auto

Accordion Items (16 services):
  Each Item Structure:
    Background: #FFFFFF
    Border: 1px solid Palette - Border
    Border Radius: 16px
    Margin Bottom: 16px
    Padding: 0
    Overflow: Hidden
    
    Title Panel:
      Padding: 24px
      Display: Flex
      Align Items: Center
      Gap: 16px
      Font Size: 16px
      Font Weight: 600
      Color: Palette - Foreground
      Cursor: Pointer
      Transition: background 0.2s ease
      
      Icon:
        Size: 24px
        Color: Palette - Accent
        Flex Shrink: 0
      
      Hover State:
        Background: rgba(244, 247, 248, 0.5)
    
    Content Panel:
      Padding: 0 24px 24px 64px (to align with icon)
      Font Size: 14px
      Line Height: 1.75
      Color: Palette - Muted Text
      
    Open State:
      Title Background: Palette - Secondary
```

#### Section 3: Services (Desktop - Grid)
```
Block: Kadence Row Layout
Visibility: Desktop only (>= 1024px)
Background: Palette - Background
Padding: 64px top, 64px bottom

Inner Blocks:
  - Kadence Row Layout:
      Columns: 3 (large: 3, medium: 2)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1280px
      Margin: 0 auto
      
      Service Cards (16 total):
        Same structure as Home page service cards
        
        Services List:
        1. Routine Health Checks
        2. Vaccinations
        3. Dentistry
        4. Lameness Investigations
        5. Emergency Care
        6. Pre-Purchase Examinations
        7. Medical & Surgical Care
        8. Diagnostic Imaging
        9. Reproduction Services
        10. Wound Management
        11. Colic Management
        12. Respiratory Conditions
        13. Castrations
        14. Microchipping
        15. Blood Testing
        16. Geriatric Care
```

#### Section 4: Emergency Banner
```
Block: Kadence Row Layout
Background: rgba(84, 191, 237, 0.1) (Accent at 10% opacity)
Border: 1px solid rgba(84, 191, 237, 0.2)
Padding: 48px (mobile: 32px)

Inner Content:
  - Kadence Advanced Card (Inner Card):
      Columns: 1
      Max Width: 896px
      Margin: 0 auto
      Text Align: Center
      Background: Transparent
      
      Content:
        - Advanced Heading (H3):
            Text: "Need Immediate Assistance?"
            Font Size: 24px (mobile: 20px)
            Color: Palette - Foreground
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Our emergency line is available 24/7 for urgent equine veterinary care. Don't hesitate to call if your horse needs immediate attention."
            Font Size: 16px
            Line Height: 1.75
            Color: Palette - Muted Text
            Max Width: 600px
            Margin: 0 auto 24px auto
        
        - Advanced Button:
            Text: "Call Now: 01603 123 456"
            Icon: Phone
            Icon Position: Left
            Link: tel:01603123456
            Background: Palette - Primary
            Color: #FFFFFF
            Padding: 12px 32px
            Border Radius: 6px
            Font Size: 16px
            Font Weight: 500
```

#### Section 5: CTA
```
Block: Kadence Row Layout
Background: Palette - Primary (#090B21)
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Content:
  - Advanced Heading (H2):
      Text: "Register with Independent Equine Vets"
      Color: #FFFFFF
      Align: Center
      Font Size: 30px (mobile), 48px (desktop)
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Text: "Join our practice and benefit from expert equine care delivered directly to you through our regular zone visits"
      Color: #FFFFFF
      Opacity: 0.95
      Align: Center
      Font Size: 16px (mobile), 18px (desktop)
      Line Height: 1.75
      Max Width: 672px
      Margin: 0 auto 32px auto
  
  - Kadence Row Layout (Button Group):
      Columns: 2 (mobile: 1)
      Gap: 16px
      Max Width: 500px
      Margin: 0 auto
      Justify Content: Center
      
      Button 1:
        Text: "Register Your Horse"
        Background: Palette - Accent (#54BFED)
        Color: Palette - Primary
        Padding: 12px 32px
        Border Radius: 6px
        Font Size: 16px
        Font Weight: 500
        Link: /register
      
      Button 2:
        Text: "Check Your Zone"
        Style: Outline
        Border: 2px solid #FFFFFF
        Background: Transparent
        Color: #FFFFFF
        Padding: 12px 32px
        Border Radius: 6px
        Font Size: 16px
        Font Weight: 500
        Link: /zone-visit
        Hover: Background rgba(255,255,255,0.1)
```

---

### Register Page

**Create New Page**
```
Title: Register Your Horse
URL: /register
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

#### Section 1: Header
```
Block: Kadence Row Layout
Background: Palette - Background (#FFFFFF)
Padding: 64px top, 48px bottom (mobile: 48px top, 32px bottom)

Inner Content:
  - Advanced Heading (H1):
      Text: "Register Your Horse"
      Align: Center
      Font Size: 36px (mobile), 60px (desktop)
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Text: "Join our equine practice and benefit from expert veterinary care delivered directly to you"
      Align: Center
      Font Size: 16px (mobile), 18px (desktop)
      Line Height: 1.75
      Color: Palette - Muted Text
      Max Width: 768px
      Margin: 0 auto
```

#### Section 2: Form Card
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 0 16px 64px 16px (mobile: 0 16px 48px 16px)
Max Width: 768px
Margin: 0 auto

Inner Blocks:
  - Kadence Advanced Card:
      Background: #FFFFFF
      Border: 1px solid Palette - Border (#D9E3E8)
      Border Radius: 16px
      Padding: 32px (mobile: 24px)
      Box Shadow: 0 4px 16px rgba(0,0,0,0.08)
      
      Card Header:
        - Advanced Heading (H2):
            Text: "Horse Registration Form"
            Font Size: 24px (mobile: 20px)
            Font Weight: 600
            Color: Palette - Foreground
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Please complete all required fields marked with *"
            Font Size: 14px
            Color: Palette - Muted Text
            Padding Bottom: 24px
            Border Bottom: 1px solid Palette - Border
            Margin Bottom: 32px
      
      Card Content (Form using Kadence Form Block or Contact Form 7):
        
        **FORM STYLING (Apply to all fields):**
        
        Label Styling:
          Font Size: 14px
          Font Weight: 500
          Color: Palette - Foreground
          Margin Bottom: 8px
          Display: Block
        
        Input Styling:
          Border: 1px solid Palette - Border (#D9E3E8)
          Border Radius: 6px
          Padding: 8px 12px
          Font Size: 14px
          Line Height: 1.5
          Color: Palette - Foreground
          Background: #FFFFFF
          Transition: all 0.2s ease
          
          Focus State:
            Border Color: Palette - Accent (#54BFED)
            Outline: none
            Box Shadow: 0 0 0 3px rgba(84, 191, 237, 0.2)
          
          Error State:
            Border Color: #DC2626
            Box Shadow: 0 0 0 3px rgba(220, 38, 38, 0.1)
        
        Checkbox Styling:
          Width: 16px
          Height: 16px
          Border: 2px solid Palette - Primary
          Border Radius: 4px
          
        **FORM SECTIONS:**
        
        Section 1: Owner Information
        ---
        Heading:
          Text: "Owner Information"
          Font Size: 18px
          Font Weight: 600
          Margin Bottom: 24px
          Color: Palette - Foreground
        
        Fields (in Kadence Row Layout for side-by-side):
          Row 1 (2 columns):
            - Text Input: First Name *
              Width: 50%
            - Text Input: Last Name *
              Width: 50%
          
          Row 2:
            - Email Input: Email Address *
              Width: 100%
          
          Row 3 (2 columns):
            - Tel Input: Phone Number *
              Width: 50%
            - Tel Input: Alternative Phone
              Width: 50%
          
          Row 4:
            - Textarea: Address *
              Width: 100%
              Rows: 3
          
          Row 5 (2 columns):
            - Text Input: Town/City *
              Width: 50%
            - Text Input: Postcode *
              Width: 50%
        ---
        
        Divider:
          Height: 1px
          Color: Palette - Border
          Margin: 32px 0
        
        Section 2: Horse Information
        ---
        Heading:
          Text: "Horse Information"
          Font Size: 18px
          Font Weight: 600
          Margin Bottom: 24px
        
        Fields:
          Row 1 (2 columns):
            - Text Input: Horse Name *
              Width: 50%
            - Text Input: Breed
              Width: 50%
          
          Row 2 (3 columns):
            - Number Input: Age *
              Width: 33.33%
              Min: 0
              Max: 50
            - Select Input: Sex *
              Width: 33.33%
              Options: Mare, Gelding, Stallion
            - Text Input: Color
              Width: 33.33%
          
          Row 3:
            - Text Input: Microchip Number
              Width: 100%
        ---
        
        Divider (same styling)
        
        Section 3: Horse Address
        ---
        Heading:
          Text: "Horse Address"
          Font Size: 18px
          Font Weight: 600
          Margin Bottom: 24px
        
        Fields:
          - Textarea: Address *
            Width: 100%
            Rows: 3
          
          Row (2 columns):
            - Text Input: Town/City *
              Width: 50%
            - Text Input: Postcode *
              Width: 50%
        ---
        
        Divider (same styling)
        
        Section 4: Previous Vet
        ---
        Heading:
          Text: "Previous Vet (Optional)"
          Font Size: 18px
          Font Weight: 600
          Margin Bottom: 24px
        
        Fields (2 columns):
          - Text Input: Previous Vet Name
            Width: 50%
          - Tel Input: Previous Vet Contact
            Width: 50%
        ---
        
        Divider (same styling)
        
        Section 5: Consent
        ---
        Heading:
          Text: "Consent & Agreement"
          Font Size: 18px
          Font Weight: 600
          Margin Bottom: 24px
        
        Fields:
          - Checkbox Group:
              - Permission for clinical history checkbox
                Label: "I give permission for Vet3 Equine Care to request clinical history from my previous vet"
                Font Size: 14px
                Line Height: 1.75
                Margin Bottom: 12px
              
              - Terms checkbox *
                Label: "I agree to the Terms & Conditions and Privacy Policy"
                Font Size: 14px
                Line Height: 1.75
                Required: Yes
          
          - Advanced Paragraph:
              Font Size: 12px
              Color: Palette - Muted Text
              Margin Top: 8px
              
              Links:
                - Terms & Conditions (link to /terms)
                - Privacy Policy (link to /privacy)
                Link Color: Palette - Accent
                Link Hover: Underline
        ---
        
        Submit Button:
          Text: "Complete Registration"
          Background: Palette - Primary (#090B21)
          Color: #FFFFFF
          Width: 100%
          Padding: 12px
          Border Radius: 6px
          Font Size: 16px
          Font Weight: 500
          Margin Top: 24px
          Cursor: Pointer
          Transition: opacity 0.2s ease
          Hover: Opacity 0.9
          
          Loading State:
            Text: "Submitting..."
            Opacity: 0.7
            Cursor: not-allowed
```

---

### Contact Page

**Create New Page**
```
Title: Get In Touch
URL: /contact
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

#### Section 1: Header
```
Same as Register page header
Title: "Get In Touch"
Description: "Have a question or need assistance? We're here to help."
```

#### Section 2: Content Layout
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 0 16px 64px 16px (mobile: 0 16px 48px 16px)

Inner Blocks:
  - Kadence Row Layout:
      Columns: 2 (Desktop: 33% / 67%, Mobile: 1 column)
      Column Gap: 32px
      Row Gap: 32px (mobile)
      Max Width: 1024px
      Margin: 0 auto
      
      **Left Column: Contact Info Cards**
      
      Stack of Contact Cards (5 cards):
      
      Card 1 - Phone:
        Block: Kadence Advanced Card
        Background: #FFFFFF
        Border: 1px solid Palette - Border
        Border Radius: 12px
        Padding: 24px
        Margin Bottom: 24px
        
        Structure:
          - Icon Wrapper:
              Background: rgba(84, 191, 237, 0.1)
              Size: 48px
              Border Radius: 50%
              Padding: 12px
              Margin Bottom: 12px
              
              Icon (Phone):
                Size: 24px
                Color: Palette - Accent
          
          - Heading:
              Text: "Phone"
              Font Size: 14px
              Font Weight: 600
              Color: Palette - Foreground
              Margin Bottom: 4px
          
          - Label:
              Text: "24/7 Emergency Line"
              Font Size: 12px
              Color: Palette - Muted Text
              Margin Bottom: 8px
          
          - Link:
              Text: "01603 123 456"
              Font Size: 16px
              Font Weight: 600
              Color: Palette - Accent
              Link: tel:01603123456
              Hover: Underline
      
      Card 2 - WhatsApp:
        Same structure as Phone card
        Icon: MessageCircle (lucide-react)
        Heading: "WhatsApp"
        Label: "8:30am - 5:30pm weekdays"
        Link: WhatsApp link
      
      Card 3 - Email:
        Same structure
        Icon: Mail
        Heading: "Email"
        Label: "We respond within 24 hours"
        Link: info@vet3equine.co.uk (mailto:)
      
      Card 4 - Location:
        Same structure
        Icon: MapPin
        Heading: "Location"
        Text: "Serving Norfolk & Suffolk"
        No link
      
      Card 5 - Hours:
        Same structure
        Icon: Clock
        Heading: "Hours"
        Text: "Zone visits by appointment\n24/7 Emergency available"
        No link
      
      **Right Column: Contact Form**
      
      Block: Kadence Advanced Card
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 12px
      Padding: 32px (mobile: 24px)
      Height: 100% (match left column)
      
      Content:
        - Advanced Heading (H2):
            Text: "Send Us a Message"
            Font Size: 24px (mobile: 20px)
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Fill out the form below and we'll get back to you as soon as possible"
            Font Size: 14px
            Color: Palette - Muted Text
            Margin Bottom: 24px
        
        - Contact Form (using form plugin):
            Apply same form styling as Register page
            
            Fields:
              Row 1 (2 columns):
                - Text: First Name *
                  Width: 50%
                - Text: Last Name *
                  Width: 50%
              
              - Email: Email Address *
                Width: 100%
              
              - Tel: Phone Number
                Width: 100%
              
              - Text: Subject *
                Width: 100%
              
              - Textarea: Message *
                Width: 100%
                Rows: 6
            
            Submit Button:
              Text: "Send Message"
              Background: Palette - Primary
              Color: #FFFFFF
              Width: 100%
              Padding: 12px
              Border Radius: 6px
              Font Size: 16px
              Font Weight: 500
        
        - Advanced Paragraph (below form):
            Text: "We aim to respond within 24 hours during business days"
            Font Size: 14px
            Color: Palette - Muted Text
            Align: Center
            Margin Top: 16px
```

---

### Zone Visit Page

**Create New Page**
```
Title: Zone Visit Schedule
URL: /zone-visit
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

#### Section 1: Header
```
Block: Kadence Row Layout
Background: Palette - Muted
Padding: 64px top, 64px bottom (mobile: 48px)

Inner Blocks:
  - Advanced Heading (H1):
      Text: "Zone Visit Schedule"
      Align: Center
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Text: "Regular veterinary visits to specific areas across Norfolk & Suffolk"
      Align: Center
      Font Size: 18px (mobile: 16px)
      Color: Palette - Muted Text
      Max Width: 768px
      Margin: 0 auto
```

#### Section 2: Map Placeholder
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 0 16px 32px 16px

Inner Block:
  - Kadence Advanced Card (Map Placeholder):
      Background: Palette - Muted (#F4F7F8)
      Aspect Ratio: 16:9
      Border: 1px solid Palette - Border
      Border Radius: 12px
      Display: Flex
      Flex Direction: Column
      Align Items: Center
      Justify Content: Center
      Max Width: 1024px
      Margin: 0 auto
      Padding: 48px (mobile: 32px)
      
      Content (Centered):
        - Icon (Map Pin):
            Size: 64px
            Color: Palette - Muted Text
            Margin Bottom: 16px
        
        - Advanced Heading:
            Text: "Zone Visit Map"
            Font Size: 20px
            Font Weight: 600
            Color: Palette - Foreground
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Interactive map showing coverage zones and visit schedules coming soon"
            Font Size: 14px
            Color: Palette - Muted Text
            Text Align: Center
```

#### Section 3: Zone Cards
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 32px 16px

Inner Content:
  - Advanced Heading (H2):
      Text: "Our Visit Zones"
      Align: Center
      Font Size: 30px (mobile), 48px (desktop)
      Margin Bottom: 48px
  
  - Kadence Row Layout (Zone Grid):
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1024px
      Margin: 0 auto
      
      Zone Cards (6 total - Zone A through F):
        Block: Kadence Advanced Card
        
        Card Structure:
          Background: #FFFFFF
          Border: 1px solid Palette - Border
          Border Radius: 12px
          Padding: 24px
          Transition: all 0.3s ease
          Hover: Box Shadow (0 8px 24px rgba(0,0,0,0.08))
          Hover: Transform translateY(-2px)
        
        Content:
          - Advanced Heading (Zone Name):
              Text: "Zone A - North Norfolk" (example)
              Font Size: 18px
              Font Weight: 600
              Color: Palette - Foreground
              Margin Bottom: 8px
          
          - Advanced Paragraph (Areas):
              Text: "Cromer, Sheringham, Holt, North Walsham"
              Font Size: 14px
              Line Height: 1.75
              Color: Palette - Muted Text
              Margin Bottom: 16px
          
          - Divider:
              Height: 1px
              Color: Palette - Border
              Margin Bottom: 12px
          
          - Visit Days (Flex layout):
              Display: Flex
              Align Items: Center
              Gap: 8px
              
              Icon (Calendar):
                Size: 16px
                Color: Palette - Accent
                Flex Shrink: 0
              
              Text:
                Text: "Mondays & Thursdays"
                Font Size: 14px
                Font Weight: 500
                Color: Palette - Accent
```

#### Section 4: Information & Form
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 32px 16px 64px 16px

Inner Blocks:
  - Kadence Row Layout:
      Columns: 2 (mobile: 1)
      Column Gap: 32px
      Row Gap: 32px (mobile)
      Max Width: 1024px
      Margin: 0 auto
      
      **Left Column: Information Card**
      
      Block: Kadence Advanced Card
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 12px
      Padding: 24px
      
      Content:
        - Advanced Heading:
            Text: "About Zone Visits"
            Font Size: 18px
            Font Weight: 600
            Margin Bottom: 16px
        
        - Advanced Paragraph:
            Text: "We operate zone visits to provide efficient and cost-effective veterinary care across Norfolk & Suffolk. By scheduling visits to specific areas on set days, we can:"
            Font Size: 14px
            Line Height: 1.75
            Color: Palette - Muted Text
            Margin Bottom: 16px
        
        - Unordered List:
            Items:
              - Reduce travel time and costs
              - Provide predictable appointment scheduling
              - Serve more clients in each area
              - Maintain competitive pricing
            
            List Styling:
              Margin Left: 24px
              Line Height: 2
              Font Size: 14px
              Color: Palette - Muted Text
              
              List Item Marker:
                Color: Palette - Accent
        
        - Advanced Paragraph (Note):
            Text: "Emergency services are available 24/7 regardless of zone schedule."
            Font Size: 14px
            Font Weight: 600
            Color: Palette - Foreground
            Margin Top: 16px
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Not sure which zone you're in? Use the enquiry form to find out."
            Font Size: 14px
            Color: Palette - Muted Text
      
      **Right Column: Enquiry Form**
      
      Block: Kadence Advanced Card
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 12px
      Padding: 24px
      
      Content:
        - Advanced Heading:
            Text: "Zone Enquiry"
            Font Size: 18px
            Font Weight: 600
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Not sure about your zone or visit schedule? Send us your details and we'll get back to you."
            Font Size: 14px
            Color: Palette - Muted Text
            Margin Bottom: 24px
        
        - Form Fields (apply same styling as other forms):
            - Text: Name *
              Width: 100%
            
            - Email: Email *
              Width: 100%
            
            - Tel: Phone Number *
              Width: 100%
            
            - Text: Postcode *
              Width: 100%
            
            - Textarea: Full Address
              Width: 100%
              Rows: 2
            
            - Textarea: Additional Information
              Width: 100%
              Rows: 3
              Placeholder: "Any specific questions or concerns?"
            
            Submit Button:
              Text: "Send Enquiry"
              Background: Palette - Primary
              Color: #FFFFFF
              Width: 100%
              Padding: 12px
              Border Radius: 6px
              Font Size: 16px
              Font Weight: 500
```

---

### Terms & Conditions Page

**Create New Page**
```
Title: Terms & Conditions
URL: /terms
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

#### Section 1: Header
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 64px 16px 32px 16px (mobile: 48px 16px 24px 16px)
Container: Contained

Inner Content:
  - Advanced Heading (H1):
      Text: "Terms & Conditions"
      Align: Left
      Font Size: 36px (mobile), 60px (desktop)
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Text: "Last updated: [Date]"
      Font Size: 14px
      Color: Palette - Muted Text
```

#### Section 2: Content Cards
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 0 16px 64px 16px (mobile: 0 16px 48px 16px)

Inner Blocks:
  - Kadence Column (Single column, max-width: 896px, centered)
      
      Content Cards (7 sections):
      
      Each Section as Kadence Advanced Card:
        Background: #FFFFFF
        Border: 1px solid Palette - Border (#D9E3E8)
        Border Radius: 16px
        Padding: 32px (mobile: 24px)
        Margin Bottom: 32px (mobile: 24px)
        
        Content Structure:
          - Advanced Heading (H2):
              Section title (e.g., "1. Introduction")
              Font Size: 24px (mobile: 20px)
              Font Weight: 600
              Color: Palette - Foreground
              Margin Bottom: 16px
          
          - Advanced Paragraph(s):
              Section content
              Font Size: 16px (mobile: 14px)
              Line Height: 1.75
              Color: Palette - Muted Text (#667080)
              Margin Bottom: 16px (between paragraphs)
      
      Sections:
        1. Introduction
        2. Services
        3. Appointments and Cancellations
        4. Payment Terms
        5. Emergency Services
        6. Liability
        7. Contact Information
```

---

### Privacy Policy Page

**Create New Page**
```
Title: Privacy Policy
URL: /privacy
Template: Fullwidth Blank
```

**Build with Kadence Blocks:**

Same structure as Terms & Conditions page, with 7 sections:

1. Introduction
2. Information We Collect (with bullet list using Kadence List Block)
3. How We Use Your Information (with bullet list)
4. Data Security
5. Data Sharing (with bullet list)
6. Your Rights (with bullet list)
7. Contact Us

**List Styling (for bullet points):**
```
Margin Left: 24px
Line Height: 2
Font Size: 16px (mobile: 14px)
Color: Palette - Muted Text
List Marker Color: Palette - Accent
```

---

## 10. Custom CSS & JavaScript

### Adding Custom CSS

**Go to: Appearance → Customize → Additional CSS**

Add the following custom CSS:

```css
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Accordion enhancements (Services page mobile) */
.kb-accordion .kb-accordion-pane-header {
  transition: background-color 0.2s ease;
}

.kb-accordion .kb-accordion-pane-header:hover {
  background-color: rgba(240, 244, 246, 0.5);
}

/* Form validation styles */
.form-input.error,
.form-textarea.error {
  border-color: #DC2626 !important;
}

.field-error {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #DC2626;
}

/* Staff card hover effects */
.staff-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.staff-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Service card icon hover */
.service-card .icon-wrapper {
  transition: transform 0.2s ease;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1);
}

/* Testimonial quote icon */
.testimonial-quote-icon {
  opacity: 0.3;
}

/* Footer contact layout */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

/* Instagram grid hover effect */
.instagram-post {
  transition: opacity 0.3s ease;
}

.instagram-post:hover {
  opacity: 0.9;
}

/* Button transitions */
.kb-button {
  transition: all 0.2s ease;
}

/* Card transitions */
.kb-card {
  transition: all 0.3s ease;
}

/* Focus visible for accessibility */
*:focus-visible {
  outline: 2px solid #54BFED;
  outline-offset: 2px;
}

/* Print styles */
@media print {
  .navbar,
  .footer,
  .kb-button {
    display: none !important;
  }
  
  .kb-row-layout-wrap {
    page-break-inside: avoid;
  }
  
  body {
    background: white !important;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Reduce padding on mobile */
  .kb-row-layout-wrap {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* Stack buttons on mobile */
  .button-group {
    flex-direction: column;
    width: 100%;
  }
  
  .button-group .kb-button {
    width: 100%;
  }
}
```

### Adding Custom JavaScript

**Option 1: Using a Plugin**
1. Install "Code Snippets" plugin
2. Add new snippet with JavaScript functionality:

```javascript
// Mobile menu enhancement
// Form validation
// Smooth scrolling
// Lazy loading
// (Copy relevant sections from export/js/main.js)
```

**Option 2: Child Theme**
Create a child theme and enqueue the JavaScript file in functions.php:

```php
function vet3_enqueue_scripts() {
    wp_enqueue_script(
        'vet3-main',
        get_stylesheet_directory_uri() . '/js/main.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'vet3_enqueue_scripts');
```

**Option 3: Footer Scripts (Simplest)**
- Go to **Appearance → Customize → Additional Scripts**
- Paste JavaScript in the footer scripts section

---

## 11. Final Testing & Optimization

### Cross-Browser Testing
```
✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Mobile Safari (iOS)
✓ Chrome Mobile (Android)
```

### Responsive Testing
```
✓ Mobile (320px - 767px)
✓ Tablet (768px - 1023px)
✓ Desktop (1024px - 1439px)
✓ Large Desktop (1440px+)
```

### Performance Optimization

**Install Performance Plugin**
```
Recommended: WP Rocket, LiteSpeed Cache, or W3 Total Cache
```

**Optimization Checklist**
```
✓ Enable page caching
✓ Enable browser caching
✓ Minify CSS and JavaScript
✓ Optimize images (use WebP format)
✓ Enable lazy loading for images
✓ Combine CSS files
✓ Load critical CSS inline
✓ Defer non-critical JavaScript
✓ Use CDN for assets (optional)
✓ Enable GZIP compression
```

**Image Optimization**
```
✓ Compress images before upload (max 200KB for photos)
✓ Use appropriate image dimensions
✓ Add descriptive alt text to all images
✓ Lazy load images below the fold
✓ Use srcset for responsive images
✓ Convert to WebP format where supported
```

### SEO Configuration

**Install SEO Plugin**
```
Recommended: Yoast SEO or Rank Math
```

**Configure Each Page:**
```
✓ Meta Title (under 60 characters, include keywords)
✓ Meta Description (under 160 characters, compelling copy)
✓ Focus Keyword
✓ URL Slug (clean, descriptive, lowercase)
✓ Open Graph image (1200x630px)
✓ Schema markup (LocalBusiness, VeterinaryCare)
✓ Canonical URL
```

**Example Meta for Home Page:**
```
Title: Vet3 Equine Care - Independent Equine Vets | Norfolk & Suffolk
Description: Fully mobile independent equine vets serving Norfolk & Suffolk. Regular zone visits across the region. Expert horse care from professional vets. 24/7 emergency service available.
Keywords: equine vets norfolk, horse vets suffolk, independent vets, mobile equine veterinary, zone visits, emergency horse care
URL: /
```

**Example Meta for Services Page:**
```
Title: Equine Veterinary Services | Norfolk & Suffolk | Vet3
Description: Comprehensive equine veterinary care including health checks, vaccinations, dentistry, lameness investigations, and emergency services. Zone visits across Norfolk & Suffolk.
Keywords: equine services, horse veterinary care, vaccinations, dentistry, lameness
URL: /services
```

### Accessibility Testing
```
✓ Keyboard navigation works (Tab through all interactive elements)
✓ All images have descriptive alt text
✓ Color contrast meets WCAG AA standards (4.5:1 for text)
✓ Form labels are properly associated with inputs
✓ Links have descriptive text (no "click here")
✓ Headings follow logical hierarchy (H1 → H2 → H3)
✓ ARIA labels on icon-only buttons
✓ Focus indicators are visible
✓ Forms can be completed with keyboard only
✓ Screen reader tested (NVDA or VoiceOver)
```

### Form Testing
```
✓ All form fields validate correctly
✓ Required fields are properly marked
✓ Email validation works
✓ Phone number validation works
✓ Success messages display correctly
✓ Error messages are clear and helpful
✓ Form submissions are received
✓ Email notifications sent to correct addresses
✓ Thank you/confirmation page works
✓ Spam protection is active
```

### Analytics Setup

**Install Google Analytics**
```
1. Create Google Analytics 4 property
2. Install "Site Kit by Google" plugin
3. Connect to your Google account
4. Enable Google Analytics module
5. Add tracking code to all pages
6. Set up conversion goals
```

**Track Important Events:**
```
- Form submissions (Register, Contact, Zone Enquiry)
- Phone number clicks (tel: links)
- Email clicks (mailto: links)
- Button clicks (all CTAs)
- Social media link clicks
- PDF downloads (if any)
- External link clicks
```

### Final Checklist

**Content**
```
✓ All text is proofread and error-free
✓ All internal links work correctly
✓ All external links open in new tab
✓ Contact information is accurate
✓ Social media links are correct
✓ Logo displays correctly on all pages
✓ All images are optimized and load properly
✓ Alt text added to all images
✓ Copyright year is current
```

**Functionality**
```
✓ Mobile menu opens and closes smoothly
✓ All forms submit correctly
✓ Form validation works as expected
✓ All buttons link to correct pages
✓ Phone links work on mobile devices
✓ Email links open default email client
✓ Social links open in new tab
✓ Smooth scrolling works for anchor links
✓ Accordion expands/collapses (Services page)
✓ Zone cards display correctly
✓ Sticky header works on scroll
```

**Design**
```
✓ Colors match design system exactly
✓ Typography matches specifications
✓ Spacing is consistent throughout
✓ Cards have proper hover states
✓ Buttons have proper hover states
✓ Layout is fully responsive on all devices
✓ Footer displays correctly on all pages
✓ Header is sticky and functional
✓ Navigation highlights active page
✓ Images maintain aspect ratio
✓ Border radius is consistent
```

**Performance**
```
✓ Page load time < 3 seconds
✓ Images are lazy loaded
✓ CSS is minified
✓ JavaScript is minified
✓ No console errors in browser
✓ Mobile performance score > 80 (PageSpeed Insights)
✓ Desktop performance score > 90 (PageSpeed Insights)
✓ First Contentful Paint < 2s
✓ Time to Interactive < 4s
```

---

## Maintenance Tips

### Regular Updates
```
- Update WordPress core monthly (with backup)
- Update Kadence Theme when available
- Update Kadence Blocks when available
- Update all plugins regularly
- Always backup before updates
- Test on staging site first (if available)
```

### Monthly Checks
```
- Test all forms (submit test entries)
- Check all links (use link checker plugin)
- Review Google Analytics data
- Check for broken images
- Review site speed (PageSpeed Insights)
- Check mobile display on real devices
- Review security logs
- Check spam filter (form submissions)
- Update content if needed
```

### Content Updates
```
- Update staff bios as team changes
- Add new services when offered
- Update zone schedules seasonally
- Refresh testimonials regularly
- Update Instagram feed/links
- Keep blog/news updated (if added)
- Update emergency contact info if changed
```

---

## Support Resources

### Kadence Documentation
- Kadence Help Center: https://www.kadencewp.com/help-center/
- Kadence Blocks Documentation: https://www.kadencewp.com/kadence-blocks/
- Kadence YouTube Channel: https://www.youtube.com/c/KadenceWP

### WordPress Resources
- WordPress Support Forums: https://wordpress.org/support/
- WordPress Developer Resources: https://developer.wordpress.org/
- WordPress Codex: https://codex.wordpress.org/

### Useful Testing Tools
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WAVE Accessibility: https://wave.webaim.org/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Broken Link Checker: https://www.brokenlinkcheck.com/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

---

## Troubleshooting Common Issues

### Issue: Colors Not Displaying Correctly
**Solution:** 
1. Check Global Palette settings in Customizer → General → Colors
2. Ensure hex codes match the design system exactly:
   - Primary: #090B21
   - Accent: #54BFED
   - Foreground: #131626
   - Secondary: #F0F4F6
   - Muted: #F4F7F8
   - Muted Text: #667080
   - Border: #D9E3E8
3. Clear browser cache and WordPress cache
4. Clear Kadence cache (if using Kadence Pro)
5. Check for conflicting custom CSS

### Issue: Mobile Menu Not Working
**Solution:**
1. Check Header settings → Mobile menu is enabled
2. Verify breakpoint is set to 768px
3. Clear JavaScript cache
4. Check for JavaScript conflicts with other plugins
5. Deactivate other plugins one by one to isolate conflict
6. Ensure jQuery is loaded correctly

### Issue: Forms Not Submitting
**Solution:**
1. Check form plugin settings (Contact Form 7 or WPForms)
2. Verify email addresses in form notification settings
3. Check spam filter settings (may be blocking)
4. Test with anti-spam features disabled temporarily
5. Check server email configuration (contact hosting)
6. Review server error logs for PHP errors
7. Ensure form action URL is correct

### Issue: Images Not Loading
**Solution:**
1. Verify image file paths are correct
2. Check file permissions on uploads folder (should be 755)
3. Regenerate thumbnails using "Regenerate Thumbnails" plugin
4. Check lazy loading settings (may be too aggressive)
5. Verify image files actually exist on server
6. Check browser console for 404 errors

### Issue: Layout Breaking on Mobile
**Solution:**
1. Check Kadence Row Layout responsive settings for each section
2. Verify column settings for mobile breakpoint (< 768px)
3. Test in multiple mobile browsers (Safari, Chrome)
4. Check for custom CSS with fixed widths
5. Inspect elements in browser dev tools (mobile view)
6. Ensure container max-width is not exceeded

### Issue: Slow Page Load Times
**Solution:**
1. Optimize and compress all images
2. Enable caching plugin (WP Rocket, W3 Total Cache)
3. Minify CSS and JavaScript
4. Enable GZIP compression
5. Use a CDN for static assets
6. Lazy load images below the fold
7. Defer non-critical JavaScript
8. Reduce number of active plugins
9. Upgrade hosting plan if needed

### Issue: Button Hover States Not Working
**Solution:**
1. Check button class names in Block settings
2. Verify CSS transitions are applied
3. Clear CSS cache
4. Check for conflicting CSS from other plugins
5. Inspect element in browser dev tools
6. Re-apply button styles in Kadence settings

---

## Next Steps After Setup

1. **Thorough Testing**: 
   - Go through every page on multiple devices
   - Test all forms and submit test entries
   - Click every link to ensure it works
   - Test on real mobile devices, not just browser emulation

2. **Ask for Feedback**: 
   - Have colleagues review the site
   - Get feedback from horse owners if possible
   - Check with someone unfamiliar with the site

3. **Pre-Launch Checklist**: 
   - [ ] SSL certificate installed and active
   - [ ] 301 redirects configured (if migrating from old site)
   - [ ] Search engines can index site (remove robots.txt block)
   - [ ] XML sitemap created and submitted to Google Search Console
   - [ ] Google Analytics tracking code active
   - [ ] All contact forms tested and working
   - [ ] 404 page customized
   - [ ] Favicon displays correctly
   - [ ] Social media metadata set up
   - [ ] Privacy policy and terms pages complete

4. **Launch Day**:
   - Clear all caches (WordPress, Kadence, browser)
   - Test from multiple locations/networks
   - Monitor error logs
   - Check form submissions come through

5. **Post-Launch Monitoring** (First Week):
   - Check Google Analytics daily
   - Monitor form submissions
   - Review error logs
   - Check for broken links
   - Monitor page load times
   - Read any user feedback

6. **Continuous Improvement**:
   - Analyze user behavior in Analytics
   - A/B test different CTAs
   - Update content based on common questions
   - Add new testimonials regularly
   - Keep services list current
   - Monitor SEO rankings and adjust

---

## DESIGN SYSTEM REFERENCE (QUICK REFERENCE)

### Colors (HSL Format)
```
Primary:           hsl(235, 95%, 13%)   = #090B21
Accent:            hsl(200, 85%, 65%)   = #54BFED
Foreground:        hsl(235, 50%, 15%)   = #131626
Background:        hsl(0, 0%, 100%)     = #FFFFFF
Secondary:         hsl(200, 20%, 95%)   = #F0F4F6
Muted:             hsl(200, 15%, 96%)   = #F4F7F8
Muted Foreground:  hsl(235, 20%, 50%)   = #667080
Border:            hsl(200, 20%, 90%)   = #D9E3E8
```

### Spacing Scale
```
4px   = 0.25rem
8px   = 0.5rem
12px  = 0.75rem
16px  = 1rem
24px  = 1.5rem
32px  = 2rem
48px  = 3rem
64px  = 4rem
```

### Border Radius
```
Small:   6px  = 0.375rem (buttons, inputs)
Medium:  12px = 0.75rem  (small cards, zone cards)
Large:   16px = 1rem     (cards, images)
XLarge:  24px = 1.5rem   (hero cards, CTAs)
```

### Typography
```
H1: 60px desktop, 36px mobile
H2: 48px desktop, 30px mobile
H3: 30px desktop, 24px mobile
H4: 24px desktop, 20px mobile
Body: 16px
Small: 14px
XSmall: 12px

Line Heights:
Headings: 1.2-1.4
Body: 1.75
```

### Breakpoints
```
Mobile:  < 768px
Tablet:  768px - 1023px
Desktop: >= 1024px
```

---

This completes the comprehensive Kadence-specific setup guide with exact design system specifications. Follow this guide step-by-step to recreate the Vet3 Equine Care website in WordPress with Kadence theme and blocks, ensuring pixel-perfect accuracy to the design system.
