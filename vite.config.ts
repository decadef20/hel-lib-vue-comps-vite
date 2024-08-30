import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import helDevUtils from 'hel-dev-utils'
import appInfo from './appInfo.mjs'

// https://vitejs.dev/config/
export default defineConfig({
  base: appInfo.getPublicPathOrUrl(`http://localhost:8889`),
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        dir: helDevUtils.cst.HEL_DIST_DIR,
        format: 'umd',
        globals: appInfo.externals
      },
      external: Object.keys(appInfo.externals)
    }
  },
  optimizeDeps: {
    include: ['node_modules/**/*']
  }
})
