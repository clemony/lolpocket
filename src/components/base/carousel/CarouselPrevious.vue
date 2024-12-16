<script setup lang="ts">
import type { WithClassAsProps } from './interface'
<<<<<<< HEAD
import { Button } from '@/components/base/button'
import { cn } from '@lib/utils'
=======
import { Button } from '@/components/base/ui/button'
import { cn } from '@lib/utils'
import { ArrowLeftIcon } from '@radix-icons/vue'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
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
<<<<<<< HEAD
            <icon
                icon="teenyicons:arrow-right-outline"
                class="h-4 w-4 text-current" />
=======
            <ArrowLeftIcon class="h-4 w-4 text-current" />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
            <span class="sr-only">Previous Slide</span>
        </slot>
    </Button>
</template>
