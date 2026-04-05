# Grantmaking Glossary — Project Instructions

## Overview
A personal reference website for English expressions, jargon, and idioms in the nonprofit and grantmaking field. Built as a React + Vite single-page app with localStorage persistence.

## Tech Stack
- **Framework**: React 18 with Vite 6
- **Styling**: Vanilla CSS (no Tailwind/CSS-in-JS) — see `src/index.css`
- **Fonts**: Source Serif 4 (headings) + Source Sans 3 (body) via Google Fonts
- **Storage**: Browser localStorage — entries persist across sessions
- **No backend** — everything runs client-side

## Project Structure
```
glossary-app/
├── index.html                  # Entry HTML with font imports
├── vite.config.js              # Vite config (port 3000)
├── package.json
├── src/
│   ├── main.jsx                # React root
│   ├── App.jsx                 # Main app: layout, state, search/filter logic
│   ├── index.css               # All styles (CSS variables at top)
│   ├── components/
│   │   ├── EntryCard.jsx       # Individual glossary entry display
│   │   ├── EntryForm.jsx       # Add/Edit modal form
│   │   └── ConfirmDialog.jsx   # Delete confirmation modal
│   └── data/
│       └── defaultEntries.js   # Categories + 40 pre-loaded terms
```

## Key Architecture Decisions
- **Single CSS file** with CSS custom properties for theming — edit `--color-*` vars to restyle
- **Entry schema**: `{ id, term, category, definition, example }`
- **Categories** are defined in `defaultEntries.js` as a static array (6 categories)
- **localStorage key**: `glossary-entries` — on first load, defaults are seeded; after that, user edits persist
- **Sorting**: Entries are always displayed alphabetically by term

## Commands
```bash
npm install     # Install dependencies
npm run dev     # Start dev server at localhost:3000
npm run build   # Production build to dist/
npm run preview # Preview production build
```

## Design Notes
- Professional/corporate aesthetic — muted navy sidebar, warm accents
- Category sidebar on left (fixed), search bar + content area on right
- Entry cards show edit/delete buttons on hover
- Modal overlays for add/edit forms and delete confirmation
- Responsive down to 768px (sidebar narrows)

## Future Enhancement Ideas
- Export/import entries as JSON for backup
- Keyboard shortcuts (/ to focus search, Esc to close modals)
- Favorite/bookmark entries
- Dark mode toggle
- Print-friendly stylesheet
