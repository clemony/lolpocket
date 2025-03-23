<script lang="ts" setup>
const props = defineProps<{
  inset?: boolean
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <button class="sb-link" :class="cn('btn btn-lg  btn-ghost w-full   gap-4 justify-start hover:text-bc font-medium text-3 items-center [&_svg]:shrink-0  ', { 'pl-5 pr-3 ': props.inset, ' !size-12 !justify-center !gap-0 ': !us.rightbarExpanded }, props.class)">
    <slot />
  </button>
</template>