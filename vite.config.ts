import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default {
  plugins: [reactRefresh()],
  // Other Vite configurations...
};
//export default defineConfig({
  //plugins: [react()],
//})
