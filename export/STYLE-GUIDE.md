# Vet3 Equine Care - Visual Style Guide

This comprehensive style guide documents all design tokens, colors, typography, spacing, and component styles used in the Vet3 Equine Care website.

---

## Brand Identity

**Brand Name**: Vet3 Equine Care  
**Tagline**: Fully Mobile Independent Equine Vets  
**Service Area**: Norfolk & Suffolk  
**Core Values**: Independent, Professional, Mobile, 24/7 Care

---

## Color Palette

### Primary Colors

| Color Name | Hex Value | HSL Value | RGB Value | Usage |
|------------|-----------|-----------|-----------|-------|
| **Primary** | `#0B0C1E` | `235 95% 13%` | `rgb(11, 12, 30)` | Main brand color, navigation background, primary CTAs |
| **Primary Foreground** | `#FFFFFF` | `0 0% 100%` | `rgb(255, 255, 255)` | Text on primary color backgrounds |
| **Accent** | `#6BC5E8` | `200 85% 65%` | `rgb(107, 197, 232)` | Highlights, links, icons, interactive elements |
| **Accent Foreground** | `#0B0C1E` | `235 95% 13%` | `rgb(11, 12, 30)` | Text on accent backgrounds |

### Secondary Colors

| Color Name | Hex Value | HSL Value | RGB Value | Usage |
|------------|-----------|-----------|-----------|-------|
| **Background** | `#FFFFFF` | `0 0% 100%` | `rgb(255, 255, 255)` | Page background |
| **Foreground** | `#26283E` | `235 50% 15%` | `rgb(38, 40, 62)` | Primary text color |
| **Secondary** | `#E8F1F5` | `200 20% 95%` | `rgb(232, 241, 245)` | Secondary backgrounds, subtle highlights |
| **Secondary Foreground** | `#26283E` | `235 50% 15%` | `rgb(38, 40, 62)` | Text on secondary backgrounds |

### Neutral Colors

| Color Name | Hex Value | HSL Value | Usage |
|------------|-----------|-----------|-------|
| **Muted** | `#F2F5F7` | `200 15% 96%` | Subtle backgrounds, disabled states |
| **Muted Foreground** | `#6B7280` | `235 20% 50%` | Secondary text, descriptions |
| **Border** | `#DEE8ED` | `200 20% 90%` | Card borders, dividers, input borders |
| **Input** | `#DEE8ED` | `200 20% 90%` | Input field borders |
| **Ring** | `#6BC5E8` | `200 85% 65%` | Focus rings, active states |

### UI State Colors

| Color Name | Hex Value | HSL Value | Usage |
|------------|-----------|-----------|-------|
| **Card** | `#FFFFFF` | `0 0% 100%` | Card backgrounds |
| **Card Foreground** | `#26283E` | `235 50% 15%` | Text on cards |
| **Destructive** | `#DC2626` | `0 84.2% 60.2%` | Error states, danger actions |
| **Destructive Foreground** | `#FFFFFF` | `0 0% 100%` | Text on destructive backgrounds |

### Dark Mode Colors

| Color Name | HSL Value | Usage |
|------------|-----------|-------|
| **Background (Dark)** | `235 50% 8%` | Dark page background |
| **Foreground (Dark)** | `0 0% 98%` | Dark mode text |
| **Primary (Dark)** | `200 85% 65%` | Dark mode primary color |
| **Card (Dark)** | `235 40% 12%` | Dark mode card background |

---

## Typography

### Font Families

