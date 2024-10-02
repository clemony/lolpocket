import { defineStore } from 'pinia';
import { ref, reactive, watch, computed } from 'vue'; // Import ref for reactivity
import type { Rune } from './dataStore';
import { useDataStore } from './dataStore';

const ds = useDataStore();

export interface RuneSet {
  key: number;
  name: string;
  primary: string;
  secondary: string;
  runes: string[]; // Array to store rune values
  shards: string[];
}

export const useRuneStore = defineStore(
  'runeStore',
  () => {
    const runes = JSON.parse(JSON.stringify(ds.runes));

    const runeSets = ref<RuneSet[]>([]);
    const selectedSetKey = ref<number>(1); // Default set key

    const runeModels = ref<Record<string, any>>({});
    const shardModels = ref<Record<string, any>>({});

    const selectedRune = ref[''];

    const defaultSet = ref<number>(0);

    function radioSelectRuneSet(setKey: number) {
      selectedSetKey.value = setKey;
      if (currentSet.value) {
        selectedPaths.value.pathselect1 = currentSet.value.primary || 'none';
        selectedPaths.value.pathselect2 = currentSet.value.secondary || 'none';
      }
    }

    // Function to create a new rune set and initialize runeModels for it
    const newRuneSet = () => {
      const newKey = runeSets.value.length + 1;

      // Add the new rune set
      runeSets.value.push({
        key: newKey,
        name: 'Set ' + newKey,
        primary: 'none',
        secondary: 'none',
        runes: [], // Initialize rune array for this set
        shards: [],
      });

      selectedPaths.value.pathselect1 = 'none';
      selectedPaths.value.pathselect2 = 'none';
      selectedSetKey.value = newKey;
    };

    /* -------------------------------- Path  ------------------------------- */

    const uniquePaths1 = JSON.parse(JSON.stringify(ds.uniquePaths));
    const uniquePaths2 = [...uniquePaths1];

    const selectedPaths = ref({
      pathselect1: 'none',
      pathselect2: 'none',
    });

    function setPath(selectIdentifier: string, path: string) {
      //console.log('selected paths: ', selectedPaths.value);

      if (selectedPaths.value[selectIdentifier] !== undefined) {
        // Update the selected path for the given identifier
        selectedPaths.value[selectIdentifier] = path;

        // If pathselect1 and pathselect2 match, reset pathselect2 to 'none'
        if (selectIdentifier === 'pathselect1' && selectedPaths.value.pathselect1 === selectedPaths.value.pathselect2) {
          selectedPaths.value.pathselect2 = 'none';
        }

        // Force reactivity update
        selectedPaths.value = { ...selectedPaths.value };

        // Call any additional update logic
        updatePaths();
        //console.log(pathModels);
      }
    }

    /* ----------------------------- update set  ---------------------------- */

    // Computed value to get the current set based on the selected set key
    const currentSet = computed(() => {
      return runeSets.value.find((runeSet) => runeSet.key === selectedSetKey.value);
    });

    // Function to push rune values from runeModels to the currentSet
    function updateCurrentSetRunes() {
      if (!currentSet.value) return;
      const runesToUpdate = runeModels.value;

      // Update the runes property in the current set
      currentSet.value.runes = Object.values(runesToUpdate);
    }

    function updatePaths() {
      if (!currentSet.value) return;
      currentSet.value.primary = selectedPaths.value.pathselect1;
      currentSet.value.secondary = selectedPaths.value.pathselect2;
    }

    function updateShards() {
      if (!currentSet.value) return;
      const shardsToUpdate = shardModels.value;

      // Update the runes property in the current set
      currentSet.value.shards = Object.values(shardsToUpdate);
    }

    function deleteSet(key) {
      const index = runeSets.value.findIndex((set) => set.key == key);
      runeSets.value.splice(index, 1);
    }
    function resetRunes() {}

    return {
      newRuneSet,
      runeSets,
      uniquePaths1,
      uniquePaths2,
      selectedPaths,
      setPath,
      selectedRune,
      updatePaths,
      selectedSetKey,
      radioSelectRuneSet,
      defaultSet,
      deleteSet,
      resetRunes,
      runeModels,
      updateCurrentSetRunes,
      currentSet,
      shardModels,
      updateShards,
    };
  },

  {
    persist: {
      storage: localStorage,
    },
  }
);
