import { defineStore } from "pinia";
import { ref, watch } from "vue";
import {} from "pinia-plugin-persistedstate";

// userSettings.ts

export const useUserSettings = defineStore(
  "userSettings",
  () => {

    const dataTabSize = ref("tabs-xs"); // Default tab size
    const dataMode = ref("light");
    const dataTheme = ref("lightminimalist");
const dataAccent = ref('minimalist');
    // Watch for theme changes
    watch(dataTheme, (newValue) => {
      document.documentElement.setAttribute("data-theme", newValue);
    });

    // Watch for mode changes
    watch(dataMode, (newMode) => {
      document.documentElement.setAttribute("data-mode", newMode);
      console.log(`Mode changed to: ${newMode}`);
    });

    // Watch for changes to the tab size and persist them
    watch(dataTabSize, (newSize) => {
      console.log(`Tab size changed to: ${newSize}`);
    });


    return { dataTheme, dataTabSize, dataMode, dataAccent };
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




    /*const dataFramework = ref("");
    // Watch for changes to the theme and update the document attribute
    watch(dataFramework, (newValue) => {
      document.documentElement.setAttribute("data-theme", newValue);
    });*/
    