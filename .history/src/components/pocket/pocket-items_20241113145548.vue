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
const sortAZ = ref(0)
const sortPrice = ref(0)
const isOpen = ref(false)
console.log(isOpen)

const search = ref()
const handleSearch = computed(() => {
    is.searchFilter = search.value // Update Pinia store's searchFilter
})

const likeText = computed(() => {
    if (is.lovedItems.length) {
        return 'Show loved items'
    }
    if (is.lovedItems.length) {
        return 'No loved items'
    }
})

const scrollArea = ref<HTMLElement | null>(null)

const { x, y, isScrolling, arrivedState, directions } = useScroll(scrollArea)
console.log(useScroll(scrollArea))

const { left, right, top, bottom } = toRefs(arrivedState)

const isTop = ref(top.value)

console.log(isTop.value)

watch(
    () => useScroll(scrollArea).arrivedState.top,
    (newVal) => {
        console.log(newVal)
        console.log(useScroll(scrollArea).arrivedState.top)
    }
)
</script>

<template>
    <Layout2 class="max-h-inhhert h-inherit" scroll :panel1Size="45">
        <template #panel1>
            <ScrollArea
                class="relative h-full max-h-full overflow-y-auto overflow-x-hidden">
                <LayoutSpacer />
                <InfoCard
                    cardClass="mb-2 bg-transparent border-none !shadow-none !px-0">
                    <template #header>
                        <h1>Item Sets</h1>
                    </template>
                    <template #description>
                        Drag items from the list at the right. Items are
                        draggable & reorderable within sets and between them.
                        Select
                        <Label class="relative inline-block h-4.5 w-5">
                            <img
                                src="/img/ui/check.png"
                                class="absolute top-px size-[14px] brightness-50" />
                        </Label>
                        a set and
                        <div class="relative inline-block h-4.5 w-14">
                            <Label
                                class="absolute -top-px flex w-14 items-center justify-center gap-1">
                                <span class="text-base">⌘</span>
                                +
                                <icon
                                    icon="ph:mouse-left-click-fill"
                                    class="size-4 shrink-0" />
                            </Label>
                        </div>
                        an item from the main list to quick add. Sets,
                        themselves, can be dragged into your preferred order.
                    </template>
                </InfoCard>
                <ItemSets :pocketKey="pocketKey" />
            </ScrollArea>
        </template>
        <template #panel2>
            <HeaderCard
                v-model:open="isOpen"
                @update:isOpen="(v) => (isOpen = v)"
                cardClass="inset-0 w-fit justify-self-end h-[calc(100%-135px)] max-h-[calc(100%-135px)] overflow-hidden pt-4 ml-6 mr-2 ">
                <template #header>
                    <div class="join">
                        <SearchBox
                            :search="is.searchFilter"
                            :placeholder="'Search Items...'"
                            @update:search="is.searchFilter = $event"
                            class="h-10 justify-self-start [&_input]:join-item [&_input]:!rounded-l-lg" />

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
                    <BooleanDisplay :value="top" />
                    <Grow />

                    <div class="join">
                        <ToggleStateButton
                            @click.stop
                            v-model:model="sortAZ"
                            icon1="qlementine-icons:sort-alpha-asc-16"
                            icon2="qlementine-icons:sort-alpha-desc-16"
                            @update:model="(v) => (is.sortAZ = v)" />
                        <ToggleStateButton
                            @click.stop
                            :model="sortPrice"
                            icon1="bi:sort-numeric-down"
                            icon2="bi:sort-numeric-up"
                            :iconSize="7"
                            @update:model="(v) => (is.sortPrice = v)" />

                        <FilterButton
                            class="join-item !rounded-l-none"
                            :class="{ 'bg-base-200': isOpen == true }">
                            hi
                        </FilterButton>
                    </div>

                    <!-- <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass" text="Class / Role"
                        v-model:dataValue="dataValue" /> -->
                </template>
                <template #description>
                    <FilterPanel />
                </template>

                <ScrollArea class="h-full max-h-full overflow-auto px-8 pb-0">
                    <div class="h-10 w-full" />

                    <ItemList :pocketKey="pocketKey" />
                </ScrollArea>
            </HeaderCard>
        </template>
    </Layout2>
</template>

<style scoped></style>
