<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { TagsInputItemDelete, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete
    v-bind="forwardedProps"
    :class="cn('mr-1 flex rounded-sm bg-transparent', props.class)"
  >
    <slot>
      <icon
        name="teenyicons:x-small-outline"
        class="h-4 w-4"
      />
    </slot>
  </TagsInputItemDelete>
</template>
