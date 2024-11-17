<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
const ps = usePocketStore();

function set() {
    ps.pockets.forEach(pocket => {
        const isFullWidthRow = false;
        //(pocket.items[0].start ??= []).push(null);
        console.log('done', ps.pockets)
    });
}

 function fix() {
            // Add `fullWidth` to each pocket if it doesn’t exist
            ps.pockets = ps.pockets.map((pocket) => ({
                ...pocket,
                fullWidth:
                    pocket.fullWidth !== undefined ? pocket.fullWidth : false,
            }))
        }
</script>

<template><button @click="set">
    <h1>set ogiglif</h1>
</button></template>

<style scoped></style>