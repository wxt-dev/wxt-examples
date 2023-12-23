import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: './vitest-environment-puppeteer.ts',
  },
});
