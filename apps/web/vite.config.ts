import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      iconsek: resolve(__dirname, "../../packages/icons/dist"),
    },
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      allow: [resolve(__dirname, ".."), resolve(__dirname, "../../packages/icons")],
    },
  },
  optimizeDeps: {
    exclude: ["iconsek"],
  },
});
