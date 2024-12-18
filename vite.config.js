import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.100.25', // allows access from any IP (useful for remote testing)
  //   port: 3000, // you can specify your own port
  // },
})
