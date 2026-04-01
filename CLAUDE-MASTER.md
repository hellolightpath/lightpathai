# LIGHTPATH — MASTER DESIGN PHILOSOPHY, PRODUCT INTELLIGENCE & BUILD DOCTRINE
> Version: 1.0 | March 2026
> This is the single source of truth for everything LightPath. Every decision — product, design, engineering, content, AI, marketing — must align with this document.

---

## HOW TO USE THIS DOCUMENT

This document has four layers. Read them in order. Return to them often.

**Layer 1 — Soul** (Sections 1–4): Who we are, what we believe, what we will never compromise. Read this before making any decision.

**Layer 2 — Mind** (Sections 5–10): How the product thinks, what architecture powers it, how each surface works. Read this before designing or building anything.

**Layer 3 — Body** (Sections 11–18): The complete visual and interaction design system — colors, typography, components, motion, patterns. Read this before writing any UI code or creating any visual asset.

**Layer 4 — Discipline** (Sections 19–25): How we work, how we review, how we plan, how we avoid drift. Read this before proposing any change.

---

# LAYER 1 — SOUL

---

## 1. WHAT LIGHTPATH IS

LightPath is a calm, intelligent support system for life after loss. It understands what a person is carrying, what kind of support fits this moment, and what should happen next.

It combines emotional support, practical guidance, grief-aware pacing, continuity and memory, coordinated support from people who care, and intelligent orchestration across every surface.

**Core metaphor:** Light in darkness — the first hints of dawn. We hold darkness with dignity while scattering points of hope.

**Brand personality:** Gentle Strength. Quiet Joy. Honest Hope. Lived Understanding.

**Two surfaces, one heart:** A B2B marketing website speaks to HR directors and benefits leaders with confidence and polish. A product platform speaks to grieving individuals with calm, warmth, and gentleness. Both carry the same soul.

### The Five Things LightPath Must Do Well

1. **Understand the person's state** — what they are carrying, what kind of day this is, what capacity they have
2. **Interpret the moment** — what matters now, what is too much, what would feel like the right thing
3. **Choose the right support mode** — emotional support, practical action, remembrance, rest, or escalation
4. **Prepare the next useful action** — one clear step, wrapped in context, with an alternate path
5. **Coordinate the care ecosystem** — supporters, providers, and the platform working together around the user

If a proposal does not strengthen one or more of these five, question whether it matters.

### What LightPath Is Not

LightPath is not a grief content app, a journaling app with nice branding, a task manager with AI, a therapy chatbot, a feature-heavy wellness product, a bureaucratic case-management system, a recommendation feed, or a dashboard product disguised as support.

LightPath is one coordinated support mind. A calm interpreter of hard moments. A guide through both emotional and practical burden. A system that reduces chaos and blank-page moments. A product that helps people move with clarity and care.

---

## 2. THE 2AM TEST

This is our north star for every decision:

> If a user at 2am, in their darkest moment, encounters any element of LightPath — a screen, a button, a notification, a color, a word, a suggestion — does it feel like a hand on their shoulder?

Not a lecture. Not a checklist. Not a sales pitch. Not a generic wellness platitude. A hand on their shoulder.

This test applies to every pixel, every word, every interaction, every email, every social media post, every error message, every empty state, every loading screen. There are no exceptions.

---

## 3. THE LIGHTPATH DESIGN LAW

This is the core law of the product:

> The system must interpret complexity for the user and surface only what helps them act, feel steadier, or understand what matters now.

What this means in practice: hide machinery, surface meaning. Keep complexity in logic, not in UI. Never make the user decode the system. Never expose metadata just because it exists. Never turn the user into the orchestrator. Never add visible complexity unless it clearly reduces real-world burden.

A grieving user should not have to understand the product. The product should understand the user.

---

## 4. TRUST BEFORE INTIMACY

