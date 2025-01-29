<script setup lang="ts">
import type { SplitterResizeHandleEmits, SplitterResizeHandleProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { SplitterResizeHandle, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<
  SplitterResizeHandleProps & {
    class?: HTMLAttributes['class']
    withHandle?: boolean
    label?: string
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
    :class="cn('relative flex bg-transparent!', props.class)"
  >
    <template v-if="props.label">
      <div
        role="tablist"
        class="tabs tabs-lifted -rotate-0! bg-transparent!"
      >
        <Label class="tab tab-active pointer-events-none absolute flex-nowrap bg-transparent! text-nowrap">
          {{ props.label }}
        </Label>
        <Label
          role="tab"
          class="tab absolute left-4 hidden"
        >
          {{}}
        </Label>
      </div>
    </template>
  </SplitterResizeHandle>
</template>
