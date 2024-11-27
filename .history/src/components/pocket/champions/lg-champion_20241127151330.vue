<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
const isImageLoaded = ref<Boolean>(false)

function imageLoaded() {
    setTimeout(() => {
        isImageLoaded.value = true
    }, 500)
}

const props = defineProps<{
    pocket: pocket
}>()
</script>

<template>
    <Skeleton v-show="!isImageLoaded" class="h-inherit w-full rounded-xl" />

    <div
        v-show="isImageLoaded"
        class="bg-b2/60 h-inherit border-neutral/20 overflow-hidden rounded-xl border bg-clip-border">
        <KinesisContainer
            v-show="isImageLoaded"
            :perspective="100"
            class="shadow-inset-sm h-inherit animate-in fade-in-0 size-full overflow-hidden duration-700">
            <KinesisElement
                v-if="pocket.champions[0].starred"
                type="depth"
                :strength="1"
                class="relative z-0 size-full">
                <img
                    :src="`/img/champions/splash/${clean(pocket.champions[0].starred)}_0.webp`"
                    @load="imageLoaded()"
                    class="object-none object-[50%_25%]" />
            </KinesisElement>

            <div
                v-if="pocket.champions[0].starred"
                class="absolute right-3 bottom-2.5">
                <Badge
                    class="bg-opacity-70 font-cursive text-base font-bold tracking-tighter antialiased">
                    {{ pocket.champions[0].starred }}
                </Badge>
            </div>
        </KinesisContainer>
    </div>
</template>

<style scoped></style>