In grief and other sensitive contexts, trust comes before emotional closeness. The product earns trust through correctness, predictability, privacy, restraint, clarity, reliability, continuity, and grounded guidance.

Trust is broken by fluently incorrect advice, visible internal scoring, over-personalization without clear value, emotionally generic copy, sudden behavior shifts, clutter, forcing too much emotional depth too early, or surfacing help that does not fit the moment.

If the product is warm but wrong, it is not trustworthy. If it is polished but confusing, it is not trustworthy. If it is "intelligent" but opaque, it is not trustworthy.

---

# LAYER 2 — MIND

---

## 5. THE HIGHEST DESIGN STANDARD

Design to the quality bar of Apple Health, Headspace at its best, Calm at its best, Notion's structural clarity, Stripe's systems rigor, Linear's coherence and restraint. But LightPath must be more emotionally intelligent than all of them.

### The product should feel
Calm. Spacious. Warm. Gentle. Deeply held. Emotionally precise. Quietly powerful. Clinically thoughtful without sounding clinical. Useful without feeling mechanical. Beautiful without feeling decorative. Intelligent without feeling algorithmic.

### The product must never feel
Feature-heavy. Dashboard-like. Loud. Cluttered. Generic wellness. Bureaucratic. Emotionally vague. Cold. AI-gimmicky. Over-explained. Like the user is being managed by a system.

### What award-winning actually means
Not more gradients, more motion, more cards, more features, more visible AI, or more personalization copy.

Award-winning means the user feels understood quickly, the right thing appears at the right time, the interface lowers burden immediately, emotional and practical support feel coordinated, the system feels quietly intelligent, the interface is calmer than the logic underneath it, and the product knows when to lead, when to soften, when to step back, and when to escalate.

---

## 6. CORE ARCHITECTURE — STATE-FIRST, NOT FEATURE-FIRST

The platform must not behave like separate features. All major surfaces must be driven by shared intelligence.

### The Model

```
UserState → ClinicalRoute → SupportMode → Orchestration → Surface Delivery
```

This replaces the old feature-first model. Today becomes the orchestration brain. Care Plan becomes the operational engine. Inner Light becomes the emotional clinical engine. LightKeeper becomes the relational continuity layer. Guides, Vault, Find Care, supporters, and providers become coordinated support systems.

Every design proposal must fit this model.

### UserState — The Canonical Shared State

This is what the system knows about this person. At minimum:

**Identity & Loss Context:** journey type, relationship to deceased, nature of loss (sudden, expected, traumatic, ambiguous), timing of loss, time-since-loss band, jurisdiction

**Practical Burden:** authority state (executor, administrator, guardian, none), dependents and caregiving context, practical burden level, blocker state, document readiness

**Emotional & Support Context:** emotional signals, preferred support style, what helped before, supporter network state, provider involvement, important dates and anniversaries, safety flags

### ClinicalRoute — The Dominant Support Problem

The system must identify which clinical route is active:

- `supportive_bereavement` — normal grief, appropriate support and validation
- `structured_grief` — more complex grief requiring structured intervention
- `trauma_first` — trauma symptoms that need stabilization before grief work
- `practical_overload` — practical burden is the dominant problem right now
- `supporter_distress` — the person supporting a griever needs support themselves
- `provider_referral` — this person needs professional help beyond what the platform provides
- `crisis` — immediate safety concern

### SupportMode — The Pacing Control

This controls how the product behaves right now:

- `grounding` — help this person feel stable, present, safe
- `containment` — hold overwhelming emotion without trying to fix it
- `gentle_action` — small, manageable steps with emotional wrapping
- `focused_action` — practical tasks, clear execution support
- `reflection` — space for processing, meaning-making, remembrance
- `remembrance` — honoring the person who died, continuing bonds
- `rest` — the product steps back, offers only warmth and presence
- `crisis_override` — immediate safety-first response

### Orchestration — The Decision Layer

