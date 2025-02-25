import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['*', '7b84-188-214-133-205.ngrok-free.app']
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
