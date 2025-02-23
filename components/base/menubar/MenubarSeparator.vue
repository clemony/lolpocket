<script setup lang="ts">
import { MenubarSeparator, useForwardProps } from 'reka-ui'
import type { MenubarSeparatorProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSeparator :class=" cn('-mx-1 my-1 h-px bg-b2', props.class)" v-bind="forwardedProps" />
</template>
