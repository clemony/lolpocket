<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { TagsInputRoot, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot
    v-bind="forwarded"
    :class="cn('border border-b2 -b3 text-2 focus-within:ring-neutral/60 flex flex-wrap items-center gap-2 rounded-md border border-b2  bg-transparent px-1 py-1 focus-within:ring-1', props.class)"
  >
    <slot />
  </TagsInputRoot>
</template>
