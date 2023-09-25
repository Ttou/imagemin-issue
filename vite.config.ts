import { resolve } from 'node:path'

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'
import imagemin from 'unplugin-imagemin/vite'
import { defineConfig, loadEnv } from 'vite'

import { browserslist } from './package.json'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')

  return {
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${resolve(__dirname, 'src')}/`
        },
        {
          find: /^~/,
          replacement: ''
        }
      ]
    },
    plugins: [
      vue(),
      legacy({
        targets: browserslist
      }),
      ...(mode === 'production'
        ? [
            imagemin({
              mode: 'sharp'
            })
          ]
        : [])
    ],
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    server: {
      host: true,
      open: true,
      port: 8080
    }
  }
})
