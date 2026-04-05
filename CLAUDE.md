# Grantmaking Glossary — Project Instructions

## Overview
A personal reference website for English expressions, jargon, and idioms in the nonprofit and grantmaking field. Built as a React + Vite single-page app with localStorage persistence. Deployed on GitHub Pages.

## Tech Stack
- **Framework**: React 18 with Vite 6
- **Styling**: Vanilla CSS (no Tailwind/CSS-in-JS) — see `src/App.css`
- **Fonts**: Source Serif 4 (headings) + Source Sans 3 (body) via Google Fonts
- **Storage**: Browser localStorage — entries persist across sessions
- **No backend** — everything runs client-side

## Project Structure
```
glossary-app/
├── index.html                  # Entry HTML with font imports
├── vite.config.js              # Vite config (port 3000, base: /Grantmaking-Glossary/)
├── package.json
├── .github/workflows/deploy.yml  # GitHub Actions auto-deploy to GitHub Pages
├── src/
│   ├── main.jsx                # React root (imports App.css)
│   ├── App.jsx                 # Main app: layout, state, search/filter logic
│   ├── App.css                 # All styles (CSS variables at top)
│   ├── components/
│   │   ├── EntryCard.jsx       # Individual glossary entry display
│   │   ├── EntryForm.jsx       # Add/Edit modal form
│   │   └── ConfirmDialog.jsx   # Delete confirmation modal
│   └── data/
│       └── defaultEntries.js   # Categories + pre-loaded terms (58 entries)
```

## Key Architecture Decisions
- **Single CSS file** (`App.css`) with CSS custom properties for theming — edit `--color-*` vars to restyle
- **Entry schema**: `{ id, term, category, definition, example }`
- **Categories** are defined in `defaultEntries.js` as a static array (6 categories)
- **localStorage key**: `glossary-entries` — on first load, defaults are seeded; new default entries with new IDs are merged in automatically on subsequent loads
- **Sorting**: Entries are always displayed alphabetically by term

## Deployment
- **Live URL**: https://kn1426.github.io/Grantmaking-Glossary/
- **GitHub repo**: https://github.com/kn1426/Grantmaking-Glossary
- **Auto-deploy**: Every push to `main` triggers GitHub Actions → builds with Vite → deploys to GitHub Pages
- **After any code change**: commit and push to `main` to reflect changes on the live site

```bash
git add .
git commit -m "describe change"
git push
```

## Commands
```bash
npm install     # Install dependencies
npm run dev     # Start dev server at localhost:3000
npm run build   # Production build to dist/
npm run preview # Preview production build
```

## Content Guidelines
- **Target user**: Program Officer at a grantmaking organization
- **Example sentences**: Always written from a Program Officer's perspective — talking with or about grantees and their projects (e.g., "I asked the grantee...", "The grantee submitted...", "I'm scheduling a call to...")
- **Tone**: Professional, practical, realistic work scenarios

## Design Notes
- Professional/corporate aesthetic — muted navy sidebar, warm accents
- Sidebar on left with category nav, search bar + content area on right
- Entry cards show Edit/Delete buttons
- Modal overlays for add/edit forms and delete confirmation
- Responsive down to 768px

## Future Enhancement Ideas
- Export/import entries as JSON for backup
- Keyboard shortcuts (/ to focus search, Esc to close modals)
- Favorite/bookmark entries
- Dark mode toggle
- Print-friendly stylesheet
