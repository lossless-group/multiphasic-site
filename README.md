# Multiphasic — Material State Solutions

<p align="center">
  <span style="font-size: 18px; font-weight: 500; color: #374151;">A design spike built with</span>
  <span style="font-size: 20px; color: #ef4444; margin: 0 4px;">❤️</span>
  <span style="font-size: 18px; font-weight: 500; color: #374151;">by</span>
  <br/>
  <a href="https://lossless.group" target="_blank" rel="noopener" style="text-decoration: none; display: inline-flex; align-items: center; margin: 8px 0;">
    <img src="https://ik.imagekit.io/xvpgfijuw/uploads/lossless/trademarks/trademark__The-Lossless-Group.svg?updatedAt=1758016855404" alt="The Lossless Group" height="24" style="margin-right: 8px;" />
    <span style="font-size: 22px; font-weight: 600; color: #1f2937;">The Lossless Group</span>
  </a>
  <br/>
  <span style="font-size: 14px; color: #6b7280; margin-top: 12px; display: block;">
    Part of
    <a href="https://lossless-group.github.io/astro-knots/" style="color: #7c3aed; text-decoration: none; font-weight: 500;">Astro Knots</a>
    · built with
    <a href="https://astro.build" style="color: #7c3aed; text-decoration: none; font-weight: 500;">Astro</a>,
    <a href="https://svelte.dev" style="color: #ff3e00; text-decoration: none; font-weight: 500;">Svelte 5</a>
    and
    <a href="https://tailwindcss.com" style="color: #0ea5e9; text-decoration: none; font-weight: 500;">Tailwind CSS v4</a>
  </span>
</p>

***

# Your Site, Built by Astro Knots

