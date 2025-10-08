<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  SwitchRootProps & {
    class?: HTMLAttributes['class']
    items: ToggleItem[]
  }
>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
interface ToggleItem {
  class: string
  icon: string
}
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="cn('has-disabled:!bg-transparent  w-12 h-6 overflow-hidden border relative shadow-xs drop-shadow-xs peer inline-flex  shrink-0 cursor-pointer items-center rounded-full transition-colors ',

               //disabled
               'disabled:cursor-not-allowed disabled:opacity-50',

               //hover
               'hover:ring-offset-1 ring-offset-b2 hover:ring ring-bc/50 ',

               // focus
               'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-b2 focus-visible:ring-offset-2 focus-visible:ring-offset-b1',

               // checked
               'on:border-neutral/60  on:bg-neutral',

               //unchecked
               'off:bg-b3/30 off:border-b3',

               props.class,
    )">
    <!-- off icon -->
    <div
      v-if="!forwarded.modelValue"
      class="inline absolute right-0 !text-2 pr-2 z-0 slide-in-from-right animate-in text-bc/50">
      <icon
        :name="props.items[0].icon"
        :class="cn('size-4 text-bc/60', props.items[0].class)" />
    </div>

    <!-- on icon -->
    <span
      v-else-if="forwarded.modelValue"
      class="inline absolute text-nc animate-in slide-in-from-left pl-1.75">
      <icon
        :name="props.items[1].icon"
        :class="cn('size-4 text-nc', props.items[1].class)" />
    </span>

    <!-- thumb -->
    <SwitchThumb
      id="switch-thumb"
      :class="
        cn(
          'shrink-0 on:translate-x-6.75 size-4.5 z-2  translate-x-0.25 pointer-events-none grid place-items-center block rounded-full bg-b1 shadow-lg ring-0 transition-transform',
        )
      ">
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>