import {
  fileURLToPath,
  URL,
} from 'node:url';

import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import VueDevTools from 'vite-plugin-vue-devtools';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools(), mkcert()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { https: true } // Not needed for Vite 5+
})
