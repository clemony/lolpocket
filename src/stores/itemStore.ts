import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useDataStore } from './dataStore';
import type { Item } from './dataStore';

const ds = useDataStore();

export interface ItemSet {
  key: number;
  name: string;
  items: Item[];
}

export const useItemStore = defineStore(
  'itemStore',
  () => {
    const buildName = ref('');
    const buildIcon = ref('teenyicons:folder-outline');

    const selectedItem = ref();

    const items = [...ds.items];

    const sortName = ref('');
    const sortPrice = ref('');
    const searchFilter = ref('');
    const tierFilters = ref<string[]>([]);
    const statFilters = ref<string[]>([]);

    /* -------------------------------- BUILD -------------------------------- */

    // Reactive array of BuildSet
    const itemSets = ref<ItemSet[]>([]);

    function newSet() {
      const newKey = itemSets.value.length + 1;

      itemSets.value.push({
        key: newKey,
        name: 'Set ' + newKey,
        items: [], // Initialize items as an empty array of `Item`
      });
    }

    function deleteSet(key: number) {
      const index = itemSets.value.findIndex((set) => set.key === key);

      if (index !== -1) {
        itemSets.value.splice(index, 1); // Use the index and delete 1 item
      }
    }

    /* -------------------------------- ITEMS -------------------------------- */

    // Wrap the arrays in `ref` to make them reactive
    const buildItems = ref<Item[]>([]);

    function resetItems(key: number) {
      const set = itemSets.value.find((set) => set.key === key);

      if (set && Array.isArray(set.items)) {
        set.items.splice(0, set.items.length); // Reset the array
      }
    }

    function addToSet(item, key) {
      const set = itemSets.value.find((set) => set.key === key);

      if (set && Array.isArray(set.items)) {
        set.items.push(item);
      }
    }

    function removeFromSet(itemx, key) {
      const set = itemSets.value.find((set) => set.key === key);
      console.log('set: ', set);
      if (set) {
        const index = set.items.findIndex((item) => item === itemx);
        console.log('index: ', index);
        if (set && Array.isArray(set.items)) {
          set.items.splice(index);
        }
      }
    }

    /* -------------------------------- RUNES  ------------------------------- */

    return {
      buildName,
      items,
      buildItems,
      buildIcon,
      itemSets,
      newSet,
      deleteSet,
      resetItems,
      sortName,
      sortPrice,
      tierFilters,
      statFilters,
      searchFilter,
      selectedItem,
      addToSet,
      removeFromSet,
    };
  } /* ,

  {
    persist: {
      storage: localStorage,
      key: 'itemStore',
    },
  } */
);
