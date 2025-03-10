<script lang="ts" setup>
const props = defineProps<{
  name: string
  class?: HTMLAttributes['class']
}>()
const us = useUiStore()
</script>

<template>
  <span class="size-4 relative !overflow-visible sidebar-child ">

    <icon :name="props.name" class="absolute shrink-0 sidebar-child " :class="cn('size-4 dst', props.class, { '!scale-110': !us.sidebarExpanded })" />
  </span>
</template>