<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectTrigger
    class="
      bgneutral/85 btn-depth flex h-10 items-center rounded-xl! border-accent
      text-left align-bottom text-3 font-medium tracking-tight shadow-sm
      inset-shadow-sm **:text-nc/90 [&_svg]:opacity-90
    "
    :class="cn('', props.class)">
    <slot />
  </SelectTrigger>
</template>
