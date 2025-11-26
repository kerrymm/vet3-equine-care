# Vet3 Equine Care - Wireframes

This document contains visual wireframes for all pages in the Vet3 Equine Care website.

---

## 1. Home Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar with Logo] --> B[Hero Section - Full-width Image with Overlay]
    B --> C[H1: Fully Mobile Independent Equine Vets]
    B --> D[CTA Buttons: Register Your Horse + Call 24/7]
    D --> E[About Preview Section]
    E --> F[24/7 Emergency Support Card]
    F --> G[Meet Our Team Section - 3 Column Grid]
    G --> H[Services Preview - 6 Service Cards in Grid]
    H --> I[Testimonials Section - 3 Column Cards]
    I --> J[Zone Visit CTA Section with Map Icon]
    J --> K[Final CTA Section - Register Now]
    K --> L[Footer with Contact Info + Links]
</lov-presentation-mermaid>

### Home Page Layout Details:
- **Navigation**: Sticky top navigation with logo (left) and menu items (right)
- **Hero**: Full-width background image with dark overlay, centered text and CTAs
- **About**: Centered text content with emergency phone number highlight card
- **Team**: 3-column grid of staff cards with photos, names, roles, and bios
- **Services**: 3-column grid (2 rows) of service cards with icons and descriptions
- **Testimonials**: 3-column quote cards with customer names and locations
- **Zone Visit**: Large centered card with icon, description, and CTA button
- **Final CTA**: Full-width colored section with centered text and button
- **Footer**: 3-column layout with about, links, and contact information

---

## 2. About Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar] --> B[Hero Section - Text Only]
    B --> C[H1: Meet Our Fully Mobile Independent Team]
    C --> D[Description Paragraph]
    D --> E[All Staff Section - 3 Column Grid of 7 Cards]
    E --> F[Instagram Feed Section]
    F --> G[Instagram Icon + Title]
    F --> H[Follow Button]
    F --> I[4 Column Grid of 8 Instagram Post Placeholders]
    I --> J[Final CTA Section - Register]
    J --> K[Footer]
</lov-presentation-mermaid>

### About Page Layout Details:
- **Hero**: Light background section with centered heading and description
- **Staff Grid**: 3-column responsive grid showcasing 7 team members
- **Instagram Section**: 
  - Centered header with Instagram icon
  - Follow button linking to @vet3equine
  - 4-column grid (2 columns on mobile) with 8 post placeholders
- **CTA**: Primary colored section with registration call-to-action

---

## 3. Services Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar] --> B[Hero Section]
    B --> C[H1: Fully Mobile Independent Equine Vets]
    C --> D[Description Text]
    D --> E{Screen Size?}
    E -->|Mobile/Tablet| F[Accordion List of Services]
    E -->|Desktop| G[Grid Layout of Service Cards]
    G --> H[Emergency Banner]
    F --> H
    H --> I[Final CTA Section]
    I --> J[Footer]
</lov-presentation-mermaid>

### Services Page Layout Details:
- **Hero**: Text-only section with title and description
- **Services Display**:
  - **Mobile/Tablet**: Accordion/collapsible list (1 column) - 16 services
  - **Desktop**: 2-3 column grid of cards with icons and full descriptions
- **Services Include**: 
  1. Routine Visits and Examinations
  2. Vaccinations
  3. Equine Passport and Microchipping
  4. Dentistry
  5. Castrations
  6. Reproductive Services and AI
  7. Pre Purchase Examination
  8. Onsite Lameness Workups
  9. Shockwave Therapy and Laser Treatment
  10. Medical Workups
  11. Respiratory Endoscopy
  12. Gastroscopy
  13. Export Certification
  14. Referrals
  15. Fully Mobile Diagnostics
  16. Home Euthanasia for Small Animals
- **Emergency Banner**: Highlighted section with phone number and CTA button
- **Final CTA**: Two-button layout (Register + Check Your Zone)

---

## 4. Register Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar] --> B[Header Section]
    B --> C[H1: Register Your Horse]
    C --> D[Form Card]
    D --> E[Owner Information Section]
    E --> F[First Name, Last Name, Email, Phone, Address, City, Postcode]
    F --> G[Horse Information Section]
    G --> H[Horse Name, Breed, Age, Sex, Color, Microchip]
    H --> I[Horse Address Section]
    I --> J[Address, City, Postcode]
    J --> K[Previous Vet Section]
    K --> L[Previous Vet Name, Contact Number]
    L --> M[Consent Checkboxes]
    M --> N[Submit Button]
    N --> O[Footer]
</lov-presentation-mermaid>

### Register Page Layout Details:
- **Header**: Centered title and description
- **Form Structure**:
  - Single column form within a card component
  - Sections clearly separated with borders
  - Grid layouts for related fields (2 columns where appropriate)
  - Required fields marked with asterisk
  - Checkboxes for permissions with links to Terms and Privacy
- **Form Sections**:
  1. Owner Information
  2. Horse Information
  3. Address Where Horse is Kept
  4. Previous Veterinary Practice
  5. Consent and Permissions
- **Submit Button**: Full-width primary button with loading state

---

## 5. Contact Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar] --> B[Header Section]
    B --> C[H1: Get In Touch]
    C --> D[2 Column Layout]
    D --> E[Left Sidebar - Contact Info Cards]
    E --> F[Phone Card]
    E --> G[WhatsApp Card]
    E --> H[Email Card]
    E --> I[Location Card]
    E --> J[Hours Card]
    D --> K[Right Column - Contact Form]
    K --> L[First Name, Last Name]
    K --> M[Email, Phone]
    K --> N[Subject]
    K --> O[Message]
    K --> P[Submit Button]
    P --> Q[Footer]
