<script setup lang="ts">
import type { MenubarSubContentEmits, MenubarSubContentProps } from 'reka-ui'
import { MenubarPortal, MenubarSubContent, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  MenubarSubContentProps & { class?: HTMLAttributes['class'] }
>()

const emits = defineEmits<MenubarSubContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarPortal>
    <MenubarSubContent
      v-bind="forwarded"
      :class="
        cn(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-40 overflow-hidden rounded-lg border border-p3/80 bg-p0/92 p-1 text-pc shadow-warm backdrop-blur-md',
          props.class,
        )
      ">
      <slot />
    </MenubarSubContent>
  </MenubarPortal>
</template>
