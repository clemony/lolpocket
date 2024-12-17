<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useTempStore } from '@/stores/tempStore'
=======
import { useRuneStore } from '@/stores/runeStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useTempStore } from '@/stores/tempStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useTempStore } from '@/stores/tempStore'
=======
import { useRuneStore } from '@/stores/runeStore'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
import { useTempStore } from '@/stores/tempStore'
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { usePocketStore } from '@/stores/pocketStore'
import { createDefaultShard, createDefaultSpell } from '@/utils/addPocket'

const ps = usePocketStore()
const ds = useDataStore()

console.log(ps.pockets)
</script>
<template>
    <div class="flex size-full items-center justify-center gap-8">
        <template v-for="(pocket, index) in ps.pockets" :key="pocket.key">
            <!-- <PocketCard v-if="index == 7" :pocket="pocket" /> -->
            <Stack />
            <!--   <Spells v-if="index == 0" :pocket="pocket" /> -->
        </template>
    </div>
</template>
<style scoped></style>
