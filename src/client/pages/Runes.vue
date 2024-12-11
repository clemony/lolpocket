<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/client/stores/dataStore'
import { useRuneStore } from '@/client/stores/runeStore'
import { usePocketStore } from '@/client/stores/pocketStore'
import {
    createDefaultShard,
    createDefaultSpell,
} from '@/client/utils/addPocket'

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
