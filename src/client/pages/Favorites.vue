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

    <div class="*:scrollbar-hide h-full w-full">
        <div class="flex w-full items-end p-4">
            <div class="flex grow items-center">
                <h2 class="text-5 p-1.5 font-bold">Favorites</h2>
            </div>
        </div>

        <div
            class="border-b-b3 bg-b1/90 absolute top-0 left-0 z-10 flex h-fit! w-full flex-wrap items-center justify-end gap-4 border-b px-4 py-1 backdrop-blur-md">
            <h2 class="sub-text grow justify-start">Champions</h2>
        </div>

        <div
            class="scroll-none flex h-full max-h-full w-full flex-wrap gap-4 overflow-y-scroll p-2 pt-11">
            <div
                v-for="(champion, index) in cs.favoriteChamps"
                :key="champion.name"
                :data-index="index"
                class="">
                <button
                    class="item-wrapper__item ring-b3 ring-offset-b1 hover:ring-offset-primary has-checked:ring-offset-secondary pointer-events-auto flex aspect-square max-w-[70px] min-w-[60px] grow basis-14 place-items-center overflow-hidden rounded-md bg-cover ring-1 ring-offset-1 drop-shadow-sm has-checked:ring-offset-2">
                    <div class="grid-image-container champ">
                        <img
                            v-if="champion.type === 'champion'"
                            :src="champion.img"
                            :alt="champion.name + ' Image'"
                            class="aspect-square scale-[115%]" />
                        <div class="grid-tip">{{ champion.name }}</div>
                    </div>
                </button>
            </div>
        </div>

        <div
            class="border-b-b3 bg-b1/80 shadow-warm absolute top-0 left-0 z-10 flex h-fit! w-full flex-wrap items-center justify-end gap-4 border-b px-4 py-1 backdrop-blur-md">
            <h2 class="sub-text grow justify-start">Primary</h2>
        </div>

        <div
            class="drag-draggable shadow-inset scrollbar-hide h-full! w-full content-start items-start justify-around rounded-b-xl px-3 pt-12 pb-4">
            <VDropdown
                v-for="item in is.favoriteItems"
                :key="item.id"
                :overflow-padding="20"
                :shift="true"
                theme="default"
                :distance="6"
                @click.right.prevent=""
                :ref="item.name"
                class="relative max-h-[64px] max-w-[64px]">
                <label class="drag-label overflow-hidden!">
                    <div class="drag-wrapper overflow-hidden!">
                        <img :src="item.img" class="drag-img" />

                        <div
                            :key="item.id + 'Count'"
                            :class="{ 'opacity-85!': item.count > 1 }"
                            class="bg-primary text-2 text-primary-content shadow-warm absolute -top-1.5 -right-1.5 z-30 flex size-6 place-content-center place-items-center overflow-hidden rounded-full font-mono opacity-0">
                            {{ item.count }}
                        </div>
                    </div>
                </label>
                <template #popper :key="item.name + 'Pop'">
                    <ItemPop :item="item" :variant="'empty'" />
                </template>
            </VDropdown>

            <VDropdown
                theme="default"
                alt="Quick Search"
                class="ghosty drag-label group/qs hover:after:text-bccent relative z-0 flex basis-16 cursor-zoom-out p-0! after:absolute after:grid after:h-full after:w-full after:place-content-center after:opacity-50 after:content-['+'] hover:after:opacity-60">
                <div
                    class="z-20 h-full w-full scale-105 cursor-zoom-in bg-[url('/img/UI/frame.webp')] bg-contain bg-center bg-no-repeat opacity-0 brightness-0 transition-all duration-200 select-none group-hover/qs:scale-95 group-hover/qs:opacity-40"></div>

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
    </div>
</template>

<style scoped></style>
