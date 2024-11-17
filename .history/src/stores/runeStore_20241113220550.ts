import { defineStore } from 'pinia'
import { ref, reactive, watch, computed } from 'vue'
import { Rune, RuneSet } from '../../types'
import { getKey, generateRandomName } from '../lib/functions/Keygen'
import { usePocketStore } from './pocketStore'
import { useDataStore } from './dataStore'
import { hexoid } from 'hexoid'
import { createDefaultRune } from '@lib/functions/CreateDefault'

export const useRuneStore = defineStore(
    'runeStore',
    () => {
        const ps = usePocketStore()
        const ds = useDataStore()

        const runeSets = ref<RuneSet[]>([])

        const shardModels = ref<Record<string, any>>({})

        const selectedRune = ref['']

        const starred = ref<RuneSet | null>(null)

        function newRuneSet(key?) {
            const toID = hexoid()
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
            }
            if (key) {
                const pocket = ps.getPocket(key)
                pocket.runes[0].runeSets.push(newSet)
            } else {
                return newSet
            }
        }

        /* ----------------- Path  ------------------- */

        const uniquePaths1 = [...ds.uniquePaths]
        const uniquePaths2 = [...uniquePaths1]

        /* ------------------ update set  ------------------- */

        function deleteSet(key) {
            const index = runeSets.value.findIndex((set) => set.key == key)
            runeSets.value.splice(index, 1)
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
        }
    },

    {
        persist: {
            storage: localStorage,
        },
    }
)
