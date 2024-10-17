import { defineStore } from 'pinia';
import { ref, reactive, watch, computed } from 'vue';
import { Rune, RuneSet } from './../../types';
import { getKey, generateRandomName } from '@script/keygen';
import { usePocketStore } from './pocketStore';
import { useDataStore } from '@stores/dataStore';
import { hexoid } from 'hexoid';

export const useRuneStore = defineStore(
  'runeStore',
  () => {
    const ps = usePocketStore();
    const ds = useDataStore();

    const runeSets = ref<RuneSet[]>([]);

    const shardModels = ref<Record<string, any>>({});

    const selectedRune = ref[''];

    const starred = ref<RuneSet | null>(null);

    function createDefaultRune(): {
      name: string;
      wiki: string;
      tier: number;
      type: string;
      img: string;
      stats: string;
      path: string;
    } {
      return {
        name: 'none',
        wiki: '',
        tier: 0,
        type: '',
        img: '/img/runes/blankRune.webp',
        stats: '',
        path: 'none',
      };
    }

    function newRuneSet(key) {
      const pocket = ps.getPocket(key);
      if (!pocket) return;
      const toID = hexoid();
      const newSet = {
        key: toID(),
        name: generateRandomName() + ' Set',
        primary: 'none',
        keystone: createDefaultRune(),
        p1: createDefaultRune(),
        p2: createDefaultRune(),
        p3: createDefaultRune(),
        s1: createDefaultRune(),
        s2: createDefaultRune(),
        secondary: 'none',
        shards: [],
      };

      pocket.runes[0].runeSets.push(newSet);
      /*   if (pocket.runes[0].runeSets.length <= 1) {
        pocket.runes[0].starred.push(newSet);
        pocket.runes[0].selected.push(newSet);
      }
 */
      //selectedSet.value = newSet;
    }

    /* ----------------- Path  ------------------- */

    const uniquePaths1 = [...ds.uniquePaths];
    const uniquePaths2 = [...uniquePaths1];

    /* ------------------ update set  ------------------- */

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
      selectedRune,
      starred,
      deleteSet,
      resetRunes,
      shardModels,
    };
  },

  {
    persist: {
      storage: localStorage,
    },
  }
);
