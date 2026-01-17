import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  if (mode === "app") {
    return {
      plugins: [tailwindcss()],
      build: {
        outDir: "dist-app",
      },
    };
  }

  return {
    plugins: [tailwindcss()],
    build: {
      lib: {
        entry: "src/index.ts",
        formats: ["es"],
      },
      rollupOptions: {
        external: [/^lit/],
      },
    },
  };
});
