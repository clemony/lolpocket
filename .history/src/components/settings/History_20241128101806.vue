<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
</script>
<template>
    <div
        v-for="page in gs.routeHistory"
        class="history absolute size-3/4 overflow-hidden rounded-2xl bg-base-100/95 shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px,_2px_1px_1px_2px_rgba(221,_221,_221,_0.4),_0_2px_5px_rgba(204,_204,_204,_0.4)] animate-in animate-out zoom-out-[0.75] slide-in-from-bottom-1/3 slide-out-to-bottom-1/3 after:absolute after:z-50 after:size-full after:bg-black/20">
        <h1>{{ page }}</h1>
    </div>
</template>
<style scoped></style>
