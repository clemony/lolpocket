<script setup lang="ts">
import type { TagsInputItemProps } from 'reka-ui'
import { TagsInputItem, useForwardProps } from 'reka-ui'

const props = defineProps<
  TagsInputItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem
    v-bind="forwarded"
    :class="
      cn(
        `
          data-[state=active]:ring-ring data-[state=active]:ring-2
          data-[state=active]:ring-offset-2
          ring-offset-background btn flex h-7 items-center rounded-md px-2
          font-medium
        `,
        props.class,
      )
    ">
    <slot />
  </TagsInputItem>
</template>
