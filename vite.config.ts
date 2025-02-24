import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['*', 'be30-93-115-27-131.ngrok-free.app']
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
