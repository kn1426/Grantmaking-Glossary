# Design System: Notion

## 1. Visual Theme & Atmosphere

Notion's website embodies the philosophy of the tool itself: a blank canvas that gets out of your way. The design system is built on warm neutrals rather than cold grays, creating a distinctly approachable minimalism that feels like quality paper rather than sterile glass. The page canvas is pure white (`#ffffff`) but the text isn't pure black -- it's a warm near-black (`rgba(0,0,0,0.95)`) that softens the reading experience imperceptibly. The warm gray scale (`#f6f5f4`, `#31302e`, `#615d59`, `#a39e98`) carries subtle yellow-brown undertones, giving the interface a tactile, almost analog warmth.

The custom NotionInter font (a modified Inter) is the backbone of the system. At display sizes (64px), it uses aggressive negative letter-spacing (-2.125px), creating headlines that feel compressed and precise. The weight range is broader than typical systems: 400 for body, 500 for UI elements, 600 for semi-bold labels, and 700 for display headings. OpenType features `"lnum"` (lining numerals) and `"locl"` (localized forms) are enabled on larger text, adding typographic sophistication that rewards close reading.

What makes Notion's visual language distinctive is its border philosophy. Rather than heavy borders or shadows, Notion uses ultra-thin `1px solid rgba(0,0,0,0.1)` borders -- borders that exist as whispers, barely perceptible division lines that create structure without weight. The shadow system is equally restrained: multi-layer stacks with cumulative opacity never exceeding 0.05, creating depth that's felt rather than seen.

**Key Characteristics:**
- NotionInter (modified Inter) with negative letter-spacing at display sizes (-2.125px at 64px)
- Warm neutral palette: grays carry yellow-brown undertones (`#f6f5f4` warm white, `#31302e` warm dark)
- Near-black text via `rgba(0,0,0,0.95)` -- not pure black, creating micro-warmth
- Ultra-thin borders: `1px solid rgba(0,0,0,0.1)` throughout -- whisper-weight division
- Multi-layer shadow stacks with sub-0.05 opacity for barely-there depth
- Notion Blue (`#0075de`) as the singular accent color for CTAs and interactive elements
- Pill badges (9999px radius) with tinted blue backgrounds for status indicators
- 8px base spacing unit with an organic, non-rigid scale

## 2. Color Palette & Roles

### Primary
- **Notion Black** (`rgba(0,0,0,0.95)` / `#000000f2`): Primary text, headings, body copy. The 95% opacity softens pure black without sacrificing readability.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on blue.
- **Notion Blue** (`#0075de`): Primary CTA, link color, interactive accent -- the only saturated color in the core UI chrome.

### Brand Secondary
- **Deep Navy** (`#213183`): Secondary brand color, used sparingly for emphasis and dark feature sections.
- **Active Blue** (`#005bab`): Button active/pressed state -- darker variant of Notion Blue.

### Warm Neutral Scale
- **Warm White** (`#f6f5f4`): Background surface tint, section alternation, subtle card fill. The yellow undertone is key.
- **Warm Dark** (`#31302e`): Dark surface background, dark section text. Warmer than standard grays.
- **Warm Gray 500** (`#615d59`): Secondary text, descriptions, muted labels.
- **Warm Gray 300** (`#a39e98`): Placeholder text, disabled states, caption text.

### Semantic Accent Colors
- **Teal** (`#2a9d99`): Success states, positive indicators.
- **Green** (`#1aae39`): Confirmation, completion badges.
- **Orange** (`#dd5b00`): Warning states, attention indicators.
- **Pink** (`#ff64c8`): Decorative accent, feature highlights.
- **Purple** (`#391c57`): Premium features, deep accents.
- **Brown** (`#523410`): Earthy accent, warm feature sections.

### Interactive
- **Link Blue** (`#0075de`): Primary link color with underline-on-hover.
- **Link Light Blue** (`#62aef0`): Lighter link variant for dark backgrounds.
- **Focus Blue** (`#097fe8`): Focus ring on interactive elements.
- **Badge Blue Bg** (`#f2f9ff`): Pill badge background, tinted blue surface.
- **Badge Blue Text** (`#097fe8`): Pill badge text, darker blue for readability.

