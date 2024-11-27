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
                'bg-b1/90 shadow-smooth rounded-xl border backdrop-blur-md',
                props.class
            )
        ">
        <slot />
    </div>
</template>
