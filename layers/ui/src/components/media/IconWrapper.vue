<script lang="ts" setup>
const props = defineProps<{
  name?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class="relative grid size-5 shrink-0 place-items-center overflow-visible!">
    <Icon
      v-if="props.name"
      :name="props.name"
      class="absolute shrink-0"
      :class="cn('size-5 dst', props.class)" />

    <slot />
  </div>
</template>
