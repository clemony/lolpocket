<script lang="ts" setup>
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

const props = defineProps<
  TabsListProps & {
    class?: HTMLAttributes['class']
    orientation?: 'horizontal' | 'vertical'
  }
>()
const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsList
    :class="
      cn(
        'py-0.5 h-9 px-1  items-center justify-center grid   relative',
        { '!size-full': props.orientation == 'vertical' },
        props.class,
      )
    "
    v-bind="forwarded">
    <slot />
  </TabsList>
</template>
