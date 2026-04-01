# LightPathAI Brand Design — Reference Guide
> Version: 3.0 | March 2026

## LightPathAI Project Ecosystem

This project is part of the LightPathAI multi-repo ecosystem. See the **unified guide** at `/Users/saratashakorinia/development/CLAUDE.md` for how all projects connect.

| Project | Path | Role |
|---------|------|------|
| **This repo** | `lightpathai/` | Marketing website + brand design system |
| Product Platform | `/Users/saratashakorinia/development/Platfrom01copy` | React app codebase |
| Business Operations | `/Users/saratashakorinia/development/business-marketing` | Strategy, GTM, investor relations, legal, contacts |

**CLAUDE files in this repo:**
- `CLAUDE.md` (this file) — Brand design reference
- `CLAUDE-MASTER.md` — Master design philosophy & build doctrine
- `CLAUDE-MARKETING.md` — Marketing website design system & external communications
- `CLAUDE-PRODUCT.md` — Product platform design philosophy & intelligence architecture

---

## BRAND IDENTITY

**What LightPathAI is:** A grief-support platform with two surfaces — a B2B marketing website and a product platform for grieving users.

**Core metaphor:** Light in darkness — the first hints of dawn. Hold darkness with dignity while scattering points of hope.

**Brand personality:** Gentle Strength, Quiet Joy, Honest Hope, Lived Understanding.

**The 2am test:** If a user at 2am, in their darkest moment, encounters any element — does it feel like a hand on their shoulder?

---

## TWO VOICES, ONE HEART

| | Marketing Website | Platform (Product) |
|---|---|---|
| **Audience** | B2B buyers, HR directors | Grieving individuals |
| **Tone** | Confident, polished | Calm, warm, gentle |
| **Typography** | Lora (serif) | System font stack |
| **Surface** | `#FDFCFB` | `#F9F7F4` |
| **Accent** | Sunrise `#F2B84D` | Sage `#7BA88E` |
| **Radius** | `rounded-full` / `rounded-3xl` | 16px |
| **Motion** | 300ms `cubic-bezier(0.16, 1, 0.3, 1)` | 300ms ease-in-out |

---

## COLOR PHILOSOPHY

Every color in the LightPathAI palette carries emotional weight. Nothing is decorative — each family serves a purpose in the journey from grief toward light.

| Color Family | Emotional Role |
|---|---|
| **Purple** | The anchor. Trust, stability, the thread that connects both surfaces. Purple says "we're here." |
| **Lavender** | The breath. Soft enough to recede, present enough to hold. Creates space without emptiness. |
| **Sage** | Growth made visible. Used only where progress is real — never decorative. Sage is earned. |
| **Sunrise** | The first warmth after a long night. Energy and joy, but only after the user has taken a step. |
| **Glow** | The ambient warmth that fills a room. Softer than Sunrise — the light that's already there. |
| **Bloom** | The flower that grows from difficult soil. Celebration, beauty, the Benefits category. |
| **Blush** | The gentlest warmth on skin. Softer than Bloom, used in the sky gradient and tinted backgrounds. |

These colors work together like a sky at dawn — each one has its moment, and none overpowers another.

---

## COLOR PALETTE

### Core Colors (use 90% of the time)
| Token | Hex | Use |
|---|---|---|
| Purple | `#9598E8` | Primary actions, buttons, links |
| Lavender | `#E8E0FA` | Focus states, tinted backgrounds |
| Sage | `#7BA88E` | Progress, growth (Platform) |
| Sunrise | `#F2B84D` | Energy, highlights, warmth, joy |
| Glow | `#FFD98A` | Warm ambient light, hover halos |
| Bloom | `#D4A0C0` | Benefits category, celebratory moments |
| Blush | `#F2D4E0` | Soft pink warmth, sky gradient, tinted bg |
| Dark Text | `#1C1C1E` | Headings |

### Color Shades (light → dark)

