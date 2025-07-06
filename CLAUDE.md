# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Crexative** website built with **Astro** - a modern landing page for a creative design agency. The project is configured to deploy to https://crexative.com and uses pnpm as the package manager.

## Development Commands

All commands should be run from the project root using pnpm:

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro check` - Run Astro's built-in type checking and diagnostics

## Architecture

### Component Structure
The site follows a standard Astro component-based architecture:

- **Layout**: `src/layouts/Layout.astro` - Base layout with global styles, theme system, and HTML structure
- **Pages**: `src/pages/index.astro` - Single page application composing all components
- **Components**: `src/components/` - Reusable UI components for different sections (Hero, Services, About, Stats, Contact, Footer, Navbar)

### Styling Approach
- Uses scoped CSS within individual `.astro` components
- Global styles and CSS variables defined in `Layout.astro`
- Implements a light/dark theme system with CSS custom properties
- Uses Poppins Google Font
- Responsive design with mobile-first approach

### Key Features
- **Theme System**: Light/dark mode toggle with localStorage persistence
- **Brand Identity**: "CREXATIVE" brand name with primary color (#00e1c7)
- **Landing Page Sections**: Hero, Services, About, Stats, Contact
- **Responsive Design**: Mobile-optimized layouts

### File Organization
- `src/components/` - Individual section components
- `src/layouts/` - Base layout template
- `src/pages/` - Page routes (single page app)
- `src/assets/` - Static assets (SVGs)
- `public/` - Public assets (images, favicon, CNAME)

## Configuration

- **Site URL**: https://crexative.com (configured in astro.config.mjs)
- **TypeScript**: Strict mode enabled
- **Package Manager**: pnpm (lockfile present)
- **Deployment**: Configured with GitHub Actions (astro.yml) and CNAME file