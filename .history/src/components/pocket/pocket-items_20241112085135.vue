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
const sortAZ = ref(0)

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
<Layout2>
    <template #panel1>

        <div class="h-full overflow-y-scroll scrollbar-hide">

            <InfoCard cardClass='mb-8 bg-transparent border-none !shadow-none !px-0'>
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

    </template>
    <template #panel2>




        <Card :open="false" class='h-[calc(100%-115px)] max-h-[calc(100%-115px)] overflow-hidden pt-4'>

            <CardHeader>


                <div class="join">
                    <SearchBox :search="is.searchFilter" :placeholder="'Search Items...'"
                        @update:search="is.searchFilter = $event"
                        class='justify-self-start [&_input]:join-item [&_input]:!rounded-l-lg' />

                    <Label variant="outline" size="icon"
                        class='join-item swap swap-flip relative  has-[:disabled]:cursor-default has-[:checked]:!bg-base-200'
                        alt="Filter Likes">


                        <input type="checkbox" name="viewLoved" v-model="is.viewLoved" class="hidden"
                            :disabled="!is.lovedItems.length" />
                        <HeartIcons />

                    </Label>
                </div>

                <Grow />
                <Button variant="outline" size="icon" class='[&_input]:hidden relative'
                    @click="sortAZ++; sortAZ == 3 ? sortAZ = 0 : ''"
                    :class="{ 'ring-1 ring-base-200 ring-offset-1': sortAZ }">

                    <icon v-if="sortAZ == 2" icon="icon-park-outline:alphabetical-sorting-two"
                        class='size-6 absolute opacity-80' />
                    <icon v-else icon="icon-park-outline:alphabetical-sorting" class='size-6 absolute' />

                    <input type="radio" v-model="sortAZ" value="0" state="off" />
                    <input type="radio" v-model="sortAZ" value="1" state="AZ" />
                    <input type="radio" v-model="sortAZ" value="2" state="ZA" />
                </Button>

                <div class="join">

                    <FilterButtons class="!rounded-l-none join-item">
                        hi
                    </FilterButtons>
                </div>

                <!--         <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass" text="Class / Role"
                        v-model:dataValue="dataValue" /> -->



                <template #collapse>

                    <FilterPanel />

                </template>
            </CardHeader>


            <CardContent class='h-full max-h-full pr-0'>

                <ScrollArea class="overflow-auto h-full max-h-full pb-10 pl-5">
                    <ItemList :pocketKey="pocketKey" />
                </ScrollArea>
            </CardContent>
        </Card>
    </template>
</Layout2>
</template>

<style scoped></style>
