<script setup lang="ts">
import type { CollapsibleTriggerProps } from 'reka-ui'
import { CollapsibleTrigger } from 'reka-ui'

const props = defineProps<CollapsibleTriggerProps & {
  active?: CollapsibleTriggerVariants['active']
  base?: CollapsibleTriggerVariants['base']
  class?: HTMLAttributes['class']
  hover?: CollapsibleTriggerVariants['hover']
  size?: CollapsibleTriggerVariants['size']
  variant?: CollapsibleTriggerVariants['variant']
}>()
</script>

<template>
  <CollapsibleTrigger
    v-bind="props"
<<<<<<< HEAD
    :class="cn(' group/collapse ', collapsibleTriggerVariants({ hover, active, size, base, variant }), props.class)">
=======
    class="flex justify-between items-center gap-3 group/collapse [&_svg]:opacity-60 [&_svg]:opacity-100 cursor-pointer">
>>>>>>> refs/remotes/origin/main
    <slot />
  </CollapsibleTrigger>
</template>