```css
/* System Font Stack - Used throughout the site */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Heading Styles

| Level | Font Size (Desktop) | Font Size (Mobile) | Font Weight | Line Height | Usage |
|-------|---------------------|--------------------| ------------|-------------|-------|
| **H1** | 60px (3.75rem) | 36px (2.25rem) | 700 (Bold) | 1.2 | Page titles |
| **H2** | 48px (3rem) | 30px (1.875rem) | 700 (Bold) | 1.3 | Section headings |
| **H3** | 30px (1.875rem) | 24px (1.5rem) | 700 (Bold) | 1.4 | Subsection headings |
| **H4** | 24px (1.5rem) | 20px (1.25rem) | 600 (Semibold) | 1.4 | Card titles |

### Body Text Styles

| Style | Font Size | Font Weight | Line Height | Usage |
|-------|-----------|-------------|-------------|-------|
| **Large** | 18px (1.125rem) | 400 (Regular) | 1.75 | Hero descriptions, important text |
| **Base** | 16px (1rem) | 400 (Regular) | 1.5 | Body text, paragraphs |
| **Small** | 14px (0.875rem) | 400 (Regular) | 1.5 | Secondary text, form labels |
| **Extra Small** | 12px (0.75rem) | 400 (Regular) | 1.4 | Meta information, disclaimers |

### Font Weights

- **Regular (400)**: Body text
- **Medium (500)**: Subtle emphasis
- **Semibold (600)**: Subheadings, labels
- **Bold (700)**: Headings, strong emphasis

---

## Spacing System

### Base Unit: 4px (0.25rem)

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `0` | 0rem | 0px | No spacing |
| `1` | 0.25rem | 4px | Minimal spacing |
| `2` | 0.5rem | 8px | Tight spacing |
| `3` | 0.75rem | 12px | Small spacing |
| `4` | 1rem | 16px | Base spacing |
| `5` | 1.25rem | 20px | Medium spacing |
| `6` | 1.5rem | 24px | Large spacing |
| `8` | 2rem | 32px | Extra large spacing |
| `10` | 2.5rem | 40px | Section spacing |
| `12` | 3rem | 48px | Large section spacing |
| `16` | 4rem | 64px | Major section spacing |
| `20` | 5rem | 80px | Page spacing |
| `24` | 6rem | 96px | Hero spacing |

### Common Spacing Patterns

```css
/* Container Padding */
padding: 1rem; /* Mobile: 16px */
padding: 2rem; /* Tablet/Desktop: 32px */

/* Section Vertical Spacing */
padding-top: 4rem; /* 64px */
padding-bottom: 4rem;

padding-top: 6rem; /* 96px - Large sections */
padding-bottom: 6rem;

/* Card Padding */
padding: 1.5rem; /* 24px */
padding: 2rem; /* 32px - Large cards */

/* Gap in Grids */
gap: 1.5rem; /* 24px */
gap: 2rem; /* 32px - Larger grids */
```

---

## Border Radius

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `sm` | 0.5rem | 8px | Small elements |
| `DEFAULT` | 0.75rem | 12px | Buttons, inputs, cards |
| `md` | 0.625rem | 10px | Medium elements |
| `lg` | 1rem | 16px | Large cards |
| `xl` | 1.5rem | 24px | Featured sections |
| `2xl` | 2rem | 32px | Hero sections |
| `full` | 9999px | ∞ | Circular elements |

---

## Shadows

| Name | CSS Value | Usage |
|------|-----------|-------|
| **Card Hover** | `0 10px 15px -3px rgba(0, 0, 0, 0.1)` | Cards on hover |
| **Card Default** | `0 1px 3px 0 rgba(0, 0, 0, 0.1)` | Default card shadow |
| **Dropdown** | `0 10px 25px rgba(0, 0, 0, 0.15)` | Dropdowns, popovers |

---

## Buttons

### Button Variants

#### Primary Button
```css
background-color: #0B0C1E; /* primary */
color: #FFFFFF; /* primary-foreground */
padding: 0.5rem 1rem; /* py-2 px-4 */
border-radius: 0.375rem;
font-size: 0.875rem; /* 14px */
font-weight: 500;
transition: background-color 0.2s;

/* Hover */
background-color: rgba(11, 12, 30, 0.9);
```

#### Secondary Button
```css
background-color: #E8F1F5; /* secondary */
color: #26283E; /* secondary-foreground */
/* Same padding, border-radius, font styles as primary */

/* Hover */
background-color: rgba(232, 241, 245, 0.8);
```

#### Outline Button
```css
background-color: transparent;
color: #26283E; /* foreground */
border: 1px solid #DEE8ED; /* border */
/* Same padding, border-radius, font styles */

/* Hover */
background-color: #E8F1F5; /* accent */
color: #26283E; /* accent-foreground */
```

#### Ghost Button
```css
background-color: transparent;
color: #26283E;

