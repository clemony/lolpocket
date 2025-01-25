<script setup lang="ts">
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    :class="cn('ring-offset-b1 focus-visible:ring-b2 mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
