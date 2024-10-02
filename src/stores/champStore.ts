import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useDataStore } from './dataStore';
import type { Champion, Item } from './dataStore';

export const useChampStore = defineStore(
  'champStore',
  () => {
    const ds = useDataStore();
    // Use a computed property to ensure it reacts to changes in ds.champions
    const champions = computed(() => ds.champions);

    console.log('champions in pinia', champions.value); // This will now reflect the actual champions

    const championsInPocket = ref<Champion[]>([]);
    const selectedChampion = ref('');
    const champSearch = ref('');
    const likedChamps = ref<Champion[]>([]);
    const champTabs = ref('abilities');

    const filteredChampions = computed(() => {
      let filtered = [...champions.value];

      if (championsInPocket.value.length > 0) {
        const selectedNames = championsInPocket.value.map((champion) => champion.name);
        filtered = filtered.filter((champion) => !selectedNames.includes(champion.name));
      }

      if (champSearch.value) {
        filtered = filtered.filter((champion) => Object.values(champion).some((value) => typeof value === 'string' && value.toLowerCase().includes(champSearch.value)));
      }

      return filtered;
    });

    //--------------------------------------------------ITEMS MAP

    const championItemsMap = ref<Record<string, Item[]>>({});

    function addToSet(item: Item, champName: string) {
      if (!championItemsMap.value[champName]) {
        championItemsMap.value[champName] = [];
      }

      championItemsMap.value[champName].push(item);
      console.log('Items for', champName, ':', championItemsMap.value[champName]);
    }

    function getChampionItems(champName: string) {
      return championItemsMap.value[champName] || [];
    }

    function removeFromSet(item: Item, champName: string) {
      // Ensure the champion exists in the map
      if (championItemsMap.value[champName]) {
        // Find the index of the item to be removed
        const index = championItemsMap.value[champName].findIndex((i) => i.name === item.name);

        // If the item exists, remove it
        if (index !== -1) {
          championItemsMap.value[champName].splice(index, 1);
          console.log('Removed item:', item.name, 'from', champName);
        } else {
          console.log('Item not found:', item.name, 'for', champName);
        }
      } else {
        console.log('Champion not found:', champName);
      }
    }

    function resetChamps() {
      championsInPocket.value = [];
    }

    return {
      selectedChampion,
      champions, // champions is now a ref
      filteredChampions,
      likedChamps,
      championsInPocket,
      resetChamps,
      champSearch,
      addToSet,
      getChampionItems,
      removeFromSet,
      championItemsMap,
      champTabs,
    };
  },
  {
    persist: {
      storage: localStorage,
      key: 'champStore',
    },
  }
);
