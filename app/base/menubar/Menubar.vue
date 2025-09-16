<script setup lang="ts">
import type { MenubarRootEmits, MenubarRootProps } from 'reka-ui'
import { MenubarRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  MenubarRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<MenubarRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRoot
    v-bind="forwarded"
    :class="
      cn(
        'flex h-9 items-center space-x-1 rounded-md border border-b2  bg-b1 p-1 shadow-sm',
        props.class,
      )
    ">
    <slot />
  </MenubarRoot>
</template>
