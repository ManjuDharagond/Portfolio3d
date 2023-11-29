import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  build: {
    chunkSizeWarningLimit: 100000, // Set your desired limit in kilobytes
  },
})
