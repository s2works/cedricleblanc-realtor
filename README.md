# Cédric LeBlanc — REALTOR® Landing Page

A modern, elegant, mobile-first landing page for **Cédric LeBlanc**, REALTOR® with
**EXIT Realty Associates** in Dieppe, New Brunswick.

This is a duplicate of the Danie Gagnon realtor landing page, adapted for Cédric LeBlanc
with placeholder images in place of real photos/logo.

## Highlights

- **Single-page, no build step** — plain HTML/CSS/JS, deploys anywhere (Vercel, Netlify, GitHub Pages, any static host).
- **Sleek, on-brand design** — EXIT teal + teal-ink + cream palette, Fraunces / Manrope typography, EXIT Realty logo placeholder on dark sections.
- **Smooth section transitions** — scroll-reveal animations, animated stat counters, hero parallax & zoom, sticky nav, scroll-progress bar.
- **Listings CTA** — a section linking out to Cédric's EXIT Realty profile page (kept current by the brokerage).
- **Fully responsive** — slide-in mobile menu, fluid type, single-column layouts on small screens.
- **Accessible** — semantic markup, focus states, `prefers-reduced-motion` support.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup & content |
| `styles.css` | All styling & responsive rules |
| `script.js`  | Nav, scroll reveals, stat counters, hero parallax |
| `headshot-placeholder.svg` | Generated placeholder for the About section headshot |
| `brokerage-logo-placeholder.svg` | Generated placeholder for the EXIT Realty brokerage logo |

## ⚠️ Placeholders to replace before launch

- **Headshot:** `headshot-placeholder.svg` (used in `.about__photo`) — swap in a real photo of Cédric.
- **Brokerage logo:** `brokerage-logo-placeholder.svg` (used in `.about__badge` and `.contact__logo`) — swap in the real EXIT Realty Associates logo file (both agents share the same brokerage, so the original `exit-logo-white.png` from the Danie Gagnon site can be reused here).
- **Contact form:** the form `action` in `index.html` is set to `https://formspree.io/f/YOUR_FORM_ID` — create a Formspree form (or similar service) for Cédric and paste the real endpoint in.
- **Listings feed:** `SHEET_ID` in `script.js` is set to `YOUR_SHEET_ID`, so the Listings section currently shows sample data. Publish a Google Sheet of Cédric's listings and paste its ID in to go live.
- **"See all of my listings" link:** currently points to `https://www.exitmoncton.ca/Cedric-LeBlanc` (his brokerage profile page) — replace with his direct `properties_for_agent/<id>/all` listings URL if you have his agent ID.

## Contact details on the page

Pulled from Cédric LeBlanc's public EXIT Realty / REALTOR.ca profiles:

- 📞 (506) 233-2124 · ✉️ cedric@exitmoncton.ca
- 🏢 260 Champlain St, Dieppe, NB E1A 1P3 (same office as Danie Gagnon)
- Instagram [@cedricleblanc.realtor](https://www.instagram.com/cedricleblanc.realtor/) · [Facebook](https://www.facebook.com/p/Cedric-LeBlanc-Real-Estate-61550345272494/) · [REALTOR.ca profile](https://www.realtor.ca/agent/2195400/cedric-leblanc-260-champlain-st-dieppe-new-brunswick-e1a1p3)

## Run locally

```bash
# any static server, e.g.
python3 -m http.server 8000
# then open http://localhost:8000
```

---

*Each office independently owned & operated. Not intended to solicit properties already listed for sale.*
