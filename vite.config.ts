import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Izslēdz Rollup native moduli
    },
  },
  optimizeDeps: {
    force: true,
  }
});