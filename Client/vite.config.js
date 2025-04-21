import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  console.log("Vite mode:", mode);
  console.log("API URL from env:", env.VITE_API_URL || "not set");

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5001",
          changeOrigin: true,
          secure: false,
        },
      },
    },
    // Add build options for production
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});
