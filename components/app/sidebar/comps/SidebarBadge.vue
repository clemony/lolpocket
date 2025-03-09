<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <div class=" grow justify-end absolute tldr-30  not-in-disabled:text-bc/70  flex" :class="cn('right-12 text-1 ', props.class, {'w-0 opacity-0 invisible': !us.sidebarExpanded})">
    <slot />
  </div>
</template>