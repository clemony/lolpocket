<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

const props = withDefaults(defineProps<
  TabsListProps & {
    class?: HTMLAttributes['class']
    variant?: TabListVariants['variant']
    orientation?: Orientation
    base?: TabListVariants['base']
    size?: TabListVariants['size']
  }
>(), {
  size: '9'
})

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsList
    v-bind="forwarded"
    :class="
      cn(tabListVariants({ variant, base, size }), 'rounded-xl!', props.class)
    ">
    <slot />
  </TabsList>
</template>
