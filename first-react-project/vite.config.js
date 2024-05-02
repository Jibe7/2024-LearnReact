import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/2024-LearnReact/",
  plugins: [react()],
  test : {
    globals: true,
    environment: 'jsdom',
    css: true,
  }
})
