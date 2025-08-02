import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/muneswaratrust.github.io/',  // ✅ Required for GitHub Pages
  plugins: [react()],
})
