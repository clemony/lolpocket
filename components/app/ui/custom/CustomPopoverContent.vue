<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['interact-outside'])
</script>

<template>
  <PopoverContent
  @interact-outside="emit('interact-outside')"
    :class="
      cn(
        '!rounded-xl border backdrop-blur-lg !border-accent  bg-neutral/89 backdrop-brightness-175 text-nc',
        props.class,
      )
    ">
    <slot />
  </PopoverContent>
</template>
