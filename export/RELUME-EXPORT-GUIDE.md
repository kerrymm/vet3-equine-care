# Relume Export Guide - Vet3 Equine Care

This guide provides everything you need to recreate the Vet3 Equine Care website using Relume's Site Builder and component library.

## Table of Contents
1. [Site Structure & Sitemap](#site-structure--sitemap)
2. [Component Library Mapping](#component-library-mapping)
3. [Page-by-Page Relume Components](#page-by-page-relume-components)
4. [How to Use with Relume AI](#how-to-use-with-relume-ai)
5. [Content Briefs for AI Generation](#content-briefs-for-ai-generation)

---

## Site Structure & Sitemap

```
Vet3 Equine Care Website
│
├── Home (/)
│   ├── Hero Section with CTA
│   ├── Services Overview (3 cards)
│   ├── About Preview
│   ├── Emergency CTA
│   └── Registration CTA
│
├── About (/about)
│   ├── Mission Hero
│   ├── Team Section (4 staff cards)
│   ├── Instagram Feed Preview
│   └── Registration CTA
│
├── Services (/services)
│   ├── Services Hero
│   ├── Service Cards Grid (6 services)
│   ├── Emergency Info Banner
│   └── Registration CTA
│
├── Register (/register)
│   ├── Registration Hero
│   ├── Multi-step Form
│   └── Success Message
│
├── Contact (/contact)
│   ├── Contact Info Cards (4 cards)
│   └── Contact Form
│
├── Zone Visit (/zone-visit)
│   ├── Zone Info Hero
│   ├── Interactive Map Placeholder
│   ├── Zone Cards Grid (4 zones)
│   ├── About Zone Visits
│   └── Enquiry Form
│
├── Terms & Conditions (/terms)
│   └── Legal Content Sections
│
└── Privacy Policy (/privacy)
    └── Privacy Content Sections
```

---

## Component Library Mapping

### Navigation Components
- **Main Navigation**: `Header 1` or `Header 2` (with logo left, nav center/right, CTA button)
- **Mobile Menu**: Built-in hamburger menu functionality

### Hero Components
| Page | Relume Component | Notes |
|------|-----------------|-------|
| Home | `Header 76` or `Header 1` | Full-screen hero with background image overlay, centered text, dual CTAs |
| About | `Header 3` or `Header 5` | Centered hero with headline and description |
| Services | `Header 2` | Image + text layout |
| Register | `Header 4` | Simple centered header with form focus |
| Contact | `Header 6` | Split layout with info cards |
| Zone Visit | `Header 3` | Centered with map preview |

### Content Sections

#### Card Grids
- **Services Grid** (3 or 6 cards): `Layout 4`, `Layout 5`, or `Layout 243`
- **Staff Team Grid** (4 cards): `Team 1`, `Team 2`, or `Team 4`
- **Zone Cards Grid** (4 cards): `Layout 4` or `Layout 243`
- **Contact Info Cards** (4 cards): `Layout 390` or `Contact 1`

#### CTAs & Banners
- **Emergency CTA**: `CTA 1` or `CTA 26` (centered with icon and button)
- **Registration CTA**: `CTA 2` or `CTA 8` (with background and button)
- **Info Banners**: `Content 3` or `Banner 1`

#### Forms
- **Registration Form**: `Contact 10`, `Contact 14`, or `Form 1` (multi-field form with sections)
- **Contact Form**: `Contact 2` or `Contact 4` (standard 5-field form)
- **Zone Enquiry Form**: `Contact 3` or `Form 2` (detailed form with text area)

#### Content Sections
- **About Text Blocks**: `Content 1` or `Content 2` (text with optional image)
- **Instagram Feed**: `Gallery 1` or `Gallery 2` (grid layout with CTA)
- **FAQ/Accordion**: `FAQ 1` or `FAQ 2` (for services details if needed)

### Footer
- **Footer Component**: `Footer 1` or `Footer 4`
  - Company info column
  - Quick links column
  - Contact info column
  - Social media links
  - Copyright bar

---

## Page-by-Page Relume Components

### 1. HOME PAGE

**Component Stack:**
```
1. Header 76 - Hero Section
   - Background: Full-screen image overlay
   - Headline: "Expert Mobile Equine Veterinary Care"
   - Subheadline: "Across Norfolk & Suffolk"
   - Description: "Professional, compassionate veterinary care..."
   - CTA Primary: "Book an Appointment"
   - CTA Secondary: "Call 24/7: 01603 555 0123"

2. Layout 5 - Services Preview (3 cards)
   - Title: "Our Services"
   - 3 cards: Routine Care, Emergency Services, Specialized Treatments
   - Each card: Icon, title, description, "Learn More" link

3. Content 2 - About Preview
   - Headline: "Dedicated to Your Horse's Health"
   - Text: Mission statement
   - Image: Team photo (optional)

4. CTA 26 - Emergency Banner
   - Icon: Phone/Clock
   - Text: "24/7 Emergency Service Available"
   - Button: "Call Now: 01603 555 0123"

5. CTA 2 - Registration CTA
   - Headline: "New Client?"
   - Description: "Register your horse today"
   - Button: "Register Now"
```

### 2. ABOUT PAGE

**Component Stack:**
```
1. Header 3 - Mission Hero
   - Headline: "Meet Our Team"
   - Description: "Experienced veterinarians dedicated..."

2. Team 4 - Staff Grid (4 cards)
   - 4 team members with photos
   - Each card: Name, role, bio

3. Gallery 2 - Instagram Feed
   - Title: "Follow Us on Instagram"
   - 6-image grid placeholder
   - CTA: "View Instagram" button

4. CTA 8 - Registration CTA
   - Background color/gradient
   - Headline: "Ready to get started?"
   - Button: "Register Your Horse"
```

### 3. SERVICES PAGE

**Component Stack:**
```
1. Header 2 - Services Hero
   - Split layout: image + text
   - Headline: "Comprehensive Veterinary Services"
   - Description: Service overview

2. Layout 243 - Services Grid (6 cards)
   - Title: "What We Offer"
   - 6 service cards:
     * Routine Care & Wellness
     * Emergency Services
     * Dental Care
     * Lameness Evaluation
     * Pre-Purchase Examinations
     * Vaccinations & Health Plans
   - Each card: Icon, title, description

3. Banner 1 - Emergency Info
   - Background: Accent color
   - Text: "Emergency? Call us immediately..."
   - Phone number prominent

4. CTA 2 - Registration CTA
```

### 4. REGISTER PAGE

**Component Stack:**
```
1. Header 4 - Registration Hero
   - Headline: "Register Your Horse"
   - Description: "Quick and easy registration"

2. Contact 14 or Form 1 - Registration Form
   - Owner Information Section:
     * Full Name
     * Email
     * Phone
     * Address
   - Horse Information Section:
     * Horse Name
     * Breed
     * Age
     * Color/Markings
     * Microchip Number
   - Veterinary History Section:
     * Previous Vet (optional)
     * Medical Conditions
     * Current Medications
     * Allergies
   - Emergency Contact Section:
     * Name
     * Phone
     * Relationship
   - Submit button: "Complete Registration"

3. Success Message (inline or modal)
```

### 5. CONTACT PAGE

**Component Stack:**
```
1. Header 6 - Contact Hero
   - Split layout with contact overview

2. Layout 390 - Contact Info Cards (4 cards)
   - Phone Card: "01603 555 0123"
   - WhatsApp Card: "07700 900 000"
   - Email Card: "info@vet3equine.co.uk"
   - Location Card: "Norfolk & Suffolk"

3. Contact 2 - Contact Form
   - Fields: Name, Email, Phone, Subject, Message
   - Submit button: "Send Message"
```

### 6. ZONE VISIT PAGE

**Component Stack:**
```
1. Header 3 - Zone Hero
   - Headline: "Zone Visit Schedule"
   - Description: "Regular scheduled visits..."

2. Content 1 - Map Placeholder
   - Title: "Service Areas"
   - Text: "View our coverage map"
   - Image placeholder for interactive map

3. Layout 4 - Zone Cards (4 cards)
   - Zone A: North Norfolk (Mon, Thu)
   - Zone B: South Norfolk (Tue, Fri)
   - Zone C: East Suffolk (Wed)
   - Zone D: West Suffolk (Wed)
   - Each card: Zone name, areas covered, visit days

4. Content 2 - About Zone Visits
   - Headline: "How Zone Visits Work"
   - Bullet points explaining the service

5. Contact 3 - Zone Enquiry Form
   - Fields: Name, Email, Phone, Postcode, Address, Details
   - Submit: "Send Enquiry"
```

### 7. TERMS & CONDITIONS PAGE

**Component Stack:**
```
1. Header 4 - Legal Hero
   - Headline: "Terms & Conditions"
   - Simple layout

2. Content 1 - Legal Sections
   - Multiple text blocks for each section:
     * Introduction
     * Services
     * Appointments
     * Payment
     * Emergency Services
     * Liability
     * Contact
```

### 8. PRIVACY POLICY PAGE

**Component Stack:**
```
1. Header 4 - Legal Hero
   - Headline: "Privacy Policy"

2. Content 1 - Privacy Sections
   - Multiple text blocks:
     * Introduction
     * Information Collected
     * Usage
     * Security
     * Data Sharing
     * User Rights
     * Contact Information
```

---

## How to Use with Relume AI

### Step 1: Create New Site in Relume
1. Log into your Relume account
2. Click "New Site" in Site Builder
3. Choose "Start from Scratch" or "Use AI"

### Step 2: Use AI Wireframe Generator (Recommended)

**Option A: AI Sitemap to Wireframe**
1. Go to Relume's AI tool
2. Paste the Site Structure from this document
3. Let Relume AI generate the initial wireframe
4. Refine using the component mappings below

**Option B: Manual Component Selection**
1. Add pages manually (Home, About, Services, etc.)
2. For each page, add sections using the Component Stack outlined above
3. Use the exact component names provided (e.g., "Header 76", "Layout 5")

### Step 3: Populate Content
- Use the content from the HTML files in `/export/html/`
- Copy text, headlines, and descriptions directly
- Replace placeholder images with actual photos

### Step 4: Apply Styling
- Use the Style Guide in `/export/STYLE-GUIDE.md`
- Apply colors from the color palette
- Set typography (Outfit font family)
- Configure spacing and shadows

---

## Content Briefs for AI Generation

Use these prompts with Relume's AI to generate specific sections:

### Home Page Hero Prompt
```
Create a full-screen hero section for a mobile equine veterinary practice. 
Include:
- Large headline: "Expert Mobile Equine Veterinary Care Across Norfolk & Suffolk"
- Subheadline about professional and compassionate care
- Two CTA buttons: "Book an Appointment" (primary) and "Call 24/7" (secondary)
- Background: Dark overlay over horse/veterinary image
- Style: Modern, trustworthy, professional
```

### Services Grid Prompt
```
Create a 6-card services grid for equine veterinary services:
1. Routine Care & Wellness - Regular check-ups, wellness exams, preventive care
2. Emergency Services - 24/7 emergency response for critical situations
3. Dental Care - Complete dental examinations and treatments
4. Lameness Evaluation - Comprehensive assessment and treatment plans
5. Pre-Purchase Examinations - Thorough evaluation for buying horses
6. Vaccinations & Health Plans - Customized vaccination schedules

Each card should have an icon, title, and short description.
Style: Clean, professional, medical
```

### Team Section Prompt
```
Create a team section with 4 staff members for a veterinary practice:
1. Dr. Sarah Mitchell - Lead Veterinarian - 15+ years experience in equine medicine
2. Dr. James Cooper - Associate Veterinarian - Specialist in lameness and sports medicine
3. Emma Thompson - Veterinary Nurse - Certified in equine emergency care
4. Lisa Parker - Practice Manager - Coordinates care and client communications

Include photo placeholders and brief bios.
Style: Approachable, professional, trustworthy
```

### Contact Form Prompt
```
Create a contact form with these fields:
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Subject (dropdown: General Inquiry, Emergency, Appointment Request, Other)
- Message (text area, required)
- Submit button: "Send Message"

Style: Clean, accessible, with good spacing
Include form validation indicators
```

### Registration Form Prompt
```
Create a multi-section registration form for new equine clients:

Section 1 - Owner Information:
- Full Name, Email, Phone, Full Address

Section 2 - Horse Information:
- Horse Name, Breed, Age, Color/Markings, Microchip Number

Section 3 - Veterinary History:
- Previous Veterinarian, Medical Conditions, Current Medications, Known Allergies

Section 4 - Emergency Contact:
- Name, Phone, Relationship to Owner

Submit button: "Complete Registration"

Style: Multi-step or sectioned layout, clear labels, good spacing
```

---

## Design Tokens for Relume

### Colors (Apply in Relume Global Styles)

**Primary Colors:**
- Primary: `#050D2B` / `hsl(235, 95%, 13%)` (Dark Navy - main brand color)
- Primary Hover: `#0A1546` (slightly lighter for hover states)
- Primary Dark: `#020614` (active states)

**Accent Colors:**
- Accent: `#5DBADD` / `hsl(200, 85%, 65%)` (Light Blue - CTAs, highlights)
- Accent Light: `#89D0E8` (hover/lighter variant)
- Accent Dark: `#3AA7CC` (active states)

**Neutral Colors:**
- Background: `#FFFFFF` (White)
- Secondary Background: `#F0F5F7` / `hsl(200, 20%, 95%)` (Light gray-blue)
- Surface: `#FFFFFF` (White cards)
- Text Primary: `#050D2B` / `hsl(235, 50%, 15%)` (Dark Navy)
- Text Secondary: `#596B7A` / `hsl(235, 20%, 50%)` (Medium Gray)
- Border: `#D9E5EB` / `hsl(200, 20%, 90%)` (Light Gray-Blue)

**Functional Colors:**
- Error: `#DC2626`
- Success: `#16A34A`
- Warning: `#EA580C`
- Info: `#5DBADD`

### Typography

**Font Family:** Outfit (available in Google Fonts)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Font Sizes:**
- H1: 48px / 3rem (Hero headlines)
- H2: 36px / 2.25rem (Section titles)
- H3: 28px / 1.75rem (Subsection titles)
- H4: 20px / 1.25rem (Card titles)
- Body: 16px / 1rem (Paragraph text)
- Small: 14px / 0.875rem (Meta info, captions)

**Font Weights:**
- Headings: 700 (Bold)
- Subheadings: 600 (Semibold)
- Body: 400 (Regular)
- Emphasis: 500 (Medium)

### Spacing

**Container:**
- Max Width: 1200px
- Padding: 20px (mobile), 40px (tablet), 80px (desktop)

**Section Spacing:**
- Top/Bottom: 60px (mobile), 80px (tablet), 120px (desktop)

**Element Spacing:**
- Between elements: 16px, 24px, 32px
- Card padding: 24px
- Form field spacing: 16px

### Effects

**Border Radius:**
- Cards: 8px
- Buttons: 6px
- Inputs: 6px
- Images: 8px

**Shadows:**
- Card: `0 4px 6px rgba(0, 0, 0, 0.1)`
- Button Hover: `0 8px 16px rgba(43, 95, 68, 0.2)`
- Modal: `0 20px 40px rgba(0, 0, 0, 0.15)`

**Transitions:**
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

---

## Component Customization Notes

### Navigation Bar
- **Sticky:** Yes
- **Background:** White with slight shadow on scroll
- **Logo:** Left-aligned, 40px height
- **Menu:** Center or right-aligned
- **CTA Button:** "24/7 Emergency" with phone icon, accent color

### Buttons
**Primary Button:**
- Background: Dark Navy (#050D2B)
- Text: White
- Hover: Slightly lighter navy (#0A1546)
- Padding: 12px 32px
- Border Radius: 0.75rem (12px)

**Secondary Button:**
- Background: Light Blue (#5DBADD)
- Text: Dark Navy (#050D2B)
- Hover: Lighter Blue (#89D0E8)
- Same padding and border radius

**Outline Button:**
- Border: 2px solid Dark Navy
- Background: Transparent
- Text: Dark Navy
- Hover: Background Dark Navy, Text White

### Cards
- Background: White
- Border: 1px solid #E5E5E5 or none with shadow
- Border Radius: 8px
- Padding: 24px
- Shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
- Hover: Lift effect with larger shadow

### Forms
- Input Background: White
- Border: 1px solid #D9E5EB (Light Gray-Blue)
- Focus Border: Light Blue (#5DBADD)
- Label: Text Secondary (#596B7A), 14px
- Required indicator: Red asterisk
- Error state: Red border and text

### Footer
- Background: Dark Navy (#050D2B)
- Text: White or light gray
- Link Hover: Light Blue (#5DBADD)
- Padding: 60px 20px
- Multi-column layout on desktop, stacked on mobile

---

## Quick Start Workflow

1. **Set Up Site Structure**
   - Create all 8 pages in Relume
   - Use the sitemap structure above

2. **Apply Global Styles**
   - Add color palette to global styles
   - Set font family to Outfit
   - Configure heading sizes

3. **Build Pages**
   - Start with Home page
   - Use component names exactly as listed
   - Copy content from HTML files

4. **Customize Components**
   - Apply specific colors to CTAs and accents
   - Adjust spacing to match design system
   - Add shadows and border radius

5. **Test Responsive**
   - Preview mobile, tablet, desktop
   - Adjust breakpoints as needed

6. **Export**
   - Export to HTML/CSS for Kadence
   - Or sync directly to Webflow if using that integration

---

## Support & References

- **HTML Files:** `/export/html/` - Reference for exact content and structure
- **Style Guide:** `/export/STYLE-GUIDE.md` - Complete design system
- **Wireframes:** `/export/WIREFRAMES.md` - Visual page layouts
- **Kadence Guide:** `/export/KADENCE-SETUP-GUIDE.md` - WordPress-specific implementation

---

## Relume AI Prompt (Complete Site)

If you want to generate the entire site with one AI prompt in Relume, use this:

```
Create a complete website for Vet3 Equine Care, a mobile veterinary practice serving horses in Norfolk & Suffolk, UK.

SITEMAP:
- Home
- About (team of 4)
- Services (6 services)
- Register (multi-step form)
- Contact (info + form)
- Zone Visit (4 zones + enquiry form)
- Terms & Conditions
- Privacy Policy

BRAND STYLE:
- Professional, trustworthy, modern
- Primary color: Dark navy blue (#050D2B)
- Accent color: Light blue (#5DBADD)
- Font: System default (can customize)
- Imagery: Equine/veterinary themed

KEY FEATURES:
- 24/7 emergency service prominent throughout
- Mobile-first (they come to the client)
- Zone-based service area with scheduling
- New client registration flow
- Multiple contact methods (phone, WhatsApp, email, form)

TONE:
- Professional but approachable
- Emphasize expertise and compassion
- Focus on convenience of mobile service
- Highlight emergency availability

Generate full wireframes for all pages with appropriate Relume components.
```

---

**Last Updated:** [Current Date]
**Version:** 1.0
**Project:** Vet3 Equine Care - Relume Export Package
