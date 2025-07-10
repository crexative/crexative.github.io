# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Crexative** website built with **Astro** - a modern landing page for a creative design agency operating across Colombia. The project is configured to deploy to https://crexative.com and uses pnpm as the package manager. The website supports both English and Spanish languages with complete internationalization (i18n) implementation.

## Development Commands

All commands should be run from the project root using pnpm:

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro check` - Run Astro's built-in type checking and diagnostics

### Performance & SEO Commands
- `pnpm run build:analyze` - Build and analyze bundle size
- `pnpm run lighthouse` - Run Lighthouse audit on localhost:4321
- `pnpm run lighthouse:ci` - Run Lighthouse CI
- `pnpm run seo-check` - Quick SEO validation report
- `pnpm run performance` - Full performance audit (build → preview → lighthouse)
- `pnpm run validate-html` - Validate HTML structure
- `pnpm run check-links` - Check for broken links

## Architecture

### Component Structure
The site follows a standard Astro component-based architecture:

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

## Configuration

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