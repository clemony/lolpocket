<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <li
        data-sidebar="menu-item"
        :class="
            cn('group/menu-item relative !text-sm font-medium', props.class)
        ">
        <slot />
    </li>
</template>
