<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const dataStore = useDataStore()
=======
const ds = useDataStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)

const items = ref(ds.items)
</script>

<template>
<<<<<<< HEAD
    <div class="grid-container">
        <div class="grid-item item" v-for="item in items">
            <div class="grid-image-container item">
                <img
                    v-if="item.type === 'item'"
                    :src="item.img"
                    :alt="item.name + ' Image'"
                    class="grid-image item" />
                <span class="grid-tip">{{ item.name }}</span>
            </div>
        </div>
    </div>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
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
>>>>>>> 404a531d (update 84 files and delete 4 files)
</template>

<style scoped></style>
