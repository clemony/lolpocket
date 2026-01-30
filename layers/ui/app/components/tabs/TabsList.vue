<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

const props = withDefaults(
  defineProps<
    TabsListProps & {
      class?: HTMLAttributes['class']
      color?: TabListVariants['color']
      orientation?: TabListVariants['orientation']
      size?: TabListVariants['size']
    }
  >(),
  {
    orientation: 'horizontal',
    size: '9',
  }
)

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsList
    v-bind="forwarded"
    :class="
      cn(
        tabListVariants({ color, size, orientation }),
        'relative rounded-xl!',
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>
