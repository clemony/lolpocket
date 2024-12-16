<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <Separator
        data-sidebar="separator"
        :class="cn('bg-b2 mx-2 w-auto', props.class)">
        <slot />
    </Separator>
</template>
