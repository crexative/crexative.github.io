import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const securityTxt = `Contact: mailto:security@crexative.com
Contact: https://crexative.com/#contact
Expires: 2026-12-31T23:59:59.000Z
Encryption: https://crexative.com/pgp-key.txt
Acknowledgments: https://crexative.com/security/acknowledgments
Policy: https://crexative.com/security/policy
Hiring: https://crexative.com/careers

# Security Policy
We take security seriously at CREXATIVE.
If you discover a security vulnerability, please report it to us.
We appreciate responsible disclosure.`;

  return new Response(securityTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=31536000' // Cache for 1 year
    }
  });
};
