// vite.config.js
import { defineConfig } from "file:///D:/program/project/divar/rjs-divar-files-main/node_modules/vite/dist/node/index.js";
import react from "file:///D:/program/project/divar/rjs-divar-files-main/node_modules/@vitejs/plugin-react/dist/index.mjs";
var paths = [
  "src",
  "assets",
  "components",
  "configs",
  "pages",
  "routers",
  "services",
  "styles",
  "utils"
];
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...paths.reduce((acc, cur) => ({
        ...acc,
        [cur]: `/${cur === "src" ? cur : "src/" + cur}`
      }), ""),
      template: "/src/components/template"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9ncmFtXFxcXHByb2plY3RcXFxcZGl2YXJcXFxccmpzLWRpdmFyLWZpbGVzLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2dyYW1cXFxccHJvamVjdFxcXFxkaXZhclxcXFxyanMtZGl2YXItZmlsZXMtbWFpblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvZ3JhbS9wcm9qZWN0L2RpdmFyL3Jqcy1kaXZhci1maWxlcy1tYWluL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuY29uc3QgcGF0aHMgPSBbXG4gIFwic3JjXCIsXG4gIFwiYXNzZXRzXCIsXG4gIFwiY29tcG9uZW50c1wiLFxuICBcImNvbmZpZ3NcIixcbiAgXCJwYWdlc1wiLFxuICBcInJvdXRlcnNcIixcbiAgXCJzZXJ2aWNlc1wiLFxuICBcInN0eWxlc1wiLFxuICBcInV0aWxzXCIsXG5dXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgLi4ucGF0aHMucmVkdWNlKChhY2MsIGN1cikgPT4gKHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBbY3VyXTogYC8ke2N1ciA9PT0gXCJzcmNcIiA/IGN1ciA6IFwic3JjL1wiICsgY3VyfWBcbiAgICAgIH0pLCBcIlwiKSxcbiAgICAgIHRlbXBsYXRlOiBcIi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZVwiXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVSxTQUFTLG9CQUFvQjtBQUNoVyxPQUFPLFdBQVc7QUFFbEIsSUFBTSxRQUFRO0FBQUEsRUFDWjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLFNBQVM7QUFBQSxRQUM3QixHQUFHO0FBQUEsUUFDSCxDQUFDLEdBQUcsR0FBRyxJQUFJLFFBQVEsUUFBUSxNQUFNLFNBQVMsR0FBRztBQUFBLE1BQy9DLElBQUksRUFBRTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
