# Design

The site is an arboretum walk: each app is a tree known by its engraved specimen tag, staked along one gravel path. Tokens live in `assets/style.css` `:root`.

## Colour

| Token | Value | Role |
|---|---|---|
| `--ground` | #2d5b3f | Page ground (hedge green), whole surface |
| `--ground-deep` | #234a33 | Path border, sign rivet holes |
| `--tag` | #121815 | Engraved laminate: every tag, sign, plate |
| `--tag-edge` | #2b352f | Tag border, fact rules |
| `--engrave` | #eef2ec | Text on tags and on ground |
| `--engrave-soft` | #a9b8ad | Secondary text on tags |
| `--leaf` | #c9e0cf | Secondary text and links on ground |
| `--blossom` | #f0b429 | Download plates, focus ring, selection, list markers only |
| `--gravel` | #b9b4a6 | Path, with SVG noise texture |
| `--stake` | #7a7c74 | Metal stakes, scrollbar |

Fixed palette, no light/dark switch. No neutral greys outside gravel, stakes and the aluminium tag.

## Type

- Names and labels: Barlow Condensed 500/600/700, engraved look (`text-shadow: 0 1px 0 rgb(0 0 0/.8)`).
- Body: Barlow 400/500/700, 17px/1.55.
- Loaded from Google Fonts.

## Components

- **Sign** (`.plate.sign`): wide header tag with two rivet holes; page title + intro.
- **Specimen** (`.specimen > .plate`): one app or one install step. Alternates left/right over the central path, ~62% width (76% on phones), grey stake and soil shadow underneath. Anatomy: name, meta (tür · sürüm · boyut), description, one action.
- **Download plate** (`.get`): the only yellow on a page; arrow SVG icon. Unavailable APK = dashed empty frame, `aria-disabled`.
- **Solo specimen** (`.specimen.solo`): detail page tag with `.facts` grid.
- **Aluminium tag** (`.alu`): reserved for the one warning (Play Protect).
- **Path** (`.path`): gravel band behind the tags; `.path.steps` numbers its tags.

## Motion

One moment: tags below the fold start 22px lifted and settle onto their stakes when they scroll into view (`.settle`, IntersectionObserver, ease-out .9s). Off under `prefers-reduced-motion`.
