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
│   ├── Hero Section with CTA (Image Overlay)
│   ├── About Preview with Emergency CTA
│   ├── Team Preview (3 staff cards)
│   ├── Services Preview (6 cards)
│   ├── Testimonials (3 cards)
│   ├── Zone Visit CTA Section
│   └── Registration CTA
│
├── About (/about)
│   ├── Mission Hero
│   ├── Team Section (7 staff cards)
│   ├── Instagram Feed Preview (8 posts)
│   └── Registration CTA
│
├── Services (/services)
│   ├── Services Hero
│   ├── Mobile Accordion (16 services)
│   ├── Desktop Service Cards Grid (16 services)
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
│   ├── Zone Cards Grid (6 zones)
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
- **Main Navigation**: `Navbar 1` or `Navbar 2` (with logo left, nav links, mobile hamburger menu)
- **Mobile Menu**: Responsive hamburger menu with slide-out functionality

### Hero Components
| Page | Relume Component | Notes |
|------|-----------------|-------|
| Home | `Header 1` or `Header 76` | Full-screen hero (500-600px) with background image overlay, white text overlay, dual CTAs |
| About | `Header 3` or `Header 2` | Centered hero with headline and description, light background |
| Services | `Header 2` or `Header 3` | Simple centered layout with headline and description |
| Register | `Header 4` or `Header 2` | Simple centered header with headline and description |
| Contact | `Header 2` or `Header 3` | Centered layout with headline and description |
| Zone Visit | `Header 2` or `Header 3` | Centered with headline and description |

### Content Sections

#### Card Grids
- **Services Grid Home** (6 cards in 3 columns): `Layout 4`, `Layout 5`, or `Layout 243`
- **Services Grid Full** (16 cards): `Layout 4` with accordion on mobile, `Layout 243` grid on desktop
- **Staff Team Grid Home** (3 cards): `Team 1`, `Team 2`, or `Team 6`
- **Staff Team Grid Full** (7 cards in 3 columns): `Team 1`, `Team 2`, or `Team 4`
- **Zone Cards Grid** (6 cards in 3 columns): `Layout 4` or `Layout 243`
- **Contact Info Cards** (5 vertical cards): `Layout 390` or `Contact 1`
- **Testimonials Grid** (3 cards): `Testimonial 1`, `Testimonial 2`, or `Testimonial 17`

#### CTAs & Banners
- **Emergency CTA Inline**: Phone number with icon in colored box (custom component or `Contact 5`)
- **Emergency CTA Banner**: `CTA 1` or `CTA 26` (centered with text, icon, and button)
- **Registration CTA**: `CTA 2` or `CTA 8` (full-width with dark background and button)
- **Zone Visit CTA**: `CTA 4` or custom card with icon, headline, description, and button
- **Info Banners**: `Banner 1` or `Banner 2`

#### Forms
- **Registration Form**: `Contact 10`, `Contact 14`, or `Form 1` (multi-section form: Owner Info, Horse Info, Address, Previous Vet, Consent)
- **Contact Form**: `Contact 2` or `Contact 4` (2-column layout with contact cards on left, form on right)
- **Zone Enquiry Form**: `Contact 3` or `Form 2` (compact form with name, email, phone, postcode, address, message)

#### Content Sections
- **About Text Blocks**: `Content 1` or `Content 2` (centered text with optional image)
- **Instagram Feed**: `Gallery 1` or `Gallery 2` (4-column grid, 2 columns on tablet, 8 placeholder posts)
- **Accordion Services**: `FAQ 1` or `Accordion 1` (mobile-only accordion with icon, title, description)

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
1. Header 1 or Header 76 - Hero Section
   - Background: Full-screen image (500-600px) with dark overlay
   - Headline: "Fully Mobile Independent Equine Vets"
   - Description: Independent, mobile practice details
   - CTA Primary: "Register Your Horse" (accent color)
   - CTA Secondary: "Call 24/7 Support" (outline, white text)

2. Content 2 - About Preview
   - Headline: "Fully Mobile Independent Equine Vets"
   - Text: Mission statement about mobile service
   - Emergency CTA Box: Phone icon + number in colored rounded box

