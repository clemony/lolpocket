<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  SwitchRootProps & { class?: HTMLAttributes['class'] }
>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer focus-visible:ring-b2 focus-visible:ring-offset-b1 data-[state=checked]:bg-neutral data-[state=unchecked]:bg-b3 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot name="on" />
    <SwitchThumb
      id="switch-thumb"
      :class="
        cn(
          'bg-b1 pointer-events-none block grid size-4 place-items-center rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )
      "
    >
      <slot name="thumb" />
    </SwitchThumb>
    <slot name="off" />
  </SwitchRoot>
</template>
