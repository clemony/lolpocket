<script setup lang="ts">
import { TabsContent } from 'reka-ui'
import type { TabsContentProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    :class="cn('mt-2 ring-offset-b1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-b2 focus-visible:ring-offset-2', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
