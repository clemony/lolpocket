<script lang="ts" setup>
import { TabsList } from 'reka-ui'
import type { TabsListProps } from 'reka-ui'

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
    :class="cn('py-0.5 h-9 bg-b2 px-1 items-center justify-center grid  rounded-xl inset-shadow-xs inset-shadow-black/3   text-bc/50 relative', { '!size-full': props.orientation == 'vertical' }, props.class)"
    v-bind="forwarded">
    <slot />
  </TabsList>
</template>
