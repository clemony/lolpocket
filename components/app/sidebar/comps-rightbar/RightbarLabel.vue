<script lang="ts" setup>
const props = defineProps<{

    class?: HTMLAttributes['class']
}>()
const us = useUiStore()
</script>

<template>
  <div v-if="us.rightbarExpanded" class="" :class="cn('text-3 pt-4 text-bc/40  tracking-tight px-2 font-semibold  expand-hide', props.class)">
    <slot />
  </div>
</template>