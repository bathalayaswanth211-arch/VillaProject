import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        properties: resolve(__dirname, 'Properties.html'),
        propertyDetails: resolve(__dirname, 'Property Details.html'),
        contactUs: resolve(__dirname, 'Contact Us.html'),
      },
    },
  },
  server: {
    open: true,
  },
});