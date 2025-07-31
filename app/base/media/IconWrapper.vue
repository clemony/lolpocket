<script lang="ts" setup>
const props = defineProps<{
  name?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class="size-5 relative shrink-0 !overflow-visible grid place-items-center">
    <hicon
      v-if="props.name"
      :name="props.name"
      class="absolute shrink-0   "
      :class="cn('size-5 dst', props.class)" />

    <slot />
  </div>
</template>