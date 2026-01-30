<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectTrigger
    class="bgneutral/85 btn-depth border-accent text-md **:text-nc/90 flex h-10 items-center rounded-xl! text-left align-bottom font-medium tracking-tight shadow-sm inset-shadow-sm [&_svg]:opacity-90"
    :class="cn('', props.class)"
  >
    <slot />
  </SelectTrigger>
</template>
