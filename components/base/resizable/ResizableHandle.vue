<script setup lang="ts">
import { SplitterResizeHandle, type SplitterResizeHandleEmits, type SplitterResizeHandleProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

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
</script>

<template>
  <SplitterResizeHandle
    v-bind="forwarded"
    :class="
      cn(
        'bg-b2 focus-visible:ring-b3 focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90',
        props.class,
      )
    "
  >
    <slot />
    <template v-if="props.withHandle">
      <div class="bg-b2/60 z-10 flex h-6 w-4 items-center justify-center rounded-sm border brightness-[99%] border-b3">
        <icon
          name="teenyicons:drag-vertical-outline"
          class="size-3.5"
        />
      </div>
    </template>
  </SplitterResizeHandle>
</template>
