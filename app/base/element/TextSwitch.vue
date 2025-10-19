<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from 'reka-ui'

interface ToggleItem {
  icon?: string
  text: string
}

const props = defineProps<
  SwitchRootProps & {
    class?: HTMLAttributes['class']
    items: ToggleItem[]
  }
>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const modelValue = ref<boolean>(false)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="cn('w-25 h-6 overflow-hidden border data-[state=unchecked]:bg-b3/30 data-[state=unchecked]:border-b3 data-[state=checked]:border-neutral/60 relative [&_#switch-thumb]:h-[90%] [&_#switch-thumb]:z-2  [&_#switch-thumb]:w-auto [&_#switch-thumb]:aspect-square [&_#switch-thumb]:translate-x-0.25 hover:ring shadow-xs drop-shadow-xs ring-bc/50 hover:ring-offset-3 ring-offset-b2 [&_#switch-thumb]:shrink-0 on:[&_#switch-thumb]:translate-x-13 has-disabled:!bg-transparent  w-12 h-6 overflow-hidden border relative shadow-xs drop-shadow-xs peer inline-flex  shrink-0 cursor-pointer items-center rounded-full transition-colors ',

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
      class="inline absolute right-0 !text-2 pr-1.5 z-0 slide-in-from-right animate-in text-bc/50">
      {{ items[0].text }}
    </div>

    <!-- on icon -->
    <span
      v-else-if="forwarded.modelValue"
      class="inline absolute text-nc animate-in slide-in-from-left pl-2">
      {{ items[1].text }}
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