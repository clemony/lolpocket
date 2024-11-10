<script setup lang="ts">
import { cn } from '@lib/utils'
import { TagsInputItemDelete, type TagsInputItemDeleteProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
<TagsInputItemDelete v-bind="forwardedProps" :class="cn('flex rounded bg-transparent mr-1', props.class)">
  <slot>
    <icon icon="teenyicons:x-small-outline" class="w-4 h-4" />
  </slot>
</TagsInputItemDelete>
</template>