| Shade | Purple | Lavender | Sage | Sunrise | Bloom | Blush |
|---|---|---|---|---|---|---|
| **50** | `#E8E0FA` | `#FAF7FD` | `#EEF5F0` | `#FFF8E8` | `#FDF5F9` | `#FEF5F8` |
| **100** | `#E8DDFA` | `#E8E0FA` | `#DDEAE2` | `#FFF0D0` | `#FAF0F6` | `#FCE8F0` |
| **200** | `#D0C4F0` | `#E8DDFA` | `#B8D4C0` | `#FFE4AD` | `#F0D8E8` | `#F7D4E4` |
| **300** | `#B0B3F2` | `#DDD2F0` | `#9DC4A8` | `#FFD98A` | `#E8C4DA` | `#F2D4E0` ★ |
| **400** | `#A0A3EB` | `#D0C0E8` | `#7BA88E` ★ | `#F2B84D` ★ | `#D4A0C0` ★ | `#E8B8D0` |
| **500** | `#9598E8` ★ | `#E8DDFA` ★ | `#6B9A7E` | `#E5A030` | `#C48CB0` | `#D8A0C0` |
| **600** | `#7B7ED4` | `#C8B5D8` | `#5A8A6E` | `#CC8A20` | `#B078A0` | `#C488B0` |
| **700** | `#6366C0` | `#A892C4` | `#4A7A5E` | `#B07418` | `#9A6490` | `#B07098` |

★ = base value used in core palette

### Color Combinations

| Combination | Colors | When to use |
|---|---|---|
| **Hero / Living Sky** | Lavender 100 `#E8DDFA` → Warm Mist `#F0E8E0` → Cool Sky `#E0E8F5` | Hero sections, emotional signature moments |
| **Cool Section** | Surface `#FDFCFB` → `#F5F3FA` → `#F8F5FC` → Surface | Features, partner sections on light backgrounds |
| **Warm Section** | Surface `#FDFCFB` → `#FEF9F0` → `#FFF8ED` → Surface | Platform showcases, benefit highlights |
| **Purple + Glow** | Purple `#9598E8` + Glow `#FFD98A` | CTA highlights, celebration moments |
| **Sage + Lavender** | Sage `#7BA88E` + Lavender `#E8E0FA` | Progress indicators, success states |
| **Sunrise + Purple** | Sunrise `#F2B84D` + Purple `#9598E8` | Warmth with structure — dashboard accents |
| **Dark + Purple glow** | Dark `#0F1029` + Purple at 15–20% opacity | Impact sections, dark immersive backgrounds |
| **Dark + Warm glow** | Dark `#2E3658` + Sunrise at 12% opacity | Problem/stat sections, warm urgency on dark |
| **Card on Cool** | White glass `rgba(255,255,255,0.6)` on Cool gradient | Feature cards, partner cards |
| **Card on Dark** | `rgba(255,255,255,0.04)` on dark gradient | Impact stats, testimonial cards |

### Additional Tokens

**Status:** Success `#63D583` · Warning `#E5A030` · Error `#D4725C` (warm coral — never red)

**Bloom Light:** `#F0D8E8` — lighter bloom for tinted backgrounds, Bloom Mist in the sky gradient

**Text:** Heading `#1C1C1E` · Body `#5C6578` · Muted `#8E96A6` · Platform body `#3A3A3C`

**Surfaces:** Marketing `#FDFCFB` · Platform `#F9F7F4` · Card `#FFFFFE` · Border `#E2E8F0` · Border-light `#F1F5F9`

### Sky Gradient (emotional signature)
`#E8DDFA → #E4D8F2 → #F2D4E0 → #F0D8E8 → #F0E8E0 → #FFE4AD → #E0E8F5 → #D5E8F8 → #C8E5F5`

The full emotional arc: lavender dawn → blush → bloom warmth → golden glow → cool sky.

### Dark Mode (Night Sky)
Base `#1A1A1E` · Surface `#242428` · Card `#2C2C30` · Border `#3A3A3E` · Text `#F5F5F7` · Body `#C8C8CC`
Marketing dark sections: `#0F1029` / `#161838` / `#0A0B1E`

---

## SECTION BACKGROUNDS

