# AI Development Guidelines for 로또인사이트 (LottoInsight)

This project is a static HTML/CSS/JS website about Korean lottery (로또) information, hosted on GitHub Pages.

## Project Overview

- **URL:** https://6padme.github.io/reweek1/
- **Type:** Static website (no build tools, no framework)
- **Hosting:** GitHub Pages
- **Goal:** AdSense revenue through informative lotto-related articles

## Project Structure

```
/
├── index.html          # Main page with article cards
├── style.css           # Global styles
├── main.js             # Shared JavaScript
├── articles/           # Individual article pages
│   └── lotto-*.html
├── sitemap.xml         # SEO sitemap
├── robots.txt
└── .idx/dev.nix        # Firebase Studio config
```

## Development Guidelines

- Pure HTML/CSS/JS — no npm, no bundler, no framework
- All article files follow the pattern: `articles/lotto-[topic].html`
- Internal links use relative paths (`../index.html`, `../style.css`)
- SEO: each page has meta description, canonical URL, og tags
- Update `sitemap.xml` when adding new pages

## Content Strategy

- 2 new articles per day
- Topics: 로또 전략, 통계, 당첨 사례, 심리, 세금, 구매 팁 등
