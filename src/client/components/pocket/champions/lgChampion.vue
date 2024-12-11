<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@/client/lib/utils'
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
        class="h-inherit border-neutral/20 bg-b2/60 overflow-hidden rounded-xl border bg-clip-border">
        <KinesisContainer
            v-show="isImageLoaded"
            :perspective="100"
            class="h-inherit shadow-inset-sm animate-in fade-in-0 size-full overflow-hidden duration-700">
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

            <div v-if="champ" class="absolute right-3 bottom-2.5">
                <Badge
                    class="font-cursive bg-opacity-70 text-3 font-bold tracking-tighter antialiased">
                    {{ champ }}
                </Badge>
            </div>
        </KinesisContainer>
    </div>
</template>

<style scoped></style>
