<script setup lang="ts">
import { LayoutGroup } from 'motion-v'
import { RadioGroupRoot, useForwardPropsEmits } from 'reka-ui'
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'

const props = defineProps<RadioGroupRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <LayoutGroup>
    <RadioGroupRoot
      :class="cn('grid gap-2', props.class)"
      v-bind="forwarded">
      <slot />
    </RadioGroupRoot>
  </LayoutGroup>
</template>
