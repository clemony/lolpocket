import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useDataStore } from './dataStore';
import { generate, count } from 'random-words';
import type { Champion, Item } from './dataStore';
import { RuneSet, useRuneStore } from './runeStore';
import { ItemSet, useItemStore } from './itemStore';
import { useChampStore } from './champStore';
import { useRouter } from 'vue-router';
export interface pocketChampions {
  key: string;
  champions: Champion[];
}

export interface pocketItems {
  key: string;
  itemSets: ItemSet[];
  starred: ItemSet[];
}

export interface pocketRunes {
  key: string;
  runeSets: RuneSet[];
  starred: RuneSet[];
}

export interface pocket {
  name: string;
  type: string;
  pinned: boolean;
  key: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  champions: pocketChampions[];
  items: pocketItems[];
  runes: pocketRunes[];
  notes: string;
}

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const cs = useChampStore();
    const rs = useRuneStore();
    const is = useItemStore();
    const showSidebar = ref(true);
    const pockets = ref<pocket[]>([]);
    const selectedPockets = ref<string[]>([]);
    const trashPockets = ref<pocket[]>([]);
    const sizePinned = ref(30);
    const sizeNoCat = ref(70);
    const statePinned = ref(false);
    const stateNoCat = ref(false);

    const router = useRouter();

    function navigateToPocket(pocket) {
      console.log('Navigating to pocket:', pocket.key);
      console.log(router.getRoutes());

      router
        .push({
          name: 'pocket',
          params: {
            pocketKey: String(pocket.key), // Convert to string if it's a number
          },
        })
        .catch((err) => {
          console.error('Error navigating to pocket:', err);
        });
    }

    function word() {
      let key = '';
      while (key.length < 4 || key.length > 16) {
        key = generate({ exactly: 2, join: ' ' });
      }
      key = key.charAt(0).toUpperCase() + key.slice(1);
      return key;
    }

    function newPocket(name: string, type: string, icon: string, bgColor: string, iconColor: string) {
      const keyNum = pockets.value.length + 1;
      const newKey = word().replace(' ', '') + keyNum;

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
        name: name || word(),
        type: type || '',
        pinned: false,
        key: newKey,
        icon: icon || 'teenyicons:folder-outline',
        bgColor: bgColor || '#000',
        iconColor: iconColor || '#FFF',
        champions: [pocketChampionsValue],
        items: [pocketItemsValue],
        runes: [pocketRunesValue],
        notes: '',
      };

      // Now push the first item set as the default starred set if it exists
      if ((newPocket.items[0].itemSets.length = 0)) {
        newPocket.items[0].itemSets.length + 1;
        newPocket.items[0].starred.push(newPocket.items[0].itemSets[0]); // Push the first item set as starred
      }
      if ((newPocket.runes[0].runeSets.length = 0)) {
        newPocket.runes[0].runeSets.length + 1;
        newPocket.runes[0].starred.push(newPocket.runes[0].runeSets[0]); // Push the first item set as starred
      }
      cs.championsInPocket.splice(0);
      is.itemSets.splice(0);
      rs.runeSets.splice(0);

      pockets.value.push(newPocket);
    }

    function getPocket(key) {
      const findPocket = pockets.value.find((pocket: pocket) => pocket.key === key);
    }

    function deletePocket(key: string) {
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
      showSidebar,
      trashPockets,
      selectedPockets,
      sizeNoCat,
      sizePinned,
      stateNoCat,
      statePinned,
      navigateToPocket,
    };
  },

  {
    persist: {
      storage: localStorage,
      key: 'pocketStore',
    },
  }
);
