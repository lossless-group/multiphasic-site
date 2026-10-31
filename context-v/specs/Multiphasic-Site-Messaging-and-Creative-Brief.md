---
title: "Multiphasic — Messaging Spine and Creative Brief"
lede: "Narrative spine, catch messaging, and three competing design directions for the Multiphasic Corporation marketing site — a materials-state-control deep tech company. Feeds three parallel coded variants under sites/multiphasic-site."
date_created: 2026-08-26
date_modified: 2026-08-26
date_authored_initial_draft: 2026-08-26
date_authored_current_draft: 2026-08-26
at_semantic_version: 0.1.0.0
augmented_with: "Claude Code (Claude Opus 5)"
status: Draft
category: Specs
tags: [Multiphasic, Creative-Brief, Messaging, Design-Direction, Astro-Knots, Deep-Tech, Materials-Science]
authors:
  - Michael Staton
site_uuid: ae8a047e-9c22-4ccd-be43-14006209848e
hex_code: lizoel
publish: true
type: Specs
---

# Multiphasic — Messaging Spine and Creative Brief

## 0. Source material

Single input: a 5-slide WPS deck (`Presentation1.pdf`, 2026-08-26), marked CONFIDENTIAL.
Everything below is derived from it plus the operator's framing.

**Latent brand already present in the deck** (not "no brand" — an unarticulated one):

| Token | Value (eyeballed) | Role in deck |
|---|---|---|
| Navy ground | `#0A2C47` → `#123A56` | Full-bleed section backgrounds |
| Coral rule | `#E8593C` | Short heavy underline under H1s; stat up-arrows |
| Cyan label | `#29B6E8` | ALL-CAPS category labels (REJECTED PARTS, HYPERSONICS) |
| Beam white/cyan | `#BFEFFF` → `#FFFFFF` | The light bridging the fractured beam on the VISION slide |
| Laser violet | `#7B5CFF` → `#FF3DCB` | The ultrafast laser sheet, slide 3 |
| Wordmark | Wide geometric tech sans, letterspaced | MULTIPHASIC |
| Lockup tagline | "material state solutions" | Under wordmark, light weight |
| Mark | Circle enclosing an irregular dot cluster | Reads as a lattice / multiphase micrograph |
| Product name | METASTATE | Laser head on slide 3 |

