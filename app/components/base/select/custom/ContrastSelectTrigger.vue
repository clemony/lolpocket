<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectTrigger class="text-left bg-neutral/85 border-accent inset-shadow-sm **:text-nc/90 !rounded-xl align-bottom h-11 flex items-center text-3 tracking-tight font-medium btn-depth [&_svg]:opacity-90" :class="cn('', props.class)">
    <slot />
  </SelectTrigger>
</template>