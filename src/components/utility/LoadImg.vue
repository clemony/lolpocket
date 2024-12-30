<script setup lang="ts">
import { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const isImageLoaded = ref<Boolean>(false)

const props = withDefaults(
    defineProps<{
        url: string
        alt: string
        class?: HTMLAttributes['class']
    }>(),
    {
        alt: 'image',
    }
)

function imageLoaded() {
    setTimeout(() => {
        isImageLoaded.value = true
    }, 500)
}

//@error="setBlankImg($event)"
function setBlankImg(event) {
    event.target.src = '/img/blank.webp'
}
</script>

<template>
    <div :class="cn('overflow-hidden', props.class)">
        <Skeleton
            v-show="!isImageLoaded"
            :class="cn('border-none!', props.class)" />

        <div v-show="isImageLoaded" class="size-full overflow-hidden">
            <Img
                :src="props.url"
                :alt="props.alt"
                @load="imageLoaded()"
                :class="
                    cn(
                        'animate-in fade-in-0 size-full duration-700',
                        props.class
                    )
                " />
        </div>

        <div v-if="isImageLoaded" class="img-loaded hidden"></div>

        <slot />
    </div>
</template>

<style scoped></style>
