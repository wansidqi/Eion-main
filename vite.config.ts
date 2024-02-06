import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import { URL, fileURLToPath } from 'url';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  resolve: {
    alias: [{ find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) }],
  },
});
