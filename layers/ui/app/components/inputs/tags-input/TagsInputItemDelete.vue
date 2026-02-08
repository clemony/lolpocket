<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'reka-ui'
import { TagsInputItemDelete, useForwardProps } from 'reka-ui'

const props = defineProps<
  TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete
    v-bind="forwarded"
    :class="cn('mr-1 flex rounded-sm bg-transparent', props.class)">
    <slot>
      <icon
        class="size-4"
        name="x-sm" />
    </slot>
  </TagsInputItemDelete>
</template>
