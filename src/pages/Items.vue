<script setup lang="ts">
import { useDataStore } from '@stores/oldDataStore'

const ds = useDataStore()

const items = ref(ds.items)

console.log('💠 - getItemData - ds.items:', ds.items)
</script>

<template>
    <Header>
        <h2>Items</h2>
    </Header>
    <LayoutSpacer />
    <main class="flex h-full max-h-full gap-12 px-12">
        <Card class="max-h-inherit h-[86%] w-3/4">
            <CardContent class="max-h-inherit h-full px-8 py-5">
                <ScrollArea class="max-h-inherit h-full overflow-y-scroll">
                    <ItemList
                        drag-disabled
                        class="max-h-inherit h-full gap-5" />
                </ScrollArea>
            </CardContent>
        </Card>

        <Card class="max-h-inherit h-[86%] w-1/4"></Card>
    </main>
</template>

<style scoped></style>
