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

const pocket = ref(props.pocket)
const champ = computed(() => {
    return pocket.value.champions[0].champions[0].name
})
</script>

<template>
    <Skeleton v-show="!isImageLoaded" class="h-inherit w-full rounded-xl" />

    <div
        v-show="isImageLoaded"
        class="h-inherit overflow-hidden rounded-xl border border-neutral/20 bg-base-200/60 bg-clip-border">
        <KinesisContainer
            v-show="isImageLoaded"
            :perspective="100"
            class="size-full h-inherit overflow-hidden shadow-inset-sm duration-700 animate-in fade-in-0">
            <KinesisElement
                v-if="champ"
                type="depth"
                :strength="1"
                class="relative z-0 size-full">
                <img
                    :src="`/img/champions/splash/${clean(champ)}_0.webp`"
                    @load="imageLoaded()"
                    class="object-none object-[50%_25%]" />
            </KinesisElement>

            <div v-if="champ" class="absolute bottom-2.5 right-3">
                <Badge
                    class="font-cursive bg-opacity-70 text-base font-bold tracking-tighter antialiased">
                    {{ champ }}
                </Badge>
            </div>
        </KinesisContainer>
    </div>
</template>

<style scoped></style>
