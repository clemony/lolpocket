<script lang="ts" setup>
import type { MenubarTriggerProps } from 'reka-ui'
import { MenubarTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  MenubarTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    v-bind="forwarded"
    :class="cn('flex gap-1.5 group/menu text-sm ', props.class)">
    <slot />

    <icon
      name="up"
      class="group-data-[state=open]/menu:-rotate-180 transition-transform duration-200 size-4 mt-0.75 shrink-0 stroke-[1.5]" />
  </MenubarTrigger>
</template>
