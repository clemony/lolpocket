<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from 'reka-ui'
import { Toggle, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<
    ToggleProps & {
      class?: HTMLAttributes['class']
      variant?: ToggleVariants['variant']
      size?: ToggleVariants['size']
      base?: ToggleVariants['base']
      hover?: ToggleVariants['hover']
    }
  >(),
  {
    disabled: false,
    size: 'sq-md',
    variant: 'outline',
  }
)

const emits = defineEmits<ToggleEmits>()

const delegatedProps = computed(() => {
  const { class: _, size, variant, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    v-slot="{ modelValue }"

    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size, base, hover }), props.class)">
    <slot :model-value />
  </Toggle>
</template>
