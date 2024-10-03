import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
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
      () => likedItems.value, // Watch the value of likedItems
      (newVal) => {
        // Check if likedItems is empty
        if (newVal.length === 0) {
          viewLiked.value = false; // Set viewLiked to false if array is empty
        }
      },
      { immediate: true } // Ensure it runs on initialization
    );

    function handleLike(thisItem) {
      // Use likedItems.value to access the underlying array
      if (likedItems.value.some((item) => item.name === thisItem.name)) {
        const index = likedItems.value.findIndex((item) => item.name === thisItem.name);
        if (index !== -1) {
          likedItems.value.splice(index, 1); // Access the value of likedItems
          toast('♥︎ ' + thisItem.name + ' disliked!');
        }
      } else {
        likedItems.value.push(thisItem); // Access the value of likedItems
        toast('♥︎ ' + thisItem.name + ' liked!');
      }
    }
    /* -------------------------------- BUILD -------------------------------- */

    function newSet() {
      const newKey = itemSets.value.length + 1;

      itemSets.value.push(
        reactive({
          key: newKey,
          name: 'Set ' + newKey,
          items: [], // Initialize items as an empty array of `Item`
          isDisabled: false, // Add isDisabled flag
          starred: false,
        })
      );
    }

    function deleteSet(key: number) {
      const index = itemSets.value.findIndex((set) => set.key === key);

      if (index !== -1) {
        itemSets.value.splice(index, 1); // Use the index and delete 1 item
      }
    }

    /* -------------------------------- ITEMS -------------------------------- */

    // Wrap the arrays in `ref` to make them reactive

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
