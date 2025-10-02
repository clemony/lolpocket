<script setup lang="ts">
import type {
  SplitterResizeHandleEmits,
  SplitterResizeHandleProps,
} from 'reka-ui'
import { SplitterResizeHandle, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  SplitterResizeHandleProps & {
    class?: HTMLAttributes['class']
    withHandle?: boolean
    customHandle?: boolean
  }
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
    :hit-area-margins="{ coarse: 14, fine: 14 }"
    v-bind="forwarded"
    :class="
      cn(
        'relative group flex w-px items-center justify-center bg-b3/80 border-b2  after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-b2 focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90',
        props.class,
      )
    ">
    <template v-if="props.withHandle">
      <div
        class="z-10 flex h-6 w-5 items-center justify-center rounded-sm border bg-b1 border-b3 dst">
        <icon
          name="radix-icons:drag-handle-dots-2"
          class="size-4 opacity-50" />
      </div>
    </template>

    <template v-if="props.customHandle">
      <slot />
    </template>
  </SplitterResizeHandle>
</template>
