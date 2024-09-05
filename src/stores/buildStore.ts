import { defineStore } from 'pinia';
import { ref } from 'vue'; // Import ref for reactivity

export const useBStore = defineStore(
  'bStore',
  () => {
    interface set {
      key: number;
      name: string;
      items: { setItems };
    }

    // Wrap the arrays in `ref` to make them reactive
    const buildItems = ref<string[]>([]);
    const buildChampions = ref<string[]>([]);
    const buildIcon = ref('teenyicons:folder-outline');
    const buildSets = ref<set[]>([]);
    const setItems = ref<string[]>([]);

    function newSet() {
      const newKey = buildSets.value.length + 1;

      if (newKey)
        buildSets.value.push({
          key: newKey,
          name: '',
          items: { setItems },
        });
    }

    return {
      buildItems,
      buildChampions,
      buildIcon,
      setItems,
      buildSets,
      newSet,
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
