<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
import { ResizablePanel } from '@components/base/resizable'

const ds = useDataStore()

const champions = ref(ds.champions)
</script>

<template>
    <PageLayout>
        <template #header>Champions</template>
        <LayoutSpacer />
        <main class="size-full px-12">
            <Card class="h-[calc(100%-9rem)]">
                <CardContent class="px-8 py-5">
                    <ScrollArea class="overflow-y-scroll">
                        <ChampionList drag-disabled class="gap-5" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </main>
    </PageLayout>
</template>

<style scoped></style>
