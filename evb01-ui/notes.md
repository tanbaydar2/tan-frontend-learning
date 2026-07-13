# Lesson 1 — React dashboard scaffold (shells only)

## The component tree

```
App
├── StatusBar        identity left / vitals right (week-3 flex bar)
├── Dashboard        auto-fit card grid (week-3 pattern)
│   ├── SensorConfigCard
│   ├── DataCollectionCard
│   ├── StatusCard
│   └── LiveChartCard
└── DeviceActions    reboot / blink / clear data / reconfigure WiFi (secondary)
```

Every component is a shell: real markup, placeholder content, no state, nothing
wired. Behavior arrives in later lessons.

## File layout rule (colocation)

- One folder `src/components/`, one `.jsx` per component, and its stylesheet
  right next to it (`StatusBar.jsx` + `StatusBar.css`, imported at the top of
  the component). The component owns its own styles.
- **Page-wide** styles that belong to no single component (`*` box-sizing,
  `:root` variables, `body`) live in `src/index.css`, loaded once by `main.jsx`.

## Reused from week-3/lesson-1

- Status bar: flex row, `justify-content: space-between` pushes identity left,
  vitals right.
- Dashboard: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` —
  1 → 2 → 3 columns as the viewport widens, no media queries.
- Trimmed `:root` (only what the scaffold uses today): `--font-size: 18px`,
  `--radius: 12px`, `--bg`, `--surface-card`, `--border`. The rest of the
  week-3 palette comes over with its markup in lessons 2–3.
- `* { font-weight: normal }` baseline: flatten everything, add weight back
  only where we deliberately accentuate.

## React details learned

- JSX uses `className` because `class` is a reserved word in JavaScript.
- A component must return ONE outer element; `<>...</>` (fragment) is an
  invisible grouping box that adds no HTML to the page.
- `export default X` / `import X from "./X.jsx"` is how components find
  each other.
- Plain buttons need `type="button"` — the default is `type="submit"`
  (form behavior we don't want).

## Vite template cleanup

- Replaced template `App.jsx` and `index.css`; deleted `App.css` (nothing
  imported it anymore) and the unused `vite.svg` / `react.svg` / `icons.svg`.
- The template's `#root { width: 1126px; text-align: center; border-inline }`
  rule died with the old `index.css` — layout control passed to our own
  `.status-bar` / `.dashboard` max-widths.
- Still template-flavored: `public/favicon.svg` is literally the Vite logo
  saved under another name (`index.html` links it). Swap later — browsers
  cache favicons hard, so expect Ctrl+Shift+R after changing it.

## Verified

`npm run dev` → status bar with hairline underline, four white rounded cards
on the grey page tint, plain button row at the bottom; cards reflow
3 → 1 columns when the window narrows. No console errors.
