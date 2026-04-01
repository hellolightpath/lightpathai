# LIGHTPATH PRODUCT — DESIGN PHILOSOPHY, INTELLIGENCE & BUILD DOCTRINE
> Version: 1.0 | March 2026
> This document governs the LightPath product platform — the surface grieving individuals use. For the marketing website and external communications, see CLAUDE-MARKETING.md.

---

## HOW TO USE THIS DOCUMENT

This document has four layers. Read them in order. Return to them often.

**Layer 1 — Soul** (Sections 1–4): Who we are, what we believe, what we will never compromise.

**Layer 2 — Mind** (Sections 5–10): How the product thinks, what architecture powers it, how each surface works.

**Layer 3 — Body** (Sections 11–16): The product platform's visual and interaction design system.

**Layer 4 — Discipline** (Sections 17–23): How we work, how we review, how we plan, how we avoid drift.

---

# LAYER 1 — SOUL

---

## 1. WHAT LIGHTPATH IS

LightPath is a calm, intelligent support system for life after loss. It understands what a person is carrying, what kind of support fits this moment, and what should happen next.

It combines emotional support, practical guidance, grief-aware pacing, continuity and memory, coordinated support from people who care, and intelligent orchestration across every surface.

**Core metaphor:** Light in darkness — the first hints of dawn. We hold darkness with dignity while scattering points of hope.

**Brand personality:** Gentle Strength. Quiet Joy. Honest Hope. Lived Understanding.

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

This test applies to every pixel, every word, every interaction, every notification, every error message, every empty state, every loading screen. There are no exceptions.

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

It should not be built around stages of grief, a static mood selector, a generic self-care shelf, or wellness browsing.

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

# LAYER 3 — BODY (PRODUCT PLATFORM DESIGN SYSTEM)

---

## 11. COLOR — EMOTIONAL LANGUAGE

Every color in the LightPath palette carries emotional weight. Nothing is decorative — each family serves a purpose in the journey from grief toward light.

| Color Family | Emotional Role |
|---|---|
| **Purple** `#9598E8` | The anchor. Trust, stability, the thread that connects. Primary actions, buttons, links. |
| **Lavender** `#E8E0FA` | The breath. Soft enough to recede, present enough to hold. Focus states, tinted backgrounds. |
| **Sage** `#7BA88E` | Growth made visible. Used only where progress is real — never decorative. Sage is earned. |
| **Sunrise** `#F2B84D` | The first warmth after a long night. Energy and joy, but only after the user has taken a step. |
| **Glow** `#FFD98A` | The ambient warmth that fills a room. Softer than Sunrise — the light that's already there. |
| **Bloom** `#D4A0C0` | The flower that grows from difficult soil. Celebration, beauty, the Benefits category. |
| **Blush** `#F2D4E0` | The gentlest warmth on skin. Sky gradient, tinted backgrounds. |

### Platform-Specific Tokens

