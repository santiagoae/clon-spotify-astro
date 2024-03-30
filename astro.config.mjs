import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  site: 'https://santiagoae.github.io'
});