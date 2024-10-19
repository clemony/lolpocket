import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useDataStore } from './dataStore';

export const useGeneralStore = defineStore(
  'generalStore',
  () => {
    const dataMode = ref('light');
    const dataTheme = ref('lightminimalist');
    const dataAccent = ref('minimalist');
    const ds = useDataStore();

    const isMinimized = ref(false);
    const firstPane = ref(16);
    const secondPane = ref(84);

    const reducedMotion = ref();

    // Watch for theme changes
    watch(dataTheme, (newValue) => {
      document.documentElement.setAttribute('data-theme', newValue);
    });

    // Watch for mode changes
    watch(dataMode, (newMode) => {
      document.documentElement.setAttribute('data-mode', newMode);
      //console.log(`Mode changed to: ${newMode}`);
    });

    // Method to lose focus when Enter is pressed
    const loseFocus = (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;
      if (event.key === 'Enter') {
        target.blur(); // Lose focus on the current input field
      }
    };

    return {
      dataTheme,
      dataMode,
      dataAccent,
      loseFocus,
      reducedMotion,
      isMinimized,
      firstPane,
      secondPane,
    };
  },
  {
    persist: {
      storage: localStorage,
      key: 'generalStore',
    },
  }
);
