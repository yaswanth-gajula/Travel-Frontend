// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'Travel-Frontend'; 

export default defineConfig({
  base: repoName === '' ? '/' : `/${repoName}/`,
  plugins: [react()],
})
