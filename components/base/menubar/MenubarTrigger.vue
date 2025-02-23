<script setup lang="ts">
import { MenubarTrigger, useForwardProps } from 'reka-ui'
import type { MenubarTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-2 font-medium outline-none focus:bg-b2 focus:text-neutral-bc data-[state=open]:bg-b2 data-[state=open]:text-neutral-bc',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
