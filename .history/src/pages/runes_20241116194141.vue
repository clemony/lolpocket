<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const ds = useDataStore()
</script>
<template>
    <div class="flex size-full items-center justify-center gap-8">
        <button @click="updatePocketShards(ps.pockets, shards)">update</button>
        <template v-for="(pocket, index) in ps.pockets" :key="pocket.key">
            <PocketCard v-if="index == 4" :pocket="pocket" />
        </template>
    </div>
</template>
<style scoped></style>