This is where the product decides what kind of day this is, what should lead right now, what should be suppressed, what should be elevated, what the one primary recommendation is, what alternate path exists, and whether supporters or providers should surface.

### TodayPayload — The Main Orchestration Output

This drives the Today surface. It includes: day type, support mode, primary recommendation, why-now explanation, emotional wrapper language, alternate path, hidden pressure level, and support network or provider suggestion when relevant.

---

## 7. THE FIVE SURFACES

### Today — The Brain and Heart

Today is the orchestration surface. It is not a dashboard, not a feature directory, not a card collection.

Its job is to answer: What kind of day is this? What matters now? What can this person realistically handle? What should lead — emotional support, practical action, remembrance, rest, or escalation?

Today should interpret the current state, set the pace for the day, choose one primary recommendation, wrap it in emotionally appropriate context, show one alternate path, and suppress noise.

Today must never become card soup, a quote engine, a to-do list in disguise, obvious AI recommendations, or a busy summary of everything the product can do.

**Today is excellent when** the user understands the day's priority within seconds, the product feels calmer than expected, emotional and practical support feel coordinated, anniversaries and hard days are handled intelligently, and the primary recommendation feels specific and justified.

### Care Plan — The Operational Engine

Care Plan is one of the most important parts of LightPath. It must become more intelligent under the hood while staying calm, simple, and low-burden on the surface.

Care Plan should feel like a calm guide, a clear plan, one step at a time, trustworthy, simple, useful. It must not feel like workflow software, a legal dashboard, project management, case management, a cluttered task engine, or exposed logic.

**Visible by default:** task title, why it matters, status (ready / blocked / waiting), one next step.

**Visible only when relevant or expanded:** blocker detail, document readiness detail, authority explanation, delegation opportunity, assist output, provider suggestion.

**Keep hidden unless needed:** dependency graphs, all metadata, internal scores, internal branching logic, system mechanics.

Care Plan should answer simply: What is this? Why does it matter? Can I do it now? What is the next step? What is the one thing missing, if anything?

**Care Plan is excellent when** tasks feel guided not dumped, blockers are obvious, readiness is obvious, delegation feels natural, users know why this matters now, and the surface remains calm even as the logic becomes more intelligent.

### Inner Light — The Emotional Clinical Engine

Inner Light should reason more like strong clinicians do, at a product-safe level: assess person + loss + context, infer dominant suffering type, infer likely route, match intervention family, choose pacing and dose, suggest escalation when appropriate.

**Intervention families:** grounding/stabilization, containment, grief reflection, meaning reconstruction, continuing bonds, guilt/blame softening, identity rebuilding, restoration/re-entry, support-seeking, remembrance/ritual.

**Scenario-specific pathways:** spouse/partner loss, child loss, parent loss, sudden/traumatic loss, suicide loss, overdose loss, perinatal loss, anticipatory grief, ambiguous loss/dementia caregiving, supporter distress.

**Measurement loops:** pre/post intensity, steadier/same/worse, what helped, what was too much, what to offer next, recurring patterns over time.

**Inner Light is excellent when** the user feels guided not left to browse, the suggestion feels emotionally and situationally right, support mode matches the moment, tools are scenario-aware, the system learns what helps, and escalation feels timely not alarming.

### LightKeeper — The Relational Continuity Layer

LightKeeper remembers what matters, carries structured memory across sessions, adapts tone and support style, reflects gently, routes to other surfaces when appropriate, and behaves differently during hard-date or high-burden periods.

Memory should be structured, useful, selective, dignity-preserving, not creepy, and not transcript-heavy.

**LightKeeper is excellent when** the user does not need to re-explain what matters, the tone adapts intelligently, recommendations feel less generic, and the product feels more relational over time.

### Supporting Surfaces — Guides, Vault, Find Care, Supporters

