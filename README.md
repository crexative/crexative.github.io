# CREXATIVE

Sitio web oficial de **CREXATIVE**, agencia de desarrollo de software desde Colombia. Bilingüe (español/inglés), construido con Astro 5, desplegado en Cloudflare Pages.

**Live:** https://crexative.com

## Stack

- **Framework:** Astro 5
- **Package manager:** pnpm
- **Deployment:** Cloudflare Pages — auto-deploy vía GitHub Actions en push a `main`
- **Idiomas:** Español (default `/`) · Inglés (`/en/`)

## Desarrollo

```bash
pnpm install
pnpm dev          # localhost:4321
pnpm build        # producción → ./dist/
pnpm preview      # preview del build
```

### Validaciones

```bash
pnpm astro check      # TypeScript + diagnósticos
pnpm validate-html    # validar HTML del output
pnpm check-links      # links rotos
pnpm seo-check        # reporte SEO
```

### Performance

```bash
pnpm lighthouse       # Lighthouse en localhost:4321
pnpm performance      # pipeline completo: build + preview + Lighthouse
pnpm build:analyze    # bundle size
```

## Estructura

```
src/
├── pages/              # index.astro (ES), en/index.astro (EN), es/index.astro
├── components/
│   ├── sections/       # Hero, Services, Contact, ProjectShowcase, About, StickyCallToAction…
│   ├── layout/         # Navbar, Footer, LanguageSwitcher
│   └── ui/             # Button, Card, Container, Icon, SectionHeader, Tag
├── i18n/
│   ├── locales/        # es.ts, en.ts — toda la copy del sitio
│   └── i18n.config.ts  # useTranslations(lang), getLangFromUrl(url)
├── config/
│   └── site.config.ts  # SITE_CONFIG, CONTACT_INFO, FORM_CONFIG, SOCIAL_LINKS
└── utils/
    └── seo.utils.ts    # JSON-LD schema generator
```

## Copy e i18n

Toda la copy del sitio vive en `src/i18n/locales/es.ts` y `src/i18n/locales/en.ts`. Los componentes consumen las traducciones con:

```astro
const t = useTranslations(lang as 'en' | 'es');
// uso: {t('hero.title')}
```

Al editar copy, siempre actualizar **ambos** archivos de locales.

## Configuración centralizada

| Archivo | Contenido |
|---|---|
| `src/config/site.config.ts` | URLs, contacto, formulario, redes sociales |
| `src/constants/theme.constants.ts` | Constantes de tema (LIGHT/DARK) |
| `public/_headers` | Headers de seguridad y caché de Cloudflare |

## Tema

- **Dark por defecto.** Toggle en Navbar via evento `themeToggle`.
- CSS variables en `[data-theme="dark"]` / `[data-theme="light"]` sobre `<html>`.
- Colores de marca: `#00E1C6` (cyan) · `#CCFE12` (lime)

## Deployment

Push a `main` → GitHub Actions → build en Cloudflare Pages.

Workflow: `.github/workflows/astro.yml`
