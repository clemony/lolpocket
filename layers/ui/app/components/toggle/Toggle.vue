<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from 'reka-ui'
import { Toggle, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<
    ToggleProps & {
      class?: HTMLAttributes['class']
    }
  >(),
  {
  }
)

const emits = defineEmits<ToggleEmits>()
</script>

<template>
  <Toggle
    v-slot="{ modelValue }"
    :class="
      cn(
        'group/toggle',
        props.class,
      )
    "
  >
    <slot :model-value />
  </Toggle>
</template>
