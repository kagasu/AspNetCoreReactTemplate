import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  server: {
    port : 44419,
    proxy: {
      '/api': {
        target: 'http://192.168.0.2:5093',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
