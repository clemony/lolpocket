<script lang="ts" setup>
const props = defineProps<{
  inset?: boolean
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <button class="sb-link" :class="cn('btn  btn-ghost w-full py-5 px-3  gap-4 justify-start hover:text-bc flex-nowrap overflow-hidden font-medium text-3 items-center [&_svg]:shrink-0  ', { 'pl-5 pr-3 ': props.inset, ' !size-12 !justify-center !gap-0 ': !us.sidebarExpanded }, props.class)">
    <slot />
  </button>
</template>