/* Hover */
background-color: #E8F1F5; /* accent */
color: #26283E; /* accent-foreground */
```

### Button Sizes

| Size | Height | Padding (Horizontal) | Font Size |
|------|--------|----------------------|-----------|
| **Small** | 36px (2.25rem) | 12px (0.75rem) | 14px |
| **Default** | 40px (2.5rem) | 16px (1rem) | 14px |
| **Large** | 44px (2.75rem) | 32px (2rem) | 16px |
| **Icon** | 40px (2.5rem) | 40px (2.5rem) | - |

---

## Form Elements

### Input Fields

```css
/* Base Input Styles */
height: 40px;
padding: 0.5rem 0.75rem; /* 8px 12px */
border: 1px solid #DEE8ED; /* border */
border-radius: 0.375rem; /* 6px */
background-color: #FFFFFF; /* background */
color: #26283E; /* foreground */
font-size: 0.875rem; /* 14px */

/* Focus State */
outline: none;
border-color: #6BC5E8; /* ring */
box-shadow: 0 0 0 2px rgba(107, 197, 232, 0.2);

/* Disabled State */
opacity: 0.5;
cursor: not-allowed;
```

### Textarea

```css
/* Same as input, plus: */
min-height: 80px;
resize: vertical;
```

### Checkbox

```css
width: 16px;
height: 16px;
border: 1px solid #0B0C1E; /* primary */
border-radius: 0.125rem; /* 2px */

/* Checked State */
background-color: #0B0C1E; /* primary */
color: #FFFFFF; /* primary-foreground */
```

### Labels

```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
line-height: 1;
color: #26283E; /* foreground */
margin-bottom: 0.5rem; /* 8px */
```

---

## Cards

### Standard Card

```css
background-color: #FFFFFF; /* card */
border: 1px solid #DEE8ED; /* border */
border-radius: 1rem; /* 16px - lg */
padding: 1.5rem; /* 24px */

/* Hover Effect */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s;
```

### Service Card

```css
/* Extends standard card */
padding: 1.5rem;

/* Icon Container */
.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 0.75rem; /* 12px */
  background-color: rgba(107, 197, 232, 0.1); /* accent/10 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 24px;
  height: 24px;
  color: #6BC5E8; /* accent */
}
```

### Staff Card

```css
/* Extends standard card */
overflow: hidden;

.image-container {
  aspect-ratio: 1 / 1;
  background-color: #E8F1F5; /* muted */
}

.content {
  padding: 1.5rem;
}

.name {
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  color: #26283E; /* foreground */
}

.role {
  color: #6BC5E8; /* accent */
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.bio {
  font-size: 0.875rem; /* 14px */
  color: #6B7280; /* muted-foreground */
  line-height: 1.5;
}
```

---

## Navigation

### Desktop Navigation

```css
/* Navigation Bar */
position: sticky;
top: 0;
z-index: 50;
background-color: #FFFFFF; /* background */
border-bottom: 1px solid #DEE8ED; /* border */
height: 80px;

/* Logo */
height: 56px; /* h-14 */

/* Navigation Links */
.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6B7280; /* muted-foreground */
  transition: all 0.2s;
}

.nav-link.active {
  background-color: #E8F1F5; /* secondary */
  color: #26283E; /* foreground */
}

.nav-link:hover {
  background-color: rgba(232, 241, 245, 0.5);
  color: #26283E;
}
```

### Mobile Navigation

```css
/* Mobile Menu Button */
padding: 0.5rem;
color: #26283E;

/* Mobile Menu */
padding: 1rem 0;
border-top: 1px solid #DEE8ED;

.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}
```

---

## Footer

```css
background-color: #0B0C1E; /* primary */
color: #FFFFFF; /* primary-foreground */
padding: 3rem 0; /* 48px */

