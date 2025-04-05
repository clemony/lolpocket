<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <button
    class="sb-link" :class="cn('btn  btn-ghost w-full py-5 px-2.5 !justify-start  hover:text-bc flex-nowrap overflow-hidden font-medium text-3 items-center [&_svg]:shrink-0  ', { 'gap-4': us.sidebarExpanded }, props.class)">
    <slot />
  </button>
</template>