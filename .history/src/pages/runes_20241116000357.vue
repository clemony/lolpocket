<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
import { usePocketStore } from '@stores/pocketStore'
import { clean } from '@lib/utils'
const ps = usePocketStore()
const ds = useDataStore()
</script>
<template>
    <div class="flex size-full items-center justify-center gap-8 *:size-6">
        <Card
            v-for="(pocket, index) in ps.pockets"
            :key="pocket.key[0]"
            class="w-[500px]"
            :class="`bg-[url(\'/img/champions/splash/${clean(pocket.champions[0].starred)}\')]`">
            hi
        </Card>
    </div>
</template>
<style scoped></style>