**Guides** are a contextual knowledge layer, not a passive library. They explain what the user is facing, support decisions, support understanding before action, and deepen context without adding clutter. Excellent when they appear at the right time and feel like trusted explanation, not content marketing.

**Vault** is task-readiness infrastructure, not just storage. It maps documents to task requirements, shows readiness at task and step level, prompts uploads at the right moment, and supports scoped sharing safely. Excellent when more tasks feel "ready to do" and document uploads feel purposeful.

**Find Care** is a context-aware care matching surface. It recommends providers based on actual need, distinguishes grief therapy from trauma care from legal help, and accounts for timing, burden, and scenario. Excellent when referrals feel timely, justified, and part of the care ecosystem.

**Supporters** receive role clarity, supporter-specific onboarding, "how to help today" suggestions, delegated tasks, anniversary/hard-period prompts, and privacy-aware scope. Excellent when supporters reduce burden rather than add to it and the system becomes a care coordinator.

---

## 8. HOW TO THINK BEFORE PROPOSING ANYTHING

Before proposing any product, design, intelligence, or architecture change, think in this exact order:

**1. Human state first.** What is the user likely feeling? What burden is dominant? What cognitive capacity do they likely have? What would feel like too much? What do they most need? What should not be asked of them right now?

**2. Product job second.** What is the product's job in this exact moment? What should lead — emotional support, practical support, remembrance, reflection, rest, supporter coordination, provider escalation?

**3. Clinical and orchestration logic third.** What should the system infer? What ClinicalRoute is active? What SupportMode? What should be suppressed? Elevated? What is the one primary recommendation? What alternate path exists? What if the primary recommendation is not taken?

**4. Interaction model fourth.** What should the user see first? What should stay hidden? What is the one primary action? What alternate path should exist? What can be deferred? What needs gentle explanation? What must remain invisible?

**5. UI last.** Only after all of the above: layout, cards, sections, buttons, copy, typography, color, motion, micro-interactions.

Do not start by designing UI components.

---

## 9. SEVEN REVIEW LENSES

Every proposal must pass all seven:

**Lens 1 — Human Burden.** Does this reduce cognitive and emotional burden, or add to it?

**Lens 2 — Emotional Precision.** Does this feel emotionally right for someone in grief, overload, guilt, fear, numbness, uncertainty, or exhaustion?

**Lens 3 — Functional Usefulness.** Does this materially help the user do, prepare, decide, understand, or feel steadier?

**Lens 4 — Intelligence Quality.** Does the product feel more aware, more context-sensitive, more coordinated, and better timed?

**Lens 5 — Visual Restraint.** Does this improve clarity without creating noise?

**Lens 6 — Architectural Discipline.** Does this strengthen the shared brain rather than create drift or local hacks?

**Lens 7 — Safety and Correctness.** Could this mislead, overstep, overwhelm, or create harmful ambiguity?

If a proposal fails more than one lens, it is not ready.

---

## 10. THE FINAL PRODUCT QUESTION

Every proposal must answer this:

> Does this make LightPath feel more like one wise, calm, coordinated mind — or just more polished?

If it only makes the product prettier, it is not enough. If it makes the product more useful, more emotionally intelligent, more coordinated, more context-aware, more restrained, more alive, more trustworthy — then it is moving in the right direction.

---

# LAYER 3 — BODY

---

## 11. COLOR PHILOSOPHY

Every color in the LightPath palette carries emotional weight. Nothing is decorative — each family serves a purpose in the journey from grief toward light. These colors work together like a sky at dawn — each one has its moment, and none overpowers another.

| Color Family | Emotional Role |
|---|---|
| **Purple** | The anchor. Trust, stability, the thread that connects both surfaces. Purple says "we're here." |
| **Lavender** | The breath. Soft enough to recede, present enough to hold. Creates space without emptiness. |
| **Sage** | Growth made visible. Used only where progress is real — never decorative. Sage is earned. |
| **Sunrise** | The first warmth after a long night. Energy and joy, but only after the user has taken a step. |
| **Glow** | The ambient warmth that fills a room. Softer than Sunrise — the light that's already there. |
| **Bloom** | The flower that grows from difficult soil. Celebration, beauty, the Benefits category. |
| **Blush** | The gentlest warmth on skin. Softer than Bloom, used in the sky gradient and tinted backgrounds. |

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

