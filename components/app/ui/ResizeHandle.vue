<script setup lang="ts">
import type { SplitterResizeHandleEmits, SplitterResizeHandleProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { SplitterResizeHandle, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<
  SplitterResizeHandleProps & {
    class?: HTMLAttributes['class']
    withHandle?: boolean
  }
>()
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const isDragging = ref(false)
</script>

<template>
  <SplitterResizeHandle
    :hit-area-margins="4"
    v-bind="forwarded"
    :class="
      cn(
        'focus-visible:ring-b3 relative flex w-px items-center justify-center opacity-30 transition-all duration-300 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 hover:opacity-80 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90',
        props.class,
        { 'opacity-80': isDragging },
      )
    "
    @is-dragging="isDragging = true"
  >
    <slot />
    <template v-if="props.withHandle">
      <div class="o z-10 flex items-center justify-center">
        <icon
          name="la:grip-lines-vertical"
          class="size-5.5"
        />
      </div>
    </template>
  </SplitterResizeHandle>
</template>