**Surface:** `#F9F7F4` (warmer than marketing's `#FDFCFB`)

**Accent:** Sage `#7BA88E` (marketing uses Sunrise)

**Text:** Heading `#1C1C1E` · Body `#3A3A3C` (darker than marketing's `#5C6578` for readability in longer reading) · Muted `#8E96A6`

**Borders:** `#F1F5F9` (whisper-light) · `#E2E8F0` (structural)

**Card:** `#FFFFFE` · Shadow `0 2px 8px rgba(0,0,0,0.04)` (barely there)

**Status:** Success `#63D583` · Warning `#E5A030` · Error `#D4725C` (warm coral — never red)

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

★ = base value

### Platform Color Combinations

| Combination | Colors | When to use |
|---|---|---|
| **Sage + Lavender** | Sage `#7BA88E` + Lavender `#E8E0FA` | Progress indicators, success states |
| **Sunrise + Purple** | Sunrise `#F2B84D` + Purple `#9598E8` | Warmth with structure — dashboard accents |
| **Warm Section** | `#F9F7F4` → `#FEF9F0` → `#FFF8ED` → `#F9F7F4` | Emotional moments, warm context wrapping |
| **Cool Section** | `#F9F7F4` → `#F5F3FA` → `#F8F5FC` → `#F9F7F4` | Information sections, neutral context |

### Sky Gradient (emotional signature — sacred)

`#E8DDFA → #E4D8F2 → #F2D4E0 → #F0D8E8 → #F0E8E0 → #FFE4AD → #E0E8F5 → #D5E8F8 → #C8E5F5`

The full emotional arc: lavender dawn → blush → bloom warmth → golden glow → cool sky.

### Dark Mode (Night Sky)

Base `#1A1A1E` · Surface `#242428` · Card `#2C2C30` · Border `#3A3A3E` · Text `#F5F5F7` · Body `#C8C8CC`

---

## 12. TYPOGRAPHY

**Platform uses the system font stack** — no custom fonts to load. Clean, native, fast.

**Shared UI elements** (buttons, labels, nav): Inter.

| Element | Weight | Size |
|---|---|---|
| Heading LG | Semibold (600) | 2rem / -0.02em / 1.12 |
| Heading MD | Semibold (600) | 1.5rem / -0.02em / 1.16 |
| Heading SM | Semibold (600) | 1.25rem / -0.02em / 1.2 |
| Body | Regular (400) | 1rem / 1.75 line-height |
| Body Small | Regular (400) | 0.875rem / 1.6 line-height |
| Label | Semibold (600) | 0.75rem / uppercase / 0.1em tracking |
| Caption | Regular (400) | 0.8125rem / 1.5 line-height |

Platform headings use **semibold (600)** — the weight carries structure without heaviness.

---

## 13. SPACING, LAYOUT & STRUCTURE

**Grid:** 4px base · Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96

**Max-width:** Content at 42rem for prose. Full platform width is context-dependent.

**Radius:** 16px for all platform components. This is the platform's signature — softer than sharp corners, more grounded than fully rounded.

**Layout philosophy:** Use whitespace as emotional room. Let surfaces breathe. Do not crowd the canvas. Maintain calm hierarchy. Keep interactions predictable and soft.

**Navigation:** 5 tabs — Today, Explore, LightKeeper, Inner Light, Care Plan. Active state: purple text + lavender tint background. Scroll margin: 100px on all `[id]` elements for header clearance.

---

## 14. PLATFORM COMPONENTS

### Buttons

- 16px radius, max-width 320px, `padding: 14px 32px`
- Primary: Purple `#9598E8` background, white text
- Secondary: White background, purple text, subtle border
- Transitions: 300ms ease-in-out
- Never use marketing's glassmorphic or `rounded-full` styles on platform

### Cards

- 16px radius
- Soft shadows: `0 2px 8px rgba(0,0,0,0.04)` (barely there)
- Sage-mint gradient washes for progress-related cards
- Lavender tint for quote/reflection cards
- Warm glow tint for late-night (after 10pm) messages
- Sky gradient for action cards

### Inputs

- `rounded-xl` (12px)
- Background: `rgba(255,255,255, 0.5)`, `backdrop-filter: blur(8px)`
- Focus: purple border glow `rgba(140,145,230, 0.35)` with `3px` ring at 8% opacity

### Toasts

- Info = purple bg
- Success = sage
- Warning = sunrise
- Error = coral (never red)
- Celebration = glow
- 12px radius, auto-dismiss 5s (never auto-dismiss errors)

### Empty States

Empty states are invitations, never cold vacuums. They should feel warm, suggest a gentle next step, and never make the user feel like something is missing or broken. Use lavender tint backgrounds and soft illustration.

### Loading States

Loading = lavender pulse. Gentle, rhythmic, never aggressive. Use `pulse-gentle`: 3s opacity 1 → 0.5 → 1.

---

## 15. PLATFORM PATTERNS

**Visual standard:** The Explore page is the gold standard. Soft, warm, whisper-quiet. Everything whispers, nothing shouts.

**Mood chips:** Peaceful, Grateful, Hopeful → sage. Reflective, Nostalgic, Bittersweet → purple. Sad, Overwhelmed, Anxious → warm sunrise. Numb → lavender.

**Dashboard cards:** Quote (lavender tint) → Milestone (sage) → Action (sky gradient). Late-night message after 10pm uses warm glow tint.

**Care Plan categories:** Administrative = purple, Financial = sunrise, Legal = sage, Benefits = bloom.

**Feature color codes:** Care Plan = purple, Benefits = purple-accent, LightKeeper = sunrise, Inner Light = sage.

### Progressive Disclosure

The platform's primary interaction pattern is progressive disclosure:

- **Level 1 — Glance:** Title + emotional context + status. Enough to orient without reading.
- **Level 2 — Read:** Why it matters + next step + any blockers. Enough to decide.
- **Level 3 — Act:** Full detail, assist output, delegation, provider suggestion. Only when the user actively engages.

Never show Level 3 by default. Never make Level 1 feel incomplete.

---

## 16. MOTION

All motion is organic and gentle. Motion should regulate, soften, suggest life — never agitate, never feel mechanical.

**Platform transitions:** 300ms ease-in-out for all interactive elements.

**Scroll reveals:** `opacity: 0; transform: translateY(16px); transition: 0.6s ease-out`. Stagger children at 80ms intervals.

**Typing indicator:** `typingDot`: 1.2s opacity/translateY pulse for LightKeeper.

**Pulse:** `pulse-gentle`: 3s opacity 1 → 0.5 → 1 for loading and subtle attention.

**Reduced motion:** All animations disabled when `prefers-reduced-motion: reduce`. Reveals show immediately. All keyframe animations halt. The platform must be fully functional without any motion.

---

# LAYER 4 — DISCIPLINE

---

## 17. THE LAYER MODEL — HOW LIGHTPATH IMPROVES

LightPath must improve in layers. Not through giant rewrites, reckless redesign, random cleanup, or feature sprawl.

**Layer 1 — Foundation / System Integrity:** Design system source of truth, token consistency, primitives, dead-end removal, interaction consistency, structural correctness.

**Layer 2 — Hierarchy and Calmness:** Reduce card soup, strengthen primary recommendation hierarchy, reduce competing actions, improve empty states, improve completion flows, improve spacing and rhythm.

**Layer 3 — Visible Intelligence:** Why-now framing, routed entry points, support-mode-aware copy, scenario-aware suggestions, continuity cues, better alternate paths.

**Layer 4 — Functional Intelligence:** Blocker detection, readiness states, authority-aware guidance, intervention routing, measurement loops, continuity memory, escalation logic.

**Layer 5 — System Coherence:** Shared state across surfaces, Today orchestration, Inner Light routing, Care Plan enrichment, LightKeeper continuity, supporter/provider coordination.

Every plan must identify which layer(s) it belongs to.

---

## 18. TWO TRACKS — ALWAYS

**Track A — Foundation / Alignment:** Design token fixes, shadows, border consistency, primitives, typography cleanup, empty-state polish, dead-end cleanup, component consistency.

**Track B — Vertical Intelligence / Experience Lift:** Stronger Today recommendation logic, routed Inner Light entry, Care Plan readiness states, continuity cues, scenario-aware next steps, supporter routing, context-aware escalation.

If a plan only improves Track A, it is too surface-level. If a plan only improves Track B, it is too risky. A strong plan includes both.

---

## 19. REQUIRED CRITIQUE FORMAT

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

## 20. REQUIRED PLANNING FORMAT

Before proposing any coding or implementation, always provide:

1. Goal
2. Why it matters
3. Highest-level experience goal
4. Included scope
5. Excluded scope
6. Layer classification (from Section 17)
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

## 21. REQUIRED SELF-REVIEW

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

## 22. PRIORITIZATION ORDER

When choosing what to improve next:

1. Trust and correctness
2. Shared brain and orchestration
3. Care Plan operational intelligence
4. Inner Light routed intervention quality
5. LightKeeper continuity
6. Care ecosystem coordination
7. Polish and expansion

---

## 23. WHAT TO AVOID

Do not let the product drift into: feature directories, generic AI companion patterns, dense task software, generic wellness cliches, therapy-theater chat, recommendation spam, emotional vagueness, surface polish without deeper product lift, visible internal system logic, or over-personalized copy without deeper intelligence.

Default improvement strategy: remove → simplify → group → reveal progressively → strengthen intelligence underneath → only then add.

---

## RULES THAT NEVER BREAK

1. **Joy is earned, never assumed.** Sunrise tokens only appear after user action.
2. **Error is coral, never red.**
3. **Sage means progress.** Don't use decoratively.
4. **Purple is the through-line.** The anchor across all surfaces.
5. **Dark mode = night sky.** Stars of light in darkness.
6. **The bloom mark is ❖.**
7. **2am test.** Every element must feel safe at someone's lowest moment.
8. **Sky gradient is sacred.**
9. **State-first, not feature-first.** Always: UserState → ClinicalRoute → SupportMode → Orchestration → Surface.
10. **The system interprets for the user.** Never expose machinery. Surface meaning.
11. **Trust before intimacy.** Correctness and predictability before emotional depth.
12. **Everything whispers, nothing shouts.** The Explore page is the gold standard.
13. **One wise, calm, coordinated mind.** That is the measure of every proposal.
14. **Empty states are invitations.** Never a cold vacuum.
15. **Platform radius is 16px.** Not rounded-full, not rounded-3xl. Grounded softness.

---

## VOICE & TONE (PRODUCT PLATFORM)

Gentle, never clinical. "We" and "you." Present tense. Never assumes emotional state. No exclamation marks near grief content.

Errors use coral and gentle language. Success uses sage. Empty states are invitations with warmth. Loading is a lavender pulse.

The product speaks like a wise friend who has been through loss themselves — not a therapist performing therapy, not a system generating outputs, not a wellness brand selling calm.

---

## ACCESSIBILITY

WCAG AA minimum. Purple on white: pass. Sage on white: pass. Sunrise: large text/icons only. Respect `prefers-reduced-motion`. Focus states: `2px solid` purple outline, `3px offset`, `4px radius`. All `[id]` elements have `scroll-margin-top: 100px`.

---

## DAILY WORKING MODE (SHORT VERSION)

> World-class product designer, principal architect, trauma-informed systems designer, and clinical product strategist. Design for Apple/Stripe/Linear-level quality with greater emotional intelligence. Use state-first architecture: UserState → ClinicalRoute → SupportMode → Orchestration → Surface Delivery. Prioritize calmness, correctness, deep intelligence, maintainability, and architectural discipline. Be highly critical of shallow or surface-level improvements. Separate foundation/alignment work from vertical intelligence lifts. Always critique your own work before moving on. Before any implementation, provide goal, scope, files, architecture reasoning, risks, migration path, verification plan, and definition of done. Always optimize for a product that feels like one wise, calm, coordinated mind.
