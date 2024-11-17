import { defineStore } from 'pinia'
import { Rune, RuneSet } from '../../types'
import { useDataStore } from './dataStore'

export const useRuneStore = defineStore(
    'runeStore',
    () => {
        const ds = useDataStore()

        const runeSets = ref<RuneSet[]>([])

        const selectedRune = ref['']
        const selectedRuneSetIndex = ref(0)
        const starred = ref<RuneSet | null>(null)

        /* ----------------- Path  ------------------- */

        const uniquePaths1 = [...ds.uniquePaths]
        const uniquePaths2 = [...uniquePaths1]

        /* ------------------ update set  ------------------- */

        const selectedSpell = ref()
        return {
            runeSets,
            uniquePaths1,
            uniquePaths2,
            selectedRune,
            selectedRuneSetIndex,
            starred,
            selectedSpell,
        }
    },

    {
        persist: {
            storage: localStorage,
        },
    }
)
