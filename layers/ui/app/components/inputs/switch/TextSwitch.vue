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
    :class="
      cn('peer ring-bc/50 ring-offset-b2 data-[state=checked]:border-neutral/60 data-[state=unchecked]:border-b3 data-[state=unchecked]:bg-b3/30 on:[&_#switch-thumb]:translate-x-13 relative inline-flex h-6 w-12 w-25 shrink-0 cursor-pointer items-center overflow-hidden rounded-full border shadow-xs drop-shadow-xs transition-colors hover:ring hover:ring-offset-3 has-disabled:bg-transparent! [&_#switch-thumb]:z-2 [&_#switch-thumb]:aspect-square [&_#switch-thumb]:h-[90%] [&_#switch-thumb]:w-auto [&_#switch-thumb]:shrink-0 [&_#switch-thumb]:translate-x-0.25',

         //disabled
         'disabled:cursor-not-allowed disabled:opacity-50',

         //hover
         `ring-bc/50 ring-offset-b2 hover:ring hover:ring-offset-1`,

         // focus
         `
          focus-visible:ring-b2 focus-visible:ring-offset-b1 focus-visible:ring-2
          focus-visible:ring-offset-2 focus-visible:outline-none
        `,

         // checked
         'on:border-neutral/60 on:bg-neutral',

         //unchecked
         'off:border-b3 off:bg-b3/30',

         props.class,
      )
    ">
    <!-- off icon -->
    <div
      v-if="!forwarded.modelValue"
      class="
        slide-in-from-right animate-in text-bc/50 absolute right-0 z-0 inline
        pr-1.5 text-sm!
      ">
      {{ items[0].text }}
    </div>

    <!-- on icon -->
    <span
      v-else-if="forwarded.modelValue"
      class="animate-in slide-in-from-left text-nc absolute inline pl-2">
      {{ items[1].text }}
    </span>

    <!-- thumb -->
    <SwitchThumb
      id="switch-thumb"
      :class="
        cn('bg-b1 on:translate-x-6.75 pointer-events-none z-2 block grid size-4.5 shrink-0 translate-x-0.25 place-items-center rounded-full shadow-lg ring-0 transition-transform',
        )
      ">
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
