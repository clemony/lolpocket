<script lang="ts" setup>
import { MenubarTrigger, useForwardProps } from 'reka-ui'
import type { MenubarTriggerProps } from 'reka-ui'

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
        'flex gap-1.5 group/menu text-3 ',
        props.class,
      )
    ">
    <slot />
    <icon name="up-sm" class="group-data-[state=open]/menu:-rotate-180 tldr-20 size-4 mt-0.75 shrink-0 stroke-[1.5]" />
  </MenubarTrigger>
</template>