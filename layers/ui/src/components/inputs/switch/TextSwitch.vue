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
      cn('peer relative inline-flex h-6 w-12 w-25 shrink-0 cursor-pointer items-center overflow-hidden rounded-full border shadow-xs ring-bc/50 ring-offset-b2 drop-shadow-xs transition-colors hover:ring hover:ring-offset-3 has-disabled:bg-transparent! data-[state=checked]:border-neutral/60 data-[state=unchecked]:border-b3 data-[state=unchecked]:bg-b3/30 [&_#switch-thumb]:z-2 [&_#switch-thumb]:aspect-square [&_#switch-thumb]:h-[90%] [&_#switch-thumb]:w-auto [&_#switch-thumb]:shrink-0 [&_#switch-thumb]:translate-x-0.25 on:[&_#switch-thumb]:translate-x-13',

        //disabled
        'disabled:cursor-not-allowed disabled:opacity-50',

        //hover
        `ring-bc/50 ring-offset-b2 hover:ring hover:ring-offset-1`,

        // focus
        `
          focus-visible:ring-2 focus-visible:ring-b2 focus-visible:ring-offset-2
          focus-visible:ring-offset-b1 focus-visible:outline-none
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
        slide-in-from-right animate-in absolute right-0 z-0 inline pr-1.5
        text-sm! text-bc/50
      ">
      {{ items[0].text }}
    </div>

    <!-- on icon -->
    <span
      v-else-if="forwarded.modelValue"
      class="animate-in slide-in-from-left absolute inline pl-2 text-nc">
      {{ items[1].text }}
    </span>

    <!-- thumb -->
    <SwitchThumb
      id="switch-thumb"
      :class="
        cn('pointer-events-none z-2 block grid size-4.5 shrink-0 translate-x-0.25 place-items-center rounded-full bg-b1 shadow-lg ring-0 transition-transform on:translate-x-6.75',
        )
      ">
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
