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
<Skeleton v-show="!isImageLoaded" class='w-full h-inherit rounded-box' />

<div v-show='isImageLoaded'
    class='bg-base-200/60 h-inherit border border-neutral/20 bg-clip-border rounded-box overflow-hidden'>

    <KinesisContainer v-show='isImageLoaded' :perspective="100"
        class="shadow-inset-sm h-inherit size-full overflow-hidden animate-in fade-in-0  duration-700 ">

        <KinesisElement v-if="pocket.champions[0].starred" type="depth" :strength="1" class='  relative z-0 size-full '>
            <img :src="`/img/champions/splash/${clean(pocket.champions[0].starred)}_0.webp`" @load='imageLoaded()'
                class='object-none object-[50%_25%] ' />


        </KinesisElement>






        <div v-if="pocket.champions[0].starred" class=' absolute bottom-2.5 right-3'>
            <Badge class=' font-bold tracking-tighter text-base antialiased bg-opacity-70 font-cursive'>
                {{
                    pocket.champions[0].starred }}
            </Badge>
        </div>
    </KinesisContainer>
</div>
</template>

<style scoped></style>