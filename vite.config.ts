/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import istanbul from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3000,
    watch: {
      ignored: ['**/coverage/**'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'c8',
      all: true,
      exclude: [
        '**/dist/**',
        '**/interfaces/**',
        '**/*.d.ts',
        '**/*.config.ts',
        '**/main.tsx',
        '**/entry*.tsx',
        '**/*.cjs',
      ],
    },
  },
})
