<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/base/button'
import { cn } from '@lib/utils'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
    <Button
        :disabled="!canScrollPrev"
        :class="
            cn(
                'absolute h-8 w-8 touch-manipulation rounded-full p-0',
                orientation === 'horizontal' ?
                    'top-1/2 -left-12 -translate-y-1/2'
                :   '-top-12 left-1/2 -translate-x-1/2 rotate-90',
                props.class
            )
        "
        variant="outline"
        @click="scrollPrev">
        <slot>
            <icon
                icon="teenyicons:arrow-right-outline"
                class="h-4 w-4 text-current" />
            <span class="sr-only">Previous Slide</span>
        </slot>
    </Button>
</template>