These are the exact gradients used on the live website. Do not change.

**Hero (Living Sky):** Layered — base gradient `#FDFCFB → #F5F3FA (50%) → #FDFCFB`, with 9 drifting radial-gradient orbs in lavender, blush, warm ivory, and sky blue tones. Breathing center glow, diagonal light rays, and sparkle particles float over it.

**Cool Section** (lavender wash for Features/Partners):
`linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)`

**Warm Section** (cream wash for Platform Showcase):
`linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)`

**Subtle Section** (near-invisible layering):
`linear-gradient(180deg, transparent, rgba(245,243,250,0.5), transparent)`

**Dark Impact Section** (Problem/Stats — rich navy):
`linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)`
with animated purple/warm gradient blobs at 12–20% opacity.

**Night Sky** (dark sections): `radial-gradient(ellipse 120% 80% at 50% 20%, #161838, #0F1029 45%, #0A0B1E 100%)`

**Section transitions:** 80px gradient fades at top/bottom edges. 1px purple divider at 12% opacity between sections.

**Noise texture overlay:** SVG fractal noise (`baseFrequency: 0.9`, 4 octaves) fixed over entire page at 1.8% opacity for subtle grain.

---

## TYPOGRAPHY

**Marketing:** Lora (serif, Google Fonts). **Platform:** System stack. **Shared UI:** Inter for buttons, labels, nav.

| Element | Font | Size |
|---|---|---|
| Heading XL | Lora | 3.75rem / -0.04em / 1.04 |
| Heading LG | Lora | 2.75rem / -0.03em / 1.08 |
| Heading MD | Lora | 2rem / -0.02em / 1.12 |
| Heading SM | Lora | 1.25rem / -0.02em / 1.2 |
| Body | Inter | 1.125rem / 1.75 line-height |
| Label | Inter | 0.75rem / uppercase / semibold / 0.1em tracking |

**Heading weight:** Marketing headings use `font-weight: 400` (Lora regular — the serif carries enough weight). Platform headings use `semibold (600)`.

**Text gradient:** `linear-gradient(135deg, #9598E8, #8F82CD)` with background-clip for highlighted headings.

**Text shimmer:** `background-size: 200% auto`, animated 6s sweep for hero text — heading color to `#64748B` midpoint and back.

---

## SPACING & LAYOUT

4px grid · Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 · Max-width: 72rem (`max-w-wide`)
Content max-width: 42rem (`max-w-content`) for prose. Section spacing: `py-24 sm:py-32`.
Scroll margin: 100px on all `[id]` elements for sticky header clearance.

---

## COMPONENTS

### Buttons
All marketing buttons: `rounded-full`, glassmorphic, 300ms transitions. Hover lifts `-2px`.

- **Primary:** Frosted glass `rgba(255,255,255, 0.5)`, `backdrop-filter: blur(20px) saturate(1.4)`. Purple text `rgba(60,65,130,0.9)`. Inner highlight gradient overlay.
- **Hero:** Solid purple gradient `rgba(118,122,210,0.9) → rgba(100,104,195,0.95)`, white text. For hero sections.
- **Secondary:** White glass `rgba(255,255,255, 0.55)`, subtle purple border `rgba(138,142,229,0.18)`.
- **Ghost:** For dark sections — `rgba(255,255,255, 0.08)`, border `rgba(255,255,255, 0.12)`.
- **White:** Solid bright `rgba(255,255,255, 0.9)` for dark backgrounds. Dark text.
- Platform buttons: 16px radius, max-width 320px, `padding: 14px 32px`.

### Cards
- Marketing: `rounded-3xl`, glassmorphic (`rgba(255,255,255, 0.6)`, `backdrop-filter: blur(24px) saturate(1.2)`). Border `rgba(255,255,255,0.7)`. Hover reveals purple left-border accent `rgba(138,142,229,0.3)`.
- Impact (dark): `rounded-2xl`, `rgba(255,255,255, 0.04)`, border `rgba(255,255,255,0.07)`.
- Platform: 16px radius, soft shadows `0 2px 8px rgba(0,0,0,0.04)`, sage-mint gradient washes.