</lov-presentation-mermaid>

### Contact Page Layout Details:
- **Layout**: 3-column grid (1 column sidebar + 2 column form on desktop)
- **Contact Cards**: Stacked vertically with icons
  - Phone (24/7 Emergency)
  - WhatsApp (8:30am - 5:30pm only)
  - Email
  - Location (Norfolk & Suffolk)
  - Hours
- **Contact Form**: Large form card with all fields
- **Responsive**: Stacks to single column on mobile

---

## 6. Zone Visit Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar] --> B[Header Section]
    B --> C[H1: Zone Visit Schedule]
    C --> D[Map Placeholder Card]
    D --> E[Our Visit Zones Section]
    E --> F[3 Column Grid of Zone Cards]
    F --> G[Zone A - North Norfolk]
    F --> H[Zone B - Norwich & Surrounds]
    F --> I[Zone C - South Norfolk]
    F --> J[Zone D - Suffolk North]
    F --> K[Zone E - Suffolk South]
    F --> L[Zone F - Suffolk Coast]
    L --> M[2 Column Layout]
    M --> N[About Zone Visits Card]
    M --> O[Zone Enquiry Form]
    O --> P[Footer]
</lov-presentation-mermaid>

### Zone Visit Page Layout Details:
- **Header**: Centered title and description
- **Map**: Placeholder card with map icon (aspect-video ratio)
- **Zone Cards**: 3-column grid showing:
  - Zone name (title)
  - Areas covered (subtitle)
  - Visit days (with calendar icon)
- **Bottom Section**: 2-column layout
  - **Left**: Information card explaining zone visits
  - **Right**: Enquiry form (Name, Email, Phone, Postcode, Address, Message)
- **Responsive**: Zones stack to 2 columns on tablet, 1 on mobile

---

## 7. Terms & Conditions Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar] --> B[Header]
    B --> C[H1: Terms & Conditions]
    C --> D[Single Column Content]
    D --> E[Section 1: Introduction Card]
    D --> F[Section 2: Services Card]
    D --> G[Section 3: Appointments & Cancellations Card]
    D --> H[Section 4: Payment Terms Card]
    D --> I[Section 5: Emergency Services Card]
    D --> J[Section 6: Liability Card]
    D --> K[Section 7: Contact Card]
    K --> L[Footer]
</lov-presentation-mermaid>

### Terms Page Layout Details:
- **Layout**: Single column, max-width content area
- **Structure**: Each section in its own card component
- **Cards**: White background with border, padding, and rounded corners
- **Content**: Heading + paragraph text per card

---

## 8. Privacy Policy Page

<lov-presentation-mermaid>
graph TD
    A[Navigation Bar] --> B[Header]
    B --> C[H1: Privacy Policy]
    C --> D[Single Column Content]
    D --> E[Section 1: Introduction Card]
    D --> F[Section 2: Information We Collect Card]
    D --> G[Section 3: How We Use Your Information Card]
    D --> H[Section 4: Data Security Card]
    D --> I[Section 5: Data Sharing Card]
    D --> J[Section 6: Your Rights Card]
    D --> K[Section 7: Contact Us Card]
    K --> L[Footer]
</lov-presentation-mermaid>

### Privacy Page Layout Details:
- **Layout**: Single column, max-width content area
- **Structure**: Each section in its own card component
- **Cards**: White background with border, padding, and rounded corners
- **Content**: Heading + paragraph text + bullet lists where applicable

---

## Common Components

### Navigation Component
```
[Logo]                    [Home] [About] [Services] [Zone Visit] [Contact] [Register Button] [Phone Button]
└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
                                  Sticky Top Navigation
```

### Footer Component
```
┌─────────────────────────────────────────────────────────────────────┐
│  [Vet3 Equine Care]      [Quick Links]           [Contact Us]       │
│  Description text        - Home                  Phone: 24/7        │
│                          - About Us               WhatsApp          │
│                          - Services               Email             │
│                          - Zone Visit             Location          │
│                          - Register               [Social Icons]    │
│                          - Contact                                  │
│                          - Terms                                    │
│                          - Privacy                                  │
├─────────────────────────────────────────────────────────────────────┤
│  Insurance disclaimer text                                          │
│  © 2024 Vet3 Equine Care. All rights reserved.                    │
└─────────────────────────────────────────────────────────────────────┘
```

### Service Card Component
```
┌─────────────────────────┐
│  [Icon]  Service Title  │
│                         │
│  Service description    │
│  text here...           │
└─────────────────────────┘
```

### Staff Card Component
```
┌─────────────────────────┐
│                         │
│    [Photo/Initial]      │
│                         │
├─────────────────────────┤
│  Name                   │
│  Role                   │
│  Bio text...            │
└─────────────────────────┘
```

---

## Responsive Breakpoints

- **Mobile**: < 768px (single column layouts, hamburger menu)
- **Tablet**: 768px - 1023px (2 columns for grids)
- **Desktop**: ≥ 1024px (full multi-column layouts)

## General Layout Patterns

1. **Container**: Max-width content wrapper with horizontal padding
2. **Sections**: Vertical padding (py-16 to py-24)
3. **Cards**: White background, subtle border, rounded corners, shadow on hover
4. **Grid Layouts**: Responsive column counts (1 → 2 → 3 columns)
5. **Forms**: Single column with grouped related fields in 2-column sub-grids
6. **CTAs**: Full-width colored sections with centered content

