<script lang="ts" setup>
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { useScroll as useScrolly } from '@vueuse/core'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    PopoverContentProps & {
      class?: HTMLAttributes['class']
      position?: string
    }
  >(),
  {
    sideOffset: 4,
    align: 'center',
    position: 'popper',
  }
)
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const el = ref()
const { arrivedState, directions, isScrolling, x, y } = useScrolly(el)
watch(
  () => arrivedState.top,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  }
)
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      class="rounded-xl border border-b2 z-50 bg-b1 text-bc data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 shadow-md drop-shadow-lg drop-shadow-black/4 relative overflow-hidden"
      v-bind="{ ...forwarded, ...$attrs }">
      <PopperScrollUpButton
        :class="{
          'opacity-0 pointer-events-none  transition-opacity duration-300':
            arrivedState.top === true,
        }" />

      <div
        ref="el"
        :class="
          cn(
            'max-h-66  min-w-[--reka-popover-trigger-width] overflow-auto size-full',
            props.class,
          )
        ">
        <div :class="cn('p-2 min-w-[--reka-popover-trigger-width] size-full')">
          <slot />
        </div>
      </div>

      <PopperScrollDownButton
        :class="{
          'opacity-0 pointer-events-none  transition-opacity duration-300':
            arrivedState.bottom === true,
        }" />
    </PopoverContent>
  </PopoverPortal>
</template>
