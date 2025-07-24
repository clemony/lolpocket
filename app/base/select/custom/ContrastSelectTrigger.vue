<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectTrigger
    class="text-left bg-n1/85 border-accent inset-shadow-sm **:text-nc/90 !rounded-xl shadow-sm align-bottom h-10 flex items-center text-3 tracking-tight font-medium btn-depth [&_svg]:opacity-90"
    :class="cn('', props.class)">
    <slot />
  </SelectTrigger>
</template>