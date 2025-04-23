<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['interact-outside'])
</script>

<template>
  <!-- eslint-disable vue/custom-event-name-casing -->

  <PopoverContent
    :class="
      cn(
        '!rounded-xl border backdrop-blur-lg !border-accent  bg-neutral/86 backdrop-brightness-175 text-nc/80',
        props.class,
      )
    "
    @interact-outside="emit('interact-outside')">
    <slot />
  </PopoverContent>
</template>
