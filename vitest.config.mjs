import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ui5-'),
        },
      },
    }),
  ],
  test: {
    include: ['tests/unit/**.spec.js'],
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': new URL('./src/', import.meta.url).pathname,
    },
  },
});
