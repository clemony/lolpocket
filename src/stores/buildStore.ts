import { defineStore } from 'pinia';
import { ref } from 'vue'; // Import ref for reactivity
import type { Rune } from './dataStore';
import { useDataStore } from './dataStore';

const ds = useDataStore();

export const useBStore = defineStore(
  'bStore',
  () => {
    const getItems = JSON.parse(JSON.stringify(ds.items));
    const items = getItems.map((item) => ({
      ...item,
      count: 1, // or any logic to add count
    }));

    /* -------------------------------- FILTER ------------------------------- */

    const searchFilter = ref('');
    const tierFilters = ref<string[]>([]);
    const statFilters = ref<string[]>([]);

    const filteredItems = computed(() => {
      let filtered = items;

      // Apply search filter if any
      if (searchFilter.value) {
        const searchTerm = searchFilter.value.toLowerCase();
        filtered = filtered.filter((item) => Object.values(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)));
      }

      // Apply tier filters if any
      if (tierFilters.value.length) {
        filtered = filtered.filter((item) => tierFilters.value.some((filter) => item.tier?.toLowerCase().includes(filter.toLowerCase())));
      }

      // Apply stat filters if any
      if (statFilters.value.length) {
        filtered = filtered.filter(
          (item) =>
            item.stats && // Ensure stats is defined
            statFilters.value.some((filter) => item.stats.toLowerCase().includes(filter.toLowerCase()))
        );
      }

      // Return the filtered array
      return filtered;
    });

    /* ---------------------------------- SORT ------------------------------- */

    const sortNameActive = ref('on');
    const sortPriceActive = ref('off');
    const sortName = ref('az');
    const sortPrice = ref('ascending');

    const sortedFilteredItems = computed(() => {
      let sorted = [...filteredItems.value]; // Create a copy to avoid mutating original array

      // Sort by name if sortName is defined
      if (sortNameActive.value == 'on' && sortName.value) {
        if (sortName.value === 'az') {
          sorted = sorted.sort((a, b) => {
            if (a.name && b.name) {
              return a.name.localeCompare(b.name); // Compare by name alphabetically
            }
            return 0; // If either name is undefined, do nothing
          });
        } else if (sortName.value === 'za') {
          sorted = sorted.sort((a, b) => {
            if (a.name && b.name) {
              return b.name.localeCompare(a.name); // Compare in reverse alphabetical order
            }
            return 0; // If either name is undefined, do nothing
          });
        }
      }

      if (sortPriceActive.value == 'on' && sortPrice.value) {
        if (sortPrice.value === 'ascending') {
          sorted = sorted.sort((a, b) => a.buy - b.buy);
        } else if (sortPrice.value === 'descending') {
          sorted = sorted.sort((a, b) => b.buy - a.buy);
        }
      }

      return sorted;
    });

    /* -------------------------------- BUILD -------------------------------- */

    interface BuildSet {
      key: number;
      name: string;
      items: SetItems;
    }

    const buildSets = ref<BuildSet[]>([]);

    function newSet() {
      const newKey = buildSets.value.length + 1;

      buildSets.value.push({
        key: newKey,
        name: 'Set ' + newKey,
        items: { items: [] }, // Initialize with an empty array
      });
    }

    function deleteSet(key) {
      if (key == 1) {
        toast("It's the only one!", {});
      }
    }

    /* -------------------------------- ITEMS -------------------------------- */

    interface SetItem {
      item: string; // Original item data
      count: number; // Count property
    }

    interface SetItems {
      items: SetItem[]; // Array of objects with `item` and `count`
    }

    // Wrap the arrays in `ref` to make them reactive
    const buildItems = ref<string[]>([]);
    const buildChampions = ref<string[]>([]);
    const buildIcon = ref('teenyicons:folder-outline');

    function resetItems(set, event) {
      if (Array.isArray(set.items.items)) {
        set.items.items.splice(0, set.items.items.length); // Reset the array
      }
    }

    function onReorder(set, event) {
      // Apply reorder operation using Vue's reactivity system
      set.$event.apply(set.items.items);
    }

    /*   function onInsert(set, event) {
      if (!Array.isArray(set.items.items)) {
        console.error('Items array is undefined or not an array for set:', set);
      } else {
        const existingItem = set.items.items.find((item) => item === event.data);

        if (existingItem) {
          if ((event.data.name == 'Health Potion' && existingItem.count < 5) || (event.data.name == 'Control Ward' && existingItem.count < 2)) {
            existingItem.count += 1;
            console.log(existingItem.count);
          } else {
            toast('Set includes max amount of ' + existingItem.name + 's.');
          }
          return;
        }
        if (!existingItem) {
          set.items.items.splice(event.index, 0, event.data);
        } else {
          toast('Item already exists in set');
        }
      }
    } */

    /* -------------------------------- RUNES  ------------------------------- */

    return {
      items,
      filteredItems,
      sortedFilteredItems,
      buildItems,
      buildChampions,
      buildIcon,
      buildSets,
      newSet,
      deleteSet,
      resetItems,
      onReorder,
      //onInsert,
      searchFilter,
      tierFilters,
      statFilters,

      sortNameActive,
      sortPriceActive,
      sortName,
      sortPrice,
    };
  },

  {
    persist: {
      storage: sessionStorage,
      key: 'buildTemplate',
    },
  }
);
