<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import {
  SwitchRoot,

  SwitchThumb,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="cn(
      'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-b2 -2 border border-b2 -transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-b2 focus-visible:ring-offset-2 focus-visible:ring-offset-b1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral data-[state=unchecked]:bg-b3',
      props.class,
    )"
  >
    <SwitchThumb
      :class="cn('pointer-events-none block h-4 w-4 rounded-full bg-b1 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0')"
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
