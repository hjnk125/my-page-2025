import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      // @ts-expect-error svgr
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@icons',
        replacement: path.resolve(__dirname, 'src/assets/icons'),
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, 'src/assets/images'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/layouts'),
      },
    ],
  },
});
