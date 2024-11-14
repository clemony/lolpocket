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

const dataValue = ''
const loveButt = ref(is.lovedItems)

const likeText = computed(() => {
    if (is.lovedItems.length) {
        return 'Show loved items'
    }
    if (is.lovedItems.length) {
        return 'No loved items'
    }
})


</script>

<template>
<ResizablePanelGroup direction="horizontal" class=" h-[calc(100%-425px)] max-h-[calc(100%-30px)] w-full px-4  ">
    <ResizablePanel class="relative z-0 h-full">


        <div class="h-full overflow-y-scroll scrollbar-hide">
            <LayoutSpacer />
            <InfoCard cardClass='mb-8 bg-transparent border-none shadow-none'>
                <template #header>
                    <h1>Item Sets</h1>
                </template>
                <template #description>
                    Drag items from the list at the right. Items are draggable & reorderable within sets and
                    between them. Select a set and <Label class='inline-flex items-center gap-1'><span
                            class='text-base'>⌘</span> +
                        <icon icon="ph:mouse-left-click-fill" />
                    </Label> an item from the main list to quick add.
                </template>
            </InfoCard>
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

                <Grow />
                <div class='join mr-1'>
                    <Label variant="outline" size="icon"
                        class='join-item swap swap-flip relative  has-[:disabled]:cursor-default has-[:checked]:!bg-base-200'
                        alt="Filter Likes">


                        <input type="checkbox" name="viewLoved" v-model="is.viewLoved" class="hidden"
                            :disabled="!is.lovedItems.length" />
                        <HeartIcons />

                    </Label>
                </div>

                <!--         <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass" text="Class / Role"
                        v-model:dataValue="dataValue" /> -->



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