## 12. TWO VOICES, ONE HEART

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

## 13. SECTION BACKGROUNDS

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

## 14. TYPOGRAPHY

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

## 15. SPACING & LAYOUT

4px grid · Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 · Max-width: 72rem (`max-w-wide`)

Content max-width: 42rem (`max-w-content`) for prose. Section spacing: `py-24 sm:py-32`.

Scroll margin: 100px on all `[id]` elements for sticky header clearance.

**Layout philosophy:** Use whitespace as emotional room. Let surfaces breathe. Do not crowd the canvas. Use clear rhythm and spacing. Maintain calm hierarchy. Keep interactions predictable and soft.

---

## 16. COMPONENTS

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

## 17. LOGO — THE BLOOM MARK

### Symbol

❖ — Four rounded petals in a 2×2 cross, crystalline facets, diamond-star center. Clear space: 1× mark width. Never rotate, stretch, or recolor.

### Logo Files

- `logo.png` — Primary mark. Navbar: 30×30px. Footer: 26×26px. Border-radius: 14px.

### Logo Dynamics

**Floating animation** (always active): `logoFloat`: 4s ease-in-out infinite — gentle vertical bob, translateY 0 → -6px → 0.

**Hover interaction:** Logo image scales to `1.08` on hover with 0.4s ease transition. Navbar logo group scales to `1.10` on hover.

**Reserved effects** (for special moments only):

- `logoGlow`: Breathing purple halo — box-shadow pulses from 16px to 24px blur at `rgba(138,142,229, 0.15–0.3)`.
- `logoPulseRing`: Expanding ring — scale 0.85 → 1.8, opacity 0.5 → 0. For launch moments or celebrations.

The logo floats gently at all times. Glow and pulse ring are reserved for celebratory or milestone moments only. Never use aggressive or fast logo animations.

---

## 18. MOTION & ANIMATION

### Principles

All motion is organic and gentle. Motion should regulate, soften, suggest life — never agitate, never feel mechanical. Use `ease-in-out` or `ease-out` — never linear for UI elements. Background animations run 8–22s for subtlety. Interactive transitions: 0.3–0.6s. Always respect `prefers-reduced-motion`.

### Scroll Reveal System

- **Base:** `opacity: 0; transform: translateY(16px); transition: 0.6s ease-out`
- **Variants:** `.reveal-scale` (scale 0.96), `.reveal-left` (translateX -16px), `.reveal-right` (translateX 16px)
- **Revealed state:** `opacity: 1; transform: translateY(0) scale(1)`
- **Stagger:** Children get 80ms incremental delay (0, 80, 160, 240, 320, 400ms)
- Uses IntersectionObserver with `threshold: 0.1`, `rootMargin: 40px 0px -30px 0px`

### Hero Entrance

`heroEntrance`: 0.65s ease-out, translateY 12px → 0. Children stagger at 0.05s, 0.15s, 0.25s, 0.35s, 0.4s, 0.45s.

### Living Sky (Hero Background)

9 drifting orbs with `orbDrift1–4` animations (9–16s). Complex multi-keyframe translate + scale paths. `skyBreathe`: 8s breathing center glow, opacity 0.75–1, scale 1–1.05. `skyShimmer`: 10s gradient sweep. `lightRaysDrift`: 20s diagonal light ray movement. `sparkleFloat1–2`: 6–8s floating sparkle particles with upward drift.

### Impact Section (Dark)

`blobDrift1–3`: 18–22s subtle translate and micro-scale on gradient blobs.