### Glassmorphism Levels

| Level | Blur | Background | Use |
|---|---|---|---|
| Strong | `blur(24px) saturate(1.2)` | `rgba(255,255,255, 0.5–0.7)` | Navbar, primary buttons |
| Medium | `blur(20px) saturate(1.4)` | `rgba(255,255,255, 0.55–0.65)` | Cards, secondary buttons |
| Subtle | `blur(16px)` | `rgba(255,255,255, 0.5)` | Inputs, stat blocks |
| Dark | `blur(12px)` | `rgba(255,255,255, 0.04)` | Impact cards on dark bg |

### Shadow System

| Token | Value | Use |
|---|---|---|
| Card | `0 0 0 0.5px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)` | Resting cards |
| Card hover | `0 0 0 1px rgba(138,142,229,0.06), 0 2px 4px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.05), 0 20px 48px rgba(0,0,0,0.06)` | Elevated cards |
| Button | `0 1px 2px rgba(138,142,229,0.15), 0 4px 16px rgba(138,142,229,0.12), inset highlights` | Primary buttons |

### Inputs
`rounded-xl`, glassmorphic `rgba(255,255,255, 0.5)`, `backdrop-filter: blur(8px)`. Focus: purple border glow `rgba(140,145,230, 0.35)` with `3px` ring at 8% opacity.

### Toasts
Info=purple bg · Success=sage · Warning=sunrise · Error=coral · Celebration=glow. 12px radius, auto-dismiss 5s (never errors).

---

## LOGO — The Bloom Mark

### Symbol
❖ — Four rounded petals in a 2×2 cross, crystalline facets, diamond-star center. Clear space: 1× mark width. Never rotate, stretch, or recolor.

### Logo Files
- `logo.png` — Primary mark. Navbar: 30×30px. Footer: 26×26px. Border-radius: 14px.

### Logo Dynamics

**Floating animation** (always active):
- `logoFloat`: 4s ease-in-out infinite — gentle vertical bob, translateY 0 → -6px → 0.

**Hover interaction:**
- Logo image scales to `1.08` on hover with 0.4s ease transition.
- Navbar logo group scales to `1.10` on hover.

**Available effects** (reserved for special moments):
- `logoGlow`: Breathing purple halo — box-shadow pulses from 16px to 24px blur at `rgba(138,142,229, 0.15–0.3)`.
- `logoPulseRing`: Expanding ring — scale 0.85 → 1.8, opacity 0.5 → 0. For launch moments or celebrations.

**Usage rules:** The logo floats gently at all times. Glow and pulse ring are reserved — only use for celebratory or milestone UI moments. Never use aggressive or fast logo animations.

---

## MOTION & ANIMATION

### Principles
All motion is organic and gentle. Use `ease-in-out` or `ease-out` — never linear for UI elements. Background animations run 8–22s for subtlety. Interactive transitions: 0.3–0.6s.

### Scroll Reveal System
- **Base:** `opacity: 0; transform: translateY(16px); transition: 0.6s ease-out`
- **Variants:** `.reveal-scale` (scale 0.96), `.reveal-left` (translateX -16px), `.reveal-right` (translateX 16px)
- **Revealed state:** `opacity: 1; transform: translateY(0) scale(1)`
- **Stagger:** Children get 80ms incremental delay (0, 80, 160, 240, 320, 400ms)
- Uses IntersectionObserver with `threshold: 0.1`, `rootMargin: 40px 0px -30px 0px`

### Hero Entrance
- `heroEntrance`: 0.65s ease-out, translateY 12px → 0. Children stagger at 0.05s, 0.15s, 0.25s, 0.35s, 0.4s, 0.45s.

### Living Sky (Hero Background)
- 9 drifting orbs with `orbDrift1–4` animations (9–16s). Complex multi-keyframe translate + scale paths.
- `skyBreathe`: 8s breathing center glow, opacity 0.75–1, scale 1–1.05.
- `skyShimmer`: 10s gradient sweep. `lightRaysDrift`: 20s diagonal light ray movement.
- `sparkleFloat1–2`: 6–8s floating sparkle particles with upward drift.