/* Footer Section Headings */
.footer-heading {
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Footer Links */
.footer-link {
  font-size: 0.875rem;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 1;
}

/* Footer Disclaimer */
.disclaimer {
  font-size: 0.75rem; /* 12px */
  opacity: 0.75;
  line-height: 1.5;
}

/* Copyright */
.copyright {
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.9;
  margin-top: 2rem;
}
```

---

## Icons

### Icon Sizes

| Context | Size | Pixels |
|---------|------|--------|
| Small | 16px | 1rem |
| Default | 20px | 1.25rem |
| Medium | 24px | 1.5rem |
| Large | 32px | 2rem |
| Hero | 64px | 4rem |

### Icon Colors

- **Primary Icons**: `#6BC5E8` (accent)
- **Muted Icons**: `#6B7280` (muted-foreground)
- **On Primary**: `#FFFFFF` (primary-foreground)

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small devices (phones, 0-640px) */
/* Base styles apply */

/* Medium devices (tablets, 641px-768px) */
@media (min-width: 641px) { }

/* Large devices (desktops, 769px-1024px) */
@media (min-width: 769px) { }

/* Extra large devices (large desktops, 1025px+) */
@media (min-width: 1025px) { }
```

### Container Max Widths

| Breakpoint | Container Max Width |
|------------|---------------------|
| Default | 100% |
| Small (sm) | 640px |
| Medium (md) | 768px |
| Large (lg) | 1024px |
| Extra Large (xl) | 1280px |
| 2XL | 1400px |

---

## Animations & Transitions

### Standard Transitions

```css
/* Default Transition */
transition: all 0.2s ease-out;

/* Color Transitions */
transition: background-color 0.2s, color 0.2s;

/* Transform Transitions */
transition: transform 0.3s ease-out;

/* Shadow Transitions */
transition: box-shadow 0.3s ease-out;
```

### Hover Effects

```css
/* Card Hover */
.card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Button Hover */
.button:hover {
  transform: translateY(-1px);
}

/* Link Hover */
.link:hover {
  opacity: 0.8;
}
```

### Accordion Animation

```css
@keyframes accordion-down {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}
```

---

## Grid Systems

### Common Grid Patterns

```css
/* 2-Column Grid */
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1.5rem; /* 24px */

/* 3-Column Grid */
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1.5rem;

/* Responsive Grid (1 → 2 → 3 columns) */
display: grid;
grid-template-columns: 1fr;
gap: 1.5rem;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}
```

---

## Accessibility

### Focus States

```css
/* Default Focus Ring */
:focus-visible {
  outline: 2px solid #6BC5E8; /* ring */
  outline-offset: 2px;
}

/* Button Focus */
button:focus-visible {
  box-shadow: 0 0 0 2px rgba(107, 197, 232, 0.5);
}
```

### Text Contrast

- All text meets WCAG AA standards (4.5:1 minimum ratio)
- Large text (18px+) meets WCAG AAA standards (7:1 ratio)

---

## Component State Reference

### Interactive States

| State | Visual Treatment |
|-------|------------------|
| **Default** | Base styles applied |
| **Hover** | Slight opacity/color change, shadow on cards |
| **Active** | Darker/lighter color, pressed appearance |
| **Focus** | Blue ring outline |
| **Disabled** | 50% opacity, cursor not-allowed |
| **Loading** | Spinner or animated text |

---

## Logo Usage

- **Format**: PNG with transparency
- **Minimum Size**: 120px width
- **Clear Space**: Maintain at least 16px clear space around logo
- **Color Versions**: 
  - Primary: Full color on light backgrounds
  - Reversed: White version for dark backgrounds

---

## Image Guidelines

### Aspect Ratios

- **Hero Images**: 16:9 or 21:9
- **Staff Photos**: 1:1 (square)
- **Service Images**: 4:3
- **Instagram Grid**: 1:1 (square)

### Image Optimization

- **Format**: WebP with JPG fallback
- **Max File Size**: 200KB for photos, 100KB for illustrations
- **Alt Text**: Always include descriptive alt text

---

## Print Styles

```css
@media print {
  /* Hide navigation and footer */
  nav, footer, button { display: none; }
  
  /* Adjust colors for print */
  body {
    color: #000;
    background: #fff;
  }
  
  /* Expand containers */
  .container {
    max-width: none;
  }
}
```

---

This style guide should be used as the single source of truth for all design decisions. When building in WordPress with Kadence, these exact values should be replicated to maintain visual consistency.
