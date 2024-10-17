import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useDataStore } from './dataStore';
import { Item, ItemSet } from '@types';

import { generateRandomName } from '@script/keygen';
import { usePocketStore } from './pocketStore';
import { hexoid } from 'hexoid';

export const useItemStore = defineStore(
  'itemStore',
  () => {
    const ds = useDataStore();

    const selectedItem = ref();

    const items = ref([...ds.items]);

    const sortName = ref('');
    const sortPrice = ref('');
    const searchFilter = ref('');
    const catFilters = ref<string[]>([]);
    const statFilters = ref<string[]>([]);
    const viewLiked = ref(false);
    const likedItems = ref<Item[]>([]);
    const itemSets = ref<ItemSet[]>([]);
    const starred = ref<ItemSet | null>(null);

    watch(
      () => likedItems.value,
      (newVal) => {
        if (newVal.length === 0) {
          viewLiked.value = false; // Set viewLiked to false if array is empty
        }
      },
      { immediate: true } // Ensure it runs on initialization
    );

    function handleLike(thisItem) {
      if (likedItems.value.some((item) => item.name === thisItem.name)) {
        const index = likedItems.value.findIndex((item) => item.name === thisItem.name);
        if (index !== -1) {
          likedItems.value.splice(index, 1);
        }
      } else {
        likedItems.value.push(thisItem);
      }
    }

    function newSet(pocketKey, star?) {
      const ps = usePocketStore();
      const pocket = ps.getPocket(pocketKey);
      const starred = star ? true : false;
      if (pocket) {
        const toID = hexoid();
        const newSet = reactive({
          key: toID(),
          name: generateRandomName() + ' Set',
          items: [],
          isDisabled: false,
          starred: starred,
        });

        pocket.items[0].itemSets.push(newSet);
        if (starred == true) {
          pocket.items[0].starred.push(newSet);
        }
      }
    }

    function deleteSet(pocketKey, key: string) {
      const ps = usePocketStore();
      const pocket = ps.getPocket(pocketKey);
      if (pocket) {
        const index = pocket.items[0].itemSets.findIndex((set) => set.key === key);

        if (index !== -1) {
          pocket.items[0].itemSets.splice(index, 1); // Use the index and delete 1 item
        }
      }
    }

    /* -------------------------------- ITEMS -------------------------------- */

    // Wrap the arrays in `ref` to make them reactive

    function resetItems(key: string) {
      const set = itemSets.value.find((set) => set.key === key);

      if (set && Array.isArray(set.items)) {
        set.items.splice(0, set.items.length); // Reset the array
      }
    }

    function addToSet(pocket, itemSet, item) {
      const ps = usePocketStore();
      const thisPocket = ps.getPocket(pocket);
      const set = thisPocket?.items[0].itemSets.find((set) => set.key === itemSet);

      if (set && Array.isArray(set.items)) {
        set.items.push(item);
      }
    }

    function removeFromSet(pocket, itemSet, itemx) {
      const ps = usePocketStore();
      const thisPocket = ps.getPocket(pocket);
      const set = thisPocket?.items[0].itemSets.find((set) => set.key === itemSet);

      if (set) {
        const index = set.items.findIndex((item) => item === itemx);
        if (set && Array.isArray(set.items)) {
          set.items.splice(index);
        }
      }
    }

    // Method to reset the items array
    const resetItemsArray = () => {
      items.value = [...ds.items]; // Reset to the original data from dataStore
    };

    /* -------------------------------- RUNES  ------------------------------- */

    return {
      items,
      itemSets,
      newSet,
      deleteSet,
      resetItems,
      sortName,
      sortPrice,
      catFilters,
      statFilters,
      searchFilter,
      selectedItem,
      addToSet,
      removeFromSet,
      viewLiked,
      likedItems,
      handleLike,
      resetItemsArray,
      starred,
    };
  },

  {
    persist: {
      storage: localStorage,
      key: 'itemStore',
    },
  }
);
