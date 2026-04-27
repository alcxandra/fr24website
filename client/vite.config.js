import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/flights": "http://localhost:3000",
    },
  },
});
