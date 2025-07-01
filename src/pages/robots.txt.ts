import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robotsTxt = `User-agent: *
Allow: /

# Optimize crawl budget
Disallow: /api/
Disallow: /_astro/
Disallow: /admin/

# Important pages for SEO
Crawl-delay: 1

# Sitemap location
Sitemap: https://crexative.com/sitemap.xml

# Major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
