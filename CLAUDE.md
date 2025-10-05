# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

<<<<<<< Updated upstream
This is a **Crexative** website built with **Astro** - a modern landing page for a creative design agency operating across Colombia. The project is configured to deploy to https://crexative.com and uses pnpm as the package manager. The website supports both English and Spanish languages with complete internationalization (i18n) implementation.
=======
**CREXATIVE** is a premium software development agency website built with **Astro** - a single-page landing site showcasing services, portfolio, and contact information. The site deploys to https://crexative.com using GitHub Pages and pnpm as the package manager.
>>>>>>> Stashed changes

## Development Commands

Run from project root using pnpm:

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro check` - Type checking and diagnostics
- `pnpm build:analyze` - Build and analyze bundle size
- `pnpm performance` - Full performance audit (build, preview, Lighthouse)
- `pnpm lighthouse` - Run Lighthouse performance audit on localhost:4321
- `pnpm seo-check` - Display SEO analysis results
- `pnpm validate-html` - Validate HTML output
- `pnpm check-links` - Check for broken links

### Performance & SEO Commands
- `pnpm run build:analyze` - Build and analyze bundle size
- `pnpm run lighthouse` - Run Lighthouse audit on localhost:4321
- `pnpm run lighthouse:ci` - Run Lighthouse CI
- `pnpm run seo-check` - Quick SEO validation report
- `pnpm run performance` - Full performance audit (build → preview → lighthouse)
- `pnpm run validate-html` - Validate HTML structure
- `pnpm run check-links` - Check for broken links

## Architecture

### Page Structure
Single-page application (`src/pages/index.astro`) that composes landing sections in this order:
1. Navbar (sticky navigation with theme toggle)
2. Hero (main banner)
3. Services (service offerings)
4. About (company information)
5. Contact (contact form)
6. Footer
7. StickyCallToAction (floating CTA button)

<<<<<<< Updated upstream
- **Layout**: `src/layouts/Layout.astro` - Base layout with comprehensive SEO, theme system, and global styles
- **Pages**: `src/pages/index.astro` - Single page application composing all components
- **Components**: `src/components/` - Reusable UI components for different sections
- **SEO Pages**: `src/pages/robots.txt.ts` and `src/pages/sitemap.xml.ts` - Programmatic SEO files

### Component Composition
The homepage (`src/pages/index.astro`) follows this structure:
1. Layout wrapper with SEO metadata
2. Navbar (brand navigation)
3. Hero (main banner)
4. Services (service offerings)
5. About (company information)
6. Contact (contact form)
7. Footer (footer content)
8. StickyCallToAction (persistent CTA)

### Styling & Theme System
- **Global Styles**: Comprehensive CSS custom properties in `src/layouts/Layout.astro`
- **Typography**: Inter + Playfair Display font combination with performance optimizations
- **Theme System**: Light/dark mode with localStorage persistence and custom event system
- **Color Palette**: Primary (#00e1c7), Secondary (#6366f1), with full gradient system
- **Responsive Design**: Mobile-first approach with clamp() functions for fluid typography

### SEO & Performance Architecture
- **Structured Data**: JSON-LD schema for organization information
- **Meta Tags**: Comprehensive OpenGraph, Twitter Card, and geo-location metadata
- **Resource Optimization**: Preload critical assets, DNS prefetch, font display optimization
- **Performance**: Optimized Vite build configuration with asset chunking
=======
### Layout System
- **Base Layout**: `src/layouts/Layout.astro`
  - Defines global theme system with CSS custom properties
  - Implements light/dark mode via `data-theme` attribute
  - Handles comprehensive SEO meta tags (Open Graph, Twitter Cards, Schema.org structured data)
  - Contains performance optimizations (DNS prefetch, preconnect, preload)
  - Manages theme persistence via localStorage
  - Uses Inter font (body) and Playfair Display (headings)

### Component Architecture
All components in `src/components/` are standalone Astro components with scoped styles:
- **Navbar.astro** - Sticky navigation with theme switcher
- **Hero.astro** - Landing hero section
- **Services.astro** - Services grid
- **About.astro** - Company background
- **Contact.astro** - Contact form
- **Footer.astro** - Footer with links
- **StickyCallToAction.astro** - Floating action button
- Additional components: Welcome, Stats, Clients, Portfolio, Testimonials

### Theme System
- Light theme (default): White background, dark text
- Dark theme: Black background (#0a0a0a), white text
- Theme toggle triggers custom `themeToggle` event
- Theme state persisted in localStorage
- CSS variables in `:root` and `[data-theme="dark"]`
- Primary brand color: `#00e1c7` (turquoise)
- Secondary color: `#6366f1` (indigo)

