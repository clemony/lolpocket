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

const pocket = ref(ps.getPocket(props.pocketKey))

const is = useItemStore()
const sortAZ = ref(is.sortAZ)

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
                <InfoCard
                    cardClass="mb-8 bg-transparent border-none !shadow-none !px-0">
                    <template #header>
                        <h1>Item Sets</h1>
                    </template>
                    <template #description>
                        Drag items from the list at the right. Items are
                        draggable & reorderable within sets and between them.
                        Select a set and
                        <Label class="inline-flex items-center gap-1">
                            <span class="text-base">⌘</span>
                            +
                            <icon icon="ph:mouse-left-click-fill" />
                        </Label>
                        an item from the main list to quick add.
                    </template>
                </InfoCard>
                <ItemSets :pocketKey="pocketKey" />
            </div>
        </template>
        <template #panel2>
            <Card
                :open="false"
                class="h-[calc(100%-115px)] max-h-[calc(100%-115px)] overflow-hidden pt-4">
                <CardHeader>
                    <div class="join">
                        <SearchBox
                            :search="is.searchFilter"
                            :placeholder="'Search Items...'"
                            @update:search="is.searchFilter = $event"
                            class="justify-self-start [&_input]:join-item [&_input]:!rounded-l-lg" />

                        <Label
                            variant="outline"
                            size="icon"
                            class="join-item swap swap-flip relative has-[:disabled]:cursor-default has-[:checked]:!bg-base-200"
                            alt="Filter Likes">
                            <input
                                type="checkbox"
                                name="viewLoved"
                                v-model="is.viewLoved"
                                class="hidden"
                                :disabled="!is.lovedItems.length" />
                            <HeartIcons />
                        </Label>
                    </div>

                    <Grow />

                    <div class="join">
                        <Button
                            :variant="is.sortAZ ? 'neutral' : 'outline'"
                            size="icon"
                            class="join-item relative [&_input]:hidden"
                            @click="
                                is.sortAZ++,
                                    is.sortAZ == 3 ? (is.sortAZ = 0) : ''
                            "
                            :class="{ '': is.sortAZ }">
                            <icon
                                v-if="is.sortAZ == 2"
                                icon="qlementine-icons:sort-alpha-desc-16"
                                class="absolute size-6" />
                            <icon
                                v-else
                                icon="qlementine-icons:sort-alpha-asc-16"
                                class="absolute size-6"
                                :class="{ 'opacity-60': !is.sortAZ }" />

                            <input
                                type="radio"
                                v-model="is.sortAZ"
                                value="0"
                                state="off" />
                            <input
                                type="radio"
                                v-model="is.sortAZ"
                                value="1"
                                state="AZ" />
                            <input
                                type="radio"
                                v-model="is.sortAZ"
                                value="2"
                                state="ZA" />
                        </Button>

                        <ToggleStateButton
                            :data="sortAZ"
                            icon1="hugeicons:sorting-19" />
                        <ToggleStateButton
                            :data="is.sortPrice"
                            icon1="hugeicons:sorting-19" />
                        <icon icon="hugeicons:sorting-19" class="size-7" />

                        <FilterButtons class="join-item !rounded-l-none">
                            hi
                        </FilterButtons>
                    </div>

                    <!--         <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass" text="Class / Role"
                        v-model:dataValue="dataValue" /> -->

                    <template #collapse>
                        <FilterPanel />
                    </template>
                </CardHeader>

                <CardContent class="h-full max-h-full pr-0">
                    <ScrollArea
                        class="h-full max-h-full overflow-auto pb-10 pl-5">
                        <ItemList :pocketKey="pocketKey" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </template>
    </Layout2>
</template>

<style scoped></style>
