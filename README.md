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

## First — what is Astro Knots?

**[Astro Knots](https://lossless-group.github.io/astro-knots/)** is The Lossless
Group's *pseudomonorepo*: a small lattice of independent Astro sites — client
work, personal sites, and one published package — developed side by side in a
single workspace so patterns can be compared and shared deliberately.

It is **not** a true monorepo. Every site is its own git repository with its own
lockfile, and deploys on its own from its own repo. Nothing here requires a
client to adopt our infrastructure, our build server, or our umbrella project.
What the sites share is not runtime code — it is a set of **conventions**:

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

## Why this repo exists

This is a **speculative pitch**, not commissioned work. It was built for a
prospective client to demonstrate something specific:

> Give a coding agent good rails, and it will get genuinely *creative* — while
> still handing you something a team can maintain and iterate on afterward.

The rails are our agent skills — **`pseudomonorepos`**, **`context-vigilance`**,
and **`astro-knots`** — loaded into Claude Code at the start of the session.
They encode the token architecture, the three-mode contract, the documentation
conventions, and the hard prohibitions (no React, no JSX, no MDX, no UI
libraries, pnpm only).

The input was a single confidential source deck. The agent's first job was not
design at all — it was to extract a **messaging spine**: eight narrative beats
that carry the argument, written down in
[`context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md`](context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md)
*before* a single component was written. Only then did it build.

That ordering is the whole trick. Because the argument was settled and stored as
content, three radically different designs could be generated against it without
any of them quietly rewriting the pitch.

You pick one. The other two are deleted. Nothing else changes.

## Who Multiphasic is

Multiphasic applies tuned ultrafast laser excitation during the manufacture of metal
parts, guiding the atomic lattice into superior metastable states beyond the reach of
traditional heat treatment. Their device is **METASTATE**, an ultrafast laser
materials-conditioning system. The pitch in one line:

> Manufacturing controls shape to the micron. It controls *state* by inheritance.

## The three directions

All three render the identical eight narrative beats from `src/content/beats/`.
**Form differs, argument does not.**

| Route | Direction | Stance | Flare |
|---|---|---|---|
| `/instrument` | **Phase Diagram** | Closest to the source deck. The site as a scientific instrument readout — navy ground, monospaced data, coral reserved for one number per screen, almost no motion. | `EnergyLandscape`, `PhaseField` |
| `/lattice` | **Lattice** | Furthest from the deck. The site as the material itself — near-black violet ground, oversized type, excitation-event transitions. | `LatticeExcitation`, `PulseEnvelope` |
| `/diptych` | **Before the Beam** | Reinterprets the deck. A sustained argument in two columns — paper left (today), navy right (with Multiphasic), the divider is the beam. | `BeamDivider`, `OverdesignMass` |

`/` is an internal chooser, **not** the shipping homepage. Once a direction is picked,
it is promoted to `/` and the other two are retired.

Reference surfaces: `/design-system` (component catalog, replaces Storybook) and
`/brand-kit` (all three palettes × three modes, resolved live).

### Illustration as code, not as assets

The `flare/` components are the clearest demonstration of the creative latitude.
Energy landscapes, phase fields, lattice excitation and pulse envelopes are all
drawn in SVG and CSS against the theme tokens — so they re-colour with the brand,
respond to mode, and never ship a stale PNG. Each one has its own page under
`/design-system/flare/` so it can be inspected in isolation.

## Why it stays maintainable after the pitch

- **One content layer.** All three directions read the same eight beats in
  `src/content/beats/`. The client edits markdown — never a component.
- **Re-brand in one line.** Two-tier tokens mean a colour change is a new named
  token plus one re-pointed semantic token.
- **Retiring a direction is a delete.** Per-direction components never
  cross-import, so removing two folders and two routes removes two directions.
- **Illustrations follow the brand** automatically, because they read tokens.
- **The catalogue ships with the site.** `/design-system` is generated from the
  same components the site uses, so it cannot drift.

## Run it

```bash
pnpm install --ignore-workspace
pnpm dev        # http://localhost:4321
pnpm build
pnpm check
```

pnpm only — never npm, npx, or yarn. Not a member of the astro-knots pnpm
workspace; installs standalone with its own lockfile so it can deploy
independently.

To run this alongside the two sibling spikes on auto-assigned ports:

```bash
../../scripts/dev-sites.sh
```

## Architecture

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

## Conventions

Governed by the `astro-knots` skill and `astro-knots/context-v/`. Astro + Tailwind 4 +
Svelte 5 where reactivity earns it. **No React, no JSX, no MDX, no UI libraries.**

## Confidentiality

The source deck is marked CONFIDENTIAL and lives in `context-v/extra/private/`, which is
gitignored. The site ships `<meta name="robots" content="noindex, nofollow">` until the
operator lifts it — see `src/layouts/BoilerPlateHTML.astro`.

## Docs

- [`context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md`](context-v/specs/Multiphasic-Site-Messaging-and-Creative-Brief.md)
  — messaging spine, catch-line candidates, and the three design directions in full
- `changelog/` — ship log

## Status

Speculative. Not commissioned, not deployed, not endorsed by Multiphasic
Corporation. All company and product claims are drawn from the client's own
source deck.
