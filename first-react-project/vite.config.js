import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test : {
    base: "/2024-LearnReact/first-react-project",
    globals: true,
    environment: 'jsdom',
    css: true,
  }
})