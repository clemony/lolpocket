import type plugin from "tailwindcss/plugin"

declare const daisyui: ReturnType<typeof plugin>

export default daisyui

type CustomTheme = Record<string, Record<string, string>>
type Theme =
  | "light"
  | "dark"
    | "nord"
declare module '@/assets/theme.js';
declare module 'vue3-resize-text';
declare module '@iconify/vue';
declare module '@/pages/tree.vue';
declare module '@/service/NodeService';
declare module '@/pages/App.vue';
declare module '@/data/champQuotes.ts';
