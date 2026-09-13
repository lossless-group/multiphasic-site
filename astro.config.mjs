// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// Public marketing site, shipped noindex until the operator lifts it.
// The source deck is CONFIDENTIAL and lives in context-v/extra/private (gitignored).
export default defineConfig({
  site: 'https://multiphasic.com',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@flare': path.resolve('./src/components/flare'),
        '@lib': path.resolve('./src/lib'),
      },
    },
  },
});
