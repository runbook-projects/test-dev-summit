import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runbook-projects.github.io/test-dev-summit',
  base: '/test-dev-summit',
  output: 'static',
  build: {
    assets: 'assets',
  },
});