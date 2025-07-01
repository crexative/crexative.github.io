import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>https://crexative.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://crexative.com/images/hero.jpg</image:loc>
      <image:title>CREXATIVE - Premium Software Development Agency in Medellín, Colombia</image:title>
      <image:caption>Expert team of developers creating innovative software solutions</image:caption>
      <image:geo_location>Medellín, Colombia</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://crexative.com/images/about.png</image:loc>
      <image:title>CREXATIVE Development Team</image:title>
      <image:caption>Our passionate team of software engineers and developers in Medellín</image:caption>
    </image:image>
  </url>
  
  <!-- Services Section -->
  <url>
    <loc>https://crexative.com/#services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- About Section -->
  <url>
    <loc>https://crexative.com/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Contact Section -->
  <url>
    <loc>https://crexative.com/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Individual Service Pages (virtual URLs for SEO) -->
  <url>
    <loc>https://crexative.com/services/web-development</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://crexative.com/services/mobile-app-development</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://crexative.com/services/ui-ux-design</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://crexative.com/services/ecommerce-solutions</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      'X-Robots-Tag': 'noindex'
    }
  });
};
