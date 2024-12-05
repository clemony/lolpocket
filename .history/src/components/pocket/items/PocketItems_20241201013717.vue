<script setup lang="ts">
import { useItemStore } from '@/stores/itemStore'
import { usePocketStore } from '@/stores/pocketStore'
import { getPocket } from '@utils/pocketUtilities'
import { useScroll } from '@vueuse/core'

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(getPocket(props.pocketKey))

const is = useItemStore()
const sortAZ = ref(0)
const sortPrice = ref(0)
const isOpen = ref(false)

const search = ref()
const handleSearch = computed(() => {
    is.searchFilter = search.value // Update Pinia store's searchFilter
})

const likeText = computed(() => {
    if (is.favoriteItems.length) {
        return 'Show favorite items'
    }
    if (is.favoriteItems.length) {
        return 'No favorite items'
    }
})
</script>

<template>
    <Layout2
        class="max-h-inhhert h-inherit"
        scroll
        :panel1Min="14"
        :panel2Min="26">
        <template #panel1>
            <ScrollArea
                class="relative h-full max-h-full overflow-y-auto overflow-x-hidden"
                scrollbar-hide>
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
                cardClass="inset-0 w-fit justify-self-end h-[calc(100%-140px)] max-h-[calc(100%-140px)] overflow-hidden pt-4 ml-8 mr-2 "
                headerClass="-ml-px">
                <template #header>
                    <div class="join">
                        <SearchBox
                            @click.stop
                            :search="is.searchFilter"
                            :placeholder="'Search Items...'"
                            @update:search="is.searchFilter = $event"
                            iconClass="p-2.5 -ml-2"
                            inputClass="pr-6 pl-12 "
                            class="max-w-1/2 h-10 justify-self-start border-base-300 bg-base-100/40 [&_input]:join-item [&_input]:!rounded-l-lg" />

                        <Label
                            @click.stop
                            variant="outline"
                            size="icon"
                            class="join-item swap swap-flip relative aspect-square size-10 shrink-0 border-base-300 has-[:disabled]:cursor-default"
                            alt="Filter Likes">
                            <input
                                type="checkbox"
                                name="viewFavorite"
                                v-model="is.viewFavorite"
                                class="hidden"
                                :disabled="!is.favoriteItems.length" />

                            <HeartIcons />
                        </Label>
                    </div>

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
                </template>
                <template #description>
                    <FilterPanel />
                </template>

                <ItemList :pocket="pocket" />
            </HeaderCard>
        </template>
    </Layout2>
</template>

<style scoped></style>
