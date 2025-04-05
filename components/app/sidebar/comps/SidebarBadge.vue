<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <div
    v-if="us.sidebarExpanded" class=" group-disabled:opacity-70 grow justify-end absolute flex gap-2 dst  tracking-wide items-center  group-disabled:text-bc/60 group-not-disabled:text-bc/80 flex" :class="cn('right-11 text-[0.73rem] ', props.class)">
    <slot />
  </div>
</template>