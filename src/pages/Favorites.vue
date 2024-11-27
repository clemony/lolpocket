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
        <div class="flex w-full items-end p-4">
            <div class="flex grow items-center">
                <h2 class="p-1.5 text-xl font-bold">Favorites</h2>
            </div>
        </div>

        <div
            class="absolute left-0 top-0 z-10 flex !h-fit w-full flex-wrap items-center justify-end gap-4 border-b border-b-base-300 bg-base-100/90 px-4 py-1 backdrop-blur-md">
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
                    class="item-wrapper__item pointer-events-auto flex aspect-square min-w-[60px] max-w-[70px] grow basis-14 place-items-center overflow-hidden rounded-md bg-cover ring-1 ring-base-300 ring-offset-1 ring-offset-base-100 drop-shadow-sm hover:ring-offset-primary has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-secondary">
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
            class="absolute left-0 top-0 z-10 flex !h-fit w-full flex-wrap items-center justify-end gap-4 border-b border-b-base-300 bg-base-100/80 px-4 py-1 shadow-warm backdrop-blur-md">
            <h2 class="sub-text grow justify-start">Primary</h2>
        </div>

        <div
            class="drag-draggable !h-full w-full content-start items-start justify-around rounded-b-xl px-3 pb-4 pt-12 shadow-inset scrollbar-hide">
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
                <label class="drag-label !overflow-hidden">
                    <div class="drag-wrapper !overflow-hidden">
                        <img :src="item.img" class="drag-img" />

                        <div
                            :key="item.id + 'Count'"
                            :class="{ '!opacity-85': item.count > 1 }"
                            class="absolute -right-1.5 -top-1.5 z-30 flex size-6 place-content-center place-items-center overflow-hidden rounded-full bg-primary font-mono text-sm text-primary-content opacity-0 shadow-warm">
                            {{ item.count }}
                        </div>
                    </div>
                </label>
                <template #popper :key="item.name + 'Pop'">
                    <pop-item :item="item" :variant="'none'" />
                </template>
            </VDropdown>

            <VDropdown
                theme="default"
                alt="Quick Search"
                class="ghosty drag-label group/qs relative z-0 flex basis-16 cursor-zoom-out !p-0 after:absolute after:grid after:h-full after:w-full after:place-content-center after:opacity-50 after:content-['+'] hover:after:text-neutral hover:after:opacity-60">
                <div
                    class="z-20 h-full w-full scale-105 cursor-zoom-in select-none bg-[url('/img/UI/frame.webp')] bg-contain bg-center bg-no-repeat opacity-0 brightness-0 transition-all duration-200 group-hover/qs:scale-95 group-hover/qs:opacity-40"></div>

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
