<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<CheckboxRootEmits>()
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    type="checkbox"
    :class="
      cn(
        'peer border-neutral/60 hover:bg-b2/40 hover:ring-neutral/60 focus-visible:ring-b2 data-[state=checked]:bg-neutral data-[state=checked]:text-nc data-[state=checked]:**:text-nc grid size-5 shrink-0 cursor-pointer place-items-center rounded-sm border shadow-xs inset-shadow-xs hover:ring focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <CheckboxIndicator
      class="flex size-full items-center justify-center text-current"
    >
      <slot>
        <icon class="size-4 **:stroke-[2.8]!" name="tick" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
