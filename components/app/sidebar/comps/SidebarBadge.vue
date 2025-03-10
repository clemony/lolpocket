<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <div  v-if="us.sidebarExpanded"  class=" grow justify-end absolute  expand-hide  not-in-disabled:text-bc/70  flex" :class="cn('right-12 text-1 ', props.class)">
    <slot />
  </div>
</template>