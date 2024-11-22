<script setup lang="ts">
import { HTMLAttributes } from 'vue';
import { cn } from '@lib/utils'


const isImageLoaded = ref<Boolean>(false)
const props = defineProps<{
    url: string,
    class?: HTMLAttributes['class']
}>()


function imageLoaded() {
    setTimeout(() => {
        isImageLoaded.value = true
        console.log(isImageLoaded.value);
    }, 500)
}

//@error="setBlankImg($event)"
function setBlankImg(event) {
    event.target.src = "/img/blank.webp"
} 
</script>

<template>
<div :class="cn('overflow-hidden', props.class)">
    <Skeleton v-show="!isImageLoaded" :class="cn('border-none!', props.class)" />

    <div v-show="isImageLoaded" class='size-full bg-b2/40 overflow-hidden'>
        <img :src="props.url" @load="imageLoaded()"
            :class="cn('scale-105 size-full animate-in fade-in-0 duration-700', props.class)" />
    </div>

    <div v-if="isImageLoaded" class='hidden img-loaded'></div>

    <slot />
</div>
</template>

<style scoped></style>