### Feature Section

`featureGlow1–2`: 14–18s warm glow orb drifts at 0.6–0.7 opacity.

### Clouds

`cloud-drift-right`: translateX -60vw → 110vw. `cloud-drift-left`: reverse direction. Cloud elements use `::before` and `::after` pseudo-elements for 3D rounded shape.

### UI Effects

`shimmer`: 6s text background sweep for `.text-shimmer`. `typingDot`: 1.2s opacity/translateY pulse for typing indicator dots. `pulse-gentle`: 3s opacity 1 → 0.5 → 1 for subtle pulsing. `stat-glow`: On hover, `text-shadow: 0 0 40px currentColor`.

### Reduced Motion

All animations disabled when `prefers-reduced-motion: reduce`. Reveals show immediately. Shimmer reverts to static `#1C1C1E`. Logo float, blobs, and all keyframe animations halt.

---

# LAYER 4 — DISCIPLINE

---

## 19. THE LAYER MODEL — HOW LIGHTPATH IMPROVES

LightPath must improve in layers. Not through giant rewrites, reckless redesign, random cleanup, or feature sprawl.

**Layer 1 — Foundation / System Integrity:** Design system source of truth, token consistency, primitives, dead-end removal, interaction consistency, structural correctness.

**Layer 2 — Hierarchy and Calmness:** Reduce card soup, strengthen primary recommendation hierarchy, reduce competing actions, improve empty states, improve completion flows, improve spacing and rhythm.

**Layer 3 — Visible Intelligence:** Why-now framing, routed entry points, support-mode-aware copy, scenario-aware suggestions, continuity cues, better alternate paths.

**Layer 4 — Functional Intelligence:** Blocker detection, readiness states, authority-aware guidance, intervention routing, measurement loops, continuity memory, escalation logic.

**Layer 5 — System Coherence:** Shared state across surfaces, Today orchestration, Inner Light routing, Care Plan enrichment, LightKeeper continuity, supporter/provider coordination.

Every plan must identify which layer(s) it belongs to.

---

## 20. TWO TRACKS — ALWAYS

When creating improvement plans, always separate into:

**Track A — Foundation / Alignment:** Design token fixes, shadows, border consistency, primitives, typography cleanup, empty-state polish, dead-end cleanup, component consistency.

**Track B — Vertical Intelligence / Experience Lift:** Stronger Today recommendation logic, routed Inner Light entry, Care Plan readiness states, continuity cues, scenario-aware next steps, supporter routing, context-aware escalation.

If a plan only improves Track A, it is too surface-level. If a plan only improves Track B, it is too risky. A strong plan includes both.

---

## 21. REQUIRED CRITIQUE FORMAT

Before redesigning or improving anything, always critique the current state:

1. What this surface or flow is trying to do
2. What human state the user is likely in
3. What already works
4. What is misaligned
5. What is too dense, too vague, too generic, too flat, or too system-exposed
6. What should be removed
7. What should become primary
8. What should be hidden or deferred
9. What the better interaction model is
10. What the smallest safe improvement slice is

Do not jump straight into redesign.

---

## 22. REQUIRED PLANNING FORMAT

Before proposing any coding or implementation, always provide:

1. Goal
2. Why it matters
3. Highest-level experience goal
4. Included scope
5. Excluded scope
6. Layer classification (from Section 19)
7. Track classification (A, B, or both)
8. Exact files to change
9. Architecture reasoning
10. Existing systems to preserve
11. Risks
12. Migration path
13. Verification plan
14. Definition of done

Do not code before presenting that plan.

---

## 23. REQUIRED SELF-REVIEW

Every time you produce a plan, design proposal, critique, architecture recommendation, or implementation slice, you must critically review your own work before moving on.

### Self-Critique Checklist

