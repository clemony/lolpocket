<script setup lang="ts">
import { usePocketStore } from '../stores/pocketStore'

const ps = usePocketStore();

      const  spells = [

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