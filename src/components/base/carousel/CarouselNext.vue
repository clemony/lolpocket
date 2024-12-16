<script setup lang="ts">
import type { WithClassAsProps } from './interface'
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/base/button'
import { cn } from '@lib/utils'
=======
import { Button } from '@/components/base/ui/button'
import { cn } from '@lib/utils'
import { ArrowRightIcon } from '@radix-icons/vue'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { Button } from '@/components/base/button'
import { cn } from '@lib/utils'
>>>>>>> 83f9266d (update 42 files and delete 17 files)
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
    <Button
        :disabled="!canScrollNext"
        :class="
            cn(
                'absolute h-8 w-8 touch-manipulation rounded-full p-0',
                orientation === 'horizontal' ?
                    'top-1/2 -right-12 -translate-y-1/2'
                :   '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
                props.class
            )
        "
        variant="outline"
        @click="scrollNext">
        <slot>
<<<<<<< HEAD
<<<<<<< HEAD
            <icon
                icon="teenyicons:arrow-right-outline"
                class="h-4 w-4 text-current" />
=======
            <ArrowRightIcon class="h-4 w-4 text-current" />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
            <icon
                icon="teenyicons:arrow-right-outline"
                class="h-4 w-4 text-current" />
>>>>>>> 83f9266d (update 42 files and delete 17 files)
            <span class="sr-only">Next Slide</span>
        </slot>
    </Button>
</template>
