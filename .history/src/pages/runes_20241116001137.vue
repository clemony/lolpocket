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
            <InfoCard
                v-if="index == 1"
                :key="pocket.key"
                class="h-[600px] w-[500px]"
                :class="`bg-[url(\'/img/champions/splash/${clean(pocket.champions[0].starred)}\')]`"
                cardClass="bg-gradient-to-b from-transparent to=base-100">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>Card Content</CardContent>
                <CardFooter>Card Footer</CardFooter>
            </InfoCard>
        </template>
    </div>
</template>
<style scoped></style>
