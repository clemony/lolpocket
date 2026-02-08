<script setup lang="ts">
import type { ToggleGroupItemProps } from 'reka-ui'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes['class']
  }
>()
</script>

<template>
  <ToggleGroupItem
    :value
    :class="
      cn(
        'group/toggle',
        props.class,
      )
    ">
    <slot />
  </ToggleGroupItem>
</template>
