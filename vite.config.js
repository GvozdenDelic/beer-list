import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), compression()],
  build: {
    outDir: '/dist'
  },
  base: "/beer-list",
});
