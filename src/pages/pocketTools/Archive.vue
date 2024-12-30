<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePocketStore } from '@stores/pocketStore'
import { useDataStore } from '@stores/dataStore'
const ds = useDataStore()
const ps = usePocketStore()
console.log('💠 - ds.champions:', ds.champions)
</script>

<template>
    <LayoutSpacer />
    <div class="">
        <p v-for="i in 14" :style="{ fontSize: `var(--text-${i})` }">
            This is a font size text.
        </p>
    </div>
</template>

<style scoped></style>
