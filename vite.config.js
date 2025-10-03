// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import path from "path"; // 1. Import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  // 2. Add this 'resolve' section to define the alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});