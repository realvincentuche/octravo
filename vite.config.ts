import { defineConfig } from 'vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

import viteReact from '@vitejs/plugin-react'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
  ],
})

export default config
