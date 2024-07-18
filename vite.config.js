import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react({
    babel: {
      plugins: [
        // Add your Babel plugins here
      ],
      presets: [
        '@babel/preset-react',
      ],
      compact: false,
    },
    include: /\.(js|jsx|ts|tsx)$/,
    exclude: [
      'node_modules/**',
      '/src/assets/coin-illustration.svg', 
      '/src/assets/world.svg', 
      '/src/assets/character-one.svg', 
      '/src/assets/character-two.svg', 
      '/src/assets/character-four.svg', 
    ],
  }),, svgr()],
})
