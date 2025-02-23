<script setup lang="ts">
import { TabsList } from 'reka-ui'
import type { TabsListProps } from 'reka-ui'
import { computed } from 'vue'
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
      'inline-flex items-center justify-center rounded-lg bg-b2 p-1 text-b2-bc',
      props.class,
    )"
  >
    <slot />
  </TabsList>
</template>