3. Team 6 or Team 2 - Team Preview (3 cards)
   - Title: "Meet Our Team"
   - Description: Team introduction
   - 3 team members with name, role, short bio
   - CTA: "Meet the Full Team" button

4. Layout 5 - Services Preview (6 cards)
   - Title: "Independent Equine Veterinary Services"
   - Description: Service overview
   - 6 service cards: Icon, title, description
   - CTA: "View All Services" button

5. Testimonial 17 or Testimonial 2 - Testimonials (3 cards)
   - Title: "What Our Clients Say"
   - Description: "Trusted by horse owners..."
   - 3 testimonial cards with quote, name, location

6. CTA 4 - Zone Visit Section
   - Card with icon, headline, description, button
   - "Are We In Your Area?"
   - CTA: "View Zone Map & Schedule"
   - Secondary: Phone number link

7. CTA 2 - Registration CTA
   - Full-width dark background
   - Headline: "Join Our Independent Equine Practice"
   - Description: Registration benefits
   - Button: "Register Now"
```

### 2. ABOUT PAGE

**Component Stack:**
```
1. Header 2 or Header 3 - Mission Hero
   - Headline: "Meet Our Fully Mobile Independent Equine Veterinary Team"
   - Description: Team mission and mobile service details

2. Team 4 or Team 1 - Staff Grid (7 cards)
   - 3-column grid (responsive)
   - 7 team members with name, role, bio
   - Placeholder images (initials if no photo)

3. Gallery 2 or Gallery 1 - Instagram Feed
   - Title: "Follow Our Journey"
   - Instagram icon with headline
   - Description and @handle link
   - 8-image grid placeholder (4 columns, 2 on tablet, 2 on mobile)
   - Placeholders show "Post 1", "Post 2", etc.
   - CTA: "@vet3equine" button
   - Note about connecting Instagram account

4. CTA 2 or CTA 8 - Registration CTA
   - Dark navy background
   - Headline: "Experience Independent Equine Veterinary Excellence"
   - Description: Registration benefits
   - Button: "Register Your Horse"
```

### 3. SERVICES PAGE

**Component Stack:**
```
1. Header 2 or Header 3 - Services Hero
   - Headline: "Fully Mobile Independent Equine Vets - Norfolk & Suffolk"
   - Description: Mobile service and zone visits overview

2A. Accordion 1 or FAQ 1 - Services Mobile (16 services)
   - MOBILE ONLY: Accordion layout
   - 16 expandable items
   - Each item: Icon, title in header; description in expanded content
   - All major services: Routine visits, Vaccinations, Microchipping, Dentistry,
     Castrations, Reproductive services, PPE, Lameness, Shockwave therapy,
     Medical workups, Respiratory endoscopy, Gastroscopy, Export certification,
     Referrals, Mobile diagnostics, Small animal euthanasia

2B. Layout 243 or Layout 4 - Services Desktop (16 services)
   - DESKTOP ONLY: Grid layout (2-3 columns)
   - Same 16 services as mobile
   - Each card: Icon in colored circle, title, description
   - Hover effect with shadow

3. Banner 1 or CTA 26 - Emergency Banner
   - Light accent background
   - Headline: "Need Immediate Assistance?"
   - Description: "24/7 emergency line..."
   - Button: "Call Now: 01603 123 456" with phone icon

4. CTA 2 - Registration CTA
   - Dark navy background
   - Headline: "Register with Independent Equine Vets"
   - Description: Registration benefits
   - Two buttons: "Register Your Horse" + "Check Your Zone"
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
1. Header 2 or Header 3 - Contact Hero
   - Headline: "Get In Touch"
   - Description: Contact invitation

2. Contact 1 or Layout 390 - Contact Info Cards (5 cards)
   - LAYOUT: Single column on left side
   - Phone Card: Icon, "Phone", description, 24/7 emergency number
   - WhatsApp Card: Icon, "WhatsApp", hours, number with link
   - Email Card: Icon, "Email", description, email link
   - Location Card: Icon, "Location", "Serving Norfolk & Suffolk"
   - Hours Card: Icon, "Hours", emergency + office hours

