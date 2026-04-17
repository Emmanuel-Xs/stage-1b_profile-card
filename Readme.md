# Profile Card — Stage 1B Submission

> A testable, accessible, responsive Profile Card built with semantic HTML, modern CSS, and vanilla JavaScript.

---

## Live Demo

🔗 **[View Live](https://stage-1b-profile-card-alpha.vercel.app)**

---

## Overview

This project is my submission for the **Frontend Wizards Stage 1B** task. It implements a profile card component that satisfies all functional, accessibility, and testability requirements outlined in the brief.

The design uses a dark editorial aesthetic — deep charcoal backgrounds, amber accents, condensed sans-serif for labels, and a serif body font — to create something that feels intentional rather than generic.

---

## Features

- **Live epoch clock** — Updates every 500ms using `Date.now()`, announced to screen readers via `aria-live="polite"`
- **All `data-testid` attributes** — Every required element is discoverable by automated test runners
- **Semantic HTML** — `<article>`, `<figure>`, `<figcaption>`, `<nav>`, `<section>`, `<header>`, `<h1>`, `<h2>`
- **Accessible** — Meaningful `alt` text, `aria-label`s on all interactive elements, `:focus-visible` styles, keyboard-navigable links
- **Responsive** — Grid layout adapts from mobile (stacked) to desktop (avatar left, content right)
- **Zero dependencies** — Pure HTML + CSS + vanilla JS, no build step required

---

## `data-testid` Reference

| Element                | `data-testid`                     |
| ---------------------- | --------------------------------- |
| Profile card root      | `test-profile-card`               |
| Name                   | `test-user-name`                  |
| Biography              | `test-user-bio`                   |
| Epoch time (ms)        | `test-user-time`                  |
| Avatar image           | `test-user-avatar`                |
| Social links container | `test-user-social-links`          |
| Twitter link           | `test-user-social-twitter`        |
| GitHub link            | `test-user-social-github`         |
| Facebook link          | `test-user-social-facebook`       |
| Dev.to link            | `test-user-social-devto`          |
| YouTube link           | `test-user-social-youtube`        |
| Frontend Mentor link   | `test-user-social-frontendmentor` |
| Hobbies list           | `test-user-hobbies`               |
| Dislikes list          | `test-user-dislikes`              |

---

## Project Structure

```
profile-card/
├── index.html   # Markup — semantic structure, all data-testids
├── style.css    # Styles — CSS custom properties, responsive layout, animations
├── script.js    # Behaviour — epoch clock (updates every 500ms)
└── README.md    # This file
```

---

## Running Locally

No build tools needed — just open the file in a browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve with any static server
npx serve .
# or
python3 -m http.server 3000

# Option 3: VS Code Live Server (Highly Recommended)
Right-click on `index.html` in VS Code and select "Open with Live Server" (requires the Live Server extension).
```

Then visit `http://localhost:3000` (or whichever port your server reports).

---

## Deployment

### Netlify (recommended — drag and drop)

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Deploy manually**
2. Drag the `profile-card/` folder into the drop zone
3. Your live URL is generated instantly

### GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → main branch / root**
3. Save — GitHub will publish to `https://<username>.github.io/<repo>/`

### Vercel

```bash
npx vercel --prod
```

---

## Accessibility Notes

- Color contrast meets **WCAG AA** across all text/background combinations
- The epoch `<time>` element uses `aria-live="polite"` so screen readers are notified of updates without interrupting other content
- All social links include descriptive `aria-label` values (name + handle + "opens in new tab")
- `<figure>` wraps the avatar with a `<figcaption class="sr-only">` for screen readers
- Focus styles use `:focus-visible` — visible for keyboard users, hidden for mouse users

---

## Author

**Emmanuel Nwaohiri** — Frontend Developer & Creative Technologist based in Lagos, Nigeria.

- Twitter: [@xs_emmanuel](https://twitter.com/xs_emmanuel)
- GitHub: [Emmanuel-Xs](https://github.com/Emmanuel-Xs)
- Dev.to: [emmanuel_xs](https://dev.to/emmanuel_xs/)
- Frontend Mentor: [Emmanuel-Xs](https://www.frontendmentor.io/profile/Emmanuel-Xs)
