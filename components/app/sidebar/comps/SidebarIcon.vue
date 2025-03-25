<script lang="ts" setup>
const props = defineProps<{
  name?: string
  class?: HTMLAttributes['class']
}>()
const us = useUiStore()
</script>

<template>
  <span class="size-5 relative !overflow-visible sidebar-child transition-scale dr-30" :class="{ '!scale-110': !us.sidebarExpanded }">

    <icon v-if="props.name" :name="props.name" class="absolute shrink-0   transition-scale dr-30" :class="cn('size-5 dst', props.class, { '!scale-110': !us.sidebarExpanded })" />

    <slot  />
  </span>
</template>