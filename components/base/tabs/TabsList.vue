<script setup lang="ts">
import type { TabsListProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { TabsList } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn('bg-b2/40 text-bc/70 inline-flex items-center justify-center rounded-md p-1', props.class)"
  >
    <slot />
  </TabsList>
</template>
