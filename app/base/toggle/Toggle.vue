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
<<<<<<< HEAD
      active?: ToggleVariants['active']
=======
>>>>>>> refs/remotes/origin/main
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
  const { base, class: _, size, variant, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    v-slot="{ modelValue }"

    v-bind="forwarded"
<<<<<<< HEAD
    :class="cn(toggleVariants({ variant, size, base, hover, active }), props.class)">
=======
    :class="cn(toggleVariants({ variant, size, base, hover }), props.class)">
>>>>>>> refs/remotes/origin/main
    <slot :model-value />
  </Toggle>
</template>
