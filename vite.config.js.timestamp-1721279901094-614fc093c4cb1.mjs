// vite.config.js
import { defineConfig } from "file:///C:/Users/HP/Desktop/Dev/Pugabull/pugabull-website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/Desktop/Dev/Pugabull/pugabull-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/HP/Desktop/Dev/Pugabull/pugabull-website/node_modules/@svgr/rollup/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        // Add your Babel plugins here
      ],
      presets: [
        "@babel/preset-react"
      ],
      compact: false
    },
    include: /\.(js|jsx|ts|tsx)$/,
    exclude: [
      "node_modules/**",
      "/src/assets/coin-illustration.svg",
      "/src/assets/world.svg",
      "/src/assets/character-one.svg",
      "/src/assets/character-two.svg",
      "/src/assets/character-four.svg"
    ]
  }), , svgr()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXERldlxcXFxQdWdhYnVsbFxcXFxwdWdhYnVsbC13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXERldlxcXFxQdWdhYnVsbFxcXFxwdWdhYnVsbC13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IUC9EZXNrdG9wL0Rldi9QdWdhYnVsbC9wdWdhYnVsbC13ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgc3ZnciBmcm9tICdAc3Znci9yb2xsdXAnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbIHJlYWN0KHtcclxuICAgIGJhYmVsOiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAvLyBBZGQgeW91ciBCYWJlbCBwbHVnaW5zIGhlcmVcclxuICAgICAgXSxcclxuICAgICAgcHJlc2V0czogW1xyXG4gICAgICAgICdAYmFiZWwvcHJlc2V0LXJlYWN0JyxcclxuICAgICAgXSxcclxuICAgICAgY29tcGFjdDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogL1xcLihqc3xqc3h8dHN8dHN4KSQvLFxyXG4gICAgZXhjbHVkZTogW1xyXG4gICAgICAnbm9kZV9tb2R1bGVzLyoqJyxcclxuICAgICAgJy9zcmMvYXNzZXRzL2NvaW4taWxsdXN0cmF0aW9uLnN2ZycsIFxyXG4gICAgICAnL3NyYy9hc3NldHMvd29ybGQuc3ZnJywgXHJcbiAgICAgICcvc3JjL2Fzc2V0cy9jaGFyYWN0ZXItb25lLnN2ZycsIFxyXG4gICAgICAnL3NyYy9hc3NldHMvY2hhcmFjdGVyLXR3by5zdmcnLCBcclxuICAgICAgJy9zcmMvYXNzZXRzL2NoYXJhY3Rlci1mb3VyLnN2ZycsIFxyXG4gICAgXSxcclxuICB9KSwsIHN2Z3IoKV0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVYsU0FBUyxvQkFBb0I7QUFDaFgsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUUsTUFBTTtBQUFBLElBQ2YsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBO0FBQUEsTUFFVDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUMsR0FBRSxFQUFFLEtBQUssQ0FBQztBQUNiLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
