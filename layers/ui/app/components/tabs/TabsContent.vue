<script setup lang="ts">
import type { TabsContentProps } from 'reka-ui'
import { TabsContent } from 'reka-ui'

const props = defineProps<
  TabsContentProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    v-bind="delegatedProps"
    :class="
      cn(
        'mt-2 ring-offset-p0 focus-visible:ring-2 focus-visible:ring-p2 focus-visible:ring-offset-2 focus-visible:outline-none',
        props.class,
      )
    ">
    <slot />
  </TabsContent>
</template>
