import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

function getInitialTheme(): string {
  return document.documentElement.getAttribute('data-theme') || 'lofi';
}

export const useUserSettings = defineStore('userSettings', () => {
  const dataTheme = ref(getInitialTheme());

  // Watch for changes to the theme and update the document attribute
  watch(dataTheme, (newValue) => {
    document.documentElement.setAttribute('data-theme', newValue);
  });

  return { dataTheme }
}, {
  persist: true,
});

