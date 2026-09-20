// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Repo barmarcalv.github.io -> the site lives at the root, no base path.
  // If you deploy to a project repo instead (e.g. github.com/barmarcalv/web),
  // add: base: '/web',
  site: 'https://barmarcalv.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
