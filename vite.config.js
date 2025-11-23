import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ponto-de-abducao/',
  plugins: [react()],
})