1. What is strong about this proposal
2. What is too shallow
3. What is missing
4. What may create drift, clutter, fragility, or hidden risk
5. What feels surface-level vs structurally important
6. Whether this is ambitious enough
7. Whether this is safe enough
8. Whether it truly moves LightPath toward feeling like one wise, calm, coordinated mind
9. What should be improved before implementation
10. Whether this should proceed now or be sequenced differently

Then provide the **strengthened recommendation** — the improved version, not just the first version.

The workflow is always: propose → critique your own proposal → strengthen it → then recommend next step.

---

## 24. PRIORITIZATION ORDER

When choosing what to improve next, prioritize in this order:

1. Trust and correctness
2. Shared brain and orchestration
3. Care Plan operational intelligence
4. Inner Light routed intervention quality
5. LightKeeper continuity
6. Care ecosystem coordination
7. Polish and expansion

Use this order when tradeoffs exist.

---

## 25. WHAT TO AVOID

Do not let the product drift into: feature directories, generic AI companion patterns, dense task software, generic wellness cliches, therapy-theater chat, recommendation spam, emotional vagueness, surface polish without deeper product lift, visible internal system logic, or over-personalized copy without deeper intelligence.

Default improvement strategy: remove → simplify → group → reveal progressively → strengthen intelligence underneath → only then add.

---

# APPENDICES

---

## A. VISUAL PHILOSOPHY — DEEP PRINCIPLES

Visual design is not decoration. It is emotional regulation. Color, light, spacing, motion, shadow, and rhythm must all help carry the user.

**Color as emotional language:** Purple = trust and continuity. Lavender = breath and space. Sage = earned progress. Sunrise = warmth after action. Glow = ambient warmth. Bloom = celebration. Blush = gentle warmth.

**Motion as regulation:** Motion should regulate, soften, suggest life. Never agitate, never feel mechanical. Always respect reduced motion preferences.

**Layout as emotional room:** Whitespace is not wasted space — it is breathing room. Surfaces should breathe. Do not crowd the canvas. Maintain calm hierarchy.

**Imagery principles:** Soft, watercolor-inspired. Warm, misty, atmospheric. Never sharp or clinical. No stock photos of crying people. No urgency language near grief content. No exclamation marks near grief content. No harsh colors or neon.

---

## B. PLATFORM PATTERNS

**Visual standard:** The Explore page is the gold standard. Soft, warm, whisper-quiet.

**Principles:** Everything whispers, nothing shouts. Headings semibold (600). Borders use `#F1F5F9`. Shadows barely there.

**Navigation:** 5 tabs — Today, Explore, LightKeeper, Inner Light, Care Plan. Active: purple + lavender tint bg.

**Mood chips:** Peaceful, Grateful, Hopeful → sage. Reflective, Nostalgic, Bittersweet → purple. Sad, Overwhelmed, Anxious → warm sunrise. Numb → lavender.

**Dashboard cards:** Quote (lavender tint) → Milestone (sage) → Action (sky gradient). Late-night message after 10pm uses warm glow tint.

**Care Plan categories:** Administrative=purple, Financial=sunrise, Legal=sage, Benefits=bloom.

**Feature color codes:** Care Plan=purple, Benefits=purple-accent, LightKeeper=sunrise, Inner Light=sage.

---

## C. BLOG & PROSE

**Typography:** Headings use Lora at 1.5rem (sm: 1.75rem), weight 400, spacing -0.02em. Body paragraphs 1rem, line-height 1.75. List items 0.9375rem with 6px purple circle bullets at 40% opacity.

**Callout cards:** Purple tint `rgba(138,142,229,0.04)` with 1px border. Variants: warm (sunrise tint), green (success tint), rose (sky blue tint). 1rem radius.

**Stat cards:** Glassmorphic `rgba(255,255,255,0.6)`, blur(12px). Value in Lora 2rem, label in body color.

**Filter pills:** `rgba(255,255,255,0.5)`, 0.6875rem, rounded-full. Hover: `rgba(255,255,255,0.7)` with purple border hint.

