import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useDataStore } from './dataStore';
import type { Champion, Item } from './dataStore';
import { RuneSet } from './runeStore';
import { ItemSet } from './itemStore';
import { useChampStore } from './champStore';

export interface pocketChampions {
  key: number;
  champions: Champion[];
}

export interface pocketItems {
  key: number;
  itemSets: ItemSet[];
}

export interface pocketRunes {
  key: number;
  runeSets: RuneSet[];
}

export interface pocket {
  name: string;
  description: string;
  key: number;
  icon: string;
  champions: pocketChampions[];
  items: pocketItems[];
  runes: pocketRunes[];
}

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const champStore = useChampStore();

    const pocketName = ref('');
    const pocketIcon = ref('teenyicons:folder-outline');
    const pocketDescription = ref('');
    const pockets = ref<pocket[]>([]);

    function newPocket() {
      const newKey = pockets.value.length + 1;

      const pocketChampionsValue: pocketChampions = {
        key: newKey,
        champions: JSON.parse(JSON.stringify(champStore.championsInPocket)),
      };

      const pocketItemsValue: pocketItems = {
        key: newKey,
        itemSets: JSON.parse(JSON.stringify(champStore.championsInPocket)),
      };

      const pocketRunesValue: pocketRunes = {
        key: newKey,
        runeSets: JSON.parse(JSON.stringify(champStore.championsInPocket)),
      };

      const newPocket: pocket = {
        name: pocketName.value || '',
        description: pocketDescription.value || '',
        key: newKey,
        icon: pocketIcon.value,
        champions: [pocketChampionsValue],
        items: [pocketItemsValue],
        runes: [pocketRunesValue],
      };

      pockets.value.push(newPocket); // Push the new pocket into pockets array
      console.log('posciekts: ', pockets);
      console.log(pocketName);
      console.log(pocketDescription);
      pocketName.value = '';
      pocketDescription.value = '';
      pocketIcon.value = 'teenyicons:folder-outline';
    }

    function deletePocket(key) {
      //stuff
    }

    return {
      pocketName,
      pocketIcon,
      pockets,
      deletePocket,
      pocketDescription,
      newPocket,
    };
  },

  {
    persist: {
      storage: localStorage,
      key: 'pocketStore',
    },
  }
);
