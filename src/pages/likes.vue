<route lang="json">
{
    "name": "Champions",
    "alias": "/champions/champions",
    "meta": {
        "title": "Champions",
        "icon": "teenyicons:ghost-outline"
    }
}
</route>

<script setup lang="ts">
import { useItemStore } from '../stores/itemStore'
import { ref, computed, onMounted } from 'vue'
import { useChampStore } from '../stores/champStore'

const is = useItemStore()
const cs = useChampStore()

const filteredItems = ref('')
const returnData = ref('')
const quickSearch = ref('')

const selectedChampion = computed(() => cs.selectedChampion)

onMounted(async () => {})
</script>

<template>
    <!-- Champ Tab -->

    <div class="h-full w-full *:scrollbar-hide">
        <div class="flex items-end w-full p-4">
            <div class="flex items-center grow">
                <h2 class="text-xl font-bold p-1.5">Things you Like</h2>
            </div>
        </div>

        <Splitpanes
            id="likeSplit"
            class="default-theme px-6 pb-2 w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
            <Pane
                size="50"
                max-size="70"
                min-size="30"
                class="rounded-box !bg-base-100/90 border border-base-300 shadow-warm relative h-full px-4">
                <div
                    class="border-b-base-300 border-b backdrop-blur-md absolute z-10 top-0 left-0 bg-base-100/90 items-center flex w-full justify-end gap-4 !h-fit flex-wrap py-1 px-4">
                    <h2 class="justify-start sub-text grow">Champions</h2>
                </div>

                <div
                    class="flex flex-wrap w-full h-full max-h-full gap-4 p-2 overflow-y-scroll scroll-none pt-11">
                    <div
                        v-for="(champion, index) in cs.likedChamps"
                        :key="champion.name"
                        :data-index="index"
                        class="">
                        <button
                            class="item-wrapper__item min-w-[60px] rounded-md basis-14 max-w-[70px] grow aspect-square flex place-items-center overflow-hidden bg-cover ring-1 ring-offset-1 ring-base-300 ring-offset-base-100 hover:ring-offset-primary drop-shadow-sm has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-secondary pointer-events-auto">
                            <div class="grid-image-container champ">
                                <img
                                    v-if="champion.type === 'champion'"
                                    :src="champion.img"
                                    :alt="champion.name + ' Image'"
                                    class="scale-[115%] aspect-square" />
                                <div class="grid-tip">{{ champion.name }}</div>
                            </div>
                        </button>
                    </div>
                </div>
            </Pane>

            <!--     /* -------------------------------------------------------------------------- */
         /*                                 PANE TWOOOOOOOO                            */
         /* -------------------------------------------------------------------------- */ -->

            <Pane
                size="50"
                max-size="70"
                min-size="30"
                class="rounded-box border border-base-300 relative h-[inherit]">
                <div
                    class="border-b-base-300 border-b backdrop-blur-md absolute z-10 top-0 left-0 bg-base-100/80 items-center flex w-full justify-end gap-4 !h-fit flex-wrap py-1 px-4 shadow-warm">
                    <h2 class="justify-start sub-text grow">Primary</h2>
                </div>

                <div
                    class="items-start content-start justify-around w-full !h-full px-3 pt-12 pb-4 drag-draggable scrollbar-hide shadow-inset rounded-b-box">
                    <VDropdown
                        v-for="item in is.likedItems"
                        :key="item.id"
                        :overflow-padding="20"
                        :shift="true"
                        theme="detail"
                        :distance="6"
                        @click.right.prevent=""
                        :ref="item.name"
                        class="relative max-w-[64px] max-h-[64px]">
                        <label class="!overflow-hidden drag-label">
                            <div class="!overflow-hidden drag-wrapper">
                                <img :src="item.img" class="drag-img" />

                                <div
                                    :key="item.id + 'Count'"
                                    :class="{ '!opacity-85': item.count > 1 }"
                                    class="absolute rounded-full bg-primary text-primary-content z-30 -right-1.5 -top-1.5 size-6 flex place-items-center place-content-center font-mono opacity-0 text-sm shadow-warm overflow-hidden">
                                    {{ item.count }}
                                </div>
                            </div>
                        </label>
                        <template #popper :key="item.name + 'Pop'">
                            <popItem :item="item" :variant="'none'" />
                        </template>
                    </VDropdown>

                    <VDropdown
                        theme="detail"
                        alt="Quick Search"
                        class="ghosty drag-label flex basis-16 !p-0 group/qs after:grid after:place-content-center after:w-full after:h-full after:content-['+'] after:absolute relative hover:after:text-neutral z-0 hover:after:opacity-60 after:opacity-50 cursor-zoom-out">
                        <div
                            class="group-hover/qs:opacity-40 group-hover/qs:scale-95 scale-105 z-20 opacity-0 select-none bg-[url('/img/ui/frame.webp')] bg-center bg-contain transition-all bg-no-repeat duration-200 w-full h-full brightness-0 cursor-zoom-in"></div>

                        <template #popper>
                            <QuickSearch
                                :array="filteredItems"
                                v-model:quickSearch="quickSearch"
                                v-model:returnData="returnData" />
                        </template>
                    </VDropdown>
                    <div class="aspect-square basis-16"></div>
                    <div class="aspect-square basis-16"></div>
                    <div class="aspect-square basis-16"></div>
                    <div class="aspect-square basis-16"></div>
                    <div class="aspect-square basis-16"></div>
                </div>
            </Pane>
        </Splitpanes>
    </div>
</template>

<style scoped></style>
