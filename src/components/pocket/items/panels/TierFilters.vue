<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useDataStore } from '@/stores/dataStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
=======
import { computed } from 'vue'
import { useItemStore } from '@/stores/itemStore'
import { useDataStore } from '@/stores/dataStore'

<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useDataStore } from '@/stores/dataStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
import { useDataStore } from '@/stores/dataStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
const ds = useDataStore()

const icons = [
    {
        index: 0,
        icon: ['teenyicons:circle-solid'],
    },
    {
        index: 1,
        icon: [''],
    },
]
</script>

<template>
    <div class="flex flex-col pt-1">
        <h5>Tier</h5>
        <ul class="pt-1 [&_label]:py-1.5">
            <li v-for="cat in ds.uniqueCats">
                <label
                    class="label pointer-events-auto cursor-pointer justify-start gap-4">
                    <input
                        type="checkbox"
                        :value="cat"
                        :id="cat"
                        v-model="ts.catFilters"
                        class="checkbox checkbox-sm rounded-xs opacity-80" />
                    <span class="text-2">{{ cat }}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
