import { defineStore } from "pinia";
import { ref, watch } from "vue";

// userSettings.ts

export const useUserSettings = defineStore(
  "userSettings",
  () => {
    const dataTheme = ref("lofi");
    const dataTabSize = ref("tabs-xs"); // Default tab size

    // Watch for changes to the theme and update the document attribute
    watch(dataTheme, (newValue) => {
      document.documentElement.setAttribute("data-theme", newValue);
    });

    // Watch for changes to the tab size and persist them
    watch(dataTabSize, (newSize) => {
      console.log(`Tab size changed to: ${newSize}`);
    });

    return { dataTheme, dataTabSize };
  },
  {
    persist: {
      storage: localStorage,
      key: "userSettings",
      afterRestore: (ctx) => {
        console.log(`Just restored '${ctx.store.$id}'`);
      },
    },
  },
);
