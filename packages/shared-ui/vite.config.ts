import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom'
        }
      }
    },
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'shared-ui',
      fileName: `shared-ui`
    },
  },
}))