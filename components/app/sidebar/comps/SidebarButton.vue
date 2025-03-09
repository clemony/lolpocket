<script lang="ts" setup>
const props = defineProps<{
  inset?: boolean
}>()

const us = useUiStore()
</script>

<template>
  <button class="btn btn-ghost w-full py-5  px-3  gap-4 justify-start tldr-30 font-medium text-3 items-center [&_svg]:shrink-0 hover:bg-b2/40 hover:border-b3/40" :class="{ 'pl-5 pr-3 ': props.inset,  '': us.sidebarExpanded, '': !us.sidebarExpanded}">
    <slot />
  </button><!-- -->
</template>