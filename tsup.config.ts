import { defineConfig } from 'tsup';

export default defineConfig({
  splitting: false,
  sourcemap: true,
  format: ['esm'],
  dts: true,
  outExtension() {
    return {
      js: '.mjs',
    };
  },
});
