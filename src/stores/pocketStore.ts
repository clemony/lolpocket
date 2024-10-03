import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useDataStore } from './dataStore';
import type { Champion, Item } from './dataStore';
import { RuneSet, useRuneStore } from './runeStore';
import { ItemSet, useItemStore } from './itemStore';
import { useChampStore } from './champStore';

export interface pocketChampions {
  key: number;
  champions: Champion[];
}

export interface pocketItems {
  key: number;
  itemSets: ItemSet[];
  starred: ItemSet[];
}

export interface pocketRunes {
  key: number;
  runeSets: RuneSet[];
  starred: RuneSet[];
}

export interface pocket {
  name: string;
  type: string;
  key: number;
  icon: string;
  champions: pocketChampions[];
  items: pocketItems[];
  runes: pocketRunes[];
}

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const cs = useChampStore();
    const rs = useRuneStore();
    const is = useItemStore();

    const pockets = ref<pocket[]>([]);

    function newPocket(name: string, type: string, icon: string) {
      const newKey = pockets.value.length + 1;

      const pocketChampionsValue: pocketChampions = {
        key: newKey,
        champions: JSON.parse(JSON.stringify(cs.championsInPocket)),
      };

      const pocketItemsValue: pocketItems = {
        key: newKey,
        itemSets: JSON.parse(JSON.stringify(is.itemSets)) || [],
        starred: [], // Initialize starred as an empty array
      };

      const pocketRunesValue: pocketRunes = {
        key: newKey,
        runeSets: JSON.parse(JSON.stringify(rs.runeSets)) || [],
        starred: [], // Ensure starred is initialized
      };

      // Create the new pocket
      const newPocket: pocket = {
        name: name || '',
        type: type || '',
        key: newKey,
        icon: icon || 'teenyicons:folder-outline',
        champions: [pocketChampionsValue],
        items: [pocketItemsValue],
        runes: [pocketRunesValue],
      };

      // Now push the first item set as the default starred set if it exists
      if (newPocket.items[0].itemSets.length > 0) {
        newPocket.items[0].starred.push(newPocket.items[0].itemSets[0]); // Push the first item set as starred
      }
      cs.championsInPocket.splice(0);
      is.itemSets.splice(0);
      rs.runeSets.splice(0);
      rs.starred = []; // Clear starred for runes
      // Push the new pocket into pockets array
      pockets.value.push(newPocket);

      // Clear temporary data after saving to the new pocket
    }

    function getPocket(key) {
      const findPocket = pockets.value.find((pocket: pocket) => pocket.key === key);
    }

    function deletePocket(key: number) {
      const index = pockets.value.findIndex((set) => set.key === key);

      if (index !== -1) {
        pockets.value.splice(index, 1); // Use the index and delete 1 item
      }
    }

    return {
      pockets,
      deletePocket,
      newPocket,
      getPocket,
    };
  },

  {
    persist: {
      storage: localStorage,
      key: 'pocketStore',
    },
  }
);
