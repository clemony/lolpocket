<script setup lang="ts">
import type { CollapsibleTriggerProps } from 'reka-ui'
import { CollapsibleTrigger } from 'reka-ui'

const props = defineProps<
  CollapsibleTriggerProps & {
    on?: CollapsibleTriggerVariants['on']
    base?: CollapsibleTriggerVariants['base']
    class?: HTMLAttributes['class']
    hover?: CollapsibleTriggerVariants['hover']
    size?: CollapsibleTriggerVariants['size']
    variant?: CollapsibleTriggerVariants['variant']
  }
>()
</script>

<template>
  <CollapsibleTrigger
    v-bind="props"
    :class="
      cn(
        'group/collapse',
        collapsibleTriggerVariants({ hover, on, size, base, variant }),
        props.class,
      )
    ">
    <slot />
  </CollapsibleTrigger>
</template>
