<script setup lang="ts">
import { TagsInputRoot, type TagsInputRootEmits, type TagsInputRootProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

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
    :class="cn('border-b3 text-2 focus-within:ring-neutral/60 flex flex-wrap items-center gap-2 rounded-md border bg-transparent px-1 py-1 focus-within:ring-1', props.class)"
  >
    <slot />
  </TagsInputRoot>
</template>
