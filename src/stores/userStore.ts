import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useDataStore } from './dataStore';
import type { Champion } from './dataStore';
import type { Item } from './dataStore';

export const useUserStore = defineStore(
  'UserStore',
  () => {
    const ds = useDataStore();
    const showSidebar = ref();
    const faveChamps = <Champion[]>[];

    const faveItems = <Item[]>[];

    function toggleFavoriteItem(item) {
      if (faveItems.includes(item)) {
        faveItems.splice(item, 1);
      } else {
        faveItems.push(item);
      }
      console.log(faveItems);
    }

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
      console.log(`Mode changed to: ${newMode}`);
    });

    return {
      dataTheme,
      dataMode,
      dataAccent,
      faveChamps,
      faveItems,
      toggleFavoriteItem,
      showSidebar,
    };
  },
  {
    persist: {
      storage: localStorage,
      key: 'userStore',
    },
  }
);
