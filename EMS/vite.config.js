import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/", // important if deployed at root
  build: {
  outDir: "dist",
  },
  server: {
    historyApiFallback: true, // <-- important for dev server too
  },
})
