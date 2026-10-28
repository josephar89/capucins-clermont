// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://josephar89.github.io',
  base: '/capucins-clermont',
  vite: {
    plugins: [tailwindcss()],
  },
});