### Build Configuration
- **Output**: Static site generation
- **Optimizations**: HTML compression, inline stylesheets (auto), CSS code splitting
- **Asset organization**: Custom rollup config separates images, CSS, and JS assets
- **Vite**: Minification via esbuild, sourcemaps disabled for production
>>>>>>> Stashed changes

### SEO Strategy
- Comprehensive meta tags for search engines and social media
- Schema.org structured data for organization
- Geographic targeting: Medellín, Colombia
- Performance-optimized loading (preload critical resources, lazy-load fonts)
- PWA manifest for installability

<<<<<<< Updated upstream
### Core Configuration
- **Site URL**: https://crexative.com (astro.config.mjs)
- **TypeScript**: Strict mode enabled (tsconfig.json extends astro/tsconfigs/strict)
- **Package Manager**: pnpm (lockfile present)
- **Build Output**: Static site generation with optimized asset handling

### Deployment Configuration
- **GitHub Actions**: `.github/workflows/astro.yml` - Auto-deploy to GitHub Pages on main branch
- **Domain**: Custom domain via `public/CNAME` file
- **Headers**: Performance headers in `public/_headers`
- **Redirects**: Netlify-style redirects in `public/_redirects`

### Build Optimization
- **Asset Strategy**: Organized by type (images/, css/, assets/)
- **Compression**: HTML compression enabled
- **Minification**: ESBuild minification with CSS code splitting
- **Source Maps**: Disabled for production builds

## Internationalization (i18n)

### Language Support
- **Spanish**: Default language at `/` (es)
- **English**: Available at `/en/`
- **Structure**: Clean separation with locale files in `src/i18n/locales/`

### Translation System
- **Configuration**: `src/i18n/index.ts` - Main i18n utilities and type definitions
- **English Translations**: `src/i18n/locales/en.ts`
- **Spanish Translations**: `src/i18n/locales/es.ts`
- **Component Integration**: All components accept `lang` prop and use `useTranslations()` hook
- **Language Switcher**: Dropdown component with localStorage persistence and URL routing

### Key Features
- **Automatic Fallback**: Falls back to Spanish (default) if translation missing
- **Type Safety**: Complete TypeScript support with `TranslationKey` type
- **SEO Optimization**: Language-specific meta tags, structured data, and OpenGraph locale
- **URL Structure**: Clean URLs with language prefix (`/en/`) for English, Spanish at root
- **Browser Storage**: Language preference saved in localStorage

### Component Architecture
All components are internationalized and accept a `lang` prop:
- Hero, Services, About, Contact, Footer, Navbar, StickyCallToAction
- Language-aware internal linking and content rendering
- Structured translation keys for maintainability
=======
## Deployment

- **Platform**: GitHub Pages
- **Trigger**: Automatic on push to `main` branch
- **Workflow**: `.github/workflows/astro.yml`
- **CNAME**: Custom domain configured via `public/CNAME`
- **Package Manager**: Auto-detected (pnpm with fallback to yarn/npm)
- **Node Version**: 20

## Key Technical Details

- **TypeScript**: Strict mode enabled (extends `astro/tsconfigs/strict`)
- **Font Strategy**: Async load with print media trick for performance
- **Accessibility**: Respects `prefers-reduced-motion`
- **Responsive**: Mobile-first approach with clamp() for fluid typography
- **Performance**: Resource hints, code splitting, optimized asset delivery
>>>>>>> Stashed changes