3. Contact 2 or Contact 4 - Contact Form
   - LAYOUT: 2-column grid (cards left, form right)
   - Form card with title "Send Us a Message"
   - Fields: First Name, Last Name (2 columns), Email, Phone, Subject, Message
   - Submit button: "Send Message"
   - Note about response time at bottom
```

### 6. ZONE VISIT PAGE

**Component Stack:**
```
1. Header 2 or Header 3 - Zone Hero
   - Headline: "Zone Visit Schedule"
   - Description: "Regular scheduled visits across Norfolk & Suffolk..."

2. Content 1 - Map Placeholder Card
   - Large card with aspect-video ratio
   - MapPin icon, title, description
   - Placeholder for interactive map

3. Layout 4 or Layout 243 - Zone Cards (6 cards)
   - 3-column grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
   - Zone A: North Norfolk (Mon, Thu) - Cromer, Sheringham, North Walsham
   - Zone B: Norwich & Surrounds (Tue, Fri) - Norwich, Wymondham, Dereham
   - Zone C: South Norfolk (Wed) - Diss, Thetford, Attleborough
   - Zone D: Suffolk North (Mon, Thu) - Lowestoft, Beccles, Bungay
   - Zone E: Suffolk South (Tue, Fri) - Ipswich, Stowmarket, Bury St Edmunds
   - Zone F: Suffolk Coast (Wed) - Southwold, Aldeburgh, Woodbridge
   - Each card: Zone name (title), areas (description), days with calendar icon

4. Contact 3 or Contact 10 - Zone Information & Form
   - 2-column grid layout
   - LEFT: Info card "About Zone Visits" with bullet points and emergency note
   - RIGHT: Enquiry form card with fields:
     * Name, Email, Phone (required)
     * Postcode (required), Address, Additional Information
     * Submit: "Send Enquiry"
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
Create a 16-card services grid (or accordion for mobile) for equine veterinary services:
1. Routine Visits and Examinations
2. Vaccinations
3. Equine Passport and Microchipping
4. Dentistry (motorised, wolf tooth removal)
5. Castrations
6. Reproductive Services and Artificial Insemination
7. Pre Purchase Examination (PPE) and Radiography
8. Onsite Lameness Workups
9. Extracorporeal Shockwave Therapy and Class IV Laser Treatment
10. Medical Workups
11. Respiratory Endoscopy
12. Gastroscopy
13. Export Certification
14. Referrals
15. Fully Mobile Diagnostics
16. Home Euthanasia for Small Animals

Mobile: Accordion layout with expandable items
Desktop: 2-3 column grid
Each card: Icon in colored circle, title, description
Style: Clean, professional, medical
```

### Team Section Prompt
```
Create a team section with 7 staff members for an independent equine veterinary practice:
1. Dr. Sarah Mitchell - Lead Veterinarian - 20+ years equine experience, sports medicine
2. Dr. James Anderson - Senior Veterinarian - Equine reproduction and internal medicine
3. Emily Roberts - Veterinary Nurse - 10 years experience, exceptional nursing care
4. Dr. Michael Chen - Veterinarian - Equine lameness and diagnostic imaging specialist
5. Lucy Thompson - Veterinary Nurse - Patient care and client education
6. Dr. Rebecca Foster - Veterinarian - 8 years in equine dentistry and preventive care
7. Tom Williams - Practice Manager - Operations and client services

Home page: Show first 3 members with CTA to "Meet the Full Team"
About page: Show all 7 members in 3-column grid
Include photo placeholders (show initials if no photo) and bio paragraphs
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
Create a complete website for Vet3 Equine Care, a fully mobile independent equine veterinary practice serving Norfolk & Suffolk, UK.

SITEMAP:
- Home (hero + about preview + team preview (3) + services (6) + testimonials (3) + zone CTA + register CTA)
- About (hero + team of 7 + Instagram feed (8 posts) + register CTA)
- Services (hero + 16 services with accordion mobile/grid desktop + emergency banner + register CTA)
- Register (hero + multi-section form with owner/horse/address/previous vet/consent)
- Contact (hero + 5 info cards + contact form in 2-column layout)
- Zone Visit (hero + map placeholder + 6 zone cards + info section + enquiry form)
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