> **[Astro Knots](https://lossless-group.github.io/astro-knots/)** is The Lossless Group's set of systems, context, patterns, and conventions for building blazing fast, modern, elegant, responsive, content-rich, kick-ass websites.
>
> Astro Knots sites default to [Astro](https://astro.build), the most loved framework for building such kick-ass sites. Any dynamic interactivity is either pure vanilla JS, [HTMX](https://htmx.org), or [Svelte](https://svelte.dev) (the most loved framework for building interactive interfaces). Rich markdown content is supported through our own markdown parser, [Lossless Flavored Markdown (LFM)](https://github.com/lossless-group/lossless-flavored-markdown-package/).

***

# For You

## Three versions of your site

All three tell the identical story — the same eight beats, in the same order,
from the same files. **Form differs, argument does not.** Open each, see which
one sounds like you, and tell us. The other two get deleted and nothing else
changes.

| Open this | It's the version where… |
|---|---|
| **`/instrument`** | The site is a scientific instrument readout. Closest to your deck — navy ground, monospaced data, one number allowed to shout per screen, almost no motion. |
| **`/lattice`** | The site *is* the material. Furthest from the deck — near-black violet ground, oversized type, transitions that behave like excitation events. |
| **`/diptych`** | The site is a sustained argument in two columns. Paper on the left (today), navy on the right (with you), and the divider between them is the beam. |
| **`/brand-kit`** | All three palettes across all three modes, resolved live. |
| **`/design-system`** | The parts catalogue, including every illustration on its own page. |

`/` is an internal chooser, **not** the shipping homepage. Once you pick, it gets
promoted to `/` and the other two are retired.

**Two things worth trying while you look:**

1. **The mode toggle, top right.** Light, dark and a third "vibrant" mode. Same
   page, same content, three moods — all three finished, none an afterthought.
2. **Open `/design-system/flare/`.** Every energy landscape, phase field, lattice
   excitation and pulse envelope is drawn in SVG and CSS against your brand
   tokens — not exported as an image. They re-colour when the brand changes,
   respond to mode, and can never go stale. There is no PNG to re-render.

## The argument we extracted, before we designed anything

> Manufacturing controls shape to the micron. It controls *state* by inheritance.

Tuned ultrafast laser excitation applied during the manufacture of metal parts,
guiding the atomic lattice into metastable states beyond the reach of traditional
heat treatment. The device is **METASTATE**.

If that reads back correctly, that is the point — it was written down and agreed
with itself *before* any design existed. If it reads back wrong, say so now: it
is one file, and fixing it fixes all three versions at once.

## Why this is different from being handed a design

A design comp is a picture. You still have to hire someone to turn it into a
website, and the picture usually loses an argument with the code somewhere along
the way.

This is the website. You can choose a direction, change your mind, change a
colour, rewrite a beat, and ship — without a rebuild in between.

That works because the agent that built it wasn't improvising. **Astro Knots is a
conceptual map we hand a coding agent before it writes anything** — the stack,
the conventions, the constraints, the things we've learned not to do. So instead
of getting creative *and* unpredictable, it gets creative *within rails*: real
design range on top of good code, a current stack, and practices a professional
team would recognise.

On this project the rails did something specific and worth knowing. Given your
deck, the agent's first job was **not design at all** — it was to extract a
messaging spine, eight narrative beats carrying the argument, written into
[`context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md`](context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md)
before a single component existed. Only then did it build. That ordering is the
whole trick: because the argument was settled and stored as content, three
radically different designs could be generated against it without any of them
quietly rewriting your pitch.

The test of all this is the handoff. Give your favourite of the three to a
marketing team, an engineering team, or a different coding agent, and they can
keep going the same afternoon. They'll find the copy in plain markdown, the
colours in one file, a parts catalogue at `/design-system`, and written
explanations of why things are the way they are sitting next to the code.

Two years ago, this was two jobs: pay for designs, then pay engineers to build
them. Skip the rails and you get the modern version of the same trap — a real,
working site that becomes a time sink the first time you want to change
something. Here, choosing, iterating and going live are one continuous motion,
and maintenance stops being the thing you dread.

## Why it stays easy to change

- **One content layer.** All three directions read the same eight beats in
  `src/content/beats/`. Editing means markdown — never a component.
- **Re-brand in one line.** A colour change is one new named token plus one
  re-pointed semantic token. Components don't change.
- **Retiring a direction is a delete.** Per-direction components never
  cross-import, so removing two folders and two routes removes two directions.
- **Illustrations follow the brand automatically**, because they read tokens
  rather than shipping as files.
- **The catalogue can't drift**, because `/design-system` is generated from the
  same components the live pages use.

# For the Handoff (to whoever builds on this next)

Hi! Welcome to the handoff. This is a quick overview of the project and some context about why things are the way they are. It's built on about two years of experience **vibe coding** then **context engineering** then **agentic engineering** then **loop engineering** then **graph engineering**, then **harness engineering** and now **orchestration engineering**. By the time you see this, we will have another three buzz words that we will have lived through.

## Under the hood

### What Astro Knots is

**[Astro Knots](https://lossless-group.github.io/astro-knots/)** is The Lossless
Group's *pseudomonorepo*: a lattice of independent Astro sites — client work,
personal sites, and one published package — developed side by side so patterns
can be compared and shared deliberately.

It is **not** a true monorepo. Every site is its own git repository with its own
lockfile and deploys on its own. Nothing here requires anyone to adopt our
infrastructure or our umbrella project. What the sites share is not runtime code
— it is a set of conventions:

| Shared convention | What it buys |
|---|---|
| **Two-tier design tokens** | Re-brand by adding one named token and re-pointing one semantic token. Components never change. |
| **Three-mode contract** (light · dark · vibrant) | Every surface is verified in all three modes, every time. |
| **`context-v/`** | Specs, blueprints, reminders and prompts live next to the code that implements them. |
| **`@lossless-group/lfm`** | Lossless Flavored Markdown — the one genuinely shared, published package. |
| **`/brand-kit` + `/design-system`** | Every site ships its own living catalogue. No Storybook, no drift. |

The workspace-level story — what worked, what didn't, and why we stopped
pretending everything should be a shared package — is on the
[Astro Knots splash page](https://lossless-group.github.io/astro-knots/).

### Illustration as code, not as assets

The `flare/` components are the clearest demonstration of the creative latitude.
Energy landscapes, phase fields, lattice excitation and pulse envelopes are all
drawn in SVG and CSS against the theme tokens — so they re-colour with the brand,
respond to mode, and never ship a stale PNG. Each one has its own page under
`/design-system/flare/` so it can be inspected in isolation.

### Run it

```bash
pnpm install --ignore-workspace
pnpm dev        # http://localhost:4321
pnpm build
pnpm check
```

pnpm only — never npm, npx, or yarn. Not a member of the astro-knots pnpm
workspace; installs standalone with its own lockfile so it can deploy
independently.

To run this alongside the two sibling spikes on auto-assigned ports — from an
[astro-knots](https://github.com/lossless-group/astro-knots) workspace checkout,
where all three are present:

```bash
../../scripts/dev-sites.sh
```

### Architecture

```
src/
├── content/beats/        # the eight narrative beats — the shared spine
├── components/
│   ├── basics/           # MarkLattice, Wordmark (shared across directions)
│   ├── ui/               # ModeToggle (canonical 3-mode cycle)
│   ├── flare/            # illustrations + animations as code
│   ├── instrument/       # direction A sections
│   ├── lattice/          # direction B sections
│   └── diptych/          # direction C sections
├── layouts/              # BoilerPlateHTML + BaseThemeLayout
├── styles/
│   ├── global.css        # Tier 1 named tokens + resets
│   └── themes/*.css      # Tier 2 semantic tokens, one file per direction
└── utils/                # theme-switcher.js, mode-switcher.js
```

### Token contract

Two tiers, per the astro-knots convention:

- **Tier 1 — named tokens** (`--color__navy-deep`, `--font__space-grotesk`): raw values,
  `__` separator, defined once at the top of `global.css`. **Components never read these.**
- **Tier 2 — semantic tokens** (`--color-primary`, `--font-display`, `--fx-*`): kebab-case,
  defined per `[data-theme][data-mode]` in `src/styles/themes/`. This is all a component
  ever touches.

To re-point the brand, add a named token and re-aim one semantic token. Components
don't change.

### Modes

Three, mandatory: `light`, `dark`, `vibrant` on `<html data-mode>`. **Vibrant is
dark-based** and every theme file sets background, surface, text and border explicitly.

### Conventions

Governed by the `astro-knots` skill and `astro-knots/context-v/`. Astro + Tailwind 4 +
Svelte 5 where reactivity earns it. **No React, no JSX, no MDX, no UI libraries.**

### Confidentiality

The source deck is marked CONFIDENTIAL and lives in `context-v/extra/private/`, which is
gitignored. The site ships `<meta name="robots" content="noindex, nofollow">` until the
operator lifts it — see `src/layouts/BoilerPlateHTML.astro`.

### Docs

- [`context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md`](context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md)
  — messaging spine, catch-line candidates, and the three design directions in full
- `changelog/` — ship log

### Provenance

All company and product claims are drawn from the client's own source deck,
reproduced rather than authored here.