### Shadows & Depth
- **Card Shadow** (`rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2.025px 7.84688px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.01) 0px 0.175px 1.04062px`): Multi-layer card elevation.
- **Deep Shadow** (`rgba(0,0,0,0.01) 0px 1px 3px, rgba(0,0,0,0.02) 0px 3px 7px, rgba(0,0,0,0.02) 0px 7px 15px, rgba(0,0,0,0.04) 0px 14px 28px, rgba(0,0,0,0.05) 0px 23px 52px`): Five-layer deep elevation for modals and featured content.
- **Whisper Border** (`1px solid rgba(0,0,0,0.1)`): Standard division border -- cards, dividers, sections.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, with fallbacks: `-apple-system, system-ui, Segoe UI, Helvetica, Arial`
- **OpenType Features**: `"lnum"` (lining numerals) and `"locl"` (localized forms) enabled on display and heading text.

### Hierarchy

| Role | Size | Weight | Letter Spacing |
|------|------|--------|----------------|
| Display Hero | 64px | 700 | -2.125px |
| Section Heading | 48px | 700 | -1.5px |
| Sub-heading | 26px | 700 | -0.625px |
| Card Title | 22px | 700 | -0.25px |
| Body Large | 20px | 600 | -0.125px |
| Body | 16px | 400 | normal |
| Nav / Button | 15px | 600 | normal |
| Caption | 14px | 500 | normal |
| Badge | 12px | 600 | 0.125px |

## 4. Component Stylings

### Buttons
- **Primary**: `#0075de` bg, white text, 4px radius, 8px 16px padding
- **Secondary**: `rgba(0,0,0,0.05)` bg, near-black text, 4px radius
- **Ghost**: transparent bg, near-black text, underline on hover
- **Pill Badge**: `#f2f9ff` bg, `#097fe8` text, 9999px radius, 4px 8px padding

### Cards
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.1)`
- Radius: 12px standard, 16px featured
- Shadow: multi-layer soft (max opacity 0.04)

### Inputs
- Border: `1px solid #dddddd`
- Radius: 4px
- Focus: blue outline ring

## 5. Layout Principles
- Base unit: 8px
- Max content width: ~1200px
- Generous vertical rhythm: 64-120px between sections
- Alternating white / warm white (`#f6f5f4`) backgrounds

## 6. Depth & Elevation
- Flat: no shadow, no border (backgrounds)
- Whisper: `1px solid rgba(0,0,0,0.1)` (cards, dividers)
- Soft Card: 4-layer shadow stack (max 0.04 opacity)
- Deep: 5-layer shadow stack (max 0.05 opacity, 52px blur) for modals

## 7. Do's and Don'ts
- DO use warm neutrals — never blue-gray
- DO compress letter-spacing at large sizes
- DO use only Notion Blue as the saturated accent
- DON'T use heavy borders or hard shadows
- DON'T use pure black (#000000) for text
- DON'T use more than 4 font weights

## 8. Responsive Behavior
- Mobile (<768px): stacked single column
- Tablet (768-1080px): sidebar collapses to top pill nav
- Desktop (1080px+): sidebar + content layout
- Touch targets: minimum 44px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: `#0075de`
- Background: `#ffffff`
- Alt Background: `#f6f5f4`
- Heading text: `rgba(0,0,0,0.95)`
- Secondary text: `#615d59`
- Muted text: `#a39e98`
- Border: `1px solid rgba(0,0,0,0.1)`
- Focus ring: `#097fe8`

### This Project's Application
- Sidebar: warm white (`#f6f5f4`) background with whisper border
- Active nav item: white bg with soft card shadow
- Entry cards: white bg, 12px radius, whisper border, soft shadow
- Category badges: `#f2f9ff` bg, `#097fe8` text, pill shape
- Star/favorite button: `#0075de` when active
- Add Entry button: Notion Blue primary button style
