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
    type="checkbox"
    v-bind="forwarded"
    :class="
      cn(
        `
          peer grid size-5 shrink-0 cursor-pointer place-items-center rounded-sm
          border border-neutral/60 shadow-xs inset-shadow-xs
          hover:bg-b2/40 hover:ring hover:ring-neutral/60
          focus-visible:ring-1 focus-visible:ring-b2 focus-visible:outline-none
          disabled:cursor-not-allowed disabled:opacity-50
          data-[state=checked]:bg-neutral data-[state=checked]:text-nc
          data-[state=checked]:**:text-nc
        `,
        props.class,
      )
    ">
    <CheckboxIndicator
      class="flex h-full w-full items-center justify-center text-current">
      <slot>
        <icon
          name="tick"
          class="
            size-4
            **:!stroke-[2.8]
          " />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
