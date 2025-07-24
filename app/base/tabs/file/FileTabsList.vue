<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsList } from 'reka-ui'

import type { HTMLAttributes } from 'vue'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(
      'tabs tabs-lift',
      props.class,
    )">
    <slot />
  </TabsList>
</template>
