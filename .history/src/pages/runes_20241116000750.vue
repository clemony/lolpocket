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
        <template v-for="(pocket, index) in ps.pockets">
            <Card
                v-if="index == 1"
                :key="pocket.key"
                class="w-[500px]"
                :class="`bg-[url(\'/img/champions/splash/${clean(pocket.champions[0].starred)}\')]`">
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
            </Card>
        </template>
    </div>
</template>
<style scoped></style>
