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
    :class="cn('flex rounded bg-transparent mr-1', props.class)">
    <slot>
      <icon
        name="x-sm"
        class="w-4 h-4" />
    </slot>
  </TagsInputItemDelete>
</template>
