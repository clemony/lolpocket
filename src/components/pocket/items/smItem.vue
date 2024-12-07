<script setup lang="ts">
import { useGeneralStore } from '@/stores/generalStore'

import type { Item } from 'types';
const gs = useGeneralStore();
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

<template><template v-if="props.index <= 5">
    <Skeleton v-show="!isImageLoaded" class='size-[50px] rounded-md' />

    <KinesisContainer v-show="isImageLoaded" :perspective="100" :duration="1000"
        class="group overflow-hidden content-center relative rounded-md  border border-accent/40"
        :disabled="gs.reducedMotion == true">
        <KinesisElement type="translate" :strength="6" class="flex  items-center ">
            <div :key="item.id"
                class="aspect-square size-[48px] shrink-0   border border-b3 opacity-95 transition-all duration-300 ">

                <div class="size-full absolute top-0 left-0 z-0 ">
                    <img @load="imageLoaded()" :src="`/img/items/${item.id}.webp`"
                        class="z-0 size-full scale-150 blur-xs" :data-item="item.name" />
                </div>

                <div class="size-full absolute top-0 left-0 z-10 ">
                    <img @load="imageLoaded()" :src="`/img/items/${item.id}.webp`"
                        class="size-full mask mask-1 scale-105" :data-item="item.name" />
                </div>
            </div>
        </KinesisElement>

        <div v-show="isImageLoaded" class="size-full  z-50 absolute top-0  left-0 rounded-md 
                        
                        shadow-[inset_1px_1px_2px_3px_#00000040]
                            ">
        </div>
    </KinesisContainer>
</template></template>

<style scoped></style>