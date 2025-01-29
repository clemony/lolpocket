<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import {
  SwitchRoot,

  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<
    SwitchRootProps & { class?: HTMLAttributes['class'] }
>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer focus-visible:ring-b1 focus-visible:ring-b2 data-[state=checked]:bg-neutral data-[state=unchecked]:bg-b3 inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <SwitchThumb
      :class="
        cn(
          'bg-b1 pointer-events-none block h-5 w-5 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        )
      "
    />
  </SwitchRoot>
</template>
