<script setup lang="ts">
import { useItemStore } from '../../stores/itemStore'
import { usePocketStore } from '../../stores/pocketStore'
import {
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/base/resizable'

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey));

const is = useItemStore()


const search = ref()

const handleSearch = computed(() => {
    is.searchFilter = search.value // Update Pinia store's searchFilter
})



const likeText = computed(() => {
    if (is.lovedItems.length) {
        return 'Filter Likes'
    }
    if (is.lovedItems.length) {
        return 'No liked Items'
    }
})


</script>

<template>
<ResizablePanelGroup direction="horizontal" class=" h-[calc(100%-425px)] max-h-[calc(100%-30px)] w-full px-4  ">
    <ResizablePanel class="relative z-0 h-full">


        <div class="h-full overflow-y-scroll scrollbar-hide">
            <LayoutSpacer />
            <Card class='mb-8 bg-transparent'>
                <CardHeader>
                    <CardTitle>
                        Item Sets
                    </CardTitle>
                </CardHeader>
            </Card>
            <ItemSets :pocketKey="pocketKey" />
        </div>
    </ResizablePanel>

    <ResizeHandle class='!w-10 mr-3' with-handle />


    <ResizablePanel class=" max-h-inherit h-full" id="itemGrid">

        <LayoutSpacer />

        <Card :open="false" class='h-[calc(100%-115px)] max-h-[calc(100%-115px)] overflow-hidden'>

            <CardHeader>
                <SearchBox :search="is.searchFilter" :placeholder="'Search Items...'"
                    @update:search="is.searchFilter = $event" class='justify-self-start' />

                <span class="grow"></span>
                <div class=" flex h-6 w-full content-center justify-end gap-1.5 px-2">
                    <label alt="Filter Likes" :title="likeText"
                        class="tab swap swap-flip relative mr-2 px-2 *:absolute has-[:disabled]:cursor-default">
                        <input type="checkbox" v-model="is.viewLiked" class="hidden"
                            :disabled="is.lovedItems.length == 0" />

                        <icon v-if="is.lovedItems.length > 0" icon="teenyicons:heart-outline"
                            class="swap-off mb-1 size-4" />
                        <icon v-if="is.lovedItems.length > 0" icon="teenyicons:heart-solid"
                            class="swap-on mb-1 size-4 text-base-content/80" />
                        <icon v-else icon="fluent:heart-off-20-regular" class="mb-[4px] size-5 text-base-content/30" />
                    </label>
                </div>

                <icon icon="teenyicons:filter-outline" class="-mt-1.5 size-3.5 shrink-0" />

                <template #collapse>

                    <FilterPanel />

                </template>
            </CardHeader>


            <CardContent class='h-full max-h-full pr-0'>

                <ScrollArea class="overflow-auto h-full max-h-full pb-20">
                    <ItemList :pocketKey="pocketKey" />
                </ScrollArea>
            </CardContent>
        </Card>
    </ResizablePanel>
</ResizablePanelGroup>
</template>

<style scoped></style>
