# My Data Warehouse - complete website

A working **multi-page** static website, built with HTML, CSS and vanilla JavaScript. No build tools, framework, account or API key required.

## Run

Double-click `index.html` or open it in Chrome, Edge, Safari or Firefox. All 8 pages work offline. For a local dev server, run `python -m http.server 8000` inside this folder and visit `http://localhost:8000/`.

## Pages

- `index.html`: original homepage design with hero illustration, featured posts, projects, journey and about.
- `notes.html`: complete searchable knowledge hub with topic filters, sorting and bookmarks.
- `note.html?id=sql-essentials`: full article with code examples, table of contents, related reading and reading progress.
- `projects.html`: browsable portfolio with six case studies.
- `project.html?id=ecommerce-dashboard`: detailed case studies (challenge, scope, process, takeaways, next steps).
- `lab.html`: a **working** dashboard: region filters, metric switching, KPI cards, chart, data table and downloadable CSV.
- `journey.html`: full timeline page.
- `about.html`: about, FAQ and contact section.

## Customize

- Content and contact settings: `content.js`.
- Homepage layout and behavior: `index.html`, `app.js`, `styles.css`.
- Inner pages behavior: `pages.js`; presentation: `pages.css`.
- Illustrations and dashboard covers: `assets/img/`. SVG icons: `assets/icons/`.
- Change branding text in each page header and in `index.html`. Name is intentionally left as **My Data Warehouse**, because you have not finalized the new name.

## Important

The articles and case studies are **educational examples** so you can click through a complete site. They are *not* claims about your personal career or real client projects. The dashboard runs on synthetic generated numbers and does not connect to business data. Bookmarks are stored in your own browser using localStorage. Newsletter, contact and social integrations require your actual email/URLs or a backend. This is static front end, not a live hosted site.

To publish: upload the folder to GitHub Pages, Netlify or Vercel. `note.html?id=...` and `project.html?id=...` can be linked directly, including on a static host.
