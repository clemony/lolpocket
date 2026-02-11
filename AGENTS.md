## Codex Rules

### Context7 Auto-Use (Global)
When a user asks a code-related question, automatically use Context7 for library/API docs, setup, or configuration.
If a known library is detected, use its libraryId directly (skip resolve-library-id):
- Nuxt 4 -> /websites/nuxt_4_x
- Vue 3 -> /vuejs/docs
- Vue Router 4 -> /vuejs/router
- Tailwind CSS 4 -> /websites/tailwindcss
- Nuxt UI 4 -> /websites/ui4_nuxt
- Supabase -> /supabase/supabase
- Cloudflare D1 -> /llmstxt/developers_cloudflare_d1_llms-full_txt
- Pinia -> /vuejs/pinia
- Motion for Vue -> /websites/motion_dev_vue
- ESLint -> /websites/eslint
- Vite 7 -> /vitejs/vite
- Pinia Persistedstate -> /websites/codeberg_praz_pinia-plugin-persistedstate_src_branch_main
- Tiptap 3 -> /ueberdosis/tiptap-docs
- VueUse 14 -> /websites/vueuse
- Dexie -> /websites/dexie
- Apache ECharts -> /apache/echarts-doc
- Vue ECharts -> /ecomfe/vue-echarts
- Tailwind Variants -> /websites/tailwind-variants
- daisyUI -> /websites/daisyui

Always enforce Tailwind v4 and Nuxt UI v4 by including "Tailwind v4" or "Nuxt UI v4" in the Context7 query even when a libraryId is supplied.
Always enforce ESLint v10, Vite v7, Tiptap v3, VueUse v14, and daisyUI v5 by including the version in the Context7 query even when a libraryId is supplied.
