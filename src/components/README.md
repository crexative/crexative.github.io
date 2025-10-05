# Component Library Documentation

This document describes the organized component structure for the CREXATIVE website.

## Component Organization

The components are organized into three main categories:

### 📦 UI Components (`src/components/ui/`)

Reusable UI primitives that can be used across the application. These are presentation-only components focused on a single responsibility.

#### Available Components:

- **Button.astro** - Reusable button component with variants
  - Variants: `primary`, `secondary`, `outline`
  - Supports both links (`href`) and buttons (`type`)
  - Props: `variant`, `href`, `type`, `class`, `ariaLabel`
  ```astro
  <Button variant="primary" href="#contact">Get Started</Button>
  <Button variant="secondary" type="submit">Submit</Button>
  ```

- **Card.astro** - Reusable card component with hover effects
  - Optional gradient border on hover
  - Props: `class`, `withGradient`
  ```astro
  <Card withGradient={true}>
    <slot />
  </Card>
  ```

- **Container.astro** - Layout container with consistent padding/max-width
  - Global styles for consistent spacing
  - Props: `class`
  ```astro
  <Container>
    <slot />
  </Container>
  ```

- **Icon.astro** - SVG icon component with predefined icons
  - Icons: `web`, `mobile`, `design`, `ecommerce`, `sun`, `moon`, `menu`
  - Props: `name`, `size`, `class`
  ```astro
  <Icon name="web" size={40} />
  ```

- **SectionHeader.astro** - Reusable section header component
  - Configurable alignment
  - Props: `subtitle`, `title`, `description`, `align`
  ```astro
  <SectionHeader
    subtitle="Our Services"
    title="What We Offer"
    description="Professional solutions for your business"
    align="center"
  />
  ```

- **Tag.astro** - Badge/label component for displaying tags
  - Variants: `primary`, `secondary`, `outline`
  - Props: `variant`, `class`
  ```astro
  <Tag variant="primary">React</Tag>
  ```

#### Usage:

```astro
import Button from '../ui/Button.astro';
import Card from '../ui/Card.astro';
import Icon from '../ui/Icon.astro';
// Or use the index file:
import { Button, Card, Icon } from '../ui';
```

### 🎨 Layout Components (`src/components/layout/`)

Components that define the overall page structure and navigation.

- **Navbar.astro** - Main navigation bar with theme toggle and language switcher
  - Props: `brandName`, `lang`
  - Features: Mobile responsive menu, theme toggle, language switcher

- **Footer.astro** - Site footer with links and information
  - Props: `lang`

- **LanguageSwitcher.astro** - Language selection dropdown
  - Props: `currentLang`
  - Persists selection to localStorage

### 📄 Section Components (`src/components/sections/`)

Page section components that compose the main content areas.

- **Hero.astro** - Hero/banner section
- **Services.astro** - Services showcase section
- **About.astro** - About/company information section
- **Contact.astro** - Contact form section
- **StickyCallToAction.astro** - Floating CTA button
- **Welcome.astro** - Welcome message section
- **Stats.astro** - Statistics display section
- **Clients.astro** - Client logos/testimonials section
- **Portfolio.astro** - Portfolio showcase section
- **Testimonials.astro** - Customer testimonials section

All section components accept a `lang` prop for internationalization.

## Component Principles

### Single Responsibility
Each component has a clear, single purpose and does one thing well.

### Reusability
UI components are designed to be reused across different contexts with props for customization.

### Composition
Complex components are built by composing simpler components together.

### Type Safety
All components use TypeScript interfaces for props to ensure type safety.

### Responsive Design
All components include responsive styles with mobile-first approach.

## File Structure

```
src/components/
├── ui/                    # Reusable UI primitives
│   ├── Button.astro
│   ├── Card.astro
│   ├── Container.astro
│   ├── Icon.astro
│   ├── SectionHeader.astro
│   ├── Tag.astro
│   └── index.ts           # Barrel exports
├── layout/                # Layout/navigation components
│   ├── Navbar.astro
│   ├── Footer.astro
│   └── LanguageSwitcher.astro
└── sections/              # Page section components
    ├── Hero.astro
    ├── Services.astro
    ├── About.astro
    ├── Contact.astro
    ├── StickyCallToAction.astro
    ├── Welcome.astro
    ├── Stats.astro
    ├── Clients.astro
    ├── Portfolio.astro
    └── Testimonials.astro
```

## Import Path Updates

After the reorganization, all import paths have been updated:

**Pages** import from:
- Layout components: `../components/layout/ComponentName.astro`
- Section components: `../components/sections/ComponentName.astro`
- UI components: `../components/ui/ComponentName.astro` or `../components/ui`

**Components** import from:
- Two levels up: `../../i18n`, `../../utils`, `../../constants`

## Migration Guide

If you're updating existing code to use the new structure:

1. Update import paths based on the new folder structure
2. Consider extracting repeated UI patterns into the `ui/` components
3. Use the provided UI components (Button, Card, etc.) instead of recreating styles
4. Follow the established prop interfaces for consistency

## Best Practices

1. **Keep UI components pure** - No business logic, only presentation
2. **Use TypeScript interfaces** - Always define props with TypeScript
3. **Extract common patterns** - If you see repeated code, create a new UI component
4. **Follow naming conventions** - PascalCase for component files
5. **Document complex components** - Add JSDoc comments for non-obvious behavior
6. **Maintain accessibility** - Include proper ARIA labels and semantic HTML
