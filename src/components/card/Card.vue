<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        :class="
            cn(
<<<<<<< HEAD:src/components/card/Card.vue
                '!border-b3 bg-b1/95 shadow-smooth rounded-xl backdrop-blur-md',
=======
                '!border-b3 bg-b1/90 shadow-smooth rounded-xl backdrop-blur-md',
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/base/card/Card.vue
                props.class
            )
        ">
        <slot />
    </div>
</template>
