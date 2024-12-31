import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/2025-fireworks/',  // 添加这行，匹配你的仓库名
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
