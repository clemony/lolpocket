<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

const props = defineProps<
  TabsListProps & {
    class?: HTMLAttributes['class']
    variant?: TabListVariants['variant']
    orientation?: Orientation
    base?: TabListVariants['base']
    size?: TabListVariants['size']
  }
>()
const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsList
    v-bind="forwarded"
    :orientation
    :class="
      cn(tabListVariants({ variant, base, size }), props.class)
    ">
    <slot />
  </TabsList>
</template>
