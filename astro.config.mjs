// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wanderluiz.com.br',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  image: {
    // permite miniaturas do YouTube otimizadas, se necessário
    domains: ['i.ytimg.com'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
