<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();

function set() {
    ps.pockets.forEach(pocket => {
        const start = null;
        (pocket.items[0].start ??= []).push(null);
        console.log('done', ps.pockets)
    });
}
</script>

<template><button @click="set">
    <h1>set ogiglif</h1>
</button></template>

<style scoped></style>