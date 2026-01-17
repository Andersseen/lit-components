import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

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
    plugins: [tailwindcss(), dts({ rollupTypes: true })],
    build: {
      lib: {
        entry: "src/index.ts",
        formats: ["es"],
      },
      outDir: "dist-lib",
      rollupOptions: {
        external: [/^lit/],
      },
    },
  };
});
