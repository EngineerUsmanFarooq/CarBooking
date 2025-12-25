import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
  define: {
    'import.meta.env.API_BASE_URL': JSON.stringify('http://localhost:5000'),
},
=======
>>>>>>> 03c61259abae1b135fd6479454898994acd3fa4b
});
