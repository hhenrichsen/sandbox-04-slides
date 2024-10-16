import {defineConfig} from 'vite';
import UnoCSS from 'unocss/vite';
import {resolve} from 'path';

export default defineConfig({
  base: process.env.REPO_NAME ? `/${process.env.REPO_NAME}/` : '/',
  plugins: [UnoCSS()],
  build: {
    rollupOptions: {
      input: {
        '01': resolve(__dirname, '01.html'),
        '02': resolve(__dirname, '02.html'),
        '03': resolve(__dirname, '03.html'),
        '04': resolve(__dirname, '04.html'),
        '05': resolve(__dirname, '05.html'),
      },
    },
  },
});
