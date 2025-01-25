<script setup lang="ts">
import { MenubarSubTrigger, type MenubarSubTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
  MenubarSubTriggerProps & {
    class?: HTMLAttributes['class']
    inset?: boolean
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'data-[state=open]:text-bccent-foreground text-2 focus:bg-b2/60 focus:text-bc data-[state=open]:bg-b2/60 flex cursor-default items-center rounded-sm px-2 py-1.5 outline-hidden select-none',
        inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
    <icon
      name="right-small-outline"
      class="ml-auto h-4 w-4"
    />
  </MenubarSubTrigger>
</template>