### Impact Section (Dark)
- `blobDrift1–3`: 18–22s subtle translate and micro-scale on gradient blobs.

### Feature Section
- `featureGlow1–2`: 14–18s warm glow orb drifts at 0.6–0.7 opacity.

### Clouds
- `cloud-drift-right`: translateX -60vw → 110vw. `cloud-drift-left`: reverse direction.
- Cloud elements use `::before` and `::after` pseudo-elements for 3D rounded shape.

### UI Effects
- `shimmer`: 6s text background sweep for `.text-shimmer`.
- `typingDot`: 1.2s opacity/translateY pulse for typing indicator dots.
- `pulse-gentle`: 3s opacity 1 → 0.5 → 1 for subtle pulsing.
- `stat-glow`: On hover, `text-shadow: 0 0 40px currentColor`.

### Reduced Motion
All animations disabled when `prefers-reduced-motion: reduce`. Reveals show immediately. Shimmer reverts to static `#1C1C1E`. Logo float, blobs, and all keyframe animations halt.

---

## PLATFORM PATTERNS

**Visual standard:** The Explore page is the gold standard. Soft, warm, whisper-quiet.

**Principles:** Everything whispers, nothing shouts. Headings semibold (600). Borders use `#F1F5F9`. Shadows barely there.

**Navigation:** 5 tabs — Today, Explore, LightKeeper, Inner Light, Care Plan. Active: purple + lavender tint bg.

**Mood chips:** Peaceful, Grateful, Hopeful → sage. Reflective, Nostalgic, Bittersweet → purple. Sad, Overwhelmed, Anxious → warm sunrise. Numb → lavender.

**Dashboard cards:** Quote (lavender tint) → Milestone (sage) → Action (sky gradient). Late-night message after 10pm uses warm glow tint.

**Care Plan categories:** Administrative=purple, Financial=sunrise, Legal=sage, Benefits=bloom.

**Feature color codes:** Care Plan=purple, Benefits=purple-accent, LightKeeper=sunrise, Inner Light=sage.

---

## RESOURCES & PROSE

> The blog has been renamed to "Resources" across the site. Route: `/resources` (listing) and `/resources/[slug]` (individual posts).

**Typography:** Headings use Lora at 1.5rem (sm: 1.75rem), weight 400, spacing -0.02em. Body paragraphs 1rem, line-height 1.75. List items 0.9375rem with 6px purple circle bullets at 40% opacity.

**Callout cards:** Purple tint `rgba(138,142,229,0.04)` with 1px border. Variants: warm (sunrise tint), green (success tint), rose (sky blue tint). 1rem radius.

**Stat cards:** Glassmorphic `rgba(255,255,255,0.6)`, blur(12px). Value in Lora 2rem, label in body color.

**Filter pills:** `rgba(255,255,255,0.5)`, 0.6875rem, rounded-full. Hover: `rgba(255,255,255,0.7)` with purple border hint.

---

## SOCIAL MEDIA GUIDELINES

### Visual Identity Across Platforms

**Profile picture:** The Bloom Mark ❖ on a soft lavender-to-sky gradient background (`#E8DDFA → #D5E8F8`). Never on solid white — always use the Living Sky palette.

**Cover/banner images:** Use the Living Sky gradient as background — the same lavender-warm-sky wash from the hero section. Lora serif for any headline text. Keep text minimal.

### Post Templates

**Informational / Educational posts:**
- Background: Cool section gradient (`#FDFCFB → #F5F3FA → #F8F5FC → #FDFCFB`) or solid `#E8E0FA`
- Text: Lora headings in `#1C1C1E`, Inter body in `#5C6578`
- Accent: Purple `#9598E8` for highlights and dividers
- Cards/callouts: White glass with subtle purple left border

**Warm / Emotional posts (stories, testimonials, hope):**
- Background: Warm section gradient (`#FDFCFB → #FEF9F0 → #FFF8ED → #FDFCFB`) or Glow tint `#FFF8E8`
- Accent: Sunrise `#F2B84D` for highlights, Glow `#FFD98A` for ambient warmth
- Tone: Extra gentle. No exclamation marks. Present tense.

