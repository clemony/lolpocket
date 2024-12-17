<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'

import type { Item } from 'types'
const as = useAccountStore()
const props = defineProps<{
    item: Item
    index: number
}>()

const isImageLoaded = ref<Boolean>(false)

function imageLoaded() {
    setTimeout(() => {
        isImageLoaded.value = true
    }, 2000)
}
</script>

<template>
    <template v-if="props.index <= 5">
        <Skeleton v-show="!isImageLoaded" class="size-[50px] rounded-md" />

        <KinesisContainer
            v-show="isImageLoaded"
            :perspective="100"
            :duration="1000"
            class="group border-neutral/40 relative content-center overflow-hidden rounded-md border"
            :disabled="as.reducedMotion == true">
            <KinesisElement
                type="translate"
                :strength="6"
                class="flex items-center">
                <div
                    :key="item.id"
                    class="border-b3 aspect-square size-[48px] shrink-0 border opacity-95 transition-all duration-300">
                    <div class="absolute top-0 left-0 z-0 size-full">
                        <img
                            @load="imageLoaded()"
                            :src="`/img/items/${item.id}.webp`"
                            class="z-0 size-full scale-150 blur-xs"
                            :data-item="item.name" />
                    </div>

                    <div class="absolute top-0 left-0 z-10 size-full">
                        <img
                            @load="imageLoaded()"
                            :src="`/img/items/${item.id}.webp`"
                            class="mask mask-1 size-full scale-105"
                            :data-item="item.name" />
                    </div>
                </div>
            </KinesisElement>

            <div
                v-show="isImageLoaded"
                class="absolute top-0 left-0 z-50 size-full rounded-md shadow-[inset_1px_1px_2px_3px_#00000040]"></div>
        </KinesisContainer>
    </template>
</template>

<style scoped></style>
