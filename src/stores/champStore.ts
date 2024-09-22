import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useDataStore } from './dataStore';
import type { Champion } from './dataStore';

export const useChampStore = defineStore(
  'champStore',
  () => {
    const ds = useDataStore();
    const champions = ds.champions;

    const champions2 = ref<Champion[]>([]);

    const selectedChampion = ref<Champion[]>([]);

    const filteredChampions = computed(() => {
      // Start with the full list of champions
      let filtered = [...champions];

      // Check if champions2 has any champions
      if (champions2.value.length > 0) {
        // Filter champions based on whether their name exists in champions2
        const selectedNames = champions2.value.map((champion) => champion.name);
        filtered = filtered.filter((champion) => !selectedNames.includes(champion.name));
      }

      return filtered;
    });

    console.log('filtered champs: ', filteredChampions.value);

    function resetChamps() {
      champions2.value = [];
    }

    return {
      selectedChampion,
      champions,
      filteredChampions,
      //onAddChampionToBuild,
      //onAddChampionBackToAll,
      champions2,
      resetChamps,
    };
  },
  {
    persist: {
      storage: localStorage,
      key: 'champStore',
    },
  }
);
