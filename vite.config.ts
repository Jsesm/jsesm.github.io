import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'Jsesm.github.io' // <- reemplaza con el nombre de tu repo
});