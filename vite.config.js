import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dotenv from 'dotenv';

dotenv.config();

// Vite configuration
export default defineConfig({
  plugins: [reactRefresh()],
  // other config options...
});