**Impact / Stats posts (fundraising, partnerships, data):**
- Background: Dark `#0F1029` or navy gradient (`#2E3658 → #262F4C`)
- Text: White `#F5F5F7`, Lora serif for headline numbers
- Accent: Purple glow at low opacity. Stat numbers in white with subtle `text-shadow`.
- Cards: Dark glass `rgba(255,255,255,0.04)` with thin white border

**Milestone / Celebration posts:**
- Background: Sky gradient (`#E8DDFA → #F0E8E0 → #D5E8F8`)
- Accent: Bloom `#D4A0C0` + Glow `#FFD98A`
- The Bloom Mark can use the `logoPulseRing` animation if animated format

### Color Pairings for Social

| Content type | Background | Text | Accent |
|---|---|---|---|
| Educational | `#E8E0FA` or cool gradient | `#1C1C1E` | Purple `#9598E8` |
| Emotional / Story | `#FFF8E8` or warm gradient | `#1C1C1E` | Sunrise `#F2B84D` |
| Stat / Impact | `#0F1029` dark | `#F5F5F7` white | Purple glow |
| Celebration | Sky gradient | `#1C1C1E` | Bloom `#D4A0C0` |
| Grief resource | `#FDFCFB` surface | `#5C6578` body | Sage `#7BA88E` |
| Quote / Reflection | `#E8DDFA` lavender | `#1C1C1E` | Purple `#6366C0` (dark) |

### Social Media Do's and Don'ts

**Do:** Use the Living Sky palette as the emotional signature. Keep imagery soft and watercolor-like. Use Lora for headlines, Inter for supporting text. Let whitespace breathe. Include the Bloom Mark ❖ subtly.

**Don't:** Use harsh colors, solid red, or high-contrast neon. Don't use exclamation marks near grief content. Don't crowd the canvas. Never use stock photos of crying people. No dark humor. No urgency language ("Act NOW!", "Don't miss out!").

**Tone on social:** Same as the platform — gentle, honest, present tense. "You" and "we." Acknowledge pain without dwelling. Point toward light without minimizing darkness. Every post should pass the 2am test.

### Image Style
Soft watercolor-inspired illustrations in the LightPathAI palette. Figures should be abstract/silhouetted rather than detailed. Landscapes: lavender skies, golden paths, soft horizons. See `lightpath-watercolor.png` as reference. Prefer warm, misty atmospheres over sharp, clinical imagery.

---

## VOICE & TONE

**Marketing:** Confident, professional, human. Lora serif warmth. Can reference ROI and outcomes.
**Platform:** Gentle, never clinical. "We" and "you." Present tense. Never assumes emotional state. No exclamation marks near grief.
**Shared rules:** Errors use coral. Success uses sage. Empty states = invitations. Loading = lavender pulse.

---

## ACCESSIBILITY

WCAG AA minimum. Purple on white ✅. Sage on white ✅. Sunrise: large text/icons only ⚠️. Respect `prefers-reduced-motion`. Focus states: `2px solid` purple outline, `3px offset`, `4px radius`. All `[id]` elements have `scroll-margin-top: 100px` for sticky nav.

---

## RULES THAT NEVER BREAK

1. **Joy is earned, never assumed.** Sunrise tokens only appear after user action.
2. **Error is coral, never red.**
3. **Sage means progress.** Don't use decoratively.
4. **Purple is the through-line.** Both surfaces share it.
5. **Dark mode = night sky.** Stars of light in darkness.
6. **The bloom mark is ❖.**
7. **2am test.** Every element must feel safe at someone's lowest moment.
8. **Sky gradient is sacred.** Lavender → sky → sage → mint.
9. **Section backgrounds are untouchable.** The Living Sky hero, cool/warm gradients, and dark sections are exactly as they are on the live website.
10. **Social media carries the same heart.** Every post, every story, every pixel passes the 2am test.
