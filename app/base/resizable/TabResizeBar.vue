<script setup lang="ts">
import type {
  SplitterResizeHandleEmits,
  SplitterResizeHandleProps,
} from 'reka-ui'
import { SplitterResizeHandle, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  SplitterResizeHandleProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterResizeHandle
    :hit-area-margins="60"
    v-bind="forwarded"
    :class="
      cn(
        'relative group flex w-1 items-center justify-end h-full z-1 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-b2 focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=horizontal]>div]:-rotate-90 [&[data-orientation=vertical]]:[&_.icon-thing]:!rotate-90',
        props.class,
      )
    ">
    <slot />
  </SplitterResizeHandle>
</template>
