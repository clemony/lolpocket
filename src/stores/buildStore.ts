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
        items: { items: [] }, // Create a new `items` array for each set
      });
    }

    function deleteSet(key) {
      if (key == 1) {
        toast("It's the only one!", {});
      }
    }

    return {
      buildItems,
      buildChampions,
      buildIcon,
      buildSets,
      newSet,
      deleteSet,
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
