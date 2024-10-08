import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useDataStore } from './dataStore';
import type { Champion } from './dataStore';
import type { Item } from './dataStore';

export const usegeneralStore = defineStore(
  'generalStore',
  () => {
    const dataMode = ref('light');
    const dataTheme = ref('lightminimalist');
    const dataAccent = ref('minimalist');

    // Watch for theme changes
    watch(dataTheme, (newValue) => {
      document.documentElement.setAttribute('data-theme', newValue);
    });

    // Watch for mode changes
    watch(dataMode, (newMode) => {
      document.documentElement.setAttribute('data-mode', newMode);
      //console.log(`Mode changed to: ${newMode}`);
    });

    return {
      dataTheme,
      dataMode,
      dataAccent,
    };
  },
  {
    persist: {
      storage: localStorage,
      key: 'generalStore',
    },
  }
);
