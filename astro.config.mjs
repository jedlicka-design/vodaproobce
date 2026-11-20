// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL a BASE_PATH nastavuje GitHub Actions workflow.
// Bez vlastní domény běží web na https://jedlicka-design.github.io/<repo>/,
// s doménou (soubor public/CNAME) na https://vodaproobce.cz/.
const site = process.env.SITE_URL || 'https://vodaproobce.cz';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  // Vlastní port, ať se nepere s jinými Astro projekty na 4321 (cache přesměrování v prohlížeči).
  server: { port: 4322 },
  trailingSlash: 'ignore',
  integrations: [
    // Ochranu osobních údajů do sitemapy přidat, až bude hotový její text.
    // Tiskové stránky (/letak, /kalendar) do sitemapy nepatří, mají noindex.
    sitemap({ filter: (page) => !page.includes('ochrana-osobnich-udaju') && !page.includes('/letak') && !page.includes('/kalendar') }),
  ],
});
