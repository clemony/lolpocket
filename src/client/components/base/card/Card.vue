<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/client/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        :class="
            cn(
                '!border-b2 bg-b1/90 shadow-smooth rounded-xl backdrop-blur-md',
                props.class
            )
        ">
        <slot />
    </div>
</template>
