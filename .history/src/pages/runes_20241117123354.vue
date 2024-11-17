<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
import { usePocketStore } from '@stores/pocketStore'
import {
    createDefaultShard,
    createDefaultSpell,
} from '@lib/functions/AddPocket'

const ps = usePocketStore()
const ds = useDataStore()

const spells = [
    { spell1: createDefaultSpell() },
    { spell2: createDefaultSpell() },
    { alt1: createDefaultSpell() },
    { alt2: createDefaultSpell() },
]

const returnedTarget =
console.log(returnedTarget)
function updatePocketShards(pockets, spells) {
   let new Array = pockets.forEach((pocket) => {
Object.assign(pocket, spells)
        /* pocket.spells.forEach((runeSet) => {
            runeSet.runeSets.forEach((runeSetItem) => {
                runeSetItem.shards = shards;
            });
        }); */
    })
}
</script>
<template>
    <SpellPicker />
    <div class="flex size-full items-center justify-center gap-8">
        <button @click="updatePocketShards(ps.pockets, spells)">update</button>
        <template v-for="(pocket, index) in ps.pockets" :key="pocket.key">
            <PocketCard v-if="index == 4" :pocket="pocket" />
        </template>
    </div>
</template>
<style scoped></style>
