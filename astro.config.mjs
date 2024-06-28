import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://beat-one.vercel.app/",
  output: "server",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind(),
    react(),
    svelte(),
    
  ],
});
