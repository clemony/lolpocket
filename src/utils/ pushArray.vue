<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { createDefaultSpell } from '@lib/functions/AddPocket';

const ps = usePocketStore();

      const  spells = [
           { spell1: createDefaultSpell()},
        {spell2: createDefaultSpell()},
        {alt1: createDefaultSpell()},
      {  alt2: createDefaultSpell()}
]
function updatePocketShards(pockets, spells) {
    pockets.forEach((pocket) => {

        pocket.push(spells)
        console.log(pocket);
        /* pocket.spells.forEach((runeSet) => {
            runeSet.runeSets.forEach((runeSetItem) => {
                runeSetItem.shards = shards;
            });
        }); */
    });
}

// Example usage




</script>
<template>
    <button @click="updatePocketShards(ps.pockets, spells)">update</button>
    </template>
<style scoped></style>