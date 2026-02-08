<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

const props = withDefaults(
  defineProps<
    TabsListProps & {
      class?: HTMLAttributes['class']
    }
  >(),
  {
  }
)

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsList
    v-bind="forwarded"
    :class="
      cn(
        'relative rounded-xl!',
        props.class,
      )
    ">
    <slot />
  </TabsList>
</template>
