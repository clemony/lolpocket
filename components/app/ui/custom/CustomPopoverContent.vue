<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <PopoverContent
    :class="
      cn(
        '!rounded-xl border backdrop-blur-lg !border-accent  bg-neutral/89 backdrop-brightness-175 text-nc',
        props.class,
      )
    ">
    <slot />
  </PopoverContent>
</template>