---

## D. SOCIAL MEDIA GUIDELINES

### Visual Identity Across Platforms

**Profile picture:** The Bloom Mark ❖ on a soft lavender-to-sky gradient background (`#E8DDFA → #D5E8F8`). Never on solid white — always use the Living Sky palette.

**Cover/banner images:** Use the Living Sky gradient as background. Lora serif for any headline text. Keep text minimal.

### Post Templates

**Informational / Educational posts:** Background: Cool section gradient or solid `#E8E0FA`. Text: Lora headings in `#1C1C1E`, Inter body in `#5C6578`. Accent: Purple `#9598E8` for highlights and dividers. Cards/callouts: White glass with subtle purple left border.

**Warm / Emotional posts (stories, testimonials, hope):** Background: Warm section gradient or Glow tint `#FFF8E8`. Accent: Sunrise `#F2B84D` for highlights, Glow `#FFD98A` for ambient warmth. Tone: Extra gentle. No exclamation marks. Present tense.

**Impact / Stats posts (fundraising, partnerships, data):** Background: Dark `#0F1029` or navy gradient. Text: White `#F5F5F7`, Lora serif for headline numbers. Accent: Purple glow at low opacity. Cards: Dark glass `rgba(255,255,255,0.04)` with thin white border.

**Milestone / Celebration posts:** Background: Sky gradient (`#E8DDFA → #F0E8E0 → #D5E8F8`). Accent: Bloom `#D4A0C0` + Glow `#FFD98A`. The Bloom Mark can use `logoPulseRing` if animated format.

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

Soft watercolor-inspired illustrations in the LightPath palette. Figures should be abstract/silhouetted rather than detailed. Landscapes: lavender skies, golden paths, soft horizons. Prefer warm, misty atmospheres over sharp, clinical imagery.

---

## E. VOICE & TONE

**Marketing:** Confident, professional, human. Lora serif warmth. Can reference ROI and outcomes.

**Platform:** Gentle, never clinical. "We" and "you." Present tense. Never assumes emotional state. No exclamation marks near grief.

**Shared rules:** Errors use coral. Success uses sage. Empty states = invitations. Loading = lavender pulse.

---

## F. ACCESSIBILITY

WCAG AA minimum. Purple on white: pass. Sage on white: pass. Sunrise: large text/icons only. Respect `prefers-reduced-motion`. Focus states: `2px solid` purple outline, `3px offset`, `4px radius`. All `[id]` elements have `scroll-margin-top: 100px` for sticky nav.

---

## G. RULES THAT NEVER BREAK

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
11. **State-first, not feature-first.** Always: UserState → ClinicalRoute → SupportMode → Orchestration → Surface.
12. **The system interprets for the user.** Never expose machinery. Surface meaning.
13. **Trust before intimacy.** Correctness and predictability before emotional depth.
14. **Everything whispers, nothing shouts.** The Explore page is the gold standard.
15. **One wise, calm, coordinated mind.** That is the measure of every proposal.

---

## H. DAILY WORKING MODE (SHORT VERSION)

When reviewing or building anything for LightPath, operate as:

> World-class product designer, principal architect, trauma-informed systems designer, and clinical product strategist. Design for Apple/Stripe/Linear-level quality with greater emotional intelligence. Use state-first architecture: UserState → ClinicalRoute → SupportMode → Orchestration → Surface Delivery. Prioritize calmness, correctness, deep intelligence, maintainability, and architectural discipline. Be highly critical of shallow or surface-level improvements. Separate foundation/alignment work from vertical intelligence lifts. Always critique your own work before moving on: identify what is strong, what is weak, what is missing, what is risky, and how to strengthen it. Before any implementation, provide goal, scope, files, architecture reasoning, risks, migration path, verification plan, and definition of done. Always optimize for a product that feels like one wise, calm, coordinated mind.
