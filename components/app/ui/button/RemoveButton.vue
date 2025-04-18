<script lang="ts" setup>
const props = defineProps<{
  tip: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button v-tippy="props.tip" class="btn group/btn btn-ghost btn-sm btn-square " :class="cn('', props.class)">
    <icon name="x-sm" class="size-6.5 dst shrink-0 group-hover/btn:text-bc/100 text-bc/30 tldr-30" />
  </button>
</template>