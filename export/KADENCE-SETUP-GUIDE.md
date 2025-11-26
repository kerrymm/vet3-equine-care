# Kadence Theme & Blocks - Complete Setup Guide for Vet3 Equine Care

This comprehensive guide will walk you through setting up the Vet3 Equine Care website in WordPress using Kadence Theme and Kadence Blocks.

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

### Configure Global Palette

Kadence allows you to set up a global color palette. Configure exactly these colors:

#### Palette Slot 1 - Primary
```
Name: Primary
Hex: #0B0C1E
Usage: Main brand color, navigation, primary buttons
```

#### Palette Slot 2 - Accent
```
Name: Accent
Hex: #6BC5E8
Usage: Links, icons, highlights, secondary buttons
```

#### Palette Slot 3 - Foreground
```
Name: Foreground
Hex: #26283E
Usage: Body text, headings
```

#### Palette Slot 4 - Background
```
Name: Background
Hex: #FFFFFF
Usage: Page backgrounds, card backgrounds
```

#### Palette Slot 5 - Secondary
```
Name: Secondary
Hex: #E8F1F5
Usage: Section backgrounds, button backgrounds
```

#### Palette Slot 6 - Muted
```
Name: Muted
Hex: #F2F5F7
Usage: Subtle backgrounds, disabled states
```

#### Palette Slot 7 - Muted Foreground
```
Name: Muted Text
Hex: #6B7280
Usage: Secondary text, descriptions
```

#### Palette Slot 8 - Border
```
Name: Border
Hex: #DEE8ED
Usage: Card borders, dividers, input borders
```

### Additional Color Settings

**Link Colors**
```
Link Color: Palette - Accent (#6BC5E8)
Link Hover Color: Darken Accent by 10%
```

**Button Default Colors** (we'll configure specific button styles later)
```
Background: Palette - Primary
Text: #FFFFFF
Hover Background: Darken Primary by 10%
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
Color: Palette - Foreground
```

### Heading Fonts

**All Headings (H1-H6) Base Settings**
```
Font Family: System Stack (same as body)
Font Weight: 700 (Bold)
Color: Palette - Foreground
```

**H1 Settings**
```
Font Size Desktop: 60px (3.75rem)
Font Size Tablet: 48px (3rem)
Font Size Mobile: 36px (2.25rem)
Line Height: 1.2
```

**H2 Settings**
```
Font Size Desktop: 48px (3rem)
Font Size Tablet: 40px (2.5rem)
Font Size Mobile: 30px (1.875rem)
Line Height: 1.3
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

---

## 6. Header Configuration

Access: **Appearance → Customize → Header**

### Header Layout

**Header Style**
```
Layout: Standard
Container: Contained (1280px)
Height: 80px
Sticky: Yes
Background: Palette - Background (#FFFFFF)
Border Bottom: 1px solid Palette - Border
```

### Header Elements

**Logo Settings**
```
Position: Left
Logo Image: Upload logo.png
Logo Height: 56px
Logo Link: Home page
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
  Border Radius: 8px
  
  Default State:
    Color: Palette - Muted Text
    Background: Transparent
  
  Hover State:
    Color: Palette - Foreground
    Background: Palette - Secondary
  
  Active State:
    Color: Palette - Foreground
    Background: Palette - Secondary
```

**Header Buttons**
```
Button 1 - Register:
  Text: "Register"
  Link: /register
  Style: Primary
  Background: Palette - Primary
  Text Color: #FFFFFF
  Padding: 8px 16px
  Border Radius: 6px
  
Button 2 - Phone:
  Text: "24/7 On-Call"
  Icon: Phone icon
  Link: tel:01603123456
  Style: Outline
  Border: 1px solid Palette - Border
  Text Color: Palette - Foreground
  Padding: 8px 16px
  Border Radius: 6px
```

### Mobile Header

**Mobile Menu**
```
Breakpoint: 768px
Toggle Icon: Hamburger
Slide-in Direction: Right
Background: Palette - Background
Width: 300px

Mobile Menu Items:
  Same as desktop but full-width
  Padding: 12px 16px
```

---

## 7. Footer Configuration

Access: **Appearance → Customize → Footer**

### Footer Layout

**Footer Builder**
```
Enable Footer Builder: Yes
Number of Rows: 2
  - Row 1: Main footer content
  - Row 2: Bottom bar (disclaimer & copyright)
```

**Row 1 - Main Footer**
```
Background: Palette - Primary (#0B0C1E)
Text Color: #FFFFFF
Padding: 48px top, 48px bottom
Container: Contained (1280px)

Columns: 3 columns
  Column 1 Width: 33%
  Column 2 Width: 33%
  Column 3 Width: 33%
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
  P Font Size: 14px
  P Opacity: 0.9
  P Line Height: 1.75
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
  Font Size: 14px
  Line Height: 2
  Color: #FFFFFF
  Opacity: 0.9
  Hover Opacity: 1
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
```

**Row 2 - Bottom Bar**
```
Background: Palette - Primary
Text Color: #FFFFFF
Opacity: 0.75
Padding: 32px top, 32px bottom
Border Top: 1px solid rgba(255,255,255,0.2)

Content:
  - Disclaimer text (left)
  - Copyright text (center)
  
Font Size: 12px
Line Height: 1.5
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
Background Overlay: Palette - Primary at 40% opacity
Min Height: 500px (mobile), 600px (desktop)
Vertical Align: Middle

Inner Blocks:
  - Advanced Heading (H1):
      Text: "Fully Mobile Independent Equine Vets"
      Color: #FFFFFF
      Font Size: 36px (mobile), 60px (desktop)
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Text: [Hero description text]
      Color: #FFFFFF
      Opacity: 0.95
      Font Size: 16px (mobile), 20px (desktop)
      Max Width: 672px
      Margin Bottom: 32px
  
  - Kadence Row Layout (for buttons):
      Columns: 2 (mobile: 1)
      Gap: 16px
      
      Button 1:
        Text: "Register Your Horse"
        Link: /register
        Background: Palette - Accent
        Color: Palette - Primary
        Padding: 12px 32px
        Border Radius: 6px
        Font Size: 16px
        Font Weight: 500
      
      Button 2:
        Text: "Call 24/7 Support"
        Icon: Phone
        Link: tel:01603123456
        Style: Outline
        Border Color: #FFFFFF
        Text Color: #FFFFFF
        Padding: 12px 32px
```

#### Section 2: About Preview
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 64px top, 64px bottom (mobile: 48px)
Container: Contained

Inner Content:
  - Advanced Heading (H2):
      Text: "Fully Mobile Independent Equine Vets"
      Align: Center
      Max Width: 768px
      Margin: 0 auto 16px auto
  
  - Advanced Paragraph:
      Text: [About description]
      Align: Center
      Color: Palette - Muted Text
      Max Width: 768px
      Margin: 0 auto 48px auto
  
  - Emergency Contact Card:
      Block: Kadence Row Layout
      Background: Palette - Secondary
      Border Radius: 24px
      Padding: 24px
      Max Width: 672px
      Margin: 0 auto
      
      Content: Phone icon + Emergency number
```

#### Section 3: Team Preview
```
Block: Kadence Row Layout
Background: Palette - Muted
Padding: 64px top, 64px bottom

Inner Blocks:
  - Section Header (same pattern as above)
  
  - Kadence Row Layout:
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      
      Staff Cards (repeat 3 times):
        Block: Kadence Column
        
        Inner Blocks:
          - Image Block (aspect ratio 1:1)
          - Advanced Heading (H3): Name
          - Advanced Paragraph: Role (color: Accent)
          - Advanced Paragraph: Bio
        
        Styling:
          Background: #FFFFFF
          Border: 1px solid Palette - Border
          Border Radius: 16px
          Padding: 0
          Hover: Box Shadow
  
  - Button:
      Text: "Meet the Full Team"
      Link: /about
      Style: Outline
      Align: Center
      Margin Top: 32px
```

#### Section 4: Services Preview
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 64px top, 64px bottom

Inner Blocks:
  - Section Header
  
  - Kadence Row Layout:
      Columns: 3 (tablet: 2, mobile: 1)
      Row Gap: 24px
      Column Gap: 24px
      
      Service Cards (6 total, 2 rows):
        Each card structure:
          - Icon (Kadence Icon Block)
              Background: Palette - Accent at 10% opacity
              Size: 48px
              Border Radius: 12px
              Padding: 12px
              Icon Color: Palette - Accent
              Margin Bottom: 16px
          
          - Advanced Heading (H3):
              Service title
              Font Size: 18px
              Margin Bottom: 12px
          
          - Advanced Paragraph:
              Service description
              Font Size: 14px
              Color: Palette - Muted Text
        
        Card Wrapper Styling:
          Background: #FFFFFF
          Border: 1px solid Palette - Border
          Border Radius: 16px
          Padding: 24px
          Hover: Box Shadow
```

#### Section 5: Testimonials
```
Block: Kadence Row Layout
Background: Palette - Muted
Padding: 64px top, 64px bottom

Inner Blocks:
  - Section Header
  
  - Kadence Row Layout:
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      
      Testimonial Cards (3 total):
        - Icon Block (Quote icon)
            Size: 40px
            Color: Palette - Accent at 30% opacity
            Margin Bottom: 16px
        
        - Advanced Paragraph (Quote):
            Font Style: Italic
            Color: Palette - Muted Text
            Margin Bottom: 24px
        
        - Divider (1px, Palette - Border)
        
        - Advanced Paragraph (Name):
            Font Weight: 600
            Margin Bottom: 4px
        
        - Advanced Paragraph (Location):
            Font Size: 14px
            Color: Palette - Muted Text
        
        Card Styling:
          Background: #FFFFFF
          Border: 1px solid Palette - Border
          Border Radius: 16px
          Padding: 32px
          Box Shadow on Hover
```

#### Section 6: Zone Visit CTA
```
Block: Kadence Row Layout
Background: Palette - Muted
Padding: 64px top, 64px bottom

Inner Blocks:
  - Kadence Row Layout (Inner card):
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 24px
      Padding: 48px (mobile: 32px)
      Max Width: 896px
      Margin: 0 auto
      Box Shadow: Large
      
      Content:
        - Icon (Map Pin):
            Size: 64px
            Background: Palette - Accent at 10% opacity
            Border Radius: 50%
            Padding: 16px
            Margin: 0 auto 16px auto
        
        - Advanced Heading (H2):
            Text: "Are We In Your Area?"
            Align: Center
            Margin Bottom: 16px
        
        - Advanced Paragraph:
            Description text
            Align: Center
            Max Width: 600px
            Margin: 0 auto 32px auto
        
        - Button:
            Text: "View Zone Map & Schedule"
            Icon: Map Pin
            Link: /zone-visit
            Background: Palette - Primary
            Color: #FFFFFF
            Size: Large
            Align: Center
        
        - Contact Info:
            Text: "Call us: 01603 123 456"
            Link: tel:01603123456
            Color: Palette - Accent
            Font Weight: 600
            Align: Center
            Margin Top: 16px
```

#### Section 7: Final CTA
```
Block: Kadence Row Layout
Background: Palette - Primary
Padding: 64px top, 64px bottom
Text Align: Center

Inner Blocks:
  - Advanced Heading (H2):
      Text: "Join Our Independent Equine Practice"
      Color: #FFFFFF
      Margin Bottom: 16px
  
  - Advanced Paragraph:
      Description text
      Color: #FFFFFF
      Opacity: 0.95
      Max Width: 672px
      Margin: 0 auto 32px auto
  
  - Button:
      Text: "Register Now"
      Link: /register
      Background: Palette - Secondary
      Color: Palette - Foreground
      Size: Large
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
Background: Palette - Muted
Padding: 64px top, 64px bottom
Container: Contained

Inner Blocks:
  - Advanced Heading (H1):
      Text: "Meet Our Fully Mobile Independent Equine Veterinary Team"
      Align: Center
      Max Width: 768px
      Margin: 0 auto 24px auto
  
  - Advanced Paragraph:
      Description text
      Align: Center
      Font Size: 18px
      Color: Palette - Muted Text
      Max Width: 768px
      Margin: 0 auto
```

#### Section 2: All Staff Grid
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 64px top, 64px bottom

Inner Blocks:
  - Kadence Row Layout:
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1152px
      Margin: 0 auto
      
      Staff Cards (7 total):
        Same structure as Home page staff cards
        [Repeat for each team member]
```

#### Section 3: Instagram Feed
```
Block: Kadence Row Layout
Background: Palette - Muted
Padding: 64px top, 64px bottom

Inner Blocks:
  - Section Header with Instagram icon
  
  - Kadence Row Layout:
      Columns: 4 (tablet: 2, mobile: 2)
      Column Gap: 16px
      Row Gap: 16px
      Max Width: 1152px
      Margin: 0 auto
      
      Instagram Post Placeholders (8 total):
        Block: Image Block or Custom HTML
        Aspect Ratio: 1:1
        Border Radius: 12px
        Background: Gradient (Primary to Secondary)
        Link: https://instagram.com/vet3equine
        
        Inner Content: Instagram icon placeholder
```

#### Section 4: CTA
```
Same as Home page final CTA
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
Similar to About page hero
Title: "Fully Mobile Independent Equine Vets - Norfolk & Suffolk"
Description: Service overview text
```

#### Section 2: Services (Mobile - Accordion)
```
Block: Kadence Accordion Block
Show on: Mobile and Tablet only (use Kadence visibility controls)
Max Width: 896px
Margin: 0 auto

Accordion Items (16 services):
  Each Item:
    Title: Service name with icon
    Content: Service description
    
    Styling:
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 16px
      Margin Bottom: 16px
      Padding: 24px
      
      Title:
        Font Size: 16px
        Font Weight: 600
        Display: Flex with icon
      
      Content:
        Font Size: 14px
        Color: Palette - Muted Text
        Padding Left: 56px (to align with icon)
```

#### Section 3: Services (Desktop - Grid)
```
Block: Kadence Row Layout
Show on: Desktop only
Background: Palette - Background
Padding: 64px top, 64px bottom

Inner Blocks:
  - Kadence Row Layout:
      Columns: 3 (large screens), 2 (medium screens)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1280px
      Margin: 0 auto
      
      Service Cards (16 total):
        Same structure as Home page service cards
        [One for each service from the list]
```

#### Section 4: Emergency Banner
```
Block: Kadence Row Layout
Background: Palette - Accent at 10% opacity
Padding: 48px top, 48px bottom

Inner Content:
  - Kadence Row Layout (inner):
      Columns: 1
      Max Width: 896px
      Margin: 0 auto
      Align: Center
      
      Content:
        - Advanced Heading (H3):
            Text: "Need Immediate Assistance?"
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Our emergency line is available 24/7..."
            Margin Bottom: 24px
        
        - Button:
            Text: "Call Now: 01603 123 456"
            Icon: Phone
            Link: tel:01603123456
            Background: Palette - Primary
            Size: Large
```

#### Section 5: CTA
```
Block: Kadence Row Layout
Background: Palette - Primary
Padding: 64px top, 64px bottom

Inner Content:
  - Advanced Heading (H2):
      Text: "Register with Independent Equine Vets"
      Color: #FFFFFF
      Align: Center
  
  - Advanced Paragraph:
      Description
      Color: #FFFFFF
      Opacity: 0.95
      Align: Center
      Max Width: 672px
      Margin: 0 auto 32px auto
  
  - Kadence Row Layout (buttons):
      Columns: 2 (mobile: 1)
      Gap: 16px
      Max Width: 500px
      Margin: 0 auto
      
      Button 1:
        Text: "Register Your Horse"
        Background: Palette - Secondary
        Color: Palette - Foreground
      
      Button 2:
        Text: "Check Your Zone"
        Style: Outline
        Border Color: #FFFFFF
        Color: #FFFFFF
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
Background: Palette - Background
Padding: 64px top, 48px bottom

Inner Content:
  - Advanced Heading (H1):
      Text: "Register Your Horse"
      Align: Center
  
  - Advanced Paragraph:
      Description
      Align: Center
      Color: Palette - Muted Text
      Max Width: 768px
      Margin: 0 auto
```

#### Section 2: Form Card
```
Block: Kadence Row Layout
Background: Palette - Background
Padding: 0 (container padding only), 64px bottom
Max Width: 768px
Margin: 0 auto

Inner Blocks:
  - Kadence Advanced Card:
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 16px
      Padding: 32px
      Box Shadow: Medium
      
      Card Header:
        - Advanced Heading (H2):
            Text: "Horse Registration Form"
            Font Size: 24px
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: Form description
            Font Size: 14px
            Color: Palette - Muted Text
            Padding Bottom: 24px
            Border Bottom: 1px solid Palette - Border
      
      Card Content:
        - Contact Form 7 or WPForms shortcode
        
        OR build with Kadence Form Block:
        
        Form Fields (organized in sections):
        
        **Section 1: Owner Information**
        - Text Input: First Name * (50% width)
        - Text Input: Last Name * (50% width)
        - Email Input: Email Address *
        - Tel Input: Phone Number * (50% width)
        - Tel Input: Alternative Phone (50% width)
        - Textarea: Address *
        - Text Input: Town/City * (50% width)
        - Text Input: Postcode * (50% width)
        
        Divider (1px, Palette - Border)
        
        **Section 2: Horse Information**
        - Text Input: Horse Name * (50% width)
        - Text Input: Breed (50% width)
        - Number Input: Age * (33% width)
        - Text Input: Sex * (33% width)
        - Text Input: Color (33% width)
        - Text Input: Microchip Number
        
        Divider
        
        **Section 3: Horse Address**
        - Textarea: Address *
        - Text Input: Town/City * (50% width)
        - Text Input: Postcode * (50% width)
        
        Divider
        
        **Section 4: Previous Vet**
        - Text Input: Previous Vet Name (50% width)
        - Tel Input: Previous Vet Contact (50% width)
        
        Divider
        
        **Section 5: Consent**
        - Checkbox: Permission for clinical history
        - Checkbox: Terms & Conditions agreement *
        - Advanced Paragraph: Links to Terms and Privacy
        
        **Submit Button**
        - Text: "Complete Registration"
        - Style: Primary
        - Background: Palette - Primary
        - Width: Full
        - Size: Large
        - Margin Top: 24px

Form Styling:
  Label Font Size: 14px
  Label Font Weight: 500
  Label Margin Bottom: 8px
  
  Input Border: 1px solid Palette - Border
  Input Border Radius: 6px
  Input Padding: 8px 12px
  Input Font Size: 14px
  Input Focus Border: Palette - Accent
  Input Focus Shadow: 0 0 0 2px rgba(107, 197, 232, 0.2)
  
  Checkbox Size: 16px
  Checkbox Border: 1px solid Palette - Primary
  
  Section Headers:
    Font Size: 18px
    Font Weight: 600
    Margin Bottom: 24px
    Margin Top: 32px (except first)
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
Padding: 0 (container padding only), 64px bottom

Inner Blocks:
  - Kadence Row Layout:
      Columns: 2 (1 narrow, 1 wide = 33% / 67%)
      Mobile: Stack to 1 column
      Column Gap: 32px
      Max Width: 1024px
      Margin: 0 auto
      
      **Left Column: Contact Info Cards**
      
      Card 1 - Phone:
        Block: Kadence Advanced Card
        Background: #FFFFFF
        Border: 1px solid Palette - Border
        Border Radius: 12px
        Padding: 24px
        Margin Bottom: 24px
        
        Content:
          - Icon (Phone) in circle background
          - Heading: "Phone"
          - Text: "24/7 Emergency Line"
          - Link: 01603 123 456
      
      Card 2 - WhatsApp:
        Same structure
        Content: WhatsApp info with hours
      
      Card 3 - Email:
        Same structure
        Content: Email address
      
      Card 4 - Location:
        Same structure
        Content: "Serving Norfolk & Suffolk"
      
      Card 5 - Hours:
        Same structure
        Content: Opening hours
      
      **Right Column: Contact Form**
      
      Block: Kadence Advanced Card
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 12px
      Padding: 32px
      Height: 100%
      
      Content:
        - Advanced Heading (H2):
            Text: "Send Us a Message"
            Margin Bottom: 24px
        
        - Contact Form (using form plugin):
            Fields:
            - Text: First Name * (50% width)
            - Text: Last Name * (50% width)
            - Email: Email Address *
            - Tel: Phone Number
            - Text: Subject *
            - Textarea: Message * (rows: 6)
            
            Submit Button:
              Text: "Send Message"
              Style: Primary
              Width: Full
              Size: Large
        
        - Advanced Paragraph (below form):
            Text: "We aim to respond within 24 hours..."
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
Same structure as other pages
Title: "Zone Visit Schedule"
Description: Zone visit explanation
```

#### Section 2: Map Placeholder
```
Block: Kadence Row Layout
Padding: 0 (container padding), 32px bottom

Inner Block:
  - Kadence Advanced Card:
      Background: Palette - Muted
      Aspect Ratio: 16:9
      Border Radius: 12px
      Display: Flex
      Align: Center
      Justify: Center
      Max Width: 1024px
      Margin: 0 auto
      
      Content:
        - Icon (Map Pin):
            Size: 64px
            Color: Palette - Muted Text
        - Advanced Heading:
            Text: "Zone Visit Map"
            Font Size: 20px
            Margin Top: 16px
        - Advanced Paragraph:
            Text: "Interactive map showing coverage zones..."
            Font Size: 14px
            Color: Palette - Muted Text
```

#### Section 3: Zone Cards
```
Block: Kadence Row Layout
Padding: 32px top, 32px bottom

Inner Content:
  - Advanced Heading (H2):
      Text: "Our Visit Zones"
      Align: Center
      Margin Bottom: 48px
  
  - Kadence Row Layout:
      Columns: 3 (tablet: 2, mobile: 1)
      Column Gap: 24px
      Row Gap: 24px
      Max Width: 1024px
      Margin: 0 auto
      
      Zone Cards (6 total):
        Block: Kadence Advanced Card
        
        Card Header:
          - Zone Name (e.g., "Zone A - North Norfolk")
            Font Size: 18px
            Font Weight: 600
            Margin Bottom: 8px
          
          - Areas List (e.g., "Cromer, Sheringham...")
            Font Size: 14px
            Color: Palette - Muted Text
        
        Card Content:
          - Icon + Visit Days
            Display: Flex with Calendar icon
            Font Size: 14px
            Color: Palette - Accent
            Font Weight: 500
        
        Card Styling:
          Background: #FFFFFF
          Border: 1px solid Palette - Border
          Border Radius: 12px
          Padding: 24px
          Box Shadow on Hover
```

#### Section 4: Information & Form
```
Block: Kadence Row Layout
Padding: 32px top, 64px bottom

Inner Blocks:
  - Kadence Row Layout:
      Columns: 2 (mobile: 1)
      Column Gap: 32px
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
            Margin Bottom: 16px
        
        - Advanced Paragraph:
            Explanation text
            Margin Bottom: 16px
        
        - Unordered List:
            - Reduce travel time and costs
            - Predictable appointment scheduling
            - Serve more clients in each area
            - Maintain competitive pricing
            
            List Styling:
              Margin Left: 24px
              Line Height: 2
        
        - Advanced Paragraph:
            Emergency services note
            Font Weight: 600
            Margin Top: 16px
        
        - Advanced Paragraph:
            "Not sure which zone..." note
      
      **Right Column: Enquiry Form**
      
      Block: Kadence Advanced Card
      Background: #FFFFFF
      Border: 1px solid Palette - Border
      Border Radius: 12px
      Padding: 24px
      
      Content:
        - Advanced Heading:
            Text: "Zone Enquiry"
            Margin Bottom: 8px
        
        - Advanced Paragraph:
            Text: "Not sure about your zone?..."
            Font Size: 14px
            Color: Palette - Muted Text
            Margin Bottom: 24px
        
        - Form Fields:
            - Text: Name *
            - Email: Email *
            - Tel: Phone Number *
            - Text: Postcode *
            - Textarea: Full Address (rows: 2)
            - Textarea: Additional Information (rows: 3)
            
            Submit Button:
              Text: "Send Enquiry"
              Style: Primary
              Width: Full
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
Padding: 64px top, 32px bottom

Inner Content:
  - Advanced Heading (H1):
      Text: "Terms & Conditions"
      Margin Bottom: 32px
```

#### Section 2: Content Cards
```
Block: Kadence Row Layout
Padding: 0 (container), 64px bottom

Inner Blocks:
  - Kadence Column (Single column, max-width: 896px, centered)
      
      Content Cards (7 sections):
      
      Each Section as Kadence Advanced Card:
        Background: #FFFFFF
        Border: 1px solid Palette - Border
        Border Radius: 16px
        Padding: 32px
        Margin Bottom: 32px
        
        Content:
          - Advanced Heading (H2):
              Section title (e.g., "1. Introduction")
              Font Size: 24px
              Margin Bottom: 16px
          
          - Advanced Paragraph:
              Section content
              Font Size: 16px
              Line Height: 1.75
              Color: Palette - Muted Text
      
      Sections:
      1. Introduction
      2. Services
      3. Appointments and Cancellations
      4. Payment Terms
      5. Emergency Services
      6. Liability
      7. Contact
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
2. Information We Collect (with bullet list)
3. How We Use Your Information (with bullet list)
4. Data Security
5. Data Sharing (with bullet list)
6. Your Rights (with bullet list)
7. Contact Us

---

## 10. Custom CSS & JavaScript

### Adding Custom CSS

**Go to: Appearance → Customize → Additional CSS**

Add the following custom CSS from the export package:

```css
/* Copy relevant sections from export/css/styles.css */

/* Accordion enhancements (for Services page mobile) */
.kb-accordion .kb-accordion-pane-header {
  transition: background-color 0.2s ease;
}

.kb-accordion .kb-accordion-pane-header:hover {
  background-color: rgba(242, 245, 247, 0.5);
}

/* Form validation styles */
.form-input.error,
.form-textarea.error {
  border-color: #DC2626;
}

.field-error {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #DC2626;
}

/* Staff card hover effects */
.staff-card:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Service card icon hover */
.service-card:hover .icon-wrapper {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

/* Testimonial quote icon */
.testimonial-quote-icon {
  opacity: 0.3;
}

/* Footer contact icons */
.footer-contact {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.footer-contact-icon {
  flex-shrink: 0;
  margin-top: 0.125rem;
}

/* Instagram grid hover effect */
.instagram-post {
  transition: opacity 0.3s ease;
}

.instagram-post:hover {
  opacity: 0.9;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Print styles */
@media print {
  .navbar,
  .footer,
  .btn {
    display: none !important;
  }
  
  .kb-row-layout-wrap {
    page-break-inside: avoid;
  }
}
```

### Adding Custom JavaScript

**Option 1: Using a Plugin**
- Install "Code Snippets" plugin
- Add new snippet with the JavaScript from `export/js/main.js`

**Option 2: Child Theme**
- Create a child theme
- Enqueue the JavaScript file in functions.php:

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

**Option 3: Footer Scripts (Simple)**
- Go to **Appearance → Customize → Additional Scripts**
- Paste the minified version of the JavaScript in the footer scripts section

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
✓ Desktop (1024px+)
✓ Large Desktop (1440px+)
```

### Performance Optimization

**Install Performance Plugin**
```
Recommended: WP Rocket or similar
```

**Optimization Checklist**
```
✓ Enable caching
✓ Minify CSS and JavaScript
✓ Optimize images (use WebP format)
✓ Enable lazy loading for images
✓ Combine CSS files
✓ Load critical CSS inline
✓ Defer non-critical JavaScript
✓ Use CDN for assets (optional)
```

**Image Optimization**
```
✓ Compress images before upload
✓ Use appropriate image sizes
✓ Add alt text to all images
✓ Lazy load images below the fold
✓ Use srcset for responsive images
```

### SEO Configuration

**Install SEO Plugin**
```
Recommended: Yoast SEO or Rank Math
```

**Configure Each Page:**
```
✓ Meta Title (under 60 characters)
✓ Meta Description (under 160 characters)
✓ Focus Keyword
✓ URL Slug (clean, descriptive)
✓ Open Graph image
✓ Schema markup (where applicable)
```

**Example Meta for Home Page:**
```
Title: Vet3 Equine Care - Independent Equine Vets | Norfolk & Suffolk
Description: Fully mobile independent equine vets serving Norfolk & Suffolk. Regular zone visits across the region. Expert horse care from professional vets. 24/7 emergency service.
Keywords: equine vets norfolk, horse vets suffolk, independent vets, mobile equine veterinary
```

### Accessibility Testing
```
✓ Keyboard navigation works
✓ All images have alt text
✓ Color contrast meets WCAG AA standards
✓ Form labels are properly associated
✓ Links have descriptive text
✓ Headings follow logical hierarchy
✓ ARIA labels where needed
```

### Form Testing
```
✓ All form fields validate correctly
✓ Required fields are marked
✓ Email validation works
✓ Phone number validation works
✓ Success messages display
✓ Error messages are clear
✓ Form submissions are received
✓ Thank you/confirmation page works
```

### Analytics Setup

**Install Google Analytics**
```
1. Create Google Analytics 4 property
2. Install "Site Kit by Google" plugin
3. Connect to your Google account
4. Enable Google Analytics
5. Add tracking to all pages
```

**Track Important Events:**
```
- Form submissions (Register, Contact, Zone Enquiry)
- Phone number clicks
- Email clicks
- Button clicks (CTAs)
- Instagram link clicks
```

### Final Checklist

**Content**
```
✓ All text is proofread
✓ All links work correctly
✓ Contact information is correct
✓ Social media links are correct
✓ Logo displays correctly
✓ All images are optimized
✓ Alt text added to all images
```

**Functionality**
```
✓ Mobile menu works
✓ All forms submit correctly
✓ All buttons link correctly
✓ Phone links work on mobile
✓ Email links open email client
✓ Social links open in new tab
✓ Smooth scrolling works
✓ Accordion expands/collapses (Services page)
```

**Design**
```
✓ Colors match style guide
✓ Typography matches style guide
✓ Spacing is consistent
✓ Cards have proper hover states
✓ Buttons have proper hover states
✓ Layout is responsive on all devices
✓ Footer displays correctly
✓ Header is sticky
```

**Performance**
```
✓ Page load time < 3 seconds
✓ Images are lazy loaded
✓ CSS is minified
✓ JavaScript is minified
✓ No console errors
✓ Mobile performance score > 80
✓ Desktop performance score > 90
```

---

## Maintenance Tips

### Regular Updates
```
- Update WordPress core monthly
- Update Kadence Theme when available
- Update Kadence Blocks when available
- Update all plugins regularly
- Backup before each update
```

### Monthly Checks
```
- Test all forms
- Check all links
- Review Google Analytics
- Check for broken images
- Review site speed
- Check mobile display
- Review security logs
```

### Content Updates
```
- Update staff bios as needed
- Add new services when offered
- Update zone schedules
- Refresh testimonials
- Update Instagram feed
- Keep blog/news updated (if added)
```

---

## Support Resources

### Kadence Documentation
- https://www.kadencewp.com/help-center/
- https://www.kadencewp.com/kadence-blocks/

### WordPress Resources
- https://wordpress.org/support/
- https://developer.wordpress.org/

### Useful Tools
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- Wave Accessibility: https://wave.webaim.org/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

---

## Troubleshooting Common Issues

### Issue: Colors Not Displaying Correctly
**Solution:** 
1. Check Global Palette settings in Customizer → General → Colors
2. Ensure color codes match the style guide exactly
3. Clear browser cache and Kadence cache

### Issue: Mobile Menu Not Working
**Solution:**
1. Check Header settings → Mobile menu is enabled
2. Verify breakpoint is set to 768px
3. Clear JavaScript cache
4. Check for JavaScript conflicts with other plugins

### Issue: Forms Not Submitting
**Solution:**
1. Check form plugin settings
2. Verify email addresses in form settings
3. Check spam filter settings
4. Test with anti-spam features disabled
5. Check server email configuration

### Issue: Images Not Loading
**Solution:**
1. Verify image paths are correct
2. Check file permissions on uploads folder
3. Regenerate thumbnails using plugin
4. Check lazy loading settings

### Issue: Layout Breaking on Mobile
**Solution:**
1. Check Kadence Row Layout responsive settings
2. Verify column settings for mobile breakpoint
3. Test in multiple mobile browsers
4. Check for custom CSS conflicts

---

## Next Steps After Setup

1. **Test Everything**: Go through every page and test all functionality
2. **Ask for Feedback**: Have colleagues or friends review the site
3. **Launch Checklist**: 
   - SSL certificate installed
   - 301 redirects configured (if migrating)
   - Search engines can index site
   - XML sitemap submitted to Google
   - Google Analytics tracking
   - Contact forms tested
4. **Monitor**: Check analytics and error logs regularly
5. **Iterate**: Continuously improve based on user feedback

---

This completes the Kadence-specific setup guide. Follow this guide step-by-step to recreate the Vet3 Equine Care website in WordPress with Kadence theme and blocks.
