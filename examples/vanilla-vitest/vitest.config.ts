console.log('vitest.config.ts');
import { defineConfig } from 'vitest/config';
import { WxtVitest } from 'wxt/testing';

export default defineConfig({
  // Configure test behavior however you like
  test: {
    mockReset: true,
    restoreMocks: true,
  },
  ssr: {
    noExternal: ['wxt'],
  },
  // This is the line that matters!
  plugins: [WxtVitest()],
});
