import { defineStore } from 'pinia';
import { ref } from 'vue'; // Import ref for reactivity

export const useBStore = defineStore(
  'bStore',
  () => {
    interface SetItems {
      items: string[];
    }

    interface BuildSet {
      key: number;
      name: string;
      items: SetItems;
    }

    // Wrap the arrays in `ref` to make them reactive
    const buildItems = ref<string[]>([]);
    const buildChampions = ref<string[]>([]);
    const buildIcon = ref('teenyicons:folder-outline');
    const buildSets = ref<BuildSet[]>([]);

    function newSet() {
      const newKey = buildSets.value.length + 1;

      buildSets.value.push({
        key: newKey,
        name: '',
        items: { items: [] }, // Ensure the array is initialized here
      });
    }

    function deleteSet(key) {
      if (key == 1) {
        toast("It's the only one!", {});
      }
    }

    function resetItems(set, event) {
      if (Array.isArray(set.items.items)) {
        set.items.items.splice(0, set.items.items.length); // Reset the array
      }
    }

    function onReorder(set, event) {
      // Apply reorder operation using Vue's reactivity system
      set.$event.apply(set.items.items);
    }

    function onInsert(set, event) {
      if (!Array.isArray(set.items.items)) {
        console.error('Items array is undefined or not an array for set:', set);
      } else {
        // Find if the item already exists in the array
        const existingItem = set.items.items.find((item) => item === event.data);

        console.log('Existing item:', existingItem);

        // If the item doesn't exist, insert it
        if (!existingItem) {
          set.items.items.splice(event.index, 0, event.data); // Insert at the specified index
          console.log('Inserted item at index:', event.index, 'data:', event.data);
        } else {
          toast('Item already exists in the set');
        }
      }
    }

    return {
      buildItems,
      buildChampions,
      buildIcon,
      buildSets,
      newSet,
      deleteSet,
      resetItems,
      onReorder,
      onInsert,
    };
  }

  /*  {
    persist: {
      storage: localStorage,
      key: 'buildTemplate',
      afterRestore: (ctx) => {
        console.log(`Just restored '${ctx.store.$id}'`);
      },
    },
  } */
);
