# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CREXATIVE** is a bilingual (Spanish/English) software development agency website built with **Astro 5**. Single-page landing site deployed to https://crexative.com via Cloudflare Pages. Uses pnpm as package manager.

## Development Commands

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro check` - TypeScript checking and diagnostics
- `pnpm build:analyze` - Build and analyze bundle size
- `pnpm performance` - Full audit pipeline (build + preview + Lighthouse)
- `pnpm lighthouse` - Run Lighthouse on localhost:4321
- `pnpm seo-check` - SEO validation report
- `pnpm validate-html` - Validate HTML output
- `pnpm check-links` - Check for broken links

## Architecture

### Page Composition

Homepage (`src/pages/index.astro`) composes sections in order:
Layout > Navbar > Hero > Services > ProjectShowcase > Contact > Footer > StickyCallToAction

Three page variants exist: `/` (Spanish default), `/es/` (explicit Spanish), `/en/` (English).

### Component Organization

- `src/components/sections/` - Full page sections (Hero, Services, ProjectShowcase, Contact, etc.)
- `src/components/layout/` - Navbar, Footer, LanguageSwitcher
- `src/components/ui/` - Reusable primitives (Button, Card, Container, Icon, SectionHeader, Tag) with barrel export via `index.ts`

### Centralized Configuration

- `src/config/site.config.ts` - All site-wide constants: `SITE_CONFIG`, `SEO_CONFIG`, `CONTACT_INFO`, `FORM_CONFIG`, `SOCIAL_LINKS`, `COMPANY_INFO`
- `src/constants/theme.constants.ts` - Theme constants (LIGHT/DARK, storage key)
- `src/types/common.types.ts` - Shared TypeScript types (`Language`, `BaseComponentProps`, `SEOProps`, etc.)

### i18n System

- Default language: Spanish (`es`) at root `/`
- English at `/en/`
- Translation files: `src/i18n/locales/en.ts` and `src/i18n/locales/es.ts`
- Config: `src/i18n/i18n.config.ts` exports `useTranslations(lang)` hook and `getLangFromUrl(url)`
- All section components accept a `lang` prop and use `const t = useTranslations(lang)` pattern
- Language preference stored in localStorage
- Fallback to Spanish if translation key is missing

### Theme System

- Dark theme is default. Toggle in Navbar dispatches custom `themeToggle` event
- CSS variables switch via `[data-theme="dark"]` / `[data-theme="light"]` on `<html>`
- Persisted in localStorage key `crexative-theme`
- Inline script in Layout prevents FOUC by setting theme before paint
- Brand colors: primary `#00E1C6` (cyan), accent `#CCFE12` (lime)

### SEO & Performance

- Layout.astro handles all meta tags (OG, Twitter Cards, geo-targeting Colombia)
- `src/utils/seo.utils.ts` generates Organization JSON-LD schema
- `src/pages/robots.txt.ts` and `src/pages/sitemap.xml.ts` are programmatic
- Font strategy: Poppins loaded async with print media trick, critical weights preloaded
- Build: HTML compression, CSS inlined, code splitting disabled, esbuild minification, no sourcemaps
- `public/_headers` defines security headers and cache policy (immutable for assets, no-cache for HTML)

## Key Patterns

**Component prop pattern** - all section components:
```astro
interface Props { lang: string; }
const { lang } = Astro.props;
const t = useTranslations(lang as 'en' | 'es');
```

**Scoped styles** - Astro adds `data-astro-cid-*` attributes. Selectors in `<style>` are automatically scoped to the component. Use `:global()` to escape scoping.

**Contact form** uses Web3Forms API (access key in `FORM_CONFIG`).

**Carousel (ProjectShowcase)** - CSS-based carousel with `translateX` transforms. Key: `carousel-container` needs `box-sizing: border-box` when using padding + `width: 100%`, and `carousel-viewport` needs `min-width: 0` as a flex child for proper overflow handling.

## Deployment

- Platform: Cloudflare Pages (custom domain via `public/CNAME`)
- GitHub Actions workflow: `.github/workflows/astro.yml` (auto-deploy on push to `main`)
- TypeScript: Strict mode (`astro/tsconfigs/strict`)
