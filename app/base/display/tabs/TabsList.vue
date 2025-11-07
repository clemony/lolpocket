<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

const props = defineProps<TabsListProps & {
  class?: HTMLAttributes['class']
  variant?: TabListVariants['variant']
  orientation?: TabListVariants['orientation']
  base?: TabListVariants['base']
  size?: TabListVariants['size']
}>()

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsList
    v-bind="forwarded"
    :class="
      cn(tabListVariants({ variant, orientation, base, size }), props.class) ">
    <slot />
  </TabsList>
</template>