**Verbatim lines worth preserving** (the deck's own writing is good):

- "The next materials breakthrough isn't inventing new materials. It's unlocking the full potential of the ones we already use."
- "From materials processing to materials programming."
- "Make atomistic material-state control a standard layer of manufacturing — delivering a trillion dollar materials upgrade to industry."

---

## 1. The positioning, in one paragraph

Manufacturing has spent a century getting extraordinary control over **machines** and
**processes** — position to the micron, temperature to the degree, tolerance stacks
modeled to death. It has almost no control over the **state of the material itself**.
Metal arrives in whatever atomic arrangement its thermal history happened to leave it
in, and every downstream decision — how much to over-build, how much to inspect, how
much to throw away — is a hedge against that uncertainty. Multiphasic applies tuned
ultrafast laser excitation *during manufacture* to guide the atomic lattice into
metastable states unreachable by heat treatment. It turns material state from an
inherited property into a **specified** one.

**The single sentence to lead with:**
> Manufacturing controls shape to the micron. It controls *state* by inheritance.

---

## 2. Catch messaging — candidate headlines

### Tier 1 — hero candidates (pick one per variant)

| # | Line | Register |
|---|---|---|
| H1 | **Program the state of matter.** | Shortest, boldest, most "frontier." |
| H2 | **From materials processing to materials programming.** | Deck's own thesis. Six words, the whole company. |
| H3 | **Manufacturing controls shape. Now it can control state.** | The gap, stated as a turn. Most argumentative. |
| H4 | **The next materials breakthrough isn't a new material.** | Deck's opener. Sets up the sub-line. |
| H5 | **Every metal part ships at a fraction of its potential.** | Loss-framed, provocative. |

### Tier 2 — sub-heads / deck lines

- "It's unlocking the full potential of the ones we already use."
- "Tuned ultrafast laser excitation, applied during manufacture, guiding the atomic
  lattice into metastable states beyond the reach of any furnace."
- "A new control layer for manufacturing — atomistic, in-process, specified."

### Tier 3 — the four subtractions (operator-supplied, sharpened)

Present as a single movement. The product is **less**.

> **Less scrap.** Up to 30% of parts rejected — after the time and cost is already spent.
> **Less qualification uncertainty.** Up to 50% of component cost consumed by recurring
> qualification driven by performance variance.
> **Less over-design.** Up to 2× the material and weight, added purely as a hedge.
> **Less resource use.** Every one of the above is metal, energy, and hours that never
> had to be spent.

Framing line: **"The upgrade is subtractive."**

### Tier 4 — taglines (to sit under / replace "material state solutions")

- material state solutions *(incumbent — keep as the formal lockup)*
- Control the state, not just the shape.
- A control layer for matter.
- Specified, not inherited.

---

## 3. Narrative spine (identical across all three variants)

The variants differ in **form**, not in **argument**. Every one hits these eight beats
in this order, so they can be compared like-for-like.

| # | Beat | Working title | Content |
|---|---|---|---|
| 1 | **Thesis** | Hero | Headline + sub + one CTA. The circular mark and wordmark. |
| 2 | **The gap** | Machines vs. matter | Precise control over machines and processes; almost none over material state — which is what actually determines performance in service. |
| 3 | **The cost** | A trillion-dollar problem | Four stats: 30% rejected · 50% of component cost in requalification · 2× over-design · 50–90% of cyclic-load failures are fatigue. |
| 4 | **The squeeze** | Demand is outrunning the material | Reusable rockets · sustained hypersonics · high-current AI datacenters. Modern tech is pushing materials past today's limits *while* the control gap stays open. |
| 5 | **The mechanism** | METASTATE | Tuned ultrafast laser excitation during manufacture → guided atomic lattice → superior metastable states. This is the "how it works" beat and the visual centerpiece. |
| 6 | **The result** | The four subtractions | Tier 3 messaging above. |
| 7 | **The vision** | A standard layer | "Make atomistic material-state control a standard layer of manufacturing — delivering a trillion dollar materials upgrade to industry." |
| 8 | **The ask** | Contact | Partner / pilot / talk to us. Deliberately quiet. |

---

## 4. Three design directions

Each is a full aesthetic position, not a color reskin. Each gets its own theme name,
its own type pairing, its own flare component, and a distinct distance from the deck.

### Direction A — "Phase Diagram"
**Theme name:** `theme-instrument` · **Distance from deck: closest**

The site as a **scientific instrument readout**. This is the direction that wins a
procurement engineer at a primes-tier aerospace supplier. Restraint is the whole point.

- **Ground:** deck navy, near-flat. Content sits on thin-ruled panels, not cards.
- **Ink:** cyan for data and category labels, coral reserved *exclusively* for the
  single most important number on any given screen — scarcity makes it loud.
- **Type:** a wide technical grotesque for display (matching the wordmark's proportions),
  a true monospace for every number, unit, axis tick, and label. Numbers never set in
  the body face. Ever.
- **Layout:** measured, generous, axis-like. Section headers carry a hairline rule and a
  monospaced index (`02 / THE COST`). Stats laid out as a data table, not as pill cards.
- **Motion:** almost none. Values count up once. Rules draw themselves in. That's it.
- **Flare — `EnergyLandscape.astro`:** the canonical metastable-well diagram, scroll-driven.
  A potential-energy curve with a ball resting in a shallow local minimum labeled
  CONVENTIONAL. As you scroll beat 5, a pulse of light strikes, the curve deforms, and
  the ball settles into a deeper, narrower well labeled METASTATE. This is the single
  most honest illustration of what the company actually does, and no competitor site has it.
  SVG + CSS `offset-path` / a short GSAP timeline. No WebGL needed.
- **Secondary flare — `PhaseField.astro`:** a small, quiet EBSD-style grain map that
  reorganizes its cell boundaries on hover. Canvas or SVG Voronoi.

### Direction B — "Lattice"
**Theme name:** `theme-lattice` · **Distance from deck: furthest**

The site as **the material itself**. Frontier deep-tech register — the register of a
company that thinks it's founding a new manufacturing layer, not selling a service.

- **Ground:** near-black with a violet undertone (`#08060E`), so the laser violet →
  magenta from slide 3 can actually glow. Navy demoted to a supporting surface color.
- **Ink:** near-white display type at large sizes; violet/magenta gradient reserved for
  the excitation moments; cyan survives as the "after" state color.
- **Type:** oversized display, tight tracking, very high contrast against generous
  black. Body type small and quiet by comparison. The page breathes in extremes.
- **Layout:** full-bleed sections, each one a held moment. Fewer words per screen than
  A by roughly half. Closer to a manifesto than a brochure.
- **Motion:** the lattice is always faintly alive. Section transitions are excitation
  events — a front sweeps through, the structure reorders behind it.
- **Flare — `LatticeExcitation.astro`:** a node-and-edge lattice underlaying the full
  page. It begins **defective** — irregular spacing, dislocations, a visible grain
  boundary. A wavefront (tied to scroll position) sweeps across; behind it the lattice
  anneals into clean, ordered, brighter geometry. Canvas 2D is sufficient and cheaper
  than Three.js; reach for Three only if depth genuinely adds meaning.
  Must respect `prefers-reduced-motion` with a static ordered-lattice fallback.
- **Secondary flare — `PulseEnvelope.astro`:** a femtosecond pulse envelope — a carrier
  wave inside a Gaussian envelope — as a thin animated hairline used as a section divider.
  This replaces the coral rule from the deck with something that means something.

### Direction C — "Before the Beam"
**Theme name:** `theme-diptych` · **Distance from deck: reinterprets it**

The site as a **sustained argument in two columns**. Takes the deck's fractured-bridge
image — two halves, a beam of light between them — and makes it the structural principle
of every single section.

- **Ground:** light. Warm paper/bone on the left ("today"), deep navy on the right
  ("with Multiphasic"). This is the only direction that isn't dark-first, which alone
  makes it worth building.
- **Ink:** coral is the cost color and appears *only* on the left half. Cyan is the gain
  color and appears *only* on the right. The reader learns the code in one section and
  then reads the rest of the page fluently.
- **Type:** editorial. A high-contrast serif or a humanist sans for the argument, a
  compact grotesque for the data. Reads like a strongly designed white paper.
- **Layout:** every beat is a diptych. The dividing line is the beam. On beats 3 and 6
  the two halves carry the same metric under both regimes, so the delta is visual, not
  claimed.
- **Motion:** the divider is the interaction. Scroll-driven (or draggable) wipe, one
  per section, that slides the beam across and reveals more of the right half.
  Falls back to a static side-by-side without JS.
- **Flare — `BeamDivider.astro`:** the vertical light seam. Sharp core, soft bloom,
  slight vertical drift. The fractured-bridge slide rendered as a UI primitive.
- **Secondary flare — `OverdesignMass.astro`:** a part silhouette that visibly sheds
  its hedge material — the 2× over-design stat rendered as the part slimming down.

---

## 5. Build constraints — non-negotiable

Every variant obeys Astro Knots conventions or it does not ship.

1. **Stack:** Astro 7 + Tailwind 4 (`@tailwindcss/vite`) + Svelte 5 only where reactivity
   genuinely earns it. **No React. No JSX. No MDX.** No UI libraries.
2. **Tech hierarchy:** HTML/CSS first, vanilla JS second, small focused package third,
   framework last. CSS animation before GSAP; GSAP only where CSS genuinely can't.
3. **Two-tier tokens:** Tier 1 named `--color__*` / `--font__*` raw values at the top of
   `global.css`; Tier 2 semantic kebab-case `--color-primary`, `--font-display`, `--fx-*`
   referencing them. **Components never read a `__` token.**
4. **Three modes, mandatory:** `light` / `dark` / `vibrant` on `data-mode`, plus
   `data-theme` + `.theme-*` on `<html>`. Vibrant is **dark-based** and must set
   `--color-background`, `--color-surface`, `--color-text`, `--color-border` — inheriting
   light-mode white is the standard failure. Copy the switchers from
   `packages/ui/theme-mode/`, not from hypernova.
5. **Flare convention:** design-oriented components live in `src/components/flare/`,
   PascalCase conceptual names, props for color/height/motion toggles, and every one
   gets mounted at `/design-system/flare/` for side-by-side review.
6. **Required pages:** `/` , `/design-system/`, `/brand-kit/`. Both reference pages carry
   the mode toggle and `<meta name="robots" content="noindex, nofollow" />`.
7. **Content in markdown**, not hardcoded in `.astro`. Frontmatter keys `snake_case`,
   tag values `Train-Case`, long strings double-quoted, lenient parsing at the loader.
8. **Independently deployable.** No `workspace:*`. No `packageManager` pin. pnpm only.
9. **Confidentiality:** the deck is marked CONFIDENTIAL. Source PDF and any extracted
   assets stay in `context-v/extra/private/` (gitignored). The site ships `noindex` until
   the operator says otherwise.

## 6. Open questions for the operator

1. Is METASTATE the product name, the machine name, or an internal codename? Beat 5's
   copy changes depending.
2. Public marketing site, or a gated investor/partner surface? Drives whether we ship the
   access gate + `noindex` pattern from `calmstorm-decks`.
3. Are the four stats (30% / 50% / 2× / 50–90%) citable, or "up to" marketing figures?
   Direction A wants to set them as data with sources; that only works if they're citable.
