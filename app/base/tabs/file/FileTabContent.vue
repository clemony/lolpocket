<script setup lang="ts">
import type { TabsContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { TabsContent } from 'reka-ui'

const props = defineProps<
  TabsContentProps & {
    class?: HTMLAttributes['class']
    radius?: string
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    :class="cn('tab-content z-0', props.class)"
    :style="{
      '--tabcontent-radius-ss': props.radius,
      '--tabcontent-radius-se': props.radius,
      '--tabcontent-radius-es': props.radius,
      '--tabcontent-radius-ee': props.radius,
    }"
    v-bind="delegatedProps">
    <slot />
  </TabsContent>
</template>
<!-- --tabcontent-margin margin of the tab content
--tabcontent-radius-ss start start border radius of the tab content
--tabcontent-radius-se start end border radius of the tab content
--tabcontent-radius-es end start border radius of the tab content
--tabcontent-radius-ee end end border radius of the tab content
--tabcontent-order -->
