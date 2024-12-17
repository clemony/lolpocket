<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'

const ds = useDataStore()

const items = ref(ds.items)
</script>

<template>
    <PageLayout>
        <template #header>Items</template>
        <LayoutSpacer />
        <main class="px-12">
            <Card>
                <CardContent class="px-8 py-5">
                    <ScrollArea class="overflow-y-scroll">
                        <ItemList drag-disabled class="gap-5" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </main>
    </PageLayout>
</template>

<style scoped></style>
