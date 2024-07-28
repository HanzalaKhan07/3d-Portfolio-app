import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Add this line
  server: {
    hmr: {
      overlay: false, // Optional: Disable the error overlay
    },
    host: '0.0.0.0', // Bind to all available network interfaces
    port: 3000, // Ensure this matches your running port
  },
